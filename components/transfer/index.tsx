import classNames from 'classnames';
import * as React from 'react';
import type { ConfigConsumerProps, RenderEmptyHandler } from '../config-provider';
import { ConfigConsumer } from '../config-provider';
import defaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import { FormItemInputContext } from '../form/context';
import LocaleReceiver from '../locale/LocaleReceiver';
import defaultLocale from '../locale/en_US';
import type { InputStatus } from '../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import warning from '../_util/warning';
import type { PaginationType } from './interface';
import type { TransferListProps } from './list';
import List from './list';
import type { TransferListBodyProps } from './ListBody';
import Operation from './operation';
import Search from './search';

import useStyle from './style';

export type { TransferListProps } from './list';
export type { TransferOperationProps } from './operation';
export type { TransferSearchProps } from './search';

export type TransferDirection = 'left' | 'right';

export interface RenderResultObject {
  label: React.ReactElement;
  value: string;
}

export type RenderResult = React.ReactElement | RenderResultObject | string | null;

export interface TransferItem {
  key?: string;
  title?: string;
  description?: string;
  disabled?: boolean;
  [name: string]: any;
}

export type KeyWise<T> = T & { key: string };

export type KeyWiseTransferItem = KeyWise<TransferItem>;

type TransferRender<RecordType> = (item: RecordType) => RenderResult;

export interface ListStyle {
  direction: TransferDirection;
}

export type SelectAllLabel =
  | React.ReactNode
  | ((info: { selectedCount: number; totalCount: number }) => React.ReactNode);

export interface TransferLocale {
  titles?: React.ReactNode[];
  notFoundContent?: React.ReactNode | React.ReactNode[];
  searchPlaceholder: string;
  itemUnit: string;
  itemsUnit: string;
  remove?: string;
  selectAll?: string;
  selectCurrent?: string;
  selectInvert?: string;
  removeAll?: string;
  removeCurrent?: string;
}

