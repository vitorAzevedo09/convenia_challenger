import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import apolloClient from './api/vue-apollo.js'
import { createApolloProvider } from '@vue/apollo-option'

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

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

new Vue({
  render: h => h(App),
  store,
  apolloProvider
}).$mount('#app')

