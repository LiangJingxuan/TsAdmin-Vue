<template>
  <a-card title="住宅房源" :bordered="false">
    <search-button />
    <search-list />
    <search-form />
  </a-card>
</template>

<script>
import { Button, Row, Col, Card, Form, Input, Icon } from "ant-design-vue";
import SearchButton from './components/SearchButton'
import SearchList from './components/SearchList'
import SearchForm from './components/SearchForm'

export default {
  components: {
    AButton: Button,
    ARow: Row,
    ACol: Col,
    ACard: Card,
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AIcon: Icon,
    AInputSearch: Input.Search,

    SearchButton,
    SearchList,
    SearchForm,
  },
};
</script>

<style lang="less" scoped>

</style>