"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3],{3587:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>g});const t=JSON.parse('{"id":"tutorial-get-started/quick-start","title":"Quick Start Locally","description":"\u23f1\ufe0f Time to complete: ~10 minutes","source":"@site/docs/tutorial-get-started/quick-start.mdx","sourceDirName":"tutorial-get-started","slug":"/tutorial-get-started/quick-start","permalink":"/tutorial-get-started/quick-start","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"What is Tangram OS","permalink":"/"},"next":{"title":"Basics","permalink":"/category/basics"}}');var s=a(4848),r=a(8453);a.p,a.p,a.p,a.p,a.p;const i=a.p+"assets/images/demo_iceberg_app-c99f36f8837f7f57327d42f18b2ac911.png",l=a.p+"assets/images/tangram_sql_editor-ee1365f3179dbcbff130c23447b27458.png",o=a.p+"assets/images/tangram_search-2de6273283e4ced86b2edf44e0987dd1.png",c={sidebar_position:2},d="Quick Start Locally",h={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying Tangram OS Locally in 3 Steps",id:"deploying-tangram-os-locally-in-3-steps",level:2},{value:"1. Download Tangram CLI Jar",id:"1-download-tangram-cli-jar",level:3},{value:"2. Start Tangram OS CLI Shell",id:"2-start-tangram-os-cli-shell",level:3},{value:"3. Start Local Deployment",id:"3-start-local-deployment",level:3},{value:"Running Queries Using Tangram OS SQL Shell",id:"running-queries-using-tangram-os-sql-shell",level:2},{value:"Explore Tangram UI",id:"explore-tangram-ui",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"quick-start-locally",children:"Quick Start Locally"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u23f1\ufe0f Time to complete: ~10 minutes"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Java 11+"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Minikube"}),", you can follow this ",(0,s.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start",children:"link"})," to install Minikube."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If Minikube is not already running on your device, you need to start your Minikube instance before deploying Tangram OS locally.\nYou will need the minikube configured with at least 4GiB of memory with more than 2 CPUs(ideally 4 CPUs)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"minikube start --memory 4096 --cpus 4\n"})}),"\n",(0,s.jsx)(n.h2,{id:"deploying-tangram-os-locally-in-3-steps",children:"Deploying Tangram OS Locally in 3 Steps"}),"\n",(0,s.jsx)(n.p,{children:"Before starting, make sure your Minikube instance is up and running on your device."}),"\n",(0,s.jsx)(n.h3,{id:"1-download-tangram-cli-jar",children:"1. Download Tangram CLI Jar"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Download ",(0,s.jsx)(n.a,{href:"https://github.com/tangram-data/tangram-os-doc/releases/download/tangram-cli-1.0.0/tangram-cli_2.13-1.0.0-all.jar",children:"Tangram CLI JAR"})," file"]}),"\n",(0,s.jsx)(n.li,{children:"Move it to your preferred directory"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-start-tangram-os-cli-shell",children:"2. Start Tangram OS CLI Shell"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"java -jar ./tangram-cli_2.13-1.0.0-all.jar\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-start-local-deployment",children:"3. Start Local Deployment"}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["By executing ",(0,s.jsx)(n.code,{children:"local start"})," command in the CLI shell, you choose to agree with the following terms and conditions:"]}),(0,s.jsx)(n.p,{children:"Tangram OS may be deployed and used locally only for testing, evaluation purposes. This local deployment is provided as-is, without any warranties, guarantees, or support commitments.\nRedistribution to third parties or use for any commercial purposes is prohibited."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tangram> local start\n"})}),"\n",(0,s.jsx)(n.p,{children:"If Tangram OS instance is deployed successfully you should be able to see:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"tangram> local>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Congratulations! \ud83c\udf89 You've got Tangram OS up and running on your machine:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The Tangram instance ",(0,s.jsx)(n.strong,{children:"local"})," is registered and ready to be used with Tangram OS CLI."]}),"\n",(0,s.jsxs)(n.li,{children:["A account is created with name ",(0,s.jsx)(n.strong,{children:"tangram"})," and password also set to ",(0,s.jsx)(n.strong,{children:"tangram"}),", can be used to login to Tangram UI."]}),"\n",(0,s.jsxs)(n.li,{children:["A workspace named ",(0,s.jsx)(n.strong,{children:"demo"})," is created, with ",(0,s.jsx)(n.strong,{children:"Iceberg App"})," deployed in the workspace."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.strong,{children:"catalog"})," named ",(0,s.jsx)(n.strong,{children:"iceberg"})," is created to be used in Tangram SQL for querying Iceberg Tables."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If any issue encountered during the setup, you can get help in our ",(0,s.jsx)(n.a,{href:"https://discord.gg/PXxsBDEr",children:"Discord"})," help channel."]})}),"\n",(0,s.jsx)(n.h2,{id:"running-queries-using-tangram-os-sql-shell",children:"Running Queries Using Tangram OS SQL Shell"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Connect to Tangram SQL"})}),"\n"]}),"\n",(0,s.jsx)("div",{style:{fontSize:"1.1em",fontWeight:"bold"},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"#This will start Tangram SQL interactive shell to query data using DuckDB\nsql-engine connect duckdb\n"})})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Set Up Catalog and Database"})}),"\n"]}),"\n",(0,s.jsx)("div",{style:{fontSize:"1.1em",fontWeight:"bold"},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- set current catalog to demo\nuse catalog iceberg;\n-- creating an Iceberg database in catalog demo\ncreate database test;\n-- set current database to test \nuse database test;\n"})})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Try to create an Iceberg table and write some data for query"})}),"\n"]}),"\n",(0,s.jsx)("div",{style:{fontSize:"1.1em",fontWeight:"bold"},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Create and populate a test table\ncreate table test_table (id int, name string);\ninsert into test_table values (1, 'test');\nselect * from test_table;\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["For more details about Tangram OS CLI, you can check the docs ",(0,s.jsx)(n.a,{href:"/category/tangram-cli",children:"here"})]}),"\n",(0,s.jsx)(n.h2,{id:"explore-tangram-ui",children:"Explore Tangram UI"}),"\n",(0,s.jsx)(n.p,{children:"Search created Iceberg Table in Tangram OS search bar"}),"\n",(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"36px",marginTop:"24px"},children:(0,s.jsx)("img",{src:o})}),"\n",(0,s.jsxs)(n.p,{children:["You can also query data using ",(0,s.jsx)(n.a,{href:"http://localhost:8081/sql",children:"Tangram SQL editor"})," in Tangram OS UI"]}),"\n",(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"36px",marginTop:"24px"},children:(0,s.jsx)("img",{src:l})}),"\n",(0,s.jsxs)(n.p,{children:["Navigating in the ",(0,s.jsx)(n.strong,{children:"demo"})," workspace, click on the Applications tab you be able to find Iceberg App."]}),"\n",(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"36px",marginTop:"24px"},children:(0,s.jsx)("img",{src:i})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);