// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title : "Xyter",
  tagline : "A privacy-focused discord.js bot",
  url : "https://xyter.zyner.org",
  baseUrl : "/",
  projectName : "xyter-docs",
  organizationName : "ZynerOrg",
  trailingSlash : false,
  onBrokenLinks : "throw",
  onBrokenMarkdownLinks : "warn",
  favicon : "img/logo.png",

  presets : [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs : {
          sidebarPath : require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl : "https://github.com/ZynerOrg/xyter-docs/tree/dev/",
        },
        blog : {
          showReadingTime : true,
          // Please change this to your repo.
          editUrl : "https://github.com/ZynerOrg/xyter-docs/tree/dev/",
        },
        theme : {
          customCss : require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig :
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar : {
          title : "Xyter",
          logo : {
            alt : "Xyter Logo",
            src : "img/logo.png",
          },
          items : [
            {
              type : "doc",
              docId : "index",
              position : "left",
              label : "Documentation",
            },
            {to : "/blog", label : "Blog", position : "left"},
            {
              href : "https://bot.zyner.org",
              label : "Invite our bot",
              position : "right",
            },
            {
              href : "https://github.com/ZynerOrg/xyter",
              label : "GitHub",
              position : "right",
            },
          ],
        },
        footer : {
          style : "dark",
          links : [
            {
              title : "Documentation",
              items : [
                {
                  label : "On-Premise",
                  to : "/docs/on-premise",
                },
              ],
            },
            {
              title : "Community",
              items : [
                {
                  label : "Discord",
                  href : "https://discord.zyner.org",
                },
              ],
            },
            {
              title : "More",
              items : [
                {
                  label : "Blog",
                  to : "/blog",
                },
                {
                  label : "GitHub",
                  href : "https://github.com/ZynerOrg/xyter",
                },
              ],
            },
          ],
          copyright : `Copyright © ${
              new Date().getFullYear()} Zyner.org. Built with Docusaurus.`,
        },
        prism : {
          theme : lightCodeTheme,
          darkTheme : darkCodeTheme,
        },
      }),
};

module.exports = config;
