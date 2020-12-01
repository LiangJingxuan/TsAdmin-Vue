<template>
  <div>
    <a-button icon="setting" @click="showDrawer">主题设置</a-button>
    <a-drawer
      title="主题设置"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <a-row :gutter="[16, 16]">
        <a-col :span="8"><a-button type="danger">红色</a-button></a-col>
        <a-col :span="8"><a-button type="primary">蓝色</a-button></a-col>
        <a-col :span="8"><a-button type="dashed">白色</a-button></a-col>
      </a-row>
    </a-drawer>
  </div>
</template>

<script>
import { Button, Drawer, Row, Col } from "ant-design-vue";

export default {
  name: "Theme",
  data() {
    return {
      visible: false,
    };
  },
  components: {
    AButton: Button,
    ADrawer: Drawer,
    ARow: Row,
    ACol: Col,
  },
  methods: {
    afterVisibleChange(val) {
      // console.log("visible", val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style>
</style>