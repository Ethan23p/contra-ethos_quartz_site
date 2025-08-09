import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "contra-ethos",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "EthanPorter.xyz",
    ignorePatterns: ["private", "templates", ".obsidian", ".logseq/**", "logseq/**"
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts", // my ethanporter.xyz project from Adobe: ork4mcz / <link rel="stylesheet" href="https://use.typekit.net/ork4mcz.css">
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F0EEE6",
          lightgray: "#FFFFFF",
          gray: "#E3DACC",
          darkgray: "#141413",
          dark: "#D97757",
          secondary: "#141413",
          tertiary: "#1F476E",
          highlight: "#14141325",
          textHighlight: "#14141388",
        },
        darkMode: {
          light: "#262624", // page background red: #fe0707ff
          lightgray: "#1F1E1D", // borders
          gray: "#0F0F0E", // graph links, heavier borders
          darkgray: "#C2C0B6", // body text edit: also icons
          dark: "#D97059", // header text and icons
          secondary: "#C2C0B6", // link color, current graph node
          tertiary: "#276EB3", // hover states and visited graph nodes
          highlight: "#0f0f0e95", // internal link bg, highlighted text, highlighted lines of code
          textHighlight: "#C2C0B688", // markdown highlighted text background
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
