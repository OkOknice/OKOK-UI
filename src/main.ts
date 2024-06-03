import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入样式
import './index.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
// 引入 OKOK-UI 组件库
import OKOKUI from './okok-ui'

let a: number = 123
a = 456

const app = createApp(App)
/* add icons to the library */
library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.use(OKOKUI)

app.mount('#app')
