import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import './utils/jquery.min'
import './utils/rem.js'


Vue.prototype.$axios = Axios


// import '@/utils/mobileAdapt' // 移动适配

/**引入第三方插件库 */
import ElementUI from 'element-ui'
Vue.use(ElementUI)

/**注册全局组件  */
import Components from './components'
Object.keys(Components).forEach(compName => {
    Vue.component(compName, Components[compName])
})

/** vue-cookie **/
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

/** 引用公共样式 **/
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')