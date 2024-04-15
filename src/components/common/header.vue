<template>
  <div
    class="titlebar_navBar__weODp"
    style="background-color: rgb(62, 62, 62); color: white; z-index: 9999"
  >
    <div class="titlebar_goBackArrow__RbSSg"></div>
    <div class="titlebar_navBarTitle__2b_w-">
      <img
        alt=""
        src="/static/logo.png"
        class="app_logo__34wFj app_logo__2SU77"
      />
      ファイナンス
    </div>
    <span class="titlebar_moreButton__2ynuX"> </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.titlebar_navBar__weODp {
  top: 0;
  padding-top: 10px;
  padding-bottom: 3px;
  background-color: #496a6a;
  border-bottom: 4px solid tomato;
  color: #fff;
  display: grid;
  grid-gap: 0;
  gap: 0;
  grid-template-areas: "back title more";
  grid-template-rows: 1.3em;
  grid-template-columns: 1fr calc(100% - 6em) 1fr;
  height: 2em;
  width: 100%;
  position: fixed;
  height: 40px;
}

.titlebar_goBackArrow__RbSSg {
  grid-area: back;
  text-align: left;
  white-space: nowrap;
}

.titlebar_navBarTitle__2b_w- {
  font-size: 1.3em;
  grid-area: title;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.titlebar_moreButton__2ynuX {
  font-weight: 700;
  grid-area: more;
  text-align: right;
}

.titlebar_bottomGap__1JRti {
  height: calc(2em + 5px);
}
.app_logo__2SU77 {
  height: calc(100% - 3px);
  width: auto;
  margin-bottom: 3px;
}
</style>
