import { Home, Login, Scenic } from '@/pages'
const routes =  [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/scenic/:id', component: Scenic },
    { path: '/', redirect: '/login' }
]

export default routes