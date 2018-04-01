<template>
  <div>
      <el-menu :default-active="activeIndex"
               backgroundColor="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               mode="horizontal"
               router="true">
        <el-col class="hidden-xs-only" :sm="4" :md="2" :lg="2">&nbsp;</el-col>

        <el-col :class="{ ex_active: isActive_1}" :xs="4" :sm="2" :md="2" :lg="2" :xl="1">
          <template v-if="user === 'student'">
            <el-menu-item :route="route.student[0]" index="1">首页</el-menu-item>
          </template>
          <template v-else-if="user === 'teacher'">
            <el-menu-item :route="route.teacher[0]" index="1">首页</el-menu-item>
          </template>
        </el-col>

        <el-col :class="{ ex_active: isActive_2 }" :xs="6" :sm="3" :md="2" :lg="2" :xl="2">
          <template v-if="user === 'student'">
            <el-menu-item :route="route.student[1]" index="2">个人中心</el-menu-item>
          </template>
          <template v-else-if="user === 'teacher'">
            <el-menu-item :route="route.teacher[1]" index="2">个人中心</el-menu-item>
          </template>
        </el-col>

        <el-col :class="{ ex_active: isActive_3 }" :xs="6" :sm="3" :md="2" :lg="2" :xl="2">
          <template v-if="user === 'student'">
            <el-menu-item :route="route.student[2]" index="3">已选实验</el-menu-item>
          </template>
          <template v-else-if="user === 'teacher'">
            <el-menu-item :route="route.teacher[2]" index="3">已选实验</el-menu-item>
          </template>
        </el-col>

        <el-col :class="{ ex_active: isActive_4 }" :xs="4" :sm="2" :md="2" :lg="2" :xl="1">
          <el-menu-item :route="route.student[3]" index="4">公告</el-menu-item>
        </el-col>
      </el-menu>
  </div>
</template>

<script>
  import ElSubmenu from "../../../node_modules/element-ui/packages/menu/src/submenu.vue";
  import ElMenu from "../../../node_modules/element-ui/packages/menu/src/menu.vue";

  export default {
    components: {
      ElMenu,
      ElSubmenu
    },
    props: {
      currentIndex: {
        type: String,
        required: true,
        default: '1'
      },
      user: {
        type: String,
        required: true,
        default: 'student'
      }
    },
    data() {
      return {
        activeIndex: this.currentIndex,
        isActive_1: false,
        isActive_2: false,
        isActive_3: false,
        isActive_4: false,
        route: {
          student: [
            'home',
            'information',
            'selected'
          ],
          teacher: [
            't_home',
            't_information',
            't_selected'
          ],
          common: 'announcement'
        },
      };
    },
    created () {
      this.setIsActive()
    },
    methods: {
      setIsActive: function () {
        switch (this.currentIndex){
          case '1':
            this.isActive_1 = true;
            break;
          case '2':
            this.isActive_2 = true;
            break;
          case '3':
            this.isActive_3 = true;
            break;
          case '4':
            this.isActive_4 = true;
            break;
          default:
            this.isActive_1 = true;
        }
      }
    }
  }
</script>

<style scoped>
  @import 'element-ui/lib/theme-chalk/display.css';
  .ex_active {
    border-bottom: 2px solid rgb(255, 208, 75);
  }
</style>
