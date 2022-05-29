<template>
  <div>
    <!-- <div>query参数:{{ $route.query.content }}</div> -->
    <!-- 搜索区 -->
    <div class="search_area">
      <!-- 导航栏 -->
      <div class="nav">
        <span class="nav_logo"></span>
        <ul class="nav_tab">
          <li class="navli">
            <a href="">首页</a>
          </li>
          <li class="navli">
            <a href="">短租</a>
          </li>
          <li class="navli">
            <a href="">长租</a>
          </li>
          <li class="navli">
            <a href="">发布房源</a>
          </li>
        </ul>
      </div>
      <!-- 搜索框 -->
      <div id="search">
        <div class="search_wrap">
          <input
            class="search_input"
            type="text"
            placeholder="请输入地区、类型和方式开始找房"
            v-model="searchText"
            @keyup.enter="goSearch"
          />
          <span class="search_button" type="submit" @click="goSearch">
            <i class="iconfont icon-chazhao"></i>
          </span>
        </div>
      </div>
    </div>
    <!-- 过滤器 -->
    <div class="filter" @click="goSelect">
      <!-- 位置 -->
      <ul class="filter_tab">
        <li class="tab_head">
          <span>地区</span>
        </li>
        <li
          id="locationli"
          v-for="(location, index) in locationList"
          :key="index"
          @click="liClick1(index)"
        >
          <a
            data-select="位置"
            :data-locName="location"
            :class="{ active: currentIndex1 === index }"
            >{{ location }}</a
          >
        </li>
      </ul>
      <!-- 长/短租 -->
      <ul class="filter_tab">
        <li class="tab_head">
          <span>方式</span>
        </li>
        <li
          class="typeli"
          v-for="(type, index) in typeList"
          :key="index"
          @click="liClick2(index)"
        >
          <a
            data-select="方式"
            :data-typeName="type"
            :class="{ active: currentIndex2 === index }"
            >{{ type }}</a
          >
        </li>
      </ul>
      <!-- 房间人数 -->
      <div class="filter_tab">
        <li class="tab_head">
          <span>规格</span>
        </li>
        <li
          class="typeli"
          v-for="(num, index) in numList"
          :key="index"
          @click="liClick3(index)"
        >
          <a
            data-select="规格"
            :data-num="num"
            :class="{ active: currentIndex3 === index }"
            >{{ num }}</a
          >
        </li>
      </div>
      <!-- 租金 -->
    </div>
    <!-- 主要内容 -->
    <div class="content">
      <!-- 租房信息 -->
      <div class="content_article">
        <!-- 内容标题 -->
        <div class="content_title">
          <span>已经为您找到 </span>
          <span class="title_num">{{ rentalNum }}</span>
          <span> 套 北京租房</span>
        </div>
        <!-- 租房列表 -->
        <div class="content_list">
          <div
            class="list_item"
            v-for="(rental, index) in rentalList"
            :key="index"
          >
            <img class="item_img" :src="rental.img" />
            <div class="item_mes">
              <!-- 主要信息 -->
              <div class="main_mes">
                <span>{{ rental.rentalType }}租·</span>
                <span>{{ rental.name }} </span>
                <span>{{ rental.num }}人间</span>
              </div>
              <div class="secondary_mes">
                <span>{{ rental.location }}</span>
                <i class="rentalli">/</i>
                <span>{{ rental.area }}㎡</span>
              </div>
              <router-link :to="`/rentalDetail/${rental.id}`">
                <button class="item-jump">查看详情</button>
              </router-link>
              <!-- 价格 -->
              <span class="price_mes">
                <span class="price">{{ rental.price }} </span>
                元/月
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 侧栏 -->
      <div class="content_aside">
        <img class="qrcode" src="~@/assets/images/QRcode.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RentalList",
  data() {
    return {
      searchText: this.$route.params.keyword,
      currentIndex1: 0,
      currentIndex2: 0,
      currentIndex3: 0,
      //带给服务器的参数
      rentalParams: {
        keyword: "", //搜索关键字
        typeName: "", //长/短租
        Num: "", //几人间
        locName: "", //位置
        priceLow: 0, //最低价
        priceHigh: 100000, //最高价
        pageNo: 1, //当前页号
        pageSize: 10, //页大小
      },
      //过滤器选项
      locationList: ["不限", "东城", "西城", "朝阳"],
      typeList: ["不限", "短租", "长租"],
      numList: ["不限", "单人间", "双人间", "四人间"],
    };
  },
  //当组件挂载完毕之前执行一次(先于mounted之前)
  //网课里这里用于解决从首页点击目录跳转到搜索页面的参数传递
  beforeMount() {
    // this.rentalParams.keyword = this.$route.query.content;
    Object.assign(this.rentalParams, this.$route.query, this.$route.params);
  },
  mounted() {
    //先测试接口返回的数据格式
    // this.$store.dispatch("getRentalList", {});

    //在发请求之前带给服务器的参数发生变化
    this.getData();
  },
  computed: {
    //mapGetters里面的写法：传递的数组，因为getters计算没有划分模块
    ...mapGetters(["rentalList"]),
    ...mapGetters(["rentalNum"]),
  },
  //数据监听：监听组件实例身上的属性的属性值变化
  watch: {
    $route(newValue, oldValue) {
      // console.log("change");
      //再次整理给服务器的参数
      Object.assign(this.rentalParams, this.$route.query, this.$route.params);
      //再次发起Ajax请求
      this.getData();
      //每一次请求完毕，应该把相应值置空（或许不需要？）
    },
  },
  methods: {
    liClick1(index) {
      this.currentIndex1 = index;
    },
    liClick2(index) {
      this.currentIndex2 = index;
    },
    liClick3(index) {
      this.currentIndex3 = index;
    },
    //向服务器发请求获取rentalList模块数据(根据参数不同返回不同的数据展示)
    //把这次请求封装为一个函数,当你需要在调用时调用即可
    getData() {
      this.$store.dispatch("getRentalList", this.rentalParams);
    },
    goSearch() {
        this.$route.params.keyword = this.searchText;
        Object.assign(this.rentalParams, this.$route.query, this.$route.params);
        this.getData();
    },
    goSelect(event) {
      let element = event.target;
      // console.log(element);
      //获取到当前触发这个事件的节点，但需要带有data-select这样属性的节点
      //节点有一个属性dataset属性，可以获取节点的自定义属性与属性值
      // console.log(element.dataset);
      let { select, locname, typename, num } = element.dataset;
      console.log(element.dataset);
      //如果标签身上拥有select一定是a标签
      if (select) {
        let location = { name: "rental" };
        let query = { select: select };
        if (locname) {
          query.locName = locname;
        } else if (typename) {
          query.typeName = typename;
        } else if (num) {
          query.Num = num;
        }
        location.query = query;
        //路由跳转
        this.$router.push(location);
      }
    },
  },
};
</script>

