import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Tangram OS",
  tagline: "Your data and apps in one place - Tangram OS",
  favicon: "img/tangram.png",
  themes: ["@docusaurus/theme-mermaid"],

  // Set the production url of your site here
  url: "https://docs.tangram-os.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tangram-data", // Usually your GitHub org/user name.
  projectName: "tangram-os-doc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Tangram OS",
      logo: {
        alt: "Tangram OS Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://discord.gg/hey4u954",
          label: "Join Discord Channel",
          position: "right",
        },
        {
          href: "https://www.tangram-os.ai/join-private-priview",
          label: "Request Cloud Access",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Quickstart",
              to: "/tutorial-get-started/quick-start",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/hey4u954",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Request cloud access",
              to: "https://www.tangram-os.ai/request-cloud-access",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tangram Data.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
