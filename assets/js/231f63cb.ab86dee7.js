"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1669],{4076:a=>{a.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Get Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is Tangram OS","href":"/tangram-os-doc/","docId":"tutorial-get-started/what-is-tangram-os","unlisted":false},{"type":"link","label":"Quick Start Locally","href":"/tangram-os-doc/tutorial-get-started/quick-start","docId":"tutorial-get-started/quick-start","unlisted":false}],"href":"/tangram-os-doc/category/get-started"},{"type":"category","label":"Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Workspace","href":"/tangram-os-doc/tutorial-basics/workspace","docId":"tutorial-basics/workspace","unlisted":false},{"type":"link","label":"Resource","href":"/tangram-os-doc/tutorial-basics/resource","docId":"tutorial-basics/resource","unlisted":false},{"type":"link","label":"Application","href":"/tangram-os-doc/tutorial-basics/application","docId":"tutorial-basics/application","unlisted":false},{"type":"link","label":"Buckets & Folders","href":"/tangram-os-doc/tutorial-basics/folders","docId":"tutorial-basics/folders","unlisted":false}],"href":"/tangram-os-doc/category/basics"},{"type":"category","label":"IAM Service","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Roles","href":"/tangram-os-doc/tutorial-IAM/roles","docId":"tutorial-IAM/roles","unlisted":false},{"type":"link","label":"Service Accounts","href":"/tangram-os-doc/tutorial-IAM/service-account","docId":"tutorial-IAM/service-account","unlisted":false},{"type":"link","label":"Personal Access Tokens","href":"/tangram-os-doc/tutorial-IAM/personal-access-token","docId":"tutorial-IAM/personal-access-token","unlisted":false}],"href":"/tangram-os-doc/category/iam-service"},{"type":"category","label":"SQL Service","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/tangram-os-doc/tutorial-sql/overview","docId":"tutorial-sql/overview","unlisted":false},{"type":"link","label":"How To Connect","href":"/tangram-os-doc/tutorial-sql/connect","docId":"tutorial-sql/connect","unlisted":false},{"type":"link","label":"Name Resolution","href":"/tangram-os-doc/tutorial-sql/catalog","docId":"tutorial-sql/catalog","unlisted":false},{"type":"link","label":"DuckDB in Tangram OS","href":"/tangram-os-doc/tutorial-sql/duck_db","docId":"tutorial-sql/duck_db","unlisted":false}],"href":"/tangram-os-doc/category/sql-service"},{"type":"category","label":"Tangram CLI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Instance Management","href":"/tangram-os-doc/tutorial-cli/instances","docId":"tutorial-cli/instances","unlisted":false},{"type":"link","label":"Managing Local Deployment","href":"/tangram-os-doc/tutorial-cli/local-instance-management","docId":"tutorial-cli/local-instance-management","unlisted":false},{"type":"link","label":"SQL Engines","href":"/tangram-os-doc/tutorial-cli/sql-engines","docId":"tutorial-cli/sql-engines","unlisted":false},{"type":"link","label":"Folders","href":"/tangram-os-doc/tutorial-cli/folders","docId":"tutorial-cli/folders","unlisted":false},{"type":"link","label":"Workspaces","href":"/tangram-os-doc/tutorial-cli/workspaces","docId":"tutorial-cli/workspaces","unlisted":false},{"type":"link","label":"Application Related Commands","href":"/tangram-os-doc/tutorial-cli/applications","docId":"tutorial-cli/applications","unlisted":false}],"href":"/tangram-os-doc/category/tangram-cli"}]},"docs":{"tutorial-basics/application":{"id":"tutorial-basics/application","title":"Application","description":"Tangram OS apps are versions of application code and infrastructure that can be deployed into Tangram OS instance.","sidebar":"tutorialSidebar"},"tutorial-basics/folders":{"id":"tutorial-basics/folders","title":"Buckets & Folders","description":"In Tangram OS, a Bucket is a storage container that uses a cloud blob storage as backend. A Folder is logical directory created in a bucket.","sidebar":"tutorialSidebar"},"tutorial-basics/resource":{"id":"tutorial-basics/resource","title":"Resource","description":"Every entity defined in Tangram OS can be considered a resource\u2014such as a database table, a workflow, an application, or a storage bucket.","sidebar":"tutorialSidebar"},"tutorial-basics/workspace":{"id":"tutorial-basics/workspace","title":"Workspace","description":"In Tangram OS, a Workspace is an isolated environment used to manage resources, such as data, dashboards, infra resources and applications.","sidebar":"tutorialSidebar"},"tutorial-cli/applications":{"id":"tutorial-cli/applications","title":"Application Related Commands","description":"The app command is a group of commands used to manage applications in a Tangram workspace.","sidebar":"tutorialSidebar"},"tutorial-cli/folders":{"id":"tutorial-cli/folders","title":"Folders","description":"List available folders in workspace:","sidebar":"tutorialSidebar"},"tutorial-cli/instances":{"id":"tutorial-cli/instances","title":"Instance Management","description":"An instance in Tangram CLI represents a Tangram OS deployment environment that the CLI connects to, for example you can have local, staging, or production environments to run Tangram CLI against.","sidebar":"tutorialSidebar"},"tutorial-cli/local-instance-management":{"id":"tutorial-cli/local-instance-management","title":"Managing Local Deployment","description":"Start Tangram OS local deployment","sidebar":"tutorialSidebar"},"tutorial-cli/sql-engines":{"id":"tutorial-cli/sql-engines","title":"SQL Engines","description":"The sql-engine command group allows you to manage and interact with SQL database engines in Tangram OS.","sidebar":"tutorialSidebar"},"tutorial-cli/workspaces":{"id":"tutorial-cli/workspaces","title":"Workspaces","description":"List Workspaces","sidebar":"tutorialSidebar"},"tutorial-get-started/quick-start":{"id":"tutorial-get-started/quick-start","title":"Quick Start Locally","description":"\u23f1\ufe0f Time to complete: ~10 minutes","sidebar":"tutorialSidebar"},"tutorial-get-started/what-is-tangram-os":{"id":"tutorial-get-started/what-is-tangram-os","title":"What is Tangram OS","description":"Tangram OS is a control plane that unifies data and application ecosystems by integrating fragmented components into one cohesive platform:","sidebar":"tutorialSidebar"},"tutorial-IAM/personal-access-token":{"id":"tutorial-IAM/personal-access-token","title":"Personal Access Tokens","description":"Personal Access Tokens (PATs) provide an alternative to using passwords for authentication when interacting with Tangram OS via the Tangram OS APIs or Tangram CLI.","sidebar":"tutorialSidebar"},"tutorial-IAM/roles":{"id":"tutorial-IAM/roles","title":"Roles","description":"Tangram OS implements a Role-Based Access Control (RBAC) model to manage permissions and access to resources.","sidebar":"tutorialSidebar"},"tutorial-IAM/service-account":{"id":"tutorial-IAM/service-account","title":"Service Accounts","description":"In Tangram OS, a Service Account is a specialized identity used by applications or compute workloads\u2014such as workflows, data ingestion lambdas, or automated jobs.","sidebar":"tutorialSidebar"},"tutorial-sql/catalog":{"id":"tutorial-sql/catalog","title":"Name Resolution","description":"With Tangram SQL, dataset can be queried using the resource name as the following:","sidebar":"tutorialSidebar"},"tutorial-sql/connect":{"id":"tutorial-sql/connect","title":"How To Connect","description":"Tangram SQL Service implements PostgreSQL wire protocol, tools or libs that work with PostgreSQL can be directly used to connect Tangram SQL service.","sidebar":"tutorialSidebar"},"tutorial-sql/duck_db":{"id":"tutorial-sql/duck_db","title":"DuckDB in Tangram OS","description":"Tangram OS SQL service has DuckDB as a built-in SQL Engine, it is high performance query engine that can be used to query open tables formats like Apache Iceberg or Delta Lake.","sidebar":"tutorialSidebar"},"tutorial-sql/overview":{"id":"tutorial-sql/overview","title":"Overview","description":"Tangram OS SQL is a multiple engine service implemented using PostgreSQL wire protocol. It enables seamless data exploration, analytics, and transformation across multiple data platforms from a single interface.","sidebar":"tutorialSidebar"}}}}')}}]);