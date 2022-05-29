<template>
  <div>
    <!-- 首页的大背景图和搜索栏 -->
    <div class="topbody">
      <!-- 大号字 -->
      <div class="h1">开始寻找属于你的家</div>
      <!-- 搜索栏 -->
      <div class="container">
        <input
          type="text"
          placeholder="请输入地区、类型和方式开始找房"
          class="container__input"
          v-model="searchText"
          @keyup.enter="goSearch"
        />
        <!-- 搜索按钮 + 图标（引入iconfont） -->
        <button class="search" type="submit" @click="goSearch">
          <i class="iconfont icon-chazhao"></i>
        </button>
      </div>
    </div>
    <!-- 首页中间的文字信息 -->
    <div class="midbody">
      <div class="midfont1">品质租房</div>
      <span class="midfont2">高品质租房体验，从青租开始</span>
      <span class="midfont3">更多北京租房</span>
    </div>
    <!-- 首页下方的房子样例 -->
    <div class="cards">
      <div class="cards__item"><img src="~@/assets/images/home1.jpeg" /></div>
      <div class="cards__item"><img src="~@/assets/images/home2.jpeg" /></div>
      <div class="cards__item"><img src="~@/assets/images/home3.png" /></div>
      <div class="cards__item"><img src="~@/assets/images/home4.jpeg" /></div>
    </div>
    <!-- 测试接口 -->
    <!-- <div>
      <div>{{test.data.time}}</div>
      <img :src="test.data.img">
    </div> -->
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      searchText: "",
      publicPath: process.env.BASE_URL,
      // 试下Apifox
      id: "1",
      test: {
        kind: "",
        name: "",
        number: "",
        price: 100,
        time: "20020510",
        img: require(`../../assets/images/home1.jpeg`),
      },
    };
  },
  methods: {
    goSearch() {
      this.$router.push({
        name: "rental",
        params: { keyword: this.searchText },
      });
    },
  },
  created() {
    // const _this = this
    // axios.get("http://127.0.0.1:4523/mock/1005801/test/1").then(function (resp){
    //   console.log(_this.test)
    //   _this.test = resp.data
    //   console.log(_this.test)
    // })
  },
};
</script>

<style>
.topbody {
  background-image: url("~@/assets/images/homebody.jpg");
  width: 100%;
  height: 624px;
  margin: auto;
  /* border-color: #545c64;
  border-width: 100px 0 0 0; */
}
.h1 {
  left: 67px;
  top: 248px;
  width: 660px;
  height: 120px;
  color: rgb(46, 44, 44);
  font-size: 70px;
  font-weight: 700;
  padding-top: 180px;
  padding-left: 150px;
  text-align: left;
  /* 怎么引public里图片资源? */
  /* background-image: url("`${publicPath}homebody.jpg`"); */
}
.container {
  /* display: flex; */
  padding-left: 150px;
  background-color: white;
  /*flex-direction? */
  flex-direction: row-reverse;
  border-radius: 10px;
}

.container__input {
  border-color: transparent;
  /* Take available width */
  width: 400px;
  height: 40px;
  float: left;
  padding-left: 20px;
  font-size: 20px;
  border-radius: 10px 0 0 10px;
}
.search {
  background-color: #3072f6;
  width: 50px;
  height: 44px;
  float: left;
  border: 0;
  /* display: block; */
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  text-align: center;
  color: #fff;
}
.iconfont {
  font-family: iconfont, sans-serif;
  -webkit-text-stroke-width: 0.2px;
}

::-webkit-input-placeholder {
  color: rgba(34, 33, 33, 0.3);
  /* font-size: 20px; */
}

.midbody {
  width: 1420px;
  height: 200px;
  margin: auto;
}
.midfont1 {
  text-align: left;
  font-size: 40px;
  font-weight: 600;
  padding-top: 100px;
}
.midfont2 {
  float: left;
  font-size: 18px;
  font-weight: 200;
  color: rgb(182, 176, 176);
}
.midfont3 {
  float: right;
  font-size: 20px;
  font-weight: 600;
  color: rgb(0, 110, 255);
}
.cards {
  display: flex;
  width: 1440px;
  height: 500px;
  flex-wrap: wrap;
  margin: auto;
}

.cards__item {
  flex-basis: 340px;
  background-color: #ffffff;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  box-shadow: 12px 12px rgba(141, 135, 135, 0.3);
}

* {
  margin: 0;
  padding: 0;
}
</style>