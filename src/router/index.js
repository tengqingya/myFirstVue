import Vue from 'vue'
import Router from 'vue-router'
import todolist from '@/components/todolist'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TODolist',
      component: todolist
    },
    {
      path: '/Hello',
      name: 'hello',
      component: Hello
    }
  ]
})
