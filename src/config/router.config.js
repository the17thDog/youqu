import { Home, Login, Scenic, UserCenter, Admin } from '@/pages'
const routes =  [
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    { 
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'scenicId',
        path: '/scenic/:id',
        component: Scenic
    },
    {
        name: 'userCenter',
        path: '/center',
        component: UserCenter
    },
    {
        name: 'admin',
        path: '/admin',
        component: Admin
    },
    {
        path: '/',
        redirect: '/login'
    }
]

export default routes