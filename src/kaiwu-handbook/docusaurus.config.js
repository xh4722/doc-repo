module.exports = {
  title: 'kaiwu-handbook',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'yuansuan', // Usually your GitHub org/user name.
  projectName: 'kaiwu-handbook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'kaiwu-handbook',
      logo: {
        alt: 'ys',
        src: 'img/logo.png'
      },
      items: [
        {
          to: 'docs/home',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left'
        },
        {
          href: 'https://github.com/yskj-fe/doc-platform',
          label: 'Repo',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Doc',
          items: [
            {
              to: 'docs/home',
              activeBasePath: 'docs',
              label: '文档'
            }
          ]
        },
        {
          title: 'Repo',
          items: [
            {
              href: 'https://github.com/yskj-fe/doc-platform',
              label: 'Repo'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} kaiwu-handbook, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
