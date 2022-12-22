"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9127],{96564:function(r,l,n){n.r(l);var c=n(2143),m=n(50250),p=n(59378),v=n(5648),E=n(74775),a=n(5937),d=n(2068),Z=n(74399),f=n(63942),g=n(16073),C=n(24628),P=n(19260),h=n(56140),i=n(5388),x=n(49545),D=n(6965),j=n(49706),R=n(95127),A=n(74418),M=n(73024),o=n(28257),u=n(67294),t=n(50985);function _(){var s=(0,o.eL)(),e=s.texts;return(0,t.tZ)(o.dY,null,(0,t.tZ)(u.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value,(0,t.tZ)("code",null,e[1].value),e[2].value)),(0,t.tZ)(d.Z,{message:"\u82E5\u4E8C\u7EF4\u7801\u65E0\u6CD5\u626B\u7801\u8BC6\u522B\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u94FE\u63A5\u5730\u5740\u8FC7\u957F\u5BFC\u81F4\u50CF\u7D20\u8FC7\u4E8E\u5BC6\u96C6\uFF0C\u53EF\u4EE5\u901A\u8FC7 `size` \u914D\u7F6E\u4E8C\u7EF4\u7801\u66F4\u5927\uFF0C\u6216\u8005\u901A\u8FC7\u77ED\u94FE\u63A5\u670D\u52A1\u7B49\u65B9\u5F0F\u5C06\u94FE\u63A5\u53D8\u77ED\u3002"}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("p",null,e[3].value),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(i.Z,{items:[{demo:{id:"components-qrcode-demo-base"},previewerProps:{title:"\u57FA\u672C\u4F7F\u7528",filename:"components/qrcode/demo/base.tsx",jsx:`import React from 'react';
import { QRCode } from 'antd';
const App = () => <QRCode value="https://ant.design/" />;
export default App;
`,description:"<p>\u57FA\u672C\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-qrcode-demo-icon"},previewerProps:{title:"\u5E26 Icon \u7684\u4F8B\u5B50",filename:"components/qrcode/demo/icon.tsx",jsx:`import React from 'react';
import { QRCode } from 'antd';
const App = () => (
  <QRCode
    errorLevel="H"
    value="https://ant.design/"
    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
);
export default App;
`,description:"<p>\u5E26 Icon \u7684\u4E8C\u7EF4\u7801\u3002</p>"}},{demo:{id:"components-qrcode-demo-status"},previewerProps:{title:"\u4E0D\u540C\u7684\u72B6\u6001",filename:"components/qrcode/demo/status.tsx",jsx:`import React from 'react';
import { QRCode, Space } from 'antd';
const App = () => (
  <Space wrap>
    <QRCode value="https://ant.design/" status="loading" />
    <QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log('refresh')} />
  </Space>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>status</code> \u7684\u503C\u63A7\u5236\u4E8C\u7EF4\u7801\u7684\u72B6\u6001\u3002</p>"}},{demo:{id:"components-qrcode-demo-customsize"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u5C3A\u5BF8",filename:"components/qrcode/demo/customSize.tsx",jsx:`import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { QRCode, Button } from 'antd';
const App = () => {
  const [size, setSize] = useState(160);
  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize > 300) {
        return 300;
      }
      return newSize;
    });
  };
  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize < 48) {
        return 48;
      }
      return newSize;
    });
  };
  return (
    <>
      <Button.Group
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
          Smaller
        </Button>
        <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
          Larger
        </Button>
      </Button.Group>
      <QRCode
        errorLevel="H"
        size={size}
        iconSize={size / 4}
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
    </>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</p>"}},{demo:{id:"components-qrcode-demo-customcolor"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u989C\u8272",filename:"components/qrcode/demo/customColor.tsx",jsx:`import React from 'react';
import { QRCode, Space, theme } from 'antd';
const { useToken } = theme;
const App = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode
        value="https://ant.design/"
        color={token.colorSuccessText}
        style={{
          marginBottom: 16,
          backgroundColor: token.colorBgLayout,
        }}
      />
      <QRCode
        value="https://ant.design/"
        color={token.colorInfoText}
        style={{
          marginBottom: 16,
          backgroundColor: token.colorBgLayout,
        }}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>color</code> \u81EA\u5B9A\u4E49\u4E8C\u7EF4\u7801\u989C\u8272\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>style</code> \u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\u3002</p>"}},{demo:{id:"components-qrcode-demo-download"},previewerProps:{title:"\u4E0B\u8F7D\u4E8C\u7EF4\u7801",filename:"components/qrcode/demo/download.tsx",jsx:`import React from 'react';
