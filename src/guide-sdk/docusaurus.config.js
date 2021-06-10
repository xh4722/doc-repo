module.exports = {
  title: "guide-sdk",
  tagline: "\u65B0\u624B\u5F15\u5BFC\u6280\u672F\u6846\u67B6\uFF1A\u63D0\u4F9B\u901A\u7528\u7684\u65B0\u624B\u5F15\u5BFC\u5F00\u53D1\u65B9\u6848\uFF1B\u652F\u6301\u901A\u8FC7\u63D2\u4EF6\u65B9\u5F0F\u6269\u5C55\u65B0\u624B\u5F15\u5BFC\u6846\u67B6\uFF1B\u652F\u6301\u81EA\u5B9A\u4E49\u4E1A\u52A1API\u7B49",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "yuansuan",
  projectName: "guide-sdk",
  themeConfig: {
    navbar: {
      title: "guide-sdk",
      logo: {
        alt: "ys",
        src: "img/logo.png"
      },
      items: [{
        to: "docs/home",
        activeBasePath: "docs",
        label: "文档",
        position: "left"
      }, {
        href: "https://github.com/yskj-fe/doc-platform",
        label: "Repo",
        position: "right"
      }]
    },
    footer: {
      style: "dark",
      links: [{
        title: "Doc",
        items: [{
          to: "docs/home",
          activeBasePath: "docs",
          label: "文档"
        }]
      }, {
        title: "Repo",
        items: [{
          href: "https://github.com/yskj-fe/doc-platform",
          label: "Repo"
        }]
      }],
      copyright: `Copyright © ${new Date().getFullYear()} guide-sdk, Inc. Built with Docusaurus.`
    }
  },
  presets: [["@docusaurus/preset-classic", {
    docs: {
      sidebarPath: require.resolve("./sidebars.js")
    },
    theme: {
      customCss: require.resolve("./src/css/custom.css")
    }
  }]]
};