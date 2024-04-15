module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    WeixinJSBridge: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ["warn", { endOfLine: "auto", printWidth: 120 }], // 解决Delete `CR`报错
    "vue/multi-word-component-names": "off", // 关闭组件驼峰命名规范
  },
};
