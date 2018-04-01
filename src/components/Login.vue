<template>
  <div>
    <el-row>

      <el-col :xs="20" :sm="15" :md="8" :lg="8" xl="5">

        <el-form :label-position="right" label-width="100px">

          <el-form-item label="用户名">
            <el-input
              placeholder="请输入学号或职工号"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input
              placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-col :xs="10" :lg="10" :xl="7">
              <el-input
                placeholder="验证码"></el-input>
            </el-col>
            <el-col :xs="14" :lg="10" :xl="7">
              <img style="height: 40px" src="http://202.207.177.24/aexp/ValidateImage?t=0.43446734709949575" alt="验证码"/>
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-radio v-model="radio" label="1">学生</el-radio>
            <el-radio v-model="radio" label="2">教师</el-radio>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>

        </el-form>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  import ElForm from "../../node_modules/element-ui/packages/form/src/form.vue";
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";
  import ElRadioGroup from "../../node_modules/element-ui/packages/radio/src/radio-group.vue";
  import ElRadio from "../../node_modules/element-ui/packages/radio/src/radio.vue";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {
      ElButton,
      ElRadio,
      ElRadioGroup,
      ElFormItem,
      ElForm
    },
    data () {
      return {
        radio: '1'
      };
    },
    methods: {
      onSubmit: function () {
        console.log('submit');
      }
    }

  }
</script>

<style scoped>

</style>
