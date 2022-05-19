<template>
  <div>
    <!-- 页面主体 -->
    <div id="container">
      <div id="main">
        <!-- 文本 -->
        <div class="main-title">我的订单</div>
        <!-- 订单列表 -->
        <div class="list-title"></div>
        <!-- v-for循环单个订单信息 -->
        <div class="list-item" v-for="(item, index) in arr" :key="index">
          <img class="item-img" :src="item.src" />
          <div class="item-text">
            <div class="item-mes">
              <span>{{ item.kind }}·</span>
              <span>{{ item.name }} </span>
              <span>{{ item.number }}</span>
            </div>
            <button class="item-jump">查看详情</button>
            <span class="item-price">
              <span>{{ item.price }} </span>
              <span class="item-per">元/月</span>
            </span>
            <span class="item-date">{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style>
#main {
  width: 1210px;
  /* height: 500px; */
  /* background-color: rgb(139, 137, 137); */
  margin: auto;
}
.main-title {
  font-size: 58px;
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
  font-size: 30px;
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