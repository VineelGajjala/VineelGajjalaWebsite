import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Vue2Sidebar from 'vue2-sidebar';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import Home from './components/HelloWorld';
import About from './components/about';

Vue.use(VueSidebarMenu)
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vue2Sidebar);



Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
