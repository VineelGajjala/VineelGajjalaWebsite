import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Vue2Sidebar from 'vue2-sidebar';


Vue.use(VueSidebarMenu)
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vue2Sidebar);



Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
