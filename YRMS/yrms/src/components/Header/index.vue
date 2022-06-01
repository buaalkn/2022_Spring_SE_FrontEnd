<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="rgb(119, 191, 227)"
      router
    >
      <template v-for="(item, index) in nav_menu_data">
        <el-menu-item :index="item.path" :key="index" class="el-menu-item">
          {{ item.title }}
        </el-menu-item>
      </template>
      <div class="user_login">
        <!-- 登录状态 -->
        <!-- 未登录显示游客 -->
        <div class="login_state" v-if="!username">{{ this.login }}</div>
        <!-- 登录显示用户名 -->
        <div class="login_state" v-else>{{username}}</div>
        <!-- 小图标 -->
        <!-- <i class="el-icon-user"></i> -->
        <router-link to="/tenantMessage" class="el-icon-user"></router-link>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "",
      nav_menu_data: [
        {
          title: "首页",
          path: "/",
        },
        {
          title: "订单",
          path: "/order",
        },
        {
          title: "报修",
          path: `/complaint`,
        },
        {
          title: "登录",
          path: "/login",
        },
        {
          title: "注册",
          path: "/register",
        },
      ],
      activeIndex: "1",
      login: "游客",//登录状态：游客/已登录用户/客服人员？
    };
  },
  created() {
    this.onRouteChanged();
  },
  watch: {
    $route: "onRouteChanged",
  },
  methods: {
    onRouteChanged() {
      let that = this;
      that.path = that.$route.path;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed:{
    //用户名信息
    username(){
      return this.$store.state.user.username;
    }
  }
};
</script>

<style>
.user-login {
  border: 1px solid #caccd3;
}
.el-icon-user {
  font-size: 35px;
  color: rgb(255, 255, 255);
  float: right;
  padding-right: 15px;
  padding-top: 10px;
}
.login_state {
  float: right;
  padding-right: 20px;
  padding-top: 16px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
}
.el-menu-item {
  font-size: 16px;
  font-weight: 600;
}
</style>