<template>
  <div class="container">
      <div class="xiaoer_header">
          小二上菜
      </div>
      <div class="xieoer_servies">
          <div class="xiaoer_servies_item">点菜</div>
          <div class="xiaoer_servies_item">评价</div>
          <div class="xiaoer_servies_item">商家</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.xieoer_servies{
    width: 100%;
    height: 60px;
    background-color: pink;
    display:flex;
    flex-direction: row;
    justify-content: start;
    align-items: center
}
.xiaoer_servies_item{
    width: 20%;
    height: 40px;
    margin-left: 20px;
    background-color: greenyellow;
    color:#333333;
    font-size: 20px;
}

</style>
