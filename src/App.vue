<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive" />
    <!-- <van-tabbar
      v-model="active"
      route
      @change="onChange"
      v-show="showBarList.includes($route.path)"
    >
      <van-tabbar-item
        v-for="(item, index) in routeList"
        :key="index"
        :to="item.path"
      >
        <img :src="active == index ? item.icon.active : item.icon.inactive" />
        <p :class="active == index ? 'ac_tab' : 'de_tab'">{{ item.name }}</p>
      </van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>
<script>
import hkHeader from "@/components/common/header.vue";
export default {
  data() {
    return {
      //展示bar的专题
      showBarList: ["/home", "/user"],
      active: 0, //默认选中
      //tabbar信息
      routeList: [
        {
          name: "ホーム",
          path: "/home",
          active: 0,
          icon: {
            active: require("@/assets/img/common/home_ac.png"),
            inactive: require("@/assets/img/common/home_de.png"),
          },
        },
        {
          name: "私",
          path: "/user",
          active: 1,
          icon: {
            active: require("@/assets/img/common/mine_ac.png"),
            inactive: require("@/assets/img/common/mine_de.png"),
          },
        },
      ],
    };
  },
  components: {
    hkHeader,
  },
  watch: {
    $route: {
      handler(newV) {
        // console.log(newV);
        // if (newV.path == "/") {
        //   this.$router.push("/index");
        // }
      },
    },
  },
  created() {
    // if (this.$route.path == "/") {
    //   this.$router.push("/index");
    // }
  },
  methods: {
    onChange(e) {
      console.log(e);
      this.active = e;
      //获取登录信息并判断是否为登录状态----未登录
      let userInfo = JSON.parse(window.sessionStorage.getItem("userInfo"));
      if (userInfo == null) {
        userInfo = {};
        userInfo.success = false;
      }
      if (!userInfo.success) {
        //未登录成功
        // window.location.href = "/login";
      }
    },
  },
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
#app {
  background: #fff;
}
/deep/.van-tabbar {
  height: 6.4rem;
}
/deep/.van-tabbar-item--active {
  .van-tabbar-item__text {
    font-size: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 5.5rem;
  }
}
.van-tabbar-item {
  font-size: 1.6rem;
  font-weight: 400;
}
.ac_tab {
  font-size: 2.4rem;
  color: #00349c;
  height: 2rem;
  width: 100%;
  text-align: center;
}
.de_tab {
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
  height: 2rem;
  width: 100%;
  text-align: center;
}
/deep/.van-tabbar-item__icon img,
/deep/.van-tabbar-item__text img {
  width: 5rem;
  height: 3rem;
  margin: 0px auto;
  object-fit: contain;
}
</style>
