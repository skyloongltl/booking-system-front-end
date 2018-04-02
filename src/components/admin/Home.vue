<template>
  <div>
    <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside width="200px"><admin-nav :currentIndex="index"></admin-nav></el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import AdminNav from '../base/AdminNav.vue'

  export default {
    components: {
      AdminNav
    },
    data () {
      return {
        index: '1-1'
      }
    }
  }
</script>
