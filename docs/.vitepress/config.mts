import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yyj's blog",
  titleTemplate: ":title - Demo",
  description: "VitePress Demo",
  srcDir: "./src",
  vite: {},
  vue: {},
  // markdown语法配置
  markdown: {
    container: {
      // tipLabel: "提示",
      // warningLabel: "警告",
      // dangerLabel: "危险",
      infoLabel: "信息",
      // detailsLabel: "详细信息",
    },
    // lineNumbers: true, // 默认显示行号
    math: true, // 默认开启数学公式支持
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    toc: { level: [1, 2, 3] }, // 默认主题右侧导航栏
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lang: "en-US",
  // base: '/', // 默认
  base: "/blog/", // 部署到github pages的路径
  rewrites: {
    "source/:page": "destination/:page",
  },
  srcExclude: ["**/README.md", "**/TODO.md"], // undefined
  outDir: "./.vitepress/dist", // 打包输出目录
  assetsDir: "assets", // 静态资源目录
  themeConfig: {
    // 默认主题相关主题配置
    // https://vitepress.dev/reference/default-theme-config

    // 顶部导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    // 左侧导航栏
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/runtime-api" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/yangyangyyj/blog" }],

    // 文档底部翻页按钮
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // 右侧导航标题
    outline: {
      label: "页面导航",
    },
  },
});
