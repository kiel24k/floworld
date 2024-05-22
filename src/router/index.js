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
        path: '/contact', 
        name: 'ContactPage',
        component: () => import ('../components/Contact.vue')
    },
    {
        path: '/login', 
        name: 'LoginPage',
        component: () => import ('../components/login.vue'),
      
    },
    {
        path: '/signup', 
        name: 'SignupPage',
        component: () => import ('../components/signup.vue'),
       
    },
     {
        path: '/:unauthorized(.*)*', 
        name: '401',
        component: () => import ('../errors/401.vue')
     },
     {
        path: '/profile',
        name: 'Profile',
        component: () => import ('../components/Profile.vue'),
        meta:{
            requiresAuth: true
        }
     },
     {
        path: '/admin-login',
        name: 'AdminLogin',
        component: () => import ('../components/AdminLogin.vue')
     },
     //admin
     {
        path: '/admin-home',
        name: 'AdminHome',
        component: () => import ('../admin/Home.vue'),
        meta: {
            adminAuth: true
        }
     },
     {
        path: '/add-product',
        name: 'AddProduct',
        component: () => import ('../admin/AddProduct.vue')
     },
     {
        path: '/product-list',
        name: 'ProductList',
        component: () => import ('../admin/Products.vue')
     },
     {
        path: '/update-product',
        name: 'update-product',
        component: () => import ('../admin/UpdateProduct.vue')
     }
     
       
    
     

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise ((resolve => {
            setTimeout(() => resolve({top:0, behavior: "smooth"}),1)
        }))
        return {top:null,left:null, behavior: null}
    }
})

router.beforeEach((to, from, ) => {
    const authLocalStorage = localStorage.getItem("user")
    const adminAuthLocalStorage = localStorage.getItem("admin")
    if(to.meta.requiresAuth && !authLocalStorage){
        return{
            name: "LoginPage"
        }
 }
    if(to.meta.adminAuth && !adminAuthLocalStorage){
        return {
         name: "AdminLogin"
        }
    }
}


// router.beforeEach((to, from,) => {
//     const authLocalStorage = 

// })
)

export default router;

