import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from "./router";
import * as VueGoogleMaps from 'vue2-google-maps'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

firebase.initializeApp({
  apiKey: "AIzaSyCfjZT88LhiiZ0S73QrwjwAzswx41aEIts",
    authDomain: "keep-on-alert-test.firebaseapp.com",
    projectId: "keep-on-alert-test",
    storageBucket: "keep-on-alert-test.appspot.com",
    messagingSenderId: "284675049172",
    appId: "1:284675049172:web:c255b7b9b6d2fd4a11dd41"
})
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Use google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key:'AIzaSyAt3kvEAhAxdMj5N26H1w7YWbZGeoArvRY'
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
