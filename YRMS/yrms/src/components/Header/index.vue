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
      <template v-for="(item,index) in nav_menu_data">
          <el-menu-item :index="item.path" :key="index">
            {{item.title}}
          </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return{
      path:"",
      nav_menu_data:[
        {
          title:"首页",
          path:"/"
        },
        {
          title:"订单",
          path:"/order"
        }
      ],
      activeIndex:"1",
    }
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
  }
}
</script>

<style>

</style>