// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from "vue-router";

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.config.productionTip = false

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './components/secondcomponent'
import VueResource from 'vue-resource'



Vue.use(Element);

//写在最外层如果写在各个vue组件里面 则 没效果
Vue.use(VueResource);

//这里一定要写，不然不报错，也找不出原因
Vue.use(VueRouter);

const router =new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// new Vue({
//   router: router,
//   render: h => h(App)
// }).$mount('#app')
