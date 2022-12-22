"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6914],{26433:function(m,r,n){n.r(r);var s=n(2143),c=n(50250),p=n(59378),b=n(5648),u=n(74775),l=n(5937),Z=n(2068),v=n(74399),h=n(63942),B=n(16073),I=n(24628),E=n(19260),x=n(56140),d=n(5388),A=n(49545),f=n(6965),P=n(49706),D=n(95127),j=n(74418),L=n(73024),a=n(28257),i=n(67294),t=n(50985);function o(){var _=(0,a.eL)(),e=_.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value),(0,t.tZ)("li",null,e[3].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-breadcrumb-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/breadcrumb/demo/basic.tsx",jsx:`import React from 'react';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-breadcrumb-demo-withicon"},previewerProps:{title:"\u5E26\u6709\u56FE\u6807\u7684",filename:"components/breadcrumb/demo/withIcon.tsx",jsx:`import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>
);
export default App;
`,description:"<p>\u56FE\u6807\u653E\u5728\u6587\u5B57\u524D\u9762\u3002</p>"}},{demo:{id:"components-breadcrumb-demo-react-router"},previewerProps:{iframe:"200",title:"react-router V6",filename:"components/breadcrumb/demo/react-router.tsx",jsx:`import React from 'react';
import { Alert, Breadcrumb } from 'antd';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>\uFF1A<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>\uFF1A<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);
const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = \`/\${pathSnippets.slice(0, index + 1).join('/')}\`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
      <Alert
        style={{
          margin: '16px 0',
        }}
        message="Click the navigation above to switch:"
      />
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};
const App = () => (
  <HashRouter>
    <Home />
  </HashRouter>
);
export default App;
`,description:"<p>\u4E0E <code>react-router@6+</code> \u7ED3\u5408\u4F7F\u7528\uFF0C\u751F\u6210\u548C\u8DEF\u7531\u7ED1\u5B9A\u7684\u9762\u5305\u5C51\u3002</p>",style:`.demo {
  margin: 16px;
}
.demo-nav {
  height: 30px;
  margin-bottom: 16px;
  line-height: 30px;
  background: #f8f8f8;
}
.demo-nav a {
  padding: 0 8px;
  line-height: 30px;
}
.app-list {
  margin-top: 16px;
}`}},{demo:{id:"components-breadcrumb-demo-separator"},previewerProps:{title:"\u5206\u9694\u7B26",filename:"components/breadcrumb/demo/separator.tsx",jsx:`import React from 'react';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
export default App;
`,description:'<p>\u4F7F\u7528 <code>separator=">"</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002</p>'}},{demo:{id:"components-breadcrumb-demo-overlay"},previewerProps:{title:"\u5E26\u4E0B\u62C9\u83DC\u5355\u7684\u9762\u5305\u5C51",filename:"components/breadcrumb/demo/overlay.tsx",jsx:`import React from 'react';
import { Breadcrumb } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];
const App = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Component</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item
      menu={{
        items,
      }}
    >
      <a href="">General</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Button</Breadcrumb.Item>
  </Breadcrumb>
);
export default App;
`,description:"<p>\u9762\u5305\u5C51\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002</p>"}},{demo:{id:"components-breadcrumb-demo-separator-component"},previewerProps:{title:"\u5206\u9694\u7B26",filename:"components/breadcrumb/demo/separator-component.tsx",jsx:`import React from 'react';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb separator="">
    <Breadcrumb.Item>Location</Breadcrumb.Item>
    <Breadcrumb.Separator>:</Breadcrumb.Separator>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>Breadcrumb.Separator</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"breadcrumb"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#breadcrumb"},(0,t.tZ)("span",{className:"icon icon-link"})),"Breadcrumb"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value),(0,t.tZ)("th",null,e[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null,e[12].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,(0,t.tZ)(a.rU,{to:"#routes"},e[19].value)),(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,e[22].value),(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[24].value)),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"breadcrumbitem"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#breadcrumbitem"},(0,t.tZ)("span",{className:"icon icon-link"})),"Breadcrumb.Item"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[25].value),(0,t.tZ)("th",null,e[26].value),(0,t.tZ)("th",null,e[27].value),(0,t.tZ)("th",null,e[28].value),(0,t.tZ)("th",null,e[29].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[34].value),(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,(0,t.tZ)(a.rU,{to:"/components/dropdown-cn"},e[36].value)),(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[38].value),(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null,e[43].value),(0,t.tZ)("td",null,(0,t.tZ)(a.rU,{to:"/components/menu-cn/#API"},e[44].value)),(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,e[46].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[47].value),(0,t.tZ)("td",null,e[48].value),(0,t.tZ)("td",null,e[49].value),(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"breadcrumbseparator"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#breadcrumbseparator"},(0,t.tZ)("span",{className:"icon icon-link"})),"Breadcrumb.Separator"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[51].value),(0,t.tZ)("th",null,e[52].value),(0,t.tZ)("th",null,e[53].value),(0,t.tZ)("th",null,e[54].value),(0,t.tZ)("th",null,e[55].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,e[57].value),(0,t.tZ)("td",null,e[58].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[59].value)),(0,t.tZ)("td",null)))),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,e[60].value,(0,t.tZ)("code",null,e[61].value),e[62].value,(0,t.tZ)("code",null,e[63].value),e[64].value)),(0,t.tZ)("h3",{id:"routes"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#routes"},(0,t.tZ)("span",{className:"icon icon-link"})),"routes"),(0,t.tZ)(u.Z,{lang:"ts"},e[65].value),(0,t.tZ)("h3",{id:"\u548C-browserhistory-\u914D\u5408"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u548C-browserhistory-\u914D\u5408"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u548C browserHistory \u914D\u5408"),(0,t.tZ)("p",null,e[66].value,(0,t.tZ)("code",null,e[67].value),e[68].value,(0,t.tZ)("code",null,e[69].value),e[70].value),(0,t.tZ)(u.Z,{lang:"jsx"},e[71].value))))}r.default=o}}]);
