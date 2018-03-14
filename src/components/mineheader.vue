<template>
    <div class="container">
    <div class="mine_header">
      <div class="mine_header_bell" @click="news">
          <img src="../assets/xiaoxi.png" alt="" class="bell_img">
      </div>
      <div class="mine_header_design" @click="design">
          <img src="../assets/design.png" alt="" class="design_img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
methods:{
  news:()=>{
    console.log(1)
  },
  design:()=>{
    console.log(3)    
  }
}
}
</script>

<style scoped>
    .mine_header{
      width: 100%;
      height: 35px;
      display:flex;
      flex-direction: row;
      /* background: pink;       */

    }
    .bell_img{
      width: 35px;
      height: 35px;
      margin-left: 275px;
    }
    .design_img{
       width: 34px;
      height: 34px;
      margin-left: 10px;
      
    }
</style>
