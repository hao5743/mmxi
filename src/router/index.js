import Vue from 'vue'
import Router from 'vue-router'
import Point from '@/components/Point'
import Home from '../components/Home'
import Jingluo from '../components/Jingluo'
import Disease from '../components/Disease'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/point',
      name: 'point',
      component: Point
    },
    {
      path: '/jingluo',
      name: 'jingluo',
      component: Jingluo
    },
    {
      path: '/disease',
      name: 'disease',
      component: Disease
    }
  ]
})
