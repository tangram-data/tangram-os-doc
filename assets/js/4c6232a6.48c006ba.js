"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1702],{1110:(e,n,t)=>{t.p},7358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tutorial-sql/connect","title":"How To Connect","description":"Tangram SQL Service implements PostgreSQL wire protocol, tools or libs that work with PostgreSQL can be directly used to connect Tangram SQL service.","source":"@site/docs/tutorial-sql/connect.mdx","sourceDirName":"tutorial-sql","slug":"/tutorial-sql/connect","permalink":"/tangram-os-doc/tutorial-sql/connect","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/tangram-os-doc/tutorial-sql/overview"},"next":{"title":"Name Resolution","permalink":"/tangram-os-doc/tutorial-sql/catalog"}}');var o=t(4848),r=t(8453);t(1110);const c={sidebar_position:2},i="How To Connect",a={},l=[{value:"Examples",id:"examples",level:2},{value:"Using psql",id:"using-psql",level:3},{value:"Using Tangram CLI",id:"using-tangram-cli",level:3},{value:"Using JDBC",id:"using-jdbc",level:3},{value:"Using Python psycopg2",id:"using-python-psycopg2",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"how-to-connect",children:"How To Connect"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Tangram SQL Service"})," implements ",(0,o.jsx)(n.strong,{children:"PostgreSQL wire protocol"}),", tools or libs that work with PostgreSQL can be directly used to connect Tangram SQL service."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.h3,{id:"using-psql",children:"Using psql"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# replace `localhost` with your own Tangram OS SQL service host\n# replace `duckdb` to the SQL engine id or alias for the engine you want to connect\npsql -p 9200 --host localhost  -U tangram -d duckdb\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-tangram-cli",children:"Using Tangram CLI"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# choose the Tangram OS instance to connect\nuse local\n# connect to one sql engine \nsql-engine connect duckdb\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The above will connect to the built-in DuckDB sql engine of the seleced Tangram OS instance and you can start to type and execute SQL statements like using ",(0,o.jsx)(n.code,{children:"psql"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"using-jdbc",children:"Using JDBC"}),"\n",(0,o.jsx)(n.p,{children:"PostgreSQL JDBC driver"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'// https://mvnrepository.com/artifact/org.postgresql/postgresql\nimplementation("org.postgresql:postgresql:42.7.5")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\nimport java.sql.*;\nimport java.util.Properties;\n\npublic class TangramSQLConnect {\n\n    public static void main (String arg[]) throws SQLException{\n        String url = "jdbc:postgresql://localhost:9200/duckdb";\n        Properties props = new Properties();\n        props.setProperty("user", "<your Tangram OS user name>");\n        props.setProperty("password", "<your Tangram OS access token>");\n\n        try(Connection conn = DriverManager.getConnection(url, props)) {\n          String sqlQuery = "select * from iceberg.test.nyc_taxi";\n          PreparedStatement st = conn.prepareStatement(sqlQuery); \n          ResultSet rs = st.executeQuery();\n          //do things with the result set\n        }\n    }   \n\n}\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"using-python-psycopg2",children:"Using Python psycopg2"}),"\n",(0,o.jsxs)(n.p,{children:["For information about how to install psycopg and the difference between psycopg and psycopg-binary, see the official ",(0,o.jsx)(n.a,{href:"https://www.psycopg.org/docs/install.html",children:"psycopg"})," documentation."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import psycopg2\n\nconn = psycopg2.connect(host="127.0.0.1",\n                        port=9200, \n                        user="<your-tangram-os-user>",\n                        password="<your-tangram-os-access-token>",\n                        dbname="duckdb")\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(6540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);