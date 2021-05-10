import vue from 'vue'

import Router from 'vue-router'

vue.use(Router);

const main  = () => import('@/views/home/home')
const jd = () => import('@/views/jd/jd')
const login = () => import('@/views/login/login')
const home= () => import('@/views/main/main')
const Bscroll = () => import('@/views/BScroll/BScroll')
const Detail = () => import('../views/detail/detail')

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
        component: Bscroll
    },
    {
        path:'/login',
        component: login
    },
    {
        path:'/main',
        component: main
    },
    {
        path:'/detail/:iid',  //添加请求参数属性加:
        component:Detail
    }
]

const router = new Router({
    routes,
    mode:'history'
})

export  default router
