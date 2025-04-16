"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2252],{8453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>r});var s=t(6540);const n={},l=s.createContext(n);function c(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(l.Provider,{value:a},e.children)}},8908:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tutorial-sql/catalog","title":"Name Resolution","description":"With Tangram SQL, dataset can be queried using the resource name as the following:","source":"@site/docs/tutorial-sql/catalog.mdx","sourceDirName":"tutorial-sql","slug":"/tutorial-sql/catalog","permalink":"/tangram-os-doc/tutorial-sql/catalog","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"How To Connect","permalink":"/tangram-os-doc/tutorial-sql/connect"},"next":{"title":"DuckDB in Tangram OS","permalink":"/tangram-os-doc/tutorial-sql/duck_db"}}');var n=t(4848),l=t(8453);const c=t.p+"assets/images/create_catalog-6d033359080623f00308eaebfce8e7ce.png",r={sidebar_position:3},i="Name Resolution",o={},d=[{value:"Create a catalog",id:"create-a-catalog",level:2},{value:"Querying With Catalogs",id:"querying-with-catalogs",level:2},{value:"Name Resolution",id:"name-resolution-1",level:3},{value:"Set Current Catalog &amp; Schema",id:"set-current-catalog--schema",level:3},{value:"Show Catalogs, Schemas and Tables",id:"show-catalogs-schemas-and-tables",level:3}];function h(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"name-resolution",children:"Name Resolution"})}),"\n",(0,n.jsx)(a.p,{children:"With Tangram SQL, dataset can be queried using the resource name as the following:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'# DuckDB, quoted table resource name\nselect * from "rn://ai.tangram/iceberg/Table/tangram_demo/test/nyc_taxi";\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Resource names in Tangram OS can be long and verbose, which can make them less convenient to use directly in SQL queries.\nTo address this, like most modern SQL engines, Tangram SQL supports the use of ",(0,n.jsx)(a.strong,{children:"Catalogs"})," as shorthand references."]}),"\n",(0,n.jsxs)(a.p,{children:["A ",(0,n.jsx)(a.strong,{children:"Catalog"})," in Tangram SQL is a named container for dataset-related entities (e.g., schemas, tables, views) associated with a ",(0,n.jsx)(a.strong,{children:"deployed application"})," in the OS."]}),"\n",(0,n.jsx)(a.p,{children:"By creating catalogs, users can:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Simplify SQL syntax and improve readability"}),"\n",(0,n.jsx)(a.li,{children:"Reduce the need to reference full resource names in queries"}),"\n",(0,n.jsx)(a.li,{children:"Organize data entities by application context"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"create-a-catalog",children:"Create a catalog"}),"\n",(0,n.jsxs)(a.p,{children:["In Tangram OS UI, navigate to ",(0,n.jsx)(a.code,{children:"/workspace/<workspace_name>/datasets"}),", click on the button ",(0,n.jsx)(a.code,{children:"Data Catalogs"})," to open catalog list and then click the button ",(0,n.jsx)(a.code,{children:"Register Data Catalog"})," to create a catalog."]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{src:c})}),"\n",(0,n.jsx)(a.h2,{id:"querying-with-catalogs",children:"Querying With Catalogs"}),"\n",(0,n.jsxs)(a.p,{children:["Assume a catalog named ",(0,n.jsx)(a.code,{children:"iceberg_test_catalog"})," has been created to serve as the namespace for all Iceberg tables associated with an ",(0,n.jsx)(a.strong,{children:"Iceberg App"})," deployed in the ",(0,n.jsx)(a.code,{children:"demo"})," workspace."]}),"\n",(0,n.jsx)(a.p,{children:"With the catalog registered, we can query an Iceberg table using a fully qualified name in the format:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM iceberg_test_catalog.test.nyc_taxi;\n"})}),"\n",(0,n.jsx)(a.h3,{id:"name-resolution-1",children:"Name Resolution"}),"\n",(0,n.jsx)(a.p,{children:"Tangram SQL resolves the qualified table reference in the format:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"<catalog_name>.<database_name>.<table_name>\n"})}),"\n",(0,n.jsx)(a.p,{children:"In the above example:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"iceberg_test_catalog \u2192 the registered catalog for the Iceberg App"}),"\n",(0,n.jsx)(a.li,{children:"test \u2192 the Iceberg database name"}),"\n",(0,n.jsx)(a.li,{children:"nyc_taxi \u2192 the target Iceberg table"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Tangram SQL will resolve this reference to the fully qualified Iceberg resource in the demo workspace, allowing seamless access without the need to type long resource names."}),"\n",(0,n.jsx)(a.h3,{id:"set-current-catalog--schema",children:"Set Current Catalog & Schema"}),"\n",(0,n.jsxs)(a.p,{children:["To avoid repeatedly specifying fully qualified table names with catalog prefixes, Tangram SQL allows you to set the ",(0,n.jsx)(a.strong,{children:"current catalog"})," using the ",(0,n.jsx)(a.code,{children:"USE CATALOG"})," statement:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"use catalog iceberg_test_catalog;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Once the current catalog is set, you can reference tables using just the database name and table name, omitting the catalog:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"select * from test.nyc_taxi;\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Further we can set the ",(0,n.jsx)(a.strong,{children:"current database"})," or ",(0,n.jsx)(a.strong,{children:"current schema"})," using the ",(0,n.jsx)(a.code,{children:"USE DATABASE"})," or ",(0,n.jsx)(a.code,{children:"USE SCHEMA"})," statement:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"use database test;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Once the current database is set, you can reference tables using just table name, omitting the catalog and the database:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"select * from nyc_taxi;\n"})}),"\n",(0,n.jsx)(a.h3,{id:"show-catalogs-schemas-and-tables",children:"Show Catalogs, Schemas and Tables"}),"\n",(0,n.jsxs)(a.p,{children:["To list catalogs, we can use ",(0,n.jsx)(a.code,{children:"SHOW CATALOGS"})," statement:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"-- list all catalogs\nshow catalogs;\n-- list all the catalogs that have name starts with iceberg\nshow catalogs like 'iceberg%'\n"})}),"\n",(0,n.jsxs)(a.p,{children:["To list schemas, we can use ",(0,n.jsx)(a.code,{children:"SHOW SCHEMAS"})," statement:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"-- list all schemas in iceberg_test_catalog\nshow schemas in iceberg_test_catalog;\n-- list all the schemas that have name starts with test\nshow schemas in iceberg_test_catalog like 'test%'\n"})}),"\n",(0,n.jsxs)(a.p,{children:["To list tables, we can use ",(0,n.jsx)(a.code,{children:"SHOW TABLES"})," statement:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"-- list all tables in iceberg_test_catalog catalog and test database\nshow tables in iceberg_test_catalog.test;\n-- list all the tables that have name starts with nyc\nshow tables in iceberg_test_catalog.test like 'nyc%';\n"})})]})}function g(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);