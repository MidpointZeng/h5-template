import Vue from "vue";
import VueRouter from "vue-router";

import {
  beforeEach,
  afterEach,
  beforeResolve
} from "./hook";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: () => import( /* webpackChunkName: "login" */ "../views/Index"),
    meta: {
      title: "官网",
      keepAlive: false,
    },
  },

];

const router = new VueRouter({
  // mode: 'history',
  // base: "https://api.yourdomain.com", // 这里可以根据环境变量来设置
  routes,
});

router.beforeEach(beforeEach);
router.beforeResolve(beforeResolve);
router.afterEach(afterEach);

export default router;