<template>
  <div>
    <!-- 未登录 -->
    <div v-if="1===0">
      <div class="login_warning">请先登录！</div>
    </div>
    <!-- 页面主体 -->
    <div id="container" v-if="1===1">
      <div id="main">
        <!-- 文本 -->
        <div class="main-title">我的订单</div>
        <!-- 订单列表 -->
        <div class="list-title"></div>
        <!-- v-for循环单个订单信息 -->
        <div class="list-item" v-for="(item, index) in orderList" :key="index">
          <img class="item-img" :src="item.img" />
          <div class="item-text">
            <div class="item-mes">
              <span>{{ item.rentalType }}租·</span>
              <span>{{ item.name }} </span>
              <span>{{ item.num }}人间</span>
            </div>
            <button class="item-jump">查看详情</button>
            <span class="item-price">
              <span>{{ item.price }} </span>
              <span class="item-per">元/月</span>
            </span>
            <span class="item-date">{{item.date}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      arr: [
        {
          src: require(`../../assets/images/home1.jpeg`),
          name: "清源佳园",
          price: 6000,
          kind: "长租",
          number: "单人间",
          time: "2022-05-18",
        },
        {
          src: require(`../../assets/images/home2.jpeg`),
          name: "古韵新居",
          price: 4000,
          kind: "长租",
          number: "四人间",
          time: "2021-05-10",
        },
        {
          src: require(`../../assets/images/home4.jpeg`),
          name: "御景尚都",
          price: 5000,
          kind: "短租",
          number: "双人间",
          time: "2020-07-16",
        },
      ],
    };
  },
  mounted(){
    //get请求，参数为当前用户id
    this.$store.dispatch('getOrderList',1);
  },
  computed:{
    ...mapGetters(['orderList']),
  }
};
</script>

<style>
.login_warning{
  font-size: 70px;
  font-weight: 700;
  margin-top:10%;
}
#main {
  width: 1150px;
  /* height: 500px; */
  /* background-color: rgb(139, 137, 137); */
  margin: auto;
  padding-top: 20px;
}
.main-title {
  font-size: 50px;
  font-weight: 700;
  font-family: PingFangSC-Semibold;
  text-align: left;
  margin-top: 30px;
  margin-bottom: 20px;
}
.list-item {
  height: 150px;
  padding: 30px 0;
  border-width: 2px 0 0 0;
  border-style: solid;
  border-color: rgb(218, 218, 218);
}
.item-img {
  width: 200px;
  float: left;
  border-radius: 10px;
}
.item-text {
  height: 155px;
  margin-left: 240px;
  text-align: left;
  position: relative;
}
.item-mes {
  font-size: 26px;
  font-weight: 600;
}
.item-price {
  position: absolute;
  /* vertical-align: baseline; */
  top: 0;
  right: 0;
  font-size: 30px;
  font-weight: 700;
  font-family: Tahoma;
  color: rgb(255, 128, 0);
}
.item-per{
    font-size: 20px;
    font-weight: 600;
}
.item-jump {
  font-size: 17px;
  font-weight:600;
  position: absolute;
  vertical-align: baseline;
  left: 0;
  bottom: 0;
  background-color: #2f81b4;
  width: 100px;
  height: 34px;
  float: left;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  color: #fff;
}
.item-date{
    font-size: 18px;
    font-weight: 400;
    color: #797e81;
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>