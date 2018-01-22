import { Home, Login } from '@/pages'
const routes =  [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/', redirect: '/login' }
]

export default routes