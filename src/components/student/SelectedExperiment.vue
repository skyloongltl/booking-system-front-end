<template>
  <div>
    <el-container>
      <el-header>
        <Nav :currentIndex="index" user="student"></Nav>
      </el-header>
      <el-main>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="实验"
            align="left">
          </el-table-column>
          <el-table-column
            prop="date"
            label="实验日期"
            align="left">
          </el-table-column>
          <el-table-column
            prop="teacher"
            label="实验老师"
            align="left">
          </el-table-column>
          <el-table-column
            prop="quotas"
            label="名额"
            align="left">
          </el-table-column>
          <el-table-column
            prop="remaining_quotas"
            label="剩余名额"
            align="left">
          </el-table-column>
          <el-table-column label="操作" align="left">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="cancelBooking()">
                取消预约
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

  export default {
    components: {
      Nav
    },
    data () {
      return {
        index: '3',
        tableData: [{
          name: '光学实验',
          date: '2016-05-03',
          teacher: '丁老师',
          quotas: '50',
          remaining_quotas: '10'
        },{
          name: '光学实验',
          date: '2016-05-03',
          teacher: '丁老师',
          quotas: '50',
          remaining_quotas: '10'
        },{
          name: '光学实验',
          date: '2016-05-03',
          teacher: '丁老师',
          quotas: '50',
          remaining_quotas: '10'
        }]
      }
    },
    methods: {
      cancelBooking () {
        console.log('取消预约成功')
      }
    }
  }
</script>
