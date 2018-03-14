<template>
    <div class="container">
        <div class="tabbar_tabs">
            <div class="tabbar_tabs_tab" v-for=" (item,index) in items" :key="item.index"
            @click="select(index)" :class="{active:changecolor==index}">
                      <div v-if="changecolor==index"> <img :src="item.imgUrl2" class="tab_img" /></div>
                      <div v-else class="tab_img"><img :src="item.imgUrl" class="tab_img" /></div>
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
                        imgUrl2:require('../assets/shouye_select.png'),                        
                        text:'首页',
                        path:"/home",
                        key:'1'
                    },
                    {
                        imgUrl:require('../assets/shouye.png'),
                        imgUrl2:require('../assets/shouye_select.png'),
                        text:'指南',  
                        path: "/direction",
                        key:'2'            
                    },
                    {
                        imgUrl:require('../assets/shouye.png'),
                        imgUrl2:require('../assets/shouye_select.png'),
                        text:'订单',
                        path: "/ordered",
                        key:'3'
                    },
                    {
                        imgUrl:require('../assets/shouye.png'),
                        imgUrl2:require('../assets/shouye_select.png'),
                        text:'我的',
                        path: "/mine",
                        key:'4'
                    }                   
                ],
                changecolor:0         
            }
        },

mounted(){
    // console.log(this)
    var that =this;
      window.onload=function(){
    // console.log(that._data.changecolor)
    // console.log(that._data.items[that._data.changecolor].path)
      var route=that._data.items[that._data.changecolor].path;
    that.$router.replace({path:route}) ;
    
        // var route=this._data.items[index].path;
        // console.log(that._data.items.key)
    }
},
methods:{
    select:function(index)  {  
    //   console.log(index);
      this.changecolor=index;
      var route=this._data.items[index].path;
    //   console.log(this.changecolor);
    // console.log(this._data.items[index].path)
    this.$router.replace({path:route}) ;
    // return changecolor;    
    },
  
},
   }
</script>
    
<style scoped>
    .container{
        width: 100%;
        height: 65px;
        position: fixed;
        bottom: 0;
       
    }
    .tabbar_tabs{
        width: 100%;
        height: 65px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        /* background-color:pink;      */

    }
    .tabbar_tabs_tab{
        width: 100%;
        height: 65px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        /* background-color: pink; */
        font-size: 15px;
        color: #9B9B9B;
        /* background-color: red; */

        
    }
    .tab_img{
        width: 38px;
        height: 38px;
    }
    .active{
        font-size: 16px;
        color: #FF314E;
    }
</style>
