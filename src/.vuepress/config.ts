import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/wnblog/",

  lang: "zh-CN",
  title: "汪宁，你好",
  description: "我的第一个VuePress站点",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
