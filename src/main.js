import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入nintui样式文件
import 'mint-ui/lib/style.min.css'


// 导入mui样式文件
// import './lib/mui/css/mui.min.css'

import './lib/mui/css/mui.css'
// 导入app.vue
import app from './app.vue'
// 导入自定义路由文件
import router from './routes.js'

// 按需导入
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);

// 创建vue实例
new Vue({
	el:'#app',
	data:{},
	render:c=>c(app),
	router
})