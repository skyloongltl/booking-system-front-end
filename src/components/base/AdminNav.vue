<template>
  <div>
    <el-button
      v-on:click="collapse"
      type="primary"
      :icon="icon_d_arrow">
    </el-button>
    <el-menu
             class="el-menu-vertical"
             :default-active="activeIndex"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             style="text-align: left">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">学生</span>
        </template>
        <el-menu-item index="1-1">学生信息列表</el-menu-item>
        <el-menu-item index="1-2">学生信息录入</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">教师</span>
        </template>
        <el-menu-item index="2-1">教师信息列表</el-menu-item>
        <el-menu-item index="2-2">教师信息录入</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">实验室</span>
        </template>
        <el-menu-item index="3-1">实验室信息列表</el-menu-item>
        <el-menu-item index="3-2">实验室信息录入</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">实验</span>
        </template>
        <el-menu-item index="4-1">实验信息列表</el-menu-item>
        <el-menu-item index="4-2">实验信息录入</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">公告</span>
        </template>
        <el-menu-item index="5-1">公告列表</el-menu-item>
        <el-menu-item index="5-2">发表公告</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">网站设置</span>
        </template>
        <el-menu-item index="6-1">网站信息</el-menu-item>
        <el-menu-item index="6-2">网站信息修改</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

  export default {
    props: {
      currentIndex: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        activeIndex: this.currentIndex,
        isCollapse: true,
        icon_d_arrow: 'el-icon-d-arrow-right'
      };
    },
    methods: {
      collapse: function () {
        this.isCollapse = !this.isCollapse;
        if(this.isCollapse === true)
        {
          this.icon_d_arrow = 'el-icon-d-arrow-right'
        } else if(this.isCollapse === false) {
          this.icon_d_arrow = 'el-icon-d-arrow-left'
        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu {
    border-right: none;
  }
</style>
