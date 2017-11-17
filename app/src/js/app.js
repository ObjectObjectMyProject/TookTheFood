import '../../../templates/app/css/main.min.css';
import Vue from './vendor/vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import VueFire from 'vuefire';


import './vendor/slick/slick.min';

// Components
import Registration from './components/Registration/registration.vue';
import Home from './components/Home/home.vue';
import Error from './components/Error/Error.vue';
import Profile from './components/Profile/profile.vue';
import Category from './components/Category/category.vue';


Vue.use(VueRouter);
Vue.use(VueFire);

Vue.config.devtools = true;

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/registration', component: Registration },
        { path: '/profile/:id', component: Profile },
        { path: '/pizza', component: Category },
        { path: '*', component: Error }

    ]
});




const vm = new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
}).$mount('#app');


