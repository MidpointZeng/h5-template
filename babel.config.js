module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    // 自动按需引入vant组件
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        // 指定样式路径
        style: (name) => `${name}/style/less`,
      },
      "vant",
    ],
  ],
};
