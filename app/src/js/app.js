import '../../../templates/app/css/main.min.css';
import Vue from './vendor/vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import VueFire from 'vuefire';


import $ from './vendor/jquery/dist/jquery.min';
import './vendor/slick/slick.min';

// Components
import Registration from './components/Registration/registration.vue';
import Home from './components/Home/home.vue';
import Error from './components/Error/Error.vue';



Vue.use(VueRouter);
Vue.use(VueFire);

Vue.config.devtools = true;

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/registration', component: Registration },
        { path: '*', component: Error }
    ]
});


Vue.prototype.$eventHub = new Vue();

const vm = new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
}).$mount('#app');


