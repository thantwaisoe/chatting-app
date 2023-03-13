import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import {auth, onAuthStateChanged} from './firebase/config'
let app
onAuthStateChanged(auth, () =>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})


