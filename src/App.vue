<template>
  <div id="app">
      <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>


</style>
