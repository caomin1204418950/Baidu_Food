<template>
    <div class="container">
        <div class="tabbar_tabs">
            <div class="tabbar_tabs_tab" v-for=" (item,index) in items" :key="item.index"
            @click="select(index)" :class="{active:changecolor==index}">
                        <img :src="item.imgUrl" class="tab_img" /> 
                        {{ item.text }}
            </div>
        </div>

    </div>
</template>
<script>
export default { 
        data(){
            return{
                items:[
                    {
                        imgUrl:require('../assets/shouye.png'),
                        text:'首页',
                        path:"/home"
                    },
                    {
                        imgUrl:require('../assets/shouye.png'),
                        text:'指南',  
                        path: "/direction"            
                    },
                    {
                        imgUrl:require('../assets/shouye.png'),
                        text:'订单',
                        path: "/ordered"
                    },
                    {
                        imgUrl:require('../assets/shouye.png'),
                        text:'我的',
                        path: "/mine"
                    }                   
                ],
                changecolor:0          
            }
        },
methods:{
    select:function(index)  {  
    //   console.log(index);
      this.changecolor=index;
      var route=this._data.items[index].path;
    //   console.log(this.changecolor);
    // console.log(this._data.items[index].path)
    this.$router.push({path:route})  
          
    }
}
   }
</script>
    
<style scoped>
    .container{
        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0;
       
    }
    .tabbar_tabs{
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center        

    }
    .tabbar_tabs_tab{
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        /* background-color: pink; */
        font-size: 15px;
        color: #9B9B9B;

        
    }
    .tab_img{
        width: 38px;
        height: 38px;
    }
    .active{
        font-size: 18px;
        color: #FF314E;
    }
</style>
