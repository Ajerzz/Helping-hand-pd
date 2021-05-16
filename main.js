import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
//import VueFire from 'vuefire'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/database'
import "firebase/auth"
//import firebaseui from 'firebaseui'



Vue.use(messagePlugin)
Vue.config.productionTip = false
Vue.use(Vuelidate)
//Vue.use(VueFire)

const firebaseConfig = {
  apiKey: "AIzaSyCTIuaZDRPef_9it9KSzb7MMx1RAFnexNE",
  authDomain: "helping-hand-a0e33.firebaseapp.com",
  databaseURL: "https://helping-hand-a0e33-default-rtdb.firebaseio.com",
  projectId: "helping-hand-a0e33",
  storageBucket: "helping-hand-a0e33.appspot.com",
  messagingSenderId: "786548269010",
  appId: "1:786548269010:web:9d88d26623027f127ab20b"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  
  router,
  store,
  render: h => h(App),
}).$mount('#app')
