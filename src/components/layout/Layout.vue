<template>
  <a-layout id="layout">
    <a-layout-header class="layout_header">
      <a-row type="flex">
        <a-col :flex="2">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <span style="font-size: 18px;">兴商 TS系统</span>
        </a-col>
        <a-col :flex="22">
          <!-- <theme /> -->
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        class="layout_sider"
        v-model="collapsed"
        :trigger="null"
        collapsible
      >
        <a-menu
          class="layout_menu"
          mode="inline"
          :default-selected-keys="['1']"
        >
          <a-menu-item key="1">
            <a-icon type="home" theme="filled" />
            <span>home首页</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="account-book" theme="filled" />
            <span>出租房源</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Layout, Menu, Icon, Button, Row, Col } from "ant-design-vue";
import Theme from "../theme/Theme";

export default {
  components: {
    ALayout: Layout,
    ALayoutSider: Layout.Sider,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AIcon: Icon,
    AButton: Button,
    ARow: Row,
    ACol: Col,

    Theme,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style lang="less">
#layout {
  height: 100vh;
  .trigger {
    font-size: 21px;
    line-height: 50px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #ccc;
    }
  }
  .layout_header {
    height: 50px;
    padding: 0;
    line-height: 50px;
    background-color: #e2323f;
    color: #fff;
  }
  .layout_sider {
    background-color: #262524;
    .layout_menu {
      background-color: #262524;
      color: #fff;
      margin-top: 40px;
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: #313131;
      color: #fff;
    }
    .ant-menu-item {
      color: #8b9199;
    }
    .ant-menu-inline,
    .ant-menu-vertical,
    .ant-menu-vertical-left {
      border: none;
    }
  }
}
</style>