import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history',
	// 滚动行为
	scrollBehavior(to,form,savedPosition){
		// return {x:0,y:100}
		// return {selector:'.btn'};
		
		// 记住上一次的位置
		if(savedPosition){
			return savedPosition
		}else{
			return {x:0,y:0}
		}
	}
})

// 全局守卫

// router.beforeEach((to, from, next) => {
//   // alert('你还么有登陆，请先登录！');
//   // next();
//    console.log(to);
//   // store.gettes.isLogin === false
//   if( to.path == '/login' || to.path == '/register' ){
//   	next();
//   }else{
//   	alert('你还么有登陆，请先登录！');
//   	next('/login');
//   }
// })


//后置钩子

// router.afterEach((to, from) => {
// 	alert('after each')
// })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
