<template>
  <div>
    <div id="detail_content">
      <!-- 标题 -->
      <div id="detail_title">
        <span>{{ orderDetail.rentalType }}租·</span>
        <span>{{ orderDetail.name }}</span>
        <pre></pre>
        <span>{{ orderDetail.num }}人间</span>
        <!-- <a>
          <router-link to="/rental" id="detail_back">返回首页</router-link>
        </a> -->
      </div>
      <!-- 核心内容 -->
      <div id="detail_core">
        <!-- 图片 -->
        <img id="core_img" :src="orderDetail.img" />
        <!-- 内容 -->
        <div id="core_text">
          <!-- 价格 -->
          <div id="core_price">
            <span>{{ orderDetail.price }}</span>
            元/月
          </div>
          <!-- 信息列表 -->
          <ul class="core_list">
            <li>
              <span>租赁方式： </span>
              {{ orderDetail.rentalType }}租
            </li>
            <li>
              <span>房屋位置： </span>
              {{ orderDetail.location }}
            </li>
            <li>
              <span>房屋类型： </span>
              {{ orderDetail.num }}人间
            </li>
            <li>
              <span>房屋大小： </span>
              {{ orderDetail.area }}㎡
            </li>
          </ul>
          <ul class="core_list">
            <li>
              <span>开始日期：</span>
              {{ orderDetail.start_date }}
            </li>
            <li>
              <span>结束日期：</span>
              {{ orderDetail.end_date }}
            </li>
          </ul>
          <ul class="core_list" id="end_core_list">
            <li>
              <span>订单编号：</span>
              {{ orderDetail.order_id }}
            </li>
          </ul>
          <!-- 租房选项 -->
          <!-- <button id="core_button" @click="beginRenting">我要租房</button> -->
        </div>
      </div>
      <!-- 按钮 -->
      <div id="detail_buttons">
        <router-link :to="`/rentalDetail/${orderDetail.room_id}`">
          <button id="btn_detail">租房详情</button>
        </router-link>
        <button
          id="btn_continue"
          v-if="orderDetail.rentalType === '长'"
          @click="contiOrder"
        >
          我要续租
        </button>
        <button id="btn_dele" @click="deleOrder">删除订单</button>
      </div>
      <!-- 续租 -->
      <div id="renting" v-if="this.isConti === 1">
        <div id="input_day">
          <span> 输入续租天数： </span>
          <span>
            <input
              type="text"
              id="rent_input"
              v-model="continueParams.length"
            />
          </span>
        </div>
        <button id="pay_button" @click="confirmContinue">
          <div>确认续租</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //删除订单
      deleParams: {
        user_id: 0,
        order_id: 0,
      },
      //续约订单
      continueParams: {
        user_id: 0,
        order_id: 0,
        length: "",
      },
      //是否点击续约，用于显示输入框
      isConti: 0,
    };
  },
  mounted() {
    this.$store.dispatch("getOrderDetail", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["orderDetail"]),
    ...mapGetters(["deleteOrder"]),
    ...mapGetters(["continueOrder"]),
  },
  methods: {
    //删除订单
    deleOrder() {
      let r = confirm("确定删除该订单？");
      if (r == true) {
        this.deleParams.user_id = this.orderDetail.user_id;
        this.deleParams.order_id = this.orderDetail.order_id;
        this.$store.dispatch("deleteOrder", this.deleParams);
        // console.log(this.$store.getters.isDelete.isDele);
        if (this.$store.getters.isDelete.isDele) {
          alert("删除成功！");
          this.$router.push({
            name: "order",
            // params: { keyword: "" },
          });
        } else {
          alert("删除失败！");
        }
      }
    },
    //续约订单
    contiOrder() {
      this.isConti = 1;
    },
    confirmContinue() {
      this.continueParams.user_id = this.orderDetail.user_id;
      this.continueParams.order_id = this.orderDetail.order_id;
      if (this.continueParams.length) {
        this.$store.dispatch("continueOrder", this.continueParams);
        alert("续租成功！")
        this.$router.push({
          name: "order",
        //   params: { keyword: "" },
        });
      } else {
        alert("输入天数为空！");
      }
    },
  },
};
</script>

