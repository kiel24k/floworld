import {createRouter, createWebHistory} from "vue-router"
import HomePage from '../components/HomePage.vue'


const routes = [
    {
    path: '/', 
    name: 'HomePage',
    component: HomePage
    },
    {
        path: '/product', 
        name: 'ProductPage',
        component: () => import ('../components/ProductPage.vue')
    },
    {
        path: '/about_us', 
        name: 'AboutUsPage',
        component: () => import ('../components/AboutUs.vue')
    },
    {
        path: '/blog', 
        name: 'BlogPage',
        component: () => import ('../components/BlogPage.vue')
    },
    {
        path: '/contact', 
        name: 'ContactPage',
        component: () => import ('../components/Contact.vue')
    },
    {
        path: '/login', 
        name: 'LoginPage',
        component: () => import ('../components/login.vue')
    },
    {
        path: '/signup', 
        name: 'SignupPage',
        component: () => import ('../components/signup.vue')
    },
     {
        path: '/unauthorized', 
        name: '401',
        component: () => import ('../errors/401.vue')
     }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;