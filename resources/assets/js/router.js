import VueRouter from 'vue-router';

const routes = [
    {
        path: '/:locale(' + Laravel.locales_chars.join('|') + ')?',
        name: 'app-index',
        component :  require('./components/Pages/Index.vue'),
        children : [
            {
                path: 'home',
                name: 'home',
                component: require('./components/Pages/Home.vue'),
            },
            {
                path: 'news',
                name: 'news',
                component: require('./components/Pages/News.vue'),
            },
            {
                path: 'cards',
                name: 'cards',
                component: require('./components/Pages/Cards.vue'),
            },
            {
                path: 'credits',
                name: 'credits',
                component: require('./components/Pages/Credit.vue'),
            },
            {
                path: 'insides',
                name: 'insides',
                component: require('./components/Pages/Insides.vue'),
            },
            {
                path: 'suggestions',
                name: 'suggestions',
                component: require('./components/Pages/Suggestions.vue'),
            },
            {
                path: 'service',
                name: 'service',
                component: require('./components/Pages/Service.vue'),
            },

        ]
    },
    {
        path: '*',
        name: 'not_found',
        component: require('./components/Pages/404.vue'),
    },
];

export const router = new VueRouter({
    routes,
    linkActiveClass : 'active',
    mode : 'history',
    base : '/'
});
