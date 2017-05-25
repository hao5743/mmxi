import Vue from 'vue'
import Router from 'vue-router'
import Point from '@/components/Point'
import PointList from '../components/PointList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pointlist',
      component: PointList
    },
    {
      path: '/point',
      name: 'point',
      component: Point
    }
  ]
})
