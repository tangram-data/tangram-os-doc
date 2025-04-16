"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6123],{330:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"tutorial-cli/sql-engines","title":"SQL Engines","description":"The sql-engine command group allows you to manage and interact with SQL database engines in Tangram OS.","source":"@site/docs/tutorial-cli/sql-engines.mdx","sourceDirName":"tutorial-cli","slug":"/tutorial-cli/sql-engines","permalink":"/tutorial-cli/sql-engines","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Managing Local Deployment","permalink":"/tutorial-cli/local-instance-management"},"next":{"title":"Folders","permalink":"/tutorial-cli/folders"}}');var t=a(4848),s=a(8453);const l={sidebar_position:4},c="SQL Engines",o={},r=[{value:"List available SQL engines:",id:"list-available-sql-engines",level:3},{value:"Connect to a SQL engine and open interactive shell:",id:"connect-to-a-sql-engine-and-open-interactive-shell",level:3},{value:"Get SQL engine alias:",id:"get-sql-engine-alias",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sql-engines",children:"SQL Engines"})}),"\n",(0,t.jsx)(n.p,{children:"The sql-engine command group allows you to manage and interact with SQL database engines in Tangram OS."}),"\n",(0,t.jsx)(n.h3,{id:"list-available-sql-engines",children:"List available SQL engines:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tangram sql-engine ls -w tangram_demo\n\nid                                       | name                                             \n-----------------------------------------+--------------------------------------------------\n62b6f2822389fe90fa5a4cb02882bcc3f7241997 | rn://org.duckdb/duckdb/Instance/tangram_os/duckdb\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"connect-to-a-sql-engine-and-open-interactive-shell",children:"Connect to a SQL engine and open interactive shell:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sql-engine connect 62b6f2822389fe90fa5a4cb02882bcc3f7241997\n"})}),"\n",(0,t.jsx)(n.h3,{id:"get-sql-engine-alias",children:"Get SQL engine alias:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sql-engine alias get 62b6f2822389fe90fa5a4cb02882bcc3f7241997\n"})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>c});var i=a(6540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);