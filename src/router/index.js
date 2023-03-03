import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeView1 from "../views/home/HomeView1.vue";
import HomeView2 from "../views/home/HomeView2.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            //子路由不需要加/
            children: [
                {
                    path: "view1",
                    name: "view1",
                    label: "视图1",
                    component: HomeView1
                },
                {
                    path: "view2",
                    name: "view2",
                    label: "视图2",
                    component: HomeView2
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
