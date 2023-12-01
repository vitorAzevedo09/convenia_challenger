import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import apolloProvider from './vue-apollo.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCoins, faArrowUp } from '@fortawesome/free-solid-svg-icons'

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


library.add(faCoins,faArrowUp)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  apolloProvider
}).$mount('#app')

