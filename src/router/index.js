import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const sing = () => import('@/views/sing')
const Index = () => import('@/views/index')
const drag = () => import('@/views/drag');
const history = () => import('@/views/history');

const onself = () => import('@/views/onself');

const addImage = () => import('@/views/addImagedemo');

const upload = () => import('@/views/upload');
const jigsaw = () => import('@/views/jigsaw');


const login =() => import('@/views/login');
const regist =() => import('@/views/regist');
const personal =() => import('@/views/personal');
const images=()=>import('@/views/image');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'sing',
      component: sing,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/sing',
      name: 'sing',
      component: sing,
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
    {

      path: '/addImage',
      name: 'addImage',
      component: addImage,
      meta: {title: '设计IN-个人中心'}
    },

    {path: '/upload',
      name: 'upload',
      component: upload,
      meta: {title: '设计IN-上传'}
    },
    {
      path: '/jigsaw',
      name: 'jigsaw',
      component: jigsaw,
      meta: {title: '设计IN-上传'}
    },
   


   	{
      path: '/login',
      name: 'login',
      component: login,
      meta: {title: '设计IN-设计师严选平台 | 登录'}
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist,
      meta: {title: '设计IN-设计师严选平台 | 注册'}
    },{
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: {title: '设计IN-设计师严选平台 | 个人中心'}
    },
		{
      path: '/images',
      name: 'images',
      component: images,
      meta: {title: '设计IN-设计师严选平台 | 图库'}
    },
  ],


})
