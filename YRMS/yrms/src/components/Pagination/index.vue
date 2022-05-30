<template>
  <div class="pagination">
    <button>上一页</button>
    <button>下一页</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
};
</script>

<style>
.pagination{
    margin: auto;
}
</style>