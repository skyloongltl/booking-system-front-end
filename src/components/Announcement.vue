<template>
  <div>
    <el-container>
      <el-header>
        <Nav :currentIndex="index"></Nav>
      </el-header>
      <el-main>
        <el-collapse accordion>
          <template v-for="announcement in announcements">
            <el-collapse-item :title="announcement.title" :name="announcement.id">
              {{ announcement.content }}
            </el-collapse-item>
          </template>
        </el-collapse>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import Nav from './base/Nav.vue'
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
  import ElHeader from "../../node_modules/element-ui/packages/header/src/main.vue";
  import ElMain from "../../node_modules/element-ui/packages/main/src/main.vue";
  import ElFooter from "../../node_modules/element-ui/packages/footer/src/main.vue";
  import ElCollapseItem from "../../node_modules/element-ui/packages/collapse/src/collapse-item.vue";

  export  default {
    components: {
      ElCollapseItem,
      ElFooter,
      ElMain,
      ElHeader,
      ElContainer,
      Nav
    },
    data () {
      return {
        index: '4',
        announcements: [{
          id: '1',
          title: '三月三实验选择公告',
          content: '恭喜“乐观家族”成员丁酷睿先生喜提劳斯莱斯，酷睿先生加入微商三个月，通过自己的努力' +
          '喜提爱车，微信新男性，左手事业，右手家庭。他热情大方、青春洋溢，买部高级车，就是为了让乐观家族的成员们' +
          '都能有车坐！'
        },{
            id: '2',
            title: '四月一实验选择公告',
            content: '恭喜“乐观家族”成员丁酷睿先生喜提劳斯莱斯，酷睿先生加入微商三个月，通过自己的努力' +
            '喜提爱车，微信新男性，左手事业，右手家庭。他热情大方、青春洋溢，买部高级车，就是为了让乐观家族的成员们' +
            '都能有车坐！'
        },{
          id: '3',
          title: '五月一实验选择公告',
          content: '恭喜“乐观家族”成员丁酷睿先生喜提劳斯莱斯，酷睿先生加入微商三个月，通过自己的努力' +
          '喜提爱车，微信新男性，左手事业，右手家庭。他热情大方、青春洋溢，买部高级车，就是为了让乐观家族的成员们' +
          '都能有车坐！'
        },{
          id: '4',
          title: '六月一实验选择公告',
          content: '恭喜“乐观家族”成员丁酷睿先生喜提劳斯莱斯，酷睿先生加入微商三个月，通过自己的努力' +
          '喜提爱车，微信新男性，左手事业，右手家庭。他热情大方、青春洋溢，买部高级车，就是为了让乐观家族的成员们' +
          '都能有车坐！'
        },{
          id: '5',
          title: '七月七实验选择公告',
          content: '恭喜“乐观家族”成员丁酷睿先生喜提劳斯莱斯，酷睿先生加入微商三个月，通过自己的努力' +
          '喜提爱车，微信新男性，左手事业，右手家庭。他热情大方、青春洋溢，买部高级车，就是为了让乐观家族的成员们' +
          '都能有车坐！'
        },]
      }
    }
  }
</script>
