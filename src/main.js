// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  2019.12.20 create by lpx
//  作为个人简单网站，规划实现首页展示、简历展示及修改、知识分享、每日一记、我的圈子等功能。
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//首页组件
import Home from "./components/HomePage"
//每日一记组件
import OneD from "./components/OneDayDay"
//个人简历组件
import Resume from "./components/Resume"
//我的圈子组件
import Circle from "./components/Circle"
//学习资料组件
import LearnM from "./components/LearnMaterials"
//个人简历编辑组件
import SetResume from "./components/SetResume"



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

/* eslint-disable no-new */
//定义路由
const routes=[
  {path:'*',redirect:'/home'},
  {path:"/home",component:Home},
  {path:"/onedayday",component:OneD},
  {path:"/resume",component:Resume},
  {path:"/circle",component:Circle},
  {path:"/learnmaterials",component:LearnM},
  {path:"/setresume",component:SetResume}

]
//实例化VueRouter
const router=new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  components: { 
    App
   },
  template: '<App/>'
})
