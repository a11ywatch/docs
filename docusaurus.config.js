module.exports = {
  title: "A11ywatch",
  tagline: "Website productivity improvement",
  url: "https://a11ywatch.github.io/a11ywatch-docs",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "a11ywatch",
  projectName: "a11ywatch-docs",
  themeConfig: {
    navbar: {
      title: "A11yWatch",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left"
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/"
            },
            {
              label: "Second Doc",
              to: "docs/doc2/"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/a11ywatch"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/a11ywatch"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/a11ywatcher"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/a11ywatch/a11ywatch"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} A11yWatch, LLC. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/a11ywatch-docs/docusaurus/edit/master/website/"
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/a11ywatch-docs/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
