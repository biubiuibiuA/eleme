// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Seller from './components/seller/seller';
import axios from 'axios';
Vue.prototype.$ajax = axios;

import './common/stylus/index.styl';

Vue.use(VueRouter);

// const Routers = [
// 	{
// 		path:'/goods',
// 		component:(resolve) => require(['./components/goods/goods.vue'],resolve)
// 	},
// 	{
// 		path:'/ratings',
// 		component:(resolve) => require(['./components/ratings/ratings.vue'],resolve)
// 	},
// 	{
// 		path:'/seller',
// 		component:(resolve) => require(['./components/seller/seller.vue'],resolve)
// 	},{
// 		path:'*',
// 		rediect:'/goods.vue'
// 	}

// ];

// const RouterConfig = {
// 	mode:'history',
// 	routes:Routers
// }
const router = new VueRouter({
	LinkActiveClass:'route-link-active',
	routes:[
	{path:'/goods',component:Goods},
	{path:'/ratings',component:Ratings},
	{path:'/seller',component:Seller},
	{path:'/',redirect: '/goods'}
	]
});


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
});

