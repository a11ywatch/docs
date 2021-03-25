module.exports = {
  title: "A11yWatch",
  tagline: "Web Accessibility Productivity Improvement",
  url: "https://a11ywatch.github.io/docs",
  baseUrl: process.env.NODE_ENV === "production" ? "/docs/" : "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "a11ywatch",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "A11yWatch",
      logo: {
        alt: "A11yWatch Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          to: "documentation/",
          activeBasePath: "documentation",
          label: "Docs",
          position: "left"
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/a11ywatch/a11ywatch",
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
              label: "Getting Started",
              to: "documentation"
            },
            {
              label: "Contact",
              to: "documentation/contact/"
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
      copyright: `Copyright © ${new Date().getFullYear()} A11yWatch, LLC.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "documentation",
          sidebarPath: require.resolve("./src/sidebars.js"),
          editUrl: "https://github.com/a11ywatch/a11ywatch-docs/edit/master/"
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/a11ywatch/a11ywatch-docs/edit/master/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
}
