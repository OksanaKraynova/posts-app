import Posts from '@/pages/Posts.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    
    {
        path: '/posts',
        component: Posts,
        alias: '/'
    },
 
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router 