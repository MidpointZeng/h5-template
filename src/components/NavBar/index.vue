<template>
  <van-nav-bar
    v-if="!isWx"
    fixed
    placeholder
    z-index="1000"
    left-arrow
    :title="getNavTitle"
    @click-left="$router.go(-1)"
  />
</template>

<script>
import { isWechat } from "@/utils";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isWx: isWechat,
    };
  },
  computed: {
    getNavTitle() {
      return this.title || this.$route.meta?.title;
    },
  },
};
</script>
