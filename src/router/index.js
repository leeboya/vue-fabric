import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const start = () => import('@/views/start')
const Index = () => import('@/views/index')
const drag = () => import('@/views/drag');
const history = () => import('@/views/history');
const onself = () => import('@/views/onself');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: start,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/start',
      name: 'start',
      component: start,
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
    {
      path: '/history',
      name: 'history',
      component: history,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/onself',
      name: 'onself',
      component: onself,
      meta: {title: '设计IN-个人中心'}
    },
   
  ],


})
