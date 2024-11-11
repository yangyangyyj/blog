// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

// 引入组件库及样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 引入自定义组件
import HomeList from "./slots/HomeList.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 当 layout: 'doc' (默认) 在 frontmatter 中被启用时：
      // 'doc-top': () => h(MyComponent)
      // doc-bottom
      // doc-footer-before
      // doc-before
      // doc-after
      // sidebar-nav-before
      // sidebar-nav-after
      // aside-top
      // aside-bottom
      // aside-outline-before
      // aside-outline-after
      // aside-ads-before
      // aside-ads-after
      // 当 layout: 'home' 在 frontmatter 中被启用时:
      // home-hero-before
      // home-hero-info-before
      // home-hero-info
      // home-hero-info-after
      // home-hero-actions-after
      // home-hero-image
      "home-hero-after": () => h(HomeList),
      // home-features-before
      // home-features-after
      // 当 layout: 'page' 在 frontmatter 中被启用时:
      // page-top
      // page-bottom
      // 当未找到页面 (404) 时:
      // not-found
      // 总是启用:
      // layout-top
      // layout-bottom
      // nav-bar-title-before
      // nav-bar-title-after
      // nav-bar-content-before
      // nav-bar-content-after
      // nav-screen-content-before
      // nav-screen-content-after
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus); // 注册组件库
  },
} satisfies Theme;
