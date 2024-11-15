import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import DynamicTitle from "vuepress-plugin-dynamic-title";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "沐雨橙风",
  titleTemplate: ":title - 沐雨橙风",
  description: "你指尖跃动的电光，是我此生不变的信仰",
  srcDir: "./src",
  vite: {
    publicDir: "../public", // 指定 public 目录路径
    plugins: [
      UnoCSS(),
      DynamicTitle({
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000,
      }),
    ],
  },
  vue: {},
  // markdown语法配置
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    // lineNumbers: true, // 默认显示行号
    math: true, // 默认开启数学公式支持
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    toc: { level: [1, 2, 3] }, // 默认主题右侧导航栏
  },
  lastUpdated: true, // 默认显示最近更新时间
  head: [["link", { rel: "icon", href: "../public/favicon.ico" }]],
  lang: "en-US",
  // base: '/', // 默认
  base: "/blog/", // 部署到github pages的仓库路径
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
      { text: "markdown", link: "/notes/vitepress/markdown-examples" },
    ],

    // 左侧导航栏
    sidebar: {
      "notes/vue3/": [
        {
          text: "Vue3",
          collapsed: true,
          items: [
            { text: "第一篇", link: "/notes/vue3/notes-vue3-n1" },
            { text: "第二篇", link: "/notes/vue3/notes-vue3-n2" },
            { text: "第三篇", link: "/notes/vue3/notes-vue3-n3" },
            { text: "第四篇", link: "/notes/vue3/notes-vue3-n4" },
          ],
        },
      ],
      "notes/vitepress/": [
        {
          text: "Vitepress",
          collapsed: true,
          items: [
            { text: "markdown", link: "/notes/vitepress/markdown-examples" },
            { text: "api", link: "/notes/vitepress/runtime-api" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/yangyangyyj/blog" }],

    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },

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
