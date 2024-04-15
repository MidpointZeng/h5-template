import wx from "weixin-js-sdk";

/**
 * 微信自定义分享文案配置
 * @param {object} configData 微信分享配置
 * @param {object} shareData  微信分享数据
 */
const wechatReady = (configData = {}, shareData = {}, routeName = "empty", isShare = "true") => {
  console.info("微信分享的当前-routeName:", routeName);
  console.info("微信分享配置-configData:", configData);
  console.info("微信分享数据-shareData:", shareData);

  wx.config({
    /**
     * 开启调试模式,调用的所有api的返回值会在客户端alert出来，
     * 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，
     * 仅在pc端时才会打印。
     *
     * ? 如果不是 正式机、正式环境 使用线上的
     */
    debug: process.env.VUE_APP_ENV !== "production" ? shareData.debug : false,
    appId: configData.appId, //         必填，公众号的唯一标识
    timestamp: configData.timestamp, // 必填，生成签名的时间戳
    nonceStr: configData.nonceStr, //   必填，生成签名的随机串
    signature: configData.signature, // 必填，签名
    jsApiList: [
      "updateAppMessageShareData",
      "updateTimelineShareData",
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "hideOptionMenu",
      "showOptionMenu",
      "chooseWXPay",
      "getLocation",
      "openLocation",
    ],
  });

  wx.ready(() => {
    // 需在用户可能点击分享按钮前就先调用

    if (!isShare) {
      wx.hideOptionMenu();
    } else {
      wx.showOptionMenu();
    }

    wx.checkJsApi({
      jsApiList: [
        "updateAppMessageShareData",
        "updateTimelineShareData",
        "chooseWXPay",
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "openLocation",
      ],
      success: (res) => {
        console.info("检查成功:", res);
      },
    });

    /**
     * "分享给朋友" 及 "分享到QQ"
     */
    wx.updateAppMessageShareData({
      title: shareData.title, //   分享标题
      desc: shareData.desc,
      link: shareData.link, //     分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareData.imgUrl, // 分享图标
      success(res) {
        console.log("成功:", res);
      },
      cancel(res) {
        console.log("失败:", res);
      },
    });

    wx.onMenuShareAppMessage({
      title: shareData.title, //   分享标题
      desc: shareData.desc,
      link: shareData.link, //     分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareData.imgUrl, // 分享图标
      type: "", // 分享类型,music、video或link，不填默认为link
      dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        console.log("朋友成功分享旧接口");
      },
    });

    /**
     * "分享到朋友圈" 及 "分享到QQ空间"
     */
    wx.updateTimelineShareData({
      title: shareData.title, //   分享标题
      link: shareData.link, //     分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareData.imgUrl, // 分享图标
      success(res) {
        console.log("成功:", res);
      },
      cancel(res) {
        console.log("失败:", res);
      },
    });

    wx.onMenuShareTimeline({
      title: shareData.title, //   分享标题
      link: shareData.link, //     分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareData.imgUrl, // 分享图标
      success: function () {
        console.log("朋友圈成功分享旧接口");
      },
    });
  });
};

export default wechatReady;
