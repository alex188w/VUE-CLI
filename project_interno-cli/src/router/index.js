import VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import Blog from '@/pages/Blog.vue';
import BlogDetails from '@/pages/BlogDetails.vue';
import ProjectPages from '@/pages/ProjectPage.vue';
import ProjectDetails from '@/pages/ProjectDetails.vue';
import NotFound from '@/pages/NotFound.vue';

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/blogdetails',
            name: 'BlogDetails',
            component: BlogDetails
        },
        {
            path: '/project',
            name: 'Project',
            component: ProjectPages
        },
        {
            path: '/projectdetails',
            name: 'ProjectDetails',
            component: ProjectDetails
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFound
        }
    ]
})
