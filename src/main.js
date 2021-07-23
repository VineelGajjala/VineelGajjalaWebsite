import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './scss/main.scss'

Vue.use(VueRouter)
import Home from './components/views/Home'
import About from './components/views/About'
import Experience from './components/views/Experience'
import Contact from './components/views/Contact'
import NotFound from './components/views/NotFound'


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/experience', component: Experience },
    { path: '/contact', component: Contact },
    { path: '/*', component: NotFound },
  ],
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
