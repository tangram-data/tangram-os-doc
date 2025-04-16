"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8446],{8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}},9052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tutorial-sql/overview","title":"Overview","description":"Tangram OS SQL is a multiple engine service implemented using PostgreSQL wire protocol. It enables seamless data exploration, analytics, and transformation across multiple data platforms from a single interface.","source":"@site/docs/tutorial-sql/overview.mdx","sourceDirName":"tutorial-sql","slug":"/tutorial-sql/overview","permalink":"/tutorial-sql/overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"SQL Service","permalink":"/category/sql-service"},"next":{"title":"How To Connect","permalink":"/tutorial-sql/connect"}}');var i=t(4848),r=t(8453);const a=t.p+"assets/images/iceberg_read_role-4440a42a076f263e6d8aa7b876399ea7.png",l={sidebar_position:1},o="Overview",c={},d=[{value:"Key Features",id:"key-features",level:2}];function u(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tangram OS SQL"})," is a multiple engine service implemented using ",(0,i.jsx)(n.strong,{children:"PostgreSQL wire protocol"}),". It enables seamless data exploration, analytics, and transformation across multiple data platforms from a single interface."]}),"\n",(0,i.jsxs)(n.p,{children:["Tangram OS SQL Engine supports integration with a variety of query engines, including: ",(0,i.jsx)(n.strong,{children:"DuckDB"}),", ",(0,i.jsx)(n.strong,{children:"ClickHouse"}),", ",(0,i.jsx)(n.strong,{children:"Databricks"}),", and more..."]}),"\n",(0,i.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,i.jsx)(n.p,{children:"By abstracting the underlying engines with a open protocol, Tangram OS allows users to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Query seamlessly open table formats like Apache Iceberg, Delta Lake across engines"}),(0,i.jsx)(n.br,{}),"\n","Native integration with open table formats without complex per engine setup, query Iceberg tables like they are engine native. Example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"  -- create an Iceberg table\n  create table iceberg.test.nyc_taxi(time timestamp, district string, miles double);\n\n  -- insert some data \n  insert into iceberg.test.nyc_taxi(time, district, miles) \n      values('2025-01-01 17:39:09.439', 'Brooklyn', 12.6);\n\n  -- use DuckDB to query a Iceberg table\n  use engine duckdb;\n  select sum(miles) as total_distance from iceberg.test.nyc_taxi group by district;\n\n  -- use ClickHouse to query the same table\n  use engine clickhouse;\n  select sum(miles) as total_distance from iceberg.test.nyc_taxi group by district;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Unify data access control with Tangram IAM service"})}),"\n",(0,i.jsxs)(n.p,{children:["As the following example, Tangram SQL will honor the access policy defined via the example role, will allow users with that role to have read-only access to Iceberg tables in workspace ",(0,i.jsx)(n.code,{children:"demo"})," and ",(0,i.jsx)(n.code,{children:"test"})," Iceberg database."]}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{src:a})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Maintain engine-specific optimizations"}),(0,i.jsx)(n.br,{}),"\n","While providing a unified interface, Tangram OS still enables users to utilize engine-specific SQL dialects and capabilities as needed."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);