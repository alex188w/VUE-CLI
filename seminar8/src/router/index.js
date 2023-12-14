import VueRouter from "vue-router";
// Вариант 1
import MainPages from "@/pages/MainPages.vue";
import AboutPages from "@/pages/AboutPages.vue";
import ContactPages from "@/pages/ContactPages.vue";
import CatalogPage from "@/pages/CatalogPage.vue";

import NotFound from "@/pages/NotFound.vue";

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            // Вариант 1
            component: MainPages,
            // Вариант 2 - предпочтительный - динамическая
            // component: import ("@/pages/MainPages.vue"),
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPages,
            // component: import ("@/pages/AboutPages.vue"),
        },
        {
            path: '/contact/:page?',
            name: 'contact',
            component: ContactPages,
            // component: import ("@/pages/ContactPages.vue"),
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogPage,
            // component: import ("@/pages/AboutPages.vue"),
        },
        {
            path: '*',
            // name: '404',
            // component: NotFound,
            // Можно так:
            redirect: {
                name: 'main',
            }
        },
    ]
});

