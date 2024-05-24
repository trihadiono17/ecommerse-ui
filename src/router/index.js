import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import AddCategory from '../views/Category/AddCategory'
import OurCategory from '../views/Category/OurCategory'
import OurProducts from '../views/Products/OurProducts'
const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }, {
        path: '/admin/category/add',
        name: 'AddCategory',
        component: AddCategory
    }, {
        path: '/admin/category',
        name: 'OurCategory',
        component: OurCategory
    }, {
        path: '/admin',
        name: 'AdminView',
        component: AdminView
    }, {
        path: '/admin/product',
        name: 'OurProducts',
        component: OurProducts
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router