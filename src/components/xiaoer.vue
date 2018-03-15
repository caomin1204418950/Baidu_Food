<template>
  <div class="container">
      <div class="xiaoer_header">
          小二上菜
      </div>
      <div class="xieoer_servies">
            <div class="xiaoer_servies_item">
                    <div @click="order" class="item_text">点菜</div>
                    <div @click="judge" class="item_text">评价</div>
                    <div @click="seller"class="item_text">商家</div>
            </div>

            <div class="servies_menu">
                <div class="ordermenu"v-show="isorder">这是菜单</div> 
                <div class="judge_menu" v-show="isjudge">这是评论</div>
                <div class="seller_menu" v-show="isseller">这是商家信息</div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isorder:true,
            isjudge:false,
            isseller:false
        }
    },
    methods:{
        order:function(){
            if(this.isorder===false){
                this.isorder=true;
                this.isjudge=false;
                this.isseller=false
            }
        },
        judge:function(){
            console.log('评论')
            if(this.isjudge===false){
            this.isorder=false;
            this.isjudge=true;
            this.isseller=false
            }
           
        },
        seller:function(){
            console.log('商家');
            if(this.isseller===false){
                this.isseller=true;
                this.isorder=false;
                this.isjudge=false
            }
        }
    }
}
</script>

<style scoped>
.xieoer_servies{
    width: 100%;
    height: 200px;
    background-color: pink;
}
.xiaoer_servies_item{
    margin-left: 20px;
    background-color: blueviolet;
      display:flex;
    flex-direction: row;
}
.item_text{
    width: 80px;
    background-color: greenyellow;
    font-size: 20px;
    
}
.servies_menu{
    width: 100%;
    height: 150px;
    background-color: blue;
}

</style>
