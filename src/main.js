import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter)
import Home from './components/Home'
import About from './components/About'


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)



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