<style>
#detail_content {
  width: 1150px;
  position: relative;
  margin: auto;
}
#detail_title {
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 5px;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #101d37;
}
#detail_back {
  float: right;
  position: absolute;
  right: 0;
  bottom: 18px;
  font-size: 16px;
  font-weight: 500;
  color: rgb(107, 107, 107);
}
#detail_core {
  padding-top: 30px;
  width: 100%;
}
#core_img {
  width: 565px;
  height: 319px;
  float: left;
  position: relative;
  overflow: hidden;
}
#core_text {
  width: 565px;
  height: 319px;
  border: 1px solid #caccd3;
  padding: 17px 30px 0;
  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
  float: right;
}
#core_price {
  font-size: 16px;
  color: #fa5741;
  margin-bottom: 10px;
  padding-bottom: 10px;
  text-align: left;
  border-bottom: 1px solid #e4e6f0;
}
#core_price > span {
  font-size: 34px;
  font-weight: 700;
  margin-right: 4px;
  line-height: 42px;
  font-family: 微软雅黑;
}
.core_list {
  padding-top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e4e6f0;
  max-height: 170px;
  overflow: initial;
  /* width: 565px; */
  list-style: none;
  text-align: left;
}
#end_core_list {
  border-bottom: none;
}
.core_list > li {
  position: relative;
  overflow: visible;
  overflow: initial;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 10px;
  color: #101d37;
}
.core_list > li > span {
  color: #9399a5;
}
#core_button {
  font-size: 24px;
  font-weight: 600;
  /* position: absolute; */
  /* vertical-align: baseline; */
  /* left: 0; */
  /* bottom: 0; */
  background-color: #0f73d1;
  width: 130px;
  height: 50px;
  float: left;
  border: 0;
  border-radius: 13px;
  margin-top: 30px;
  cursor: pointer;
  text-align: center;
  color: #fff;
}
#bottom {
  width: 1150px;
  margin: auto;
}
#renting {
  width: 565px;
  height: 50px;
  float: right;
  background-color: rgb(158, 157, 157);
  margin-top: 20px;
  border: 1px solid #caccd3;
  background-color: rgb(250, 250, 250);
}
#input_day {
  float: left;
  margin-top: 5px;
  margin-left: 10px;
  font-family: 微软雅黑;
  font-size: 14px;
  font-weight: 600;
}
#rent_input {
  border-color: transparent;
  /* Take available width */
  width: 50px;
  height: 20px;
  /* float: left; */
  /* padding-left: 20px; */
  font-size: 20px;
  border-radius: 8px;
  outline: medium;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  border: 1px solid #caccd3;
}
#pay_button {
  width: 500px;
  height: 60px;
  float: right;
  font-size: 15px;
  font-weight: 600;
  /* background-color: #f18832; */
  width: 130px;
  height: 45px;
  border: 0;
  border-radius: 3px;
  margin-top: 2px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #caccd3;
  background-color: #e8f0fe;
  color: #3072f6;
}
#detail_buttons {
  width: 500px;
  height: 60px;
  float: left;
  margin-top: 20px;
  /* background-color: rgb(102, 96, 96); */
}
#detail_buttons > button {
  float: left;
  font-size: 15px;
  font-weight: 600;
  /* background-color: #f18832; */
  width: 130px;
  height: 45px;
  border: 0;
  border-radius: 3px;
  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #caccd3;
  /* color: #fff; */
}
#btn_detail {
  float: left;
  font-size: 15px;
  font-weight: 600;
  /* background-color: #f18832; */
  width: 130px;
  height: 45px;
  border: 0;
  border-radius: 3px;
  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #caccd3;
  background-color: #3072f6;
  color: rgb(255, 255, 255);
}
#btn_continue {
  background-color: #e8f0fe;
  color: #3072f6;
}
#btn_dele {
  background-color: rgb(236, 110, 71);
  color: #e1ebff;
}
</style>