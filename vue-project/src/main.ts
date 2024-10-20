import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// global and tailwindcss
import './css/tailwindcss.css'
import './css/global.css'

// vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.min.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// v-drag
import drag from 'v-drag'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})
app.use(router)
app.use(pinia)
app.use(vuetify)
app.use(drag)
app.mount('#app')
