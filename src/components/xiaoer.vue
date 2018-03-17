<template>
  <div class="container">
      <div class="xiaoer_header">
          小二上菜
      </div>
      <div class="xieoer_servies">
            <div class="xiaoer_servies_item">
                    <div @click="order" class="item_text" :class="{active:changecolor==0}">点菜</div>
                    <div @click="judge" class="item_text"  :class="{active:changecolor==1}">评价</div>
                    <div @click="seller"class="item_text" :class="{active:changecolor==2}">商家</div>
            </div>

            <div class="servies_menu">
                <div class="ordermenu"v-show="isorder"><orderedMenu></orderedMenu></div> 
                <div class="judge_menu" v-show="isjudge">这是评论</div>
                <div class="seller_menu" v-show="isseller">这是商家信息</div>
            </div>
      </div>
  </div>
</template>

<script>
import orderedMenu from '@/components/orderedMenu'
export default {
    components:{
        orderedMenu
    },
    data(){
        return{
            isorder:true,
            isjudge:false,
            isseller:false,
            changecolor:0
        }

    },
    methods:{
        order:function(e){
            if(this.isorder===false){
                this.isorder=true;
                this.isjudge=false;
                this.isseller=false;
                this.changecolor=0
            }
        },
        judge:function(e){
            console.log('评论')
            if(this.isjudge===false){
            this.isorder=false;
            this.isjudge=true;
            this.isseller=false;
            this.changecolor=1
            }
           
        },
        seller:function(e){
            console.log('商家');
            if(this.isseller===false){
                this.isseller=true;
                this.isorder=false;
                this.isjudge=false;
                this.changecolor=2
                
            }
        }
    }
}
</script>

<style scoped>
.xieoer_servies{
    width: 100%;
    height: 200px;
}
.xiaoer_servies_item{
      display:flex;
    flex-direction: row;
}
.item_text{
    width: 50px;
    height: 40px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    
    
}
.active{
    color: red;
    border-bottom:  3px  solid #FF2D4B;
     width: 50px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}
.servies_menu{
    width: 100%;
    height: 80vh;
    background-color: pink;
}

</style>
