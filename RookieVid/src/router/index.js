import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
// import HomeView from '../views/HomePage/HomeView.vue'
=======
import HomeView from '../views/HomeView.vue'
>>>>>>> origin/Brandy-L

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
   /*导航栏跳转页面*/
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/HomeView.vue')
=======
  {
    path: '/',
    name: 'home',
    component: HomeView
>>>>>>> origin/Brandy-L
  },
  {
    path: '/creation',
    name: 'creation',
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "about" */ '../views/GuidePage/CreationView.vue')
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreationView.vue')
>>>>>>> origin/Brandy-L
  },
  {
    path: '/person',
    name: 'person',
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "about" */ '../views/GuidePage/PersonView.vue')
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonView.vue')
>>>>>>> origin/Brandy-L
  },
  {
    path: '/message',
    name: 'message',
<<<<<<< HEAD
    component: () => import(/* webpackChunkName: "about" */ '../views/GuidePage/MessageView.vue')
  },
   /*其它页面*/
  {
    path: '/video/:id',/*注意这里*/
    name: 'video',
    component: () => import(/* webpackChunkName: "about" */ '../views/VideoView.vue')
  },
  {
    path:'/search',
    name:'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchView.vue')
  },
   /*分区的标签页面*/
   {
    path:'/life',
    name:'life',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/LifeView.vue')
  },
  {
    path:'/entertainment',
    name:'entertainment',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/EntertainmentView.vue')
  },
  {
    path:'/film',
    name:'film',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/FilmView.vue')
  },
  {
    path:'/game',
    name:'game',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/GameView.vue')
  },
  {
    path:'/sports',
    name:'sports',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/SportsView.vue')
  },
  {
    path:'/food',
    name:'food',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/FoodView.vue')
  },
  {
    path:'/technology',
    name:'technology',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/TechnologyView.vue')
  },
  {
    path:'/military',
    name:'military',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/MilitaryView.vue')
  },
  {
    path:'/music',
    name:'music',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/MusicView.vue')
  },
  {
    path:'/study',
    name:'study',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabelPage/StudyView.vue')
  },

=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MessageView.vue')
  },
  {
    path:'/recreation',
    name:'recreation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Recreation.vue')
  }
  
>>>>>>> origin/Brandy-L
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
