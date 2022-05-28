<template>
  <div>
    <!-- 页面主体 -->
    <div id="container">
      <div id="main">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>投诉报修</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="getOrder">返回</el-button>
          </div>
          <el-form ref="form" :model="form" label-width="100px" style="width:430px;margin:50px 0px 0px 30%">
            <el-form-item label="类型选择:">
              <el-radio-group v-model="form.resource">
                <el-radio label="投诉"></el-radio>
                <el-radio label="报修"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="填写具体内容:"  style="margin-top:30px;" class="inputss">
              <el-input type="textarea" v-model="form.desc"  ></el-input>
            </el-form-item>
            <el-form-item style="margin-top:40px">
              <el-button type="primary" @click="onSubmit">确认提交</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
          resource: '',
          desc: ''
        }
    };
  },
  methods: {
    getOrder() {
      this.$router.push({ name: "order" });
    },
    onSubmit(){
this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
#main {
  width: 1210px;
  /* height: 500px; */
  /* background-color: rgb(139, 137, 137); */
  margin: auto;
}
.text {
  font-size: 14px;
}

.my-content {
  background: #fde2e2;
}
.my-contentt {
  background: #e1f3d8;
}
.my-contentts {
  background: #409eff;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin-top: 30px;
  width: 1210px;
}
.el-form-item__label{
  width: 140px !important;
    font-size: 20px;
}
.el-radio__label{
      font-size: 20px;
}
.el-textarea__inner {
  height: 200px;
}
/* .inputss{
  width: 140px;
} */
</style>