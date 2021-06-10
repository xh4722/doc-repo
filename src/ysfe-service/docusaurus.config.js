module.exports = {
  title: "ysfe-service",
  tagline: "Use ysfe-service to develop and build yuansuan frontend project",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  projectName: "ysfe-service",
  favicon: "img/favicon.ico",
  organizationName: "yskj",
  themeConfig: {
    navbar: {
      title: "ysfe-service",
      logo: {
        alt: "Yskj Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Doc",
          items: [
            {
              to: "docs/home",
              activeBasePath: "docs",
              label: "文档",
            },
          ],
        },
        {
          title: "Repo",
          items: [
            {
              href: "https://github.com/yskj-fe/doc-platform",
              label: "Repo",
            },
          ],
        },
      ],
      copyright: "Copyright © 2020 ysfe-service, Inc. Built with Docusaurus.",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "/workspace/doc-repo/src/ysfe-service/sidebars.js",
        },
        theme: {
          customCss: "/workspace/doc-repo/src/ysfe-service/src/css/custom.css",
        },
      },
    ],
  ],
};
