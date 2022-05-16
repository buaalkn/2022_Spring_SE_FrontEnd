<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">租房</el-menu-item>
      <el-menu-item index="2">订单</el-menu-item>
      <el-menu-item index="3">报修/投诉</el-menu-item>
      <el-menu-item index="4">登录/注册</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>