<template>
  <div>
    <div id="search_list" ref="search_list">
      <p v-for="(d,key) in rent" :key="d.tag">
        <span>{{d.tag}}: </span>
        <ul v-for="(i,index) in d.list" :key="i">
          <li v-if="i!=='!'" :class="d.isactive===index ? 'active' : ''" @click="activeItem(key, index)">{{i}}</li>
        </ul>
      </p>
    </div>
    <a-divider orientation="right">
      <span class="divider" @click="open">{{divider.title}}</span>
    </a-divider>
    </div>
</template>

<script>
import { Input, Button, Divider } from "ant-design-vue";

export default {
  name: "SearchList",
  components: {
    AInput: Input,
    AButton: Button,
    ADivider: Divider,
  },
  data() {
    return {
      rent: [
        {
          isactive: 0,
          tag: "用途",
          list: [
            "不限",
            "住宅",
            "别墅",
            "商铺",
            "写字楼",
            "商住楼",
            "车位",
            "地下室",
          ],
        },
        {
          isactive: 0,
          tag: "状态",
          list: ["不限", "可租", "已租", "被租", "无效"],
        },
        { isactive: 0, tag: "钥匙", list: ["不限", "有", "无"] },
        {
          isactive: 0,
          tag: "户型",
          list: ["不限", "一室", "二室", "三室", "四室", "五室及以上"],
        },
        { isactive: 0, tag: "付款", list: ["不限", "月付", "季付", "年付"] },
        { isactive: 0, tag: "租赁", list: ["不限", "整租", "合租"] },
        {
          isactive: 0,
          tag: "朝向",
          list: [
            "不限",
            "东",
            "西",
            "南",
            "北",
            "东西",
            "东南",
            "东北",
            "西南",
            "西北",
            "南北",
          ],
        },
        {
          isactive: 0,
          tag: "租价",
          list: [
            "不限",
            "1-1500元",
            "1500-2500元",
            "2500-3500元",
            "3500-4500元",
            "4500-5500元",
            "5500-6500元",
            "6500元以上",
            "!",
          ],
        },
        {
          isactive: 0,
          tag: "面积",
          list: [
            "不限",
            "1-50平",
            "50-70平",
            "70-90平",
            "90-120平",
            "120-150平",
            "150-200平",
            "200-300平",
            "300-400平",
            "400平以上",
            "!",
          ],
        },
      ],
      sell: [],
      divider: {
        flag: false,
        title: "更多选项",
      },
    };
  },
  methods: {
    activeItem(key, index) {
      this.rent[key].isactive = index;
    },
    open() {
      this.divider.flag = !this.divider.flag;
      let list = this.$refs.search_list;
      if (this.divider.flag) {
        list.style.height = "310px";
        this.divider.title = "收起选项";
      } else {
        list.style.height = "72px";
        this.divider.title = "更多选项";
      }
    },
  },
};
</script>
<style lang="less" scoped>
#search_list {
  margin-top: 30px;
  overflow: hidden;
  height: 72px;
  transition: all 0.3s;
  p {
    display: flex;
    font-weight: bold;
    margin-bottom: 15px;
    li {
      cursor: pointer;
      list-style: none;
      flex: 1;
      float: left;
      margin: 0 5px;
      padding: 0 8px;
    }
    .active {
      background: #e2323f;
      color: #fff;
      border-radius: 15px;
      -moz-border-radius: 15px;
      -webkit-border-radius: 15px;
    }
  }
}
.divider {
  cursor: pointer;
}
</style>