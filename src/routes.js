import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import Name from './components/about/contact/Name'

export const routes = [
	{path: '/',name: 'homeLink',components: {
		default:Home,
		'orderingGuide':OrderingGuide,
		'history':History,
		'delivery':Delivery,
	}},
	{path: '/menu',name: 'menuLink',component: Menu},
	{path: '/admin',name: 'adminLink',component: Admin,
		// beforeEnter:(to, from, next) => {
		// 路由独享守卫
		// alert('非登录状态，不能访问此页面！');
		//next();																	//依旧跳转
		//next(false);															//不跳转
		
		// store.gettes.isLogin === false
// 		if( to.path == '/login' || to.path == '/register' ){
// 			next();
// 		}else{
// 			alert('你还么有登陆，请先登录！');
// 			next('/login');
// 		}
// 	},
	},
	{path: '/about',name: 'aboutLink',component: About,redirect:'/about/contact',children:[
		// {path: '/about/contact',name: 'contactLink',component: Contact},
		{path: '/about/contact',name: 'contactLink',component: Contact,redirect:'/about/contact/phone',children:[
			{path: '/about/contact/phone',name: 'phoneLink',component: Phone,},
			{path: '/about/contact/name',name: 'nameLink',component: Name},
		]},
		{path: '/about/history',name: 'historyLink',component: History},
		{path: '/about/delivery',name: 'deliveryLink',component: Delivery},
		{path: '/about/orderingGuide',name: 'orderingGuideLink',component: OrderingGuide},
	]},
	{path: '/login',name: 'loginLink',component: Login},
	{path: '/register',name: 'registerLink',component: Register},
	{path: '*',redirect:'/'}, 							//输入无页面地址，跳转到主页
]