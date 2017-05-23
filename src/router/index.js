import Vue from 'vue'
import Router from 'vue-router'
import Point from '@/components/Point'

import Home from '../components/HelloFromVux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/point',
      name: 'point',
      component: Point
    }
  ]
})
