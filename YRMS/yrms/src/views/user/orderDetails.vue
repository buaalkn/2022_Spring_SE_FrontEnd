<template>
    <div>
        <!-- 页面主体 -->
        <div id="container">
            <div id="main">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>订单明细</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="getOrder">返回</el-button>
                    </div>
                    <div v-for="(item, index) in this.orderss" :key="index">
                        <el-descriptions title="" direction="vertical" :column="4" border="">
                            <el-descriptions-item
                                label="订单编号"
                                content-class-name="my-content"
                            >{{item.orderNum}}</el-descriptions-item>
                            <el-descriptions-item
                                label="用户编号"
                                content-class-name="my-contentt"
                            >{{item.userNum}}</el-descriptions-item>
                            <el-descriptions-item
                                label="房间编号"
                                content-class-name="my-contentts"
                                :span="2"
                            >{{item.roomNum}}</el-descriptions-item>
                            <el-descriptions-item label="开始时间">{{item.beginTime}}</el-descriptions-item>
                            <el-descriptions-item label="结束时间">{{item.endTime}}</el-descriptions-item>
                            <el-descriptions-item label="定金">
                                <el-tag size="small">{{item.monrey}}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="租凭时长(day)">{{item.day}}</el-descriptions-item>
                        </el-descriptions>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      orderss: [
        {
          orderNum: 'A15515s15c156',
          userNum: 'B23141231C',
          roomNum: 'A888',
          beginTime: "2022-05-20",
          endTime: "2022-05-25",
          monrey: "615",
          day: "22"
        }
      ]
    };
  },
  methods: {
    getOrder() {
      this.$router.push({ name: "order"});
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
</style>