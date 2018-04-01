<template>
  <div>
    <el-container>
      <el-header>
        <Nav :currentIndex="index" user="student"></Nav>
      </el-header>
      <el-main>
        <el-card>
          <div>
            修改密码
          </div>
        </el-card>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import Nav from '../base/Nav.vue';
  import ElContainer from "../../../node_modules/element-ui/packages/container/src/main.vue";
  import ElHeader from "../../../node_modules/element-ui/packages/header/src/main.vue";
  import ElMain from "../../../node_modules/element-ui/packages/main/src/main.vue";
  import ElFooter from "../../../node_modules/element-ui/packages/footer/src/main.vue";

  export default {
    components: {
      ElFooter,
      ElMain,
      ElHeader,
      ElContainer,
      Nav
    },
    data() {
      return {
        index: '2'
      }
    }
  }
</script>

<style scoped>

</style>
