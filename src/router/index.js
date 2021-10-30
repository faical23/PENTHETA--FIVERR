import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import DetailArt from '../views/DetailArt.vue'
import NTFs from '../views/NTFs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/DetailArt',
    name: 'DetailArt',
    component: DetailArt
  },
  {
    path: '/NTFs',
    name: 'NTFs',
    component: NTFs
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