export interface TransferProps<RecordType> {
  prefixCls?: string;
  className?: string;
  disabled?: boolean;
  dataSource?: RecordType[];
  targetKeys?: string[];
  selectedKeys?: string[];
  render?: TransferRender<RecordType>;
  onChange?: (targetKeys: string[], direction: TransferDirection, moveKeys: string[]) => void;
  onSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void;
  style?: React.CSSProperties;
  listStyle?: ((style: ListStyle) => React.CSSProperties) | React.CSSProperties;
  operationStyle?: React.CSSProperties;
  titles?: React.ReactNode[];
  operations?: string[];
  showSearch?: boolean;
  filterOption?: (inputValue: string, item: RecordType) => boolean;
  locale?: Partial<TransferLocale>;
  footer?: (
    props: TransferListProps<RecordType>,
    info?: {
      direction: TransferDirection;
    },
  ) => React.ReactNode;
  rowKey?: (record: RecordType) => string;
  onSearch?: (direction: TransferDirection, value: string) => void;
  onScroll?: (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => void;
  children?: (props: TransferListBodyProps<RecordType>) => React.ReactNode;
  showSelectAll?: boolean;
  selectAllLabels?: SelectAllLabel[];
  oneWay?: boolean;
  pagination?: PaginationType;
  status?: InputStatus;
}

interface TransferState {
  sourceSelectedKeys: string[];
  targetSelectedKeys: string[];
}

interface TransferFCProps {
  prefixCls: string;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const TransferFC: React.FC<TransferFCProps> = (props) => {
  const { prefixCls } = props;

  const [wrapSSR, hashId] = useStyle(prefixCls);

  return wrapSSR(
    <div className={classNames(props.className, hashId)} style={props.style}>
      {props.children}
    </div>,
  );
};

class Transfer<RecordType extends TransferItem = TransferItem> extends React.Component<
  TransferProps<RecordType>,
  TransferState
> {
  // For high-level customized Transfer @dqaria
  static List = List;

  static Operation = Operation;

  static Search = Search;

  static getDerivedStateFromProps<T>({
    selectedKeys,
    targetKeys,
    pagination,
    children,
  }: TransferProps<T>) {
    if (selectedKeys) {
      const mergedTargetKeys = targetKeys || [];
      return {
        sourceSelectedKeys: selectedKeys.filter((key) => !mergedTargetKeys.includes(key)),
        targetSelectedKeys: selectedKeys.filter((key) => mergedTargetKeys.includes(key)),
      };
    }

    warning(
      !pagination || !children,
      'Transfer',
      '`pagination` not support customize render list.',
    );

    return null;
  }

  separatedDataSource: {
    leftDataSource: RecordType[];
    rightDataSource: RecordType[];
  } | null = null;

  constructor(props: TransferProps<RecordType>) {
    super(props);

    const { selectedKeys = [], targetKeys = [] } = props;
    this.state = {
      sourceSelectedKeys: selectedKeys.filter((key) => !targetKeys.includes(key)),
      targetSelectedKeys: selectedKeys.filter((key) => targetKeys.includes(key)),
    };
  }

  setStateKeys = (
    direction: TransferDirection,
    keys: string[] | ((prevKeys: string[]) => string[]),
  ) => {
    if (direction === 'left') {
      this.setState(({ sourceSelectedKeys }) => ({
        sourceSelectedKeys: typeof keys === 'function' ? keys(sourceSelectedKeys || []) : keys,
      }));
    } else {
      this.setState(({ targetSelectedKeys }) => ({
        targetSelectedKeys: typeof keys === 'function' ? keys(targetSelectedKeys || []) : keys,
      }));
    }
  };

  getTitles(transferLocale: TransferLocale): React.ReactNode[] {
    return this.props.titles ?? transferLocale.titles ?? [];
  }

  getLocale = (transferLocale: TransferLocale, renderEmpty: RenderEmptyHandler) => {
    const { locale = {} } = this.props;
    return { ...transferLocale, notFoundContent: renderEmpty('Transfer'), ...locale };
  };

  moveTo = (direction: TransferDirection) => {
    const { targetKeys = [], dataSource = [], onChange } = this.props;
    const { sourceSelectedKeys, targetSelectedKeys } = this.state;
    const moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
    // filter the disabled options
    const newMoveKeys = moveKeys.filter(
      (key) => !dataSource.some((data) => !!(key === data.key && data.disabled)),
    );
    // move items to target box
    const newTargetKeys =
      direction === 'right'
        ? newMoveKeys.concat(targetKeys)
        : targetKeys.filter((targetKey) => !newMoveKeys.includes(targetKey));

    // empty checked keys
    const oppositeDirection = direction === 'right' ? 'left' : 'right';
    this.setStateKeys(oppositeDirection, []);
    this.handleSelectChange(oppositeDirection, []);

    onChange?.(newTargetKeys, direction, newMoveKeys);
  };

  moveToLeft = () => this.moveTo('left');

  moveToRight = () => this.moveTo('right');

  onItemSelectAll = (direction: TransferDirection, selectedKeys: string[], checkAll: boolean) => {
    this.setStateKeys(direction, (prevKeys) => {
      let mergedCheckedKeys: string[] = [];
      if (checkAll) {
        // Merge current keys with origin key
        mergedCheckedKeys = Array.from(new Set<string>([...prevKeys, ...selectedKeys]));
      } else {
        // Remove current keys from origin keys
        mergedCheckedKeys = prevKeys.filter((key) => !selectedKeys.includes(key));
      }

      this.handleSelectChange(direction, mergedCheckedKeys);

      return mergedCheckedKeys;
    });
  };

  onLeftItemSelectAll = (selectedKeys: string[], checkAll: boolean) =>
    this.onItemSelectAll('left', selectedKeys, checkAll);

  onRightItemSelectAll = (selectedKeys: string[], checkAll: boolean) =>
    this.onItemSelectAll('right', selectedKeys, checkAll);

  handleFilter = (direction: TransferDirection, e: React.ChangeEvent<HTMLInputElement>) => {
    const { onSearch } = this.props;
    const { value } = e.target;
    onSearch?.(direction, value);
  };

  handleLeftFilter = (e: React.ChangeEvent<HTMLInputElement>) => this.handleFilter('left', e);

  handleRightFilter = (e: React.ChangeEvent<HTMLInputElement>) => this.handleFilter('right', e);

  handleClear = (direction: TransferDirection) => {
    const { onSearch } = this.props;
    onSearch?.(direction, '');
  };

  handleLeftClear = () => this.handleClear('left');

  handleRightClear = () => this.handleClear('right');

  onItemSelect = (direction: TransferDirection, selectedKey: string, checked: boolean) => {
    const { sourceSelectedKeys, targetSelectedKeys } = this.state;
    const holder = direction === 'left' ? [...sourceSelectedKeys] : [...targetSelectedKeys];
    const index = holder.indexOf(selectedKey);
    if (index > -1) {
      holder.splice(index, 1);
    }
    if (checked) {
      holder.push(selectedKey);
    }
    this.handleSelectChange(direction, holder);

    if (!this.props.selectedKeys) {
      this.setStateKeys(direction, holder);
    }
  };

  onLeftItemSelect = (selectedKey: string, checked: boolean) =>
    this.onItemSelect('left', selectedKey, checked);

  onRightItemSelect = (selectedKey: string, checked: boolean) =>
    this.onItemSelect('right', selectedKey, checked);

  onRightItemRemove = (selectedKeys: string[]) => {
    const { targetKeys = [], onChange } = this.props;

    this.setStateKeys('right', []);

    onChange?.(
      targetKeys.filter((key) => !selectedKeys.includes(key)),
      'left',
      [...selectedKeys],
    );
  };

  handleScroll = (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => {
    const { onScroll } = this.props;
    onScroll?.(direction, e);
  };

  handleLeftScroll = (e: React.SyntheticEvent<HTMLUListElement>) => this.handleScroll('left', e);

  handleRightScroll = (e: React.SyntheticEvent<HTMLUListElement>) => this.handleScroll('right', e);

  handleSelectChange(direction: TransferDirection, holder: string[]) {
    const { sourceSelectedKeys, targetSelectedKeys } = this.state;
    const { onSelectChange } = this.props;
    if (!onSelectChange) {
      return;
    }

    if (direction === 'left') {
      onSelectChange(holder, targetSelectedKeys);
    } else {
      onSelectChange(sourceSelectedKeys, holder);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleListStyle = (
    listStyle: TransferProps<RecordType>['listStyle'],
    direction: TransferDirection,
  ) => {
    if (typeof listStyle === 'function') {
      return listStyle({ direction });
    }
    return listStyle;
  };

  separateDataSource() {
    const { dataSource = [], rowKey, targetKeys = [] } = this.props;

    const leftDataSource: KeyWise<RecordType>[] = [];
    const rightDataSource: KeyWise<RecordType>[] = new Array(targetKeys.length);
    dataSource.forEach((record: KeyWise<RecordType>) => {
      if (rowKey) {
        record = {
          ...record,
          key: rowKey(record),
        };
      }

      // rightDataSource should be ordered by targetKeys
      // leftDataSource should be ordered by dataSource
      const indexOfKey = targetKeys.indexOf(record.key);
      if (indexOfKey !== -1) {
        rightDataSource[indexOfKey] = record;
      } else {
        leftDataSource.push(record);
      }
    });

    return {
      leftDataSource,
      rightDataSource,
    };
  }

  render() {
    return (
      <LocaleReceiver componentName="Transfer" defaultLocale={defaultLocale.Transfer}>
        {(contextLocale) => (
          <ConfigConsumer>
            {({ getPrefixCls, renderEmpty, direction }: ConfigConsumerProps) => (
              <FormItemInputContext.Consumer>
                {({ hasFeedback, status: contextStatus }) => {
                  const {
                    prefixCls: customizePrefixCls,
                    className,
                    disabled,
                    operations = [],
                    showSearch = false,
                    footer,
                    style,
                    listStyle = {},
                    operationStyle,
                    filterOption,
                    render,
                    children,
                    showSelectAll,
                    oneWay,
                    pagination,
                    status: customStatus,
                  } = this.props;
                  const prefixCls = getPrefixCls('transfer', customizePrefixCls);
                  const locale = this.getLocale(contextLocale, renderEmpty || defaultRenderEmpty);
                  const { sourceSelectedKeys, targetSelectedKeys } = this.state;
                  const mergedStatus = getMergedStatus(contextStatus, customStatus);

                  const mergedPagination = !children && pagination;

                  const { leftDataSource, rightDataSource } = this.separateDataSource();
                  const leftActive = targetSelectedKeys.length > 0;
                  const rightActive = sourceSelectedKeys.length > 0;

                  const cls = classNames(
                    prefixCls,
                    {
                      [`${prefixCls}-disabled`]: disabled,
                      [`${prefixCls}-customize-list`]: !!children,
                      [`${prefixCls}-rtl`]: direction === 'rtl',
                    },
                    getStatusClassNames(prefixCls, mergedStatus, hasFeedback),
                    className,
                  );

                  const titles = this.getTitles(locale);
                  const selectAllLabels = this.props.selectAllLabels || [];
                  return (
                    <TransferFC prefixCls={prefixCls} className={cls} style={style}>
                      <List<KeyWise<RecordType>>
                        prefixCls={`${prefixCls}-list`}
                        titleText={titles?.[0]}
                        dataSource={leftDataSource}
                        filterOption={filterOption}
                        style={this.handleListStyle(listStyle, 'left')}
                        checkedKeys={sourceSelectedKeys}
                        handleFilter={this.handleLeftFilter}
                        handleClear={this.handleLeftClear}
                        onItemSelect={this.onLeftItemSelect}
                        onItemSelectAll={this.onLeftItemSelectAll}
                        render={render}
                        showSearch={showSearch}
                        renderList={children}
                        footer={footer}
                        onScroll={this.handleLeftScroll}
                        disabled={disabled}
                        direction={direction === 'rtl' ? 'right' : 'left'}
                        showSelectAll={showSelectAll}
                        selectAllLabel={selectAllLabels[0]}
                        pagination={mergedPagination}
                        {...locale}
                      />
                      <Operation
                        className={`${prefixCls}-operation`}
                        rightActive={rightActive}
                        rightArrowText={operations[0]}
                        moveToRight={this.moveToRight}
                        leftActive={leftActive}
                        leftArrowText={operations[1]}
                        moveToLeft={this.moveToLeft}
                        style={operationStyle}
                        disabled={disabled}
                        direction={direction}
                        oneWay={oneWay}
                      />
                      <List<KeyWise<RecordType>>
                        prefixCls={`${prefixCls}-list`}
                        titleText={titles?.[1]}
                        dataSource={rightDataSource}
                        filterOption={filterOption}
                        style={this.handleListStyle(listStyle, 'right')}
                        checkedKeys={targetSelectedKeys}
                        handleFilter={this.handleRightFilter}
                        handleClear={this.handleRightClear}
                        onItemSelect={this.onRightItemSelect}
                        onItemSelectAll={this.onRightItemSelectAll}
                        onItemRemove={this.onRightItemRemove}
                        render={render}
                        showSearch={showSearch}
                        renderList={children}
                        footer={footer}
                        onScroll={this.handleRightScroll}
                        disabled={disabled}
                        direction={direction === 'rtl' ? 'left' : 'right'}
                        showSelectAll={showSelectAll}
                        selectAllLabel={selectAllLabels[1]}
                        showRemove={oneWay}
                        pagination={mergedPagination}
                        {...locale}
                      />
                    </TransferFC>
                  );
                }}
              </FormItemInputContext.Consumer>
            )}
          </ConfigConsumer>
        )}
      </LocaleReceiver>
    );
  }
}

export default Transfer;
