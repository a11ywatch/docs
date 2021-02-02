module.exports = {
  title: "A11yWatch",
  tagline: "Website Productivity Improvement",
  url: "https://a11ywatch.github.io/a11ywatch-docs",
  baseUrl: process.env.NODE_ENV === "production" ? "/a11ywatch-docs/" : "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "a11ywatch",
  projectName: "a11ywatch-docs",
  themeConfig: {
    navbar: {
      title: "A11yWatch",
      logo: {
        alt: "A11yWatch Logo",
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
              label: "Style Guide",
              to: "docs/"
            },
            {
              label: "Getting Started",
              to: "docs/getting-started/"
            },
            {
              label: "Contact",
              to: "docs/contact/"
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
          sidebarPath: require.resolve("./sidebars.js"),
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
};
