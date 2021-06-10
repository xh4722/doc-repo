module.exports = {
  title: "ys-utils",
  tagline: "ys-utils 提供了一套通用的前端工具集",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "yuansuan",
  projectName: "ys-utils",
  themeConfig: {
    navbar: {
      title: "ys-utils",
      logo: {
        alt: "ys",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/home",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        {
          href: "https://github.com/yskj-fe/doc-platform",
          label: "Repo",
          position: "right",
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
      copyright: "Copyright © 2020 ys-utils, Inc. Built with Docusaurus.",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "/workspace/doc-repo/src/ys-utils/sidebars.js",
        },
        theme: {
          customCss: "/workspace/doc-repo/src/ys-utils/src/css/custom.css",
        },
      },
    ],
  ],
};
