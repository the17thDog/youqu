import { Login } from '@/pages'
const routes =  [
    { path: '/login', component: Login },
    { path: '/', redirect: '/login' },
]

export default routes