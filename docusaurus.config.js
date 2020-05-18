module.exports = {
  title: 'Allors Documentation',
  tagline: 'Bolt cutter-proof end to end software development stack',
  url: 'https://allors.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Allors', // Usually your GitHub org/user name.
  projectName: 'allors.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Allors Logo',
        src: 'img/allors.png',
      },
      links: [
        {
          to: 'docs/Document',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://allors.com/',
          label: 'Allors',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Document',
              to: 'docs/Document',
            },
            {
              label: 'Dynamic',
              to: 'docs/Dynamic',
            },
            {
              label: 'Excel',
              to: 'docs/Excel',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/allors',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/allors',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/allors',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/allors/allors.io',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/allors',
            },
            {
              label: 'Linkedin',
              href: 'https://linkedin.com/company/allors',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Allors, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/allors/allors.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
