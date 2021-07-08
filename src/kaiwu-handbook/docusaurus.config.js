module.exports = {
  title: "\u7528\u6237\u624B\u518C",
  tagline: "\u8FDC\u7B97\u4E91\u5E73\u53F0\u7528\u6237\u624B\u518C",
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'yuansuan', // Usually your GitHub org/user name.
  projectName: 'kaiwu-handbook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '开物用户手册',
      logo: {
        alt: 'ys',
        src: 'img/logo.png'
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2016 - ${new Date().getFullYear()}  浙江远算科技有限公司`
    }
  },
  presets: [['@docusaurus/preset-classic', {
    docs: {
      sidebarPath: require.resolve('./sidebars.js')
    },
    theme: {
      customCss: require.resolve('./src/css/custom.css')
    }
  }]]
};