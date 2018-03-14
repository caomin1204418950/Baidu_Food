<template>
<div>
  <div @click="getin">小二上菜</div>        
</div>
</template>

<script>
export default {
  methods:{
    getin:function(){
     this.$router.push('/xiaoer')
    }
  }
}
</script>

<style>

</style>
