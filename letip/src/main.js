import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCoins, faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faCoins,faCircleArrowRight, faCircleArrowLeft)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
