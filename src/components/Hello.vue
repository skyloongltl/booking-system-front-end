<template>
  <div class="hello">
    <h1>Hello, Larvuent!</h1>
    <el-button @click="visible = true">按钮</el-button>
    <el-dialog :visible.sync="visible">
      <p>欢迎使用 Element</p>
    </el-dialog>
  </div>
</template>

<script>
  import { test } from '../components/axios/api';
  export default {
    data() {
      return {
        visible: false
      }
    },
    created() {
      test('18434364576')
        .then(response => {
          console.log(response, '请求成功');
        })
        .catch(error => {
          console.log(error, '请求失败');
        })
    }
  }
</script>

<style scoped>
  .hello {
    font-size: 2em;
    color: green;
  }
</style>
