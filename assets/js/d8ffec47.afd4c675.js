"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6356],{8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>r});var n=t(6540);const i={},s=n.createContext(i);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:a},e.children)}},9381:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tutorial-cli/applications","title":"Application Related Commands","description":"The app command is a group of commands used to manage applications in a Tangram workspace.","source":"@site/docs/tutorial-cli/applications.mdx","sourceDirName":"tutorial-cli","slug":"/tutorial-cli/applications","permalink":"/tutorial-cli/applications","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Workspaces","permalink":"/tutorial-cli/workspaces"}}');var i=t(4848),s=t(8453);const o={sidebar_position:6},r="Application Related Commands",c={},p=[{value:"List applications in the <code>tangram_demo</code> workspace:",id:"list-applications-in-the-tangram_demo-workspace",level:3},{value:"Get application details:",id:"get-application-details",level:3},{value:"Inspect application infrastructure resources:",id:"inspect-application-infrastructure-resources",level:3},{value:"Check component status:",id:"check-component-status",level:3}];function l(e){const a={br:"br",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"application-related-commands",children:"Application Related Commands"})}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.strong,{children:"app"})," command is a group of commands used to manage applications in a Tangram workspace.",(0,i.jsx)(a.br,{}),"\n","It allows you to list applications, retrieve application details, inspect infrastructure resources, and check the status of application components."]}),"\n",(0,i.jsxs)(a.h3,{id:"list-applications-in-the-tangram_demo-workspace",children:["List applications in the ",(0,i.jsx)(a.code,{children:"tangram_demo"})," workspace:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"app ls -w tangram_demo\n\napp                | version\n-------------------+--------\nai.tangram.iceberg | 1.0.0\n"})}),"\n",(0,i.jsx)(a.h3,{id:"get-application-details",children:"Get application details:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"app get ai.tangram iceberg -w tangram_demo\n"})}),"\n",(0,i.jsx)(a.h3,{id:"inspect-application-infrastructure-resources",children:"Inspect application infrastructure resources:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"app infra-resources ai.tangram iceberg -w tangram_demo\n"})}),"\n",(0,i.jsx)(a.h3,{id:"check-component-status",children:"Check component status:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"app component status ai.tangram iceberg catalog-service -w tangram_demo\n"})})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);