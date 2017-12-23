import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index.vue'
import DashBoard from '@/pages/DashBoard/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: DashBoard
        },
        {
          path: 'Home',
          component: DashBoard
        },
        {
          path: 'DashBoard',
          component: DashBoard
        }
      ]
    }
  ]
})
