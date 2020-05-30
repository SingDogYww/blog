import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/blog/Layout.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect : "/home",
    component: Layout
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    redirect: '/home/index',
    children: [
        {
            path: 'index',
            component: () => import('@/views/blog/Home.vue')
        }
    ]
  },
  {
    path: '/label',
    name: 'label',
    redirect: "/label/index",
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'labelindex',
        component: () => import('@/views/blog/Label.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
