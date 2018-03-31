import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/detail',
    name: 'detail',
    component: Detail
  }, {
    path: '/',
    name: 'home',
    component: Home
  }
  ]
})
