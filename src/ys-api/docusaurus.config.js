module.exports = {
  title: "远算 Api",
  tagline: "基于 nestjs 封装的远算 node api 框架",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "ys", // Usually your GitHub org/user name.
  projectName: "ys-api", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "远算 Api",
      logo: {
        alt: "ys",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/global_func",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        {
          href: "http://phabricator.intern.yuansuan.cn/diffusion/45/browse/master/ys-api/",
          label: "Repo",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
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
      copyright: `Copyright © ${new Date().getFullYear()} 远算Api, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
