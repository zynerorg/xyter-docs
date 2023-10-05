// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Xyter",
  tagline: "A multi-purpose discord.js bot.",
  url: "https://xyter.zyner.org",
  baseUrl: "/",
  projectName: "xyter-docs",
  organizationName: "ZynerOrg",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ZynerOrg/xyter-docs/tree/dev/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/ZynerOrg/xyter-docs/tree/dev/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Xyter",
        logo: {
          alt: "Xyter Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },

          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://discord.com/api/oauth2/authorize?client_id=949998000401436673&permissions=8&scope=bot%20applications.commands",
            label: "Invite our bot",
            position: "right",
          },
          {
            href: "https://git.zyner.org/zyner/xyter/bot",
            label: "Git",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Cloud",
                to: "/docs/flavors/cloud",
              },
              {
                label: "On-Premise",
                to: "/docs/flavors/on-premise",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.zyner.org",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Git",
                href: "https://git.zyner.org/zyner/xyter/bot",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zyner.org. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
