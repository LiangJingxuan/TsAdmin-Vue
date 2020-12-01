<template>
  <a-form id="search_form">
    <a-form-item style="margin: 0">
      <a-row :gutter="24">
        <a-col :span="2">录入信息: </a-col>
        <a-col :span="7">
          <a-select placeholder="录入部门">
            <a-select-option value="信息管理中心">信息管理中心</a-select-option>
            <a-select-option value="财务中心">财务中心</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="5">
          <a-select placeholder="录入人员">
            <a-select-option value="梁景轩">梁景轩</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="3">
          <a-select placeholder="日期类型">
            <a-select-option value="委托日期">委托日期</a-select-option>
            <a-select-option value="录入日期">录入日期</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="5">
          <a-range-picker />
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item style="margin: 0">
      <a-row :gutter="24">
        <a-col :span="2">楼盘信息: </a-col>
        <a-col :span="5">
          <a-select placeholder="区域" show-search>
            <a-select-option value="大兴">大兴</a-select-option>
            <a-select-option value="昌平">昌平</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="5">
          <a-select placeholder="楼盘">
            <a-select-option value="信息管理中心">信息管理中心</a-select-option>
            <a-select-option value="财务中心">财务中心</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="5">
          <a-select placeholder="单元">
            <a-select-option value="梁景轩">梁景轩</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="5">
          <a-select placeholder="房号">
            <a-select-option value="梁景轩">梁景轩</a-select-option>
          </a-select>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item>
      <a-row :gutter="24">
        <a-col :span="2">排序: </a-col>
        <a-col :span="5">
          
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">筛选</a-button>
      <a-button type="" html-type="reset">清除</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Row,
  Col,
} from "ant-design-vue";

export default {
  name: "SearchForm",
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
    ASelect: Select,
    ASelectOption: Select.Option,
    ARangePicker: DatePicker.RangePicker,
    ARow: Row,
    ACol: Col,
  },
};
</script>

<style lang="less">
</style>