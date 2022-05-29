import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/user/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/user/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/user/OrderList.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/user/Login/Login.vue')
  },
  {
    path: '/loginvf',
    name: 'loginvf',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/user/Login/LoginWithVfCode.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/user/Register/Register.vue')
  },
  {
    path: '/rental',
    name: 'rental',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/RentalList.vue')
  },
  {
    path: '/rentalDetail/:id',
    name: 'rentalDetail',
    component: () => import('../views/user/RentalDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router