import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)
/* add icons to the library */
library.add(fas)
import './index.scss'
import OKButton from './packages/button'

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(OKButton)
// app.component('OKButton', OKButton)
app.use(router)
app.mount('#app')
