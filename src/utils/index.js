/**
 * 判断是否是微信
 */
const isWechat = (function () {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("micromessenger") !== -1;
})();

/**
 * vconsole 调试台抓包工具
 * @return {Function} VConsole
 */
const AsyncAwaitVconsole = async () => {
  const { default: VConsole } = await import("vconsole");
  new VConsole();
};

/**
 * 禁止微信font-size变大变小
 * 解决微信h5字体可以放大问题
 */
export function noResetWeixinSize() {
  const handleWeixinFontSize = () => {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke("setFontSizeCallback", {
      fontSize: 0,
    });

    // 重写设置网页字体大小的事件
    WeixinJSBridge.on("menu:setfont", () => {
      WeixinJSBridge.invoke("setFontSizeCallback", {
        fontSize: 0,
      });
    });
  };

  if (typeof WeixinJSBridge === "object" && typeof WeixinJSBridge.invoke === "function") {
    handleWeixinFontSize();
  } else {
    if (document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", handleWeixinFontSize, false);
    }
  }
}

export { isWechat, AsyncAwaitVconsole };
