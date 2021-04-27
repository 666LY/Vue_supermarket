import vue from 'vue'

import Router from 'vue-router'

vue.use(Router);

const main  = () => import('@/views/home/home')
const jd = () => import('@/views/jd/jd')
const login = () => import('@/views/login/login')
const home= () => import('@/views/main/main')

const routes = [
    {
        path:'/',
        redirect:'/main'
    },
    {
        path:'/home',
        component: home
    },
    {
        path:'/jd',
        component: jd
    },
    {
        path:'/login',
        component: login
    },
    {
        path:'/main',
        component: main
    },
]

const router = new Router({
    routes,
    mode:'history'
})

export  default router