import { QRCode, Button } from 'antd';
const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
const App = () => (
  <div id="myqrcode">
    <QRCode
      value="https://ant.design/"
      style={{
        marginBottom: 16,
      }}
    />
    <Button type="primary" onClick={downloadQRCode}>
      Download
    </Button>
  </div>
);
export default App;
`,description:"<p>\u4E0B\u8F7D\u4E8C\u7EF4\u7801\u7684\u7B80\u5355\u5B9E\u73B0\u3002</p>"}},{demo:{id:"components-qrcode-demo-errorlevel"},previewerProps:{title:"\u7EA0\u9519\u6BD4\u4F8B",filename:"components/qrcode/demo/errorlevel.tsx",jsx:`import React, { useState } from 'react';
import { Segmented, QRCode } from 'antd';
const App = () => {
  const [level, setLevel] = useState('L');
  return (
    <>
      <QRCode
        style={{
          marginBottom: 16,
        }}
        errorLevel={level}
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
    </>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E errorLevel \u8C03\u6574\u4E0D\u540C\u7684\u5BB9\u9519\u7B49\u7EA7\u3002</p>"}},{demo:{id:"components-qrcode-demo-popover"},previewerProps:{title:"\u9AD8\u7EA7\u7528\u6CD5",filename:"components/qrcode/demo/Popover.tsx",jsx:`import React from 'react';
import { QRCode, Popover } from 'antd';
const src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const App = () => (
  <Popover
    overlayInnerStyle={{
      padding: 0,
    }}
    content={<QRCode value={src} bordered={false} />}
  >
    <img width={100} height={100} src={src} alt="icon" />
  </Popover>
);
export default App;
`,description:"<p>\u5E26\u6C14\u6CE1\u5361\u7247\u7684\u4F8B\u5B50\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,e[4].value,(0,t.tZ)("code",null,e[5].value),e[6].value)),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",{align:"left"},e[7].value),(0,t.tZ)("th",{align:"left"},e[8].value),(0,t.tZ)("th",{align:"left"},e[9].value),(0,t.tZ)("th",{align:"left"},e[10].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[11].value),(0,t.tZ)("td",{align:"left"},e[12].value),(0,t.tZ)("td",{align:"left"},e[13].value),(0,t.tZ)("td",{align:"left"},e[14].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[15].value),(0,t.tZ)("td",{align:"left"},e[16].value),(0,t.tZ)("td",{align:"left"},e[17].value),(0,t.tZ)("td",{align:"left"},e[18].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[19].value),(0,t.tZ)("td",{align:"left"},e[20].value),(0,t.tZ)("td",{align:"left"},e[21].value),(0,t.tZ)("td",{align:"left"},e[22].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[23].value),(0,t.tZ)("td",{align:"left"},e[24].value),(0,t.tZ)("td",{align:"left"},e[25].value),(0,t.tZ)("td",{align:"left"},e[26].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[27].value),(0,t.tZ)("td",{align:"left"},e[28].value),(0,t.tZ)("td",{align:"left"},e[29].value),(0,t.tZ)("td",{align:"left"},(0,t.tZ)("code",null,e[30].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[31].value),(0,t.tZ)("td",{align:"left"},e[32].value),(0,t.tZ)("td",{align:"left"},e[33].value),(0,t.tZ)("td",{align:"left"},(0,t.tZ)("code",null,e[34].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[35].value),(0,t.tZ)("td",{align:"left"},e[36].value),(0,t.tZ)("td",{align:"left"},(0,t.tZ)("code",null,e[37].value)),(0,t.tZ)("td",{align:"left"},(0,t.tZ)("code",null,e[38].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[39].value),(0,t.tZ)("td",{align:"left"},e[40].value),(0,t.tZ)("td",{align:"left"},(0,t.tZ)("code",null,e[41].value)),(0,t.tZ)("td",{align:"left"},(0,t.tZ)("code",null,e[42].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",{align:"left"},e[43].value),(0,t.tZ)("td",{align:"left"},e[44].value),(0,t.tZ)("td",{align:"left"},(0,t.tZ)("code",null,e[45].value)),(0,t.tZ)("td",{align:"left"},e[46].value)))),(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5173\u4E8E\u4E8C\u7EF4\u7801\u7EA0\u9519\u7B49\u7EA7"),(0,t.tZ)("p",null,e[47].value),(0,t.tZ)("p",null,e[48].value,(0,t.tZ)("code",null,e[49].value),e[50].value,(0,t.tZ)("code",null,e[51].value),e[52].value,(0,t.tZ)("code",null,e[53].value),e[54].value,(0,t.tZ)("code",null,e[55].value),e[56].value,(0,t.tZ)("code",null,e[57].value),e[58].value,(0,t.tZ)("code",null,e[59].value),e[60].value,(0,t.tZ)("code",null,e[61].value),e[62].value,(0,t.tZ)("code",null,e[63].value),e[64].value),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,e[65].value,(0,t.tZ)("a",{href:"https://www.qrcode.com/zh/about/error_correction.html"},e[66].value))))))}l.default=_}}]);
