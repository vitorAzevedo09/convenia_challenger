import './assets/css/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCoins, faArrowUp } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCoins, faArrowUp)

const app = createApp(App)

app.use(createPinia())

app
  .component('font-awesome-icon',FontAwesomeIcon)
  .mount('#app')
