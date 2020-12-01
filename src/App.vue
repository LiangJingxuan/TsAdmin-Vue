<template>
  <div id="app">
    <a-config-provider :locale="zh_CN">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import { ConfigProvider } from "ant-design-vue";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

export default {
  name: "App",
  components: {
    AConfigProvider: ConfigProvider,
  },
  data() {
    return {
      zh_CN,
    };
  },
};
</script>

<style lang="less">
@import url("assets/css/normalize.css");
</style>