<style>
/* 头部导航栏 */
.search_area {
  width: 100%;
  min-width: 1150px;
  height: 155px;
  padding: 25px 0;
  background: #f5f5f6;
  box-sizing: border-box;
}
.nav {
  width: 1150px;
  height: 30px;
  margin: 0 auto 27px;
}
.nav_logo {
  width: 138px;
  height: 30px;
  /* display: inline-block; */
  margin-right: 50px;
  background-color: #fff;
  float: left;
}
.nav_tab {
  /* display: inline-block; */
  vertical-align: bottom;
  list-style-type: none;
  line-height: 25px;
  font-size: 16px;
  /* margin-left: 188px; */
  position: relative;
  font-weight: 700;
  text-align: left;
}
.navli {
  float: left;
  margin-right: 30px;
  /* position: relative; */
}
a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}
a:hover {
  color: #3072f6;
}
#search {
  margin-top: 20px;
  margin-bottom: 24px;
  position: relative;
  width: 1150px;
  margin: 0 auto;
}
.search_wrap {
  height: 44px;
  /* display: inline-block; */
  width: 710px;
  line-height: 46px;
  font-size: 14px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px -1px rgb(0 0 0 / 20%);
}
.search_input {
  width: 668px;
  height: 44px;
  padding: 16px 23px 17px;
  outline: medium;
  box-sizing: border-box;
  border-width: 0;
  font-size: 13.5px;
  float: left;
}
.search_button {
  float: left;
  cursor: pointer;
}
/* 过滤器 */
.filter {
  width: 1150px;
  border-bottom: 1px solid #eee;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: auto;
}
/* #location{
    overflow: hidden;
    margin-top: 3px;
    margin-bottom: 3px;
    position: relative;
    padding-left: 60px;
} */
.filter_tab {
  vertical-align: bottom;
  list-style-type: none;
  line-height: 25px;
  font-size: 16px;
  /* margin-left: 188px; */
  position: relative;
  font-weight: 700;
  text-align: left;
  padding-left: 60px;
  padding-bottom: 14px;
  overflow: hidden;
}
.tab_head {
  position: absolute;
  left: 0;
}
#locationli {
  float: left;
  margin-right: 30px;
  font-weight: 500;
  /* position: relative; */
}
.typeli {
  float: left;
  margin-right: 20px;
  font-weight: 500;
  font-size: 12px;
  font-family: inherit;
}
/* 主要内容 */
.content {
  width: 1150px;
  margin: auto;
}
.content_title {
  text-align: left;
  font-size: 16px;
  color: #101d37;
  margin-top: 30px;
  margin-bottom: 14px;
  font-weight: 700;
}
.title_num {
  font-size: 18px;
  font-weight: 800;
  color: rgb(2, 81, 252);
}
.content_article {
  float: left;
  width: 850px;
  /* background-color: rgb(216, 236, 235); */
}
/* .content_list {
} */
/* 租房列表元素 */
.list_item {
  padding: 30px 0;
  height: 122px;
  /* position: relative; */
}
.item_img {
  position: relative;
  height: 122px;
  width: 160px;
  float: left;
  border-radius: 10px;
  overflow: hidden;
}
.item_mes {
  margin-left: 190px;
  position: relative;
  margin-bottom: 18px;
  height: 122px;
}
.main_mes {
  text-align: left;
  margin-bottom: 16px;
  /* display: inline-block; 不去掉这条text-align失效*/
  max-width: 450px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  font-weight: 700;
  color: #101d37;
  font-family: HiraginoSansGB-W6;
}
.secondary_mes {
  text-align: left;
  margin-bottom: 16px;
  font-size: 14px;
  color: #9399a5;
  font-weight: 700;
}
.rentalli {
  font-weight: 400;
  color: #ccc;
  margin-left: 8px;
  margin-right: 8px;
}
.price_mes {
  position: absolute;
  right: 0;
  top: 0;
  font-family: PingFangSC-Semibold;
  color: #fa5741;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
}
.price {
  font-size: 24px;
  font-family: Tahoma;
}
.item-jump {
  font-size: 17px;
  font-weight: 600;
  position: absolute;
  vertical-align: baseline;
  left: 0;
  bottom: 0;
  background-color: #0f73d1;
  width: 100px;
  height: 34px;
  float: left;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  color: #fff;
}
.content_aside {
  float: right;
  width: 170px;
  padding-top: 90px;
}
.qrcode {
  width: 120px;
}
.active {
  color: rgb(0, 81, 255);
  font-weight: 600;
}
</style>