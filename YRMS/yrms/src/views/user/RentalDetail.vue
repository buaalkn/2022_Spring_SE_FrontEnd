<template>
  <div>
    <div id="detail_content">
      <!-- 标题 -->
      <div id="detail_title">
        <span>{{ rentalDetail.rentalType }}租·</span>
        <span>{{ rentalDetail.name }} </span>
        <pre> </pre>
        <span>{{ rentalDetail.num }}人间</span>
        <a>
          <router-link to="/rental" id="detail_back">返回首页</router-link>
        </a>
      </div>
      <!-- 核心内容 -->
      <div id="detail_core">
        <!-- 图片 -->
        <img id="core_img" :src="rentalDetail.img" />
        <!-- 内容 -->
        <div id="core_text">
          <!-- 价格 -->
          <div id="core_price">
            <span>{{ rentalDetail.price }}</span>
            元/月
          </div>
          <!-- 信息列表 -->
          <ul id="core_list">
            <li>
              <span>租赁方式： </span>
              {{ rentalDetail.rentalType }}租
            </li>
            <li>
              <span>房屋位置： </span>
              {{ rentalDetail.location }}
            </li>
            <li>
              <span>房屋类型： </span>
              {{ rentalDetail.num }}人间
            </li>
            <li>
              <span>房屋大小： </span>
              {{ rentalDetail.area }}㎡
            </li>
          </ul>
          <!-- 租房选项 -->
          <button id="core_button" @click="beginRenting">我要租房</button>
        </div>
      </div>
    </div>
    <div id="bottom" v-if="this.isRenting===1">
      <!-- 支付区域 -->
      <div id="renting">
        <div id="input_day">
          <span> 输入租房天数： </span>
          <span>
            <input type="text" id="rent_input" v-model="rentLength"/>
          </span>
        </div>

        <button id="pay_button" @click="completeRenting">
          <div v-if="rentalDetail.rentalType === '短'">支付租金</div>
          <div v-if="rentalDetail.rentalType === '长'">打印合同</div>
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
      rentalParams: {
        id: 0, //租房id
        length: "", //租房天数或月数
        // date: "", //租房日期
      },
      isRenting: 0, //点击租房按钮后+1显示相应选项
      rentLength: ""
    };
  },
  mounted() {
    this.$store.dispatch("getRentalDetail", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["rentalDetail"]),
    ...mapGetters(["isRent"]),
  },
  methods: {
    completeRenting() {
      //确认租房后，向后端发送请求
      this.rentalParams.length = this.rentLength;
      Object.assign(this.rentalParams, this.$route.params);
      this.$store.dispatch("completeRenting", this.rentalParams);
      this.isRenting = 0;
      alert("租房成功！");
      this.$router.push({
        name: "rental",
        params: { keyword:""},
      });
    },
    beginRenting(){
      this.isRenting = 1;
    }
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
#core_list {
  padding-top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e4e6f0;
  max-height: 170px;
  overflow: initial;
  /* width: 565px; */
  list-style: none;
  text-align: left;
}
#core_list > li {
  position: relative;
  overflow: visible;
  overflow: initial;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 10px;
  color: #101d37;
}
#core_list > li > span {
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
  font-size: 16px;
  font-weight: 600;
}
#rent_input{
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
  vertical-align:middle;
  font-size: 16px;
  border: 1px solid #caccd3;
}
#pay_button {
  font-size: 22px;
  font-weight: 600;
  /* position: absolute; */
  /* vertical-align: baseline; */
  /* left: 0; */
  /* bottom: 0; */
  background-color: #f18832;
  width: 130px;
  height: 40px;
  float: right;
  border: 0;
  border-radius: 13px;
  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  color: #fff;
}
</style>