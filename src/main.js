import Vue from 'vue'

import VueRouter from 'vue-router'
// 手动安装 VueRouter
Vue.use(VueRouter)

// 导入自定义的app组件
import app from './app.vue'

// 导入自定义路由模块
import router from './routes.js'

var vm =new Vue({
	el:'#app',
	render:c=>c(app),
	router
})

/*注意：app这个组件，是通过vue实例的render函数渲染出来的，这个函数要渲染
组件，那么只能放到el:'#app'所指定的元素中*/

// content1 和content2组件，是通过路由匹配到的，所以只能展示在属于路由的routes-view中