
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

Vue.use(VueRouter);

Vue.component(
    'app',
    require('./components/App.vue')
);

Vue.component(
    'site-header',
    require('./components/Parts/Header.vue')
);

Vue.component(
    'site-footer',
    require('./components/Parts/Footer.vue')
);

Vue.mixin({
    data(){
        return {

        }
    },
    mounted(){

    },

    methods : {

    },
    computed : {
        ...mapGetters([
            'Laravel',
            'state'
        ])
    }
});



import { router } from './router';
import { store } from './store';

const app = new Vue({
    el: '#app',
    router,
    store,
});
