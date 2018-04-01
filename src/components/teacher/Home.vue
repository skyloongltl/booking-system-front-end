<template>
  <div>
    <el-container>
      <el-header>
        <Nav :currentIndex="index" user="teacher"></Nav>
      </el-header>
      <el-main>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="实验名称"
            align="left">
          </el-table-column>
          <el-table-column
            prop="date"
            label="实验日期"
            align="left">
          </el-table-column>
          <el-table-column
            prop="introduction"
            label="实验简介"
            align="left">
          </el-table-column>
          <el-table-column label="操作" align="left">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleBooking()">
                预约
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <br>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import Nav from '../base/Nav.vue'
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
    data () {
      return {
        index: '1',
        tableData: [{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },{
          name: '光学实验',
          date: '2016-05-03',
          introduction: '这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，这是一个很难的实验，'
        },]
      }
    },
    methods: {
      handleBooking () {
        console.log('预约成功')
      }
    }
  }
</script>
