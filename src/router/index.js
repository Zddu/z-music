import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/recommend'
  },
  {
    path: '/rank',
    name: '排行榜',
    component: () => import(/* webpackChunkName: "about" */ '../components/rank/rank.vue')
  },
  {
    path: '/singer',
    name: '歌手',
    component: () => import(/* webpackChunkName: "about" */ '../components/singer/singer.vue')
  },
  {
    path: '/search',
    name: '搜索',
    component: () => import(/* webpackChunkName: "about" */ '../components/search/search.vue')
  },
  {
    path:'/recommend',
    name:'推荐',
    component:()=>import('../components/recommend/recommend.vue')
  }
]

const router = new VueRouter({
  routes
});

export default router
