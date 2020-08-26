module.exports = {
  title: 'Allors Documentation',
  tagline: 'Bolt cutter-proof end to end software development stack',
  url: 'https://allors.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Allors', // Usually your GitHub org/user name.
  projectName: 'allors.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'csharp',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Allors Logo',
        src: 'img/allors.svg',
        srcDark: 'img/allors-dark.svg',
        href: 'https://allors.io/',
        target: '_self'
      },
      items: [
        {
          to: 'docs/Platform/Derivation/Overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'events',
          activeBasePath: 'events',
          label: 'Events',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
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
              label: 'Derivation',
              to: 'docs/Platform/Derivation/Overview',
            },
            {
              label: 'Security',
              to: 'docs/Platform/Security/Overview',
            },
            {
              label: 'Demo',
              to: 'docs/Platform/Demo',
            },
            {
              label: 'Excel',
              to: 'docs/Excel/Features',
            }
          ],
        },
        {
          title: 'Events',
          items: [
            {
              label: 'DevCon 2020',
              to: 'events',
            }
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
              href: 'https://facebook.com/allors.io',
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
      copyright: `Copyright © ${new Date().getFullYear()} Allors, Inc. Built with &#x2764; & Docusaurus.`,
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
  scripts: [],
  stylesheets: []
};
