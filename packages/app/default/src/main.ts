import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import { register } from "org.eclipse.daanse.board.app.lib.module1";
import { container, boot } from "org.eclipse.daanse.board.app.lib.core";




boot(['org.eclipse.daanse.board.app.lib.module1'])
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
