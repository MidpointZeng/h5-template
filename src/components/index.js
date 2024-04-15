import Vue from "vue";

/**
 * 名字头4个字母是Base的组件会自动注入全局
 */
const context = require.context("./", true, /\.vue$/);
context.keys().forEach((key) => {
  if (key.slice(2, 6) !== "Base") {
    return;
  }
  const component = context(key).default;
  Vue.component(component.name, component);
});
