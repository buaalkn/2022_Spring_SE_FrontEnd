<template>
  <div>
    <div>query参数:{{ $route.query.content }}</div>
    <!-- 搜索区 -->
    <div class="search_area"></div>
    <!-- 过滤器 -->
    <div class="filter"></div>
    <!-- 主要内容 -->
    <div class="content">
      <div class="content_article">
        <!-- 内容标题 -->
        <div class="content_title"></div>
        <!-- 租房列表 -->
        <div class="content_list"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RentalList',
  mounted(){
    //先测试接口返回的数据格式
    this.$store.dispatch('getRentalList',{});
  }
};
</script>

<style>
.search_area {
  width: 100%;
  height: 155px;
  background-color: #f5f5f6;
}
.filter {
  background-color: rgb(171, 219, 241);
}
</style>