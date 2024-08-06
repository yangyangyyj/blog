import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yyj's blog",
  titleTemplate: ":title - Demo",
  description: "A VitePress Site",
  srcDir: "./src",
  vite: {},
  vue: {},
  markdown: {
    container: {
      // tipLabel: "提示",
      // warningLabel: "警告",
      // dangerLabel: "危险",
      // infoLabel: "信息",
      // detailsLabel: "详细信息",
    },
    // lineNumbers: true,
    math: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    toc: { level: [1, 2, 3] },
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lang: "en-US",
  // base: '/base/',
  base: "/blog/",
  rewrites: {
    "source/:page": "destination/:page",
  },
  srcExclude: ["**/README.md", "**/TODO.md"], // undefined
  outDir: "./.vitepress/dist",
  assetsDir: "assets",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
