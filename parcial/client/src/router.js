import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../src/components/HelloWorld.vue'
import Principal from '../src/components/Principal.vue'
import Register from '../src/components/Register.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [

    {
        path:"/",
        name: "Login",
        component: Login
    },
    {
        path:"/principal",
        name:"Principal",
        component: Principal
    },
    {
        path:"/register",
        name:"Register",
        component: Register
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next)=>{
    const currentUser = firebase.auth().currentUser;
    const auth = to.matched.some(record => record.meta.auth);
    if (auth && !currentUser) {
      next('/login');
    } else if (auth  && currentUser) {
      next();
    } else {
      next();
    }
   });

export default router;