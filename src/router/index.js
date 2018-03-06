import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Index = () => import('@/views/index')
const drag = () => import('@/views/drag');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: Index,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {title: '设计IN-设计师严选平台', keepAlive: true}
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag,
      meta: {title: '设计IN-设计师严选平台', keepAlive: true}
    },
   
  ],


})
