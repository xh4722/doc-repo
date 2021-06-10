module.exports = {
  title: "create-ys-app",
  tagline: "\u8FDC\u7B97\u524D\u7AEF\u811A\u624B\u67B6\uFF0C\u652F\u6301\u5FEB\u901F\u521B\u5EFA\u524D\u7AEF\u9879\u76EE\u3001API\u9879\u76EE\uFF0C\u4E5F\u652F\u6301\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\u3002\u901A\u8FC7\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u6A21\u7248\uFF0C\u51CF\u5C11\u6837\u677F\u5316\u4EE3\u7801\u7684\u7F16\u5199\uFF0C\u5728\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u7684\u540C\u65F6\u4E5F\u80FD\u89C4\u8303\u5316\u524D\u7AEF\u7684\u4F53\u7CFB\u7ED3\u6784\u3002",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "yuansuan",
  projectName: "create-ys-app",
  themeConfig: {
    navbar: {
      title: "create-ys-app",
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
      copyright: "Copyright © 2020 create-ys-app, Inc. Built with Docusaurus."
    }
  },
  presets: [["@docusaurus/preset-classic", {
    docs: {
      sidebarPath: "/workspace/doc-repo/src/create-ys-app/sidebars.js"
    },
    theme: {
      customCss: "/workspace/doc-repo/src/create-ys-app/src/css/custom.css"
    }
  }]]
};