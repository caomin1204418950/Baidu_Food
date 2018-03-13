import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '@/components/Tabbar'
import Direction from '@/components/direction'
import Home from '@/components/home'
import Ordered from '@/components/ordered'
import Mine from '@/components/mine'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/direction',
      name: 'Direction',
      component: Direction
    },
    {
      path: '/ordered',
      name: 'Ordered',
      component: Ordered
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
