<template>
  <a-row :gutter="16">
    <a-col class="gutter-row" :span="6">
      <div class="gutter-box">
        <a-input-search
          placeholder="楼盘名称,业主手机号,房源编号"
          style="width: 250px"
        />
      </div>
    </a-col>
    <a-col class="gutter-row" :span="18">
      <div class="gutter-box" style="text-align: right">
        <a-button type="dashed">公盘</a-button>
        <a-button type="dashed">个人</a-button>
        <a-button type="dashed">VR房源</a-button>
        <a-button type="dashed">待发布</a-button>
        <a-button type="dashed">已发布</a-button>
        <a-button type="dashed">待审核</a-button>
        <a-button type="dashed">锁定</a-button>
        <a-button type="dashed">我的置顶</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { Row, Col, Button, Input } from "ant-design-vue";

export default {
  name: "SearchButton",
  components: {
    ARow: Row,
    ACol: Col,
    AButton: Button,
    AInputSearch: Input.Search,
  },
};
</script>

<style lang="less" scoped>
.gutter-box {
  button {
    margin: 0 2px;
  }
}
/* 扩展ant design pro按钮组件颜色 */
.button-color-dust {
  background-color: #f5222d;
  border-color: #f5222d;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #ff4d4f;
    border-color: #ff4d4f;
  }

  &:active,
  &.active {
    background-color: #cf1322;
    border-color: #cf1322;
  }
}

.button-color-volcano {
  background-color: #fa541c;
  border-color: #fa541c;

  &:hover,
  &:focus {
    background-color: #ff7a45;
    border-color: #ff7a45;
  }

  &:active,
  &.active {
    background-color: #d4380d;
    border-color: #d4380d;
  }
}

.button-color-sunset {
  background-color: #faad14;
  border-color: #faad14;

  &:hover,
  &:focus {
    background-color: #ffc53d;
    border-color: #ffc53d;
  }

  &:active,
  &.active {
    background-color: #d48806;
    border-color: #d48806;
  }
}

.button-color-cyan {
  background-color: #13c2c2;
  border-color: #13c2c2;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #36cfc9;
    border-color: #36cfc9;
  }

  &:active,
  &.active {
    background-color: #08979c;
    border-color: #08979c;
  }
}

.button-color-green {
  background-color: #52c41a;
  border-color: #52c41a;

  &:hover,
  &:focus {
    background-color: #73d13d;
    border-color: #73d13d;
  }

  &:active,
  &.active {
    background-color: #389e0d;
    border-color: #389e0d;
  }
}

.button-color-daybreak {
  background-color: #1890ff;
  border-color: #1890ff;

  &:hover,
  &:focus {
    background-color: #096dd9;
    border-color: #096dd9;
  }

  &:active,
  &.active {
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
}

.button-color-geekblue {
  background-color: #2f54eb;
  border-color: #2f54eb;

  &:hover,
  &:focus {
    background-color: #1d39c4;
    border-color: #1d39c4;
  }

  &:active,
  &.active {
    background-color: #597ef7;
    border-color: #597ef7;
  }
}

.button-color-purple {
  background-color: #722ed1;
  border-color: #722ed1;

  &:hover,
  &:focus {
    background-color: #9254de;
    border-color: #9254de;
  }

  &:active,
  &.active {
    background-color: #531dab;
    border-color: #531dab;
  }
}
</style>