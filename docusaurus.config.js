module.exports = {
  title: 'Allors Documentation',
  tagline: 'Bolt cutter-proof end to end software development stack',
  url: 'https://allors.github.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Allors', // Usually your GitHub org/user name.
  projectName: 'allors.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Allors Docs',
      logo: {
        alt: 'Allors Logo',
        src: 'img/allors.png',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
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
              href: 'https://facekook.com/allors',
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
              href: 'https://github.com/allors/Docs',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
