import { createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<any> = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: () => import('../views/Home.vue'),
        meta: {
            breadcrumb: [{ parent: 'Intro', label: 'Intro' }],
            auth: true
        },
    },
    {
        path: '/about',
        name: 'About',
        exact: true,
        component: () => import('../views/About.vue'),
        meta: {
            breadcrumb: [{ parent: 'Intro', label: 'Intro' }],
            auth: true
        },
    },
    {
        path: '/work',
        name: 'Work',
        exact: true,
        component: () => import('../views/Work.vue'),
        meta: {
            breadcrumb: [{ parent: 'Intro', label: 'Intro' }],
            auth: true
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router;
export {
    routes
}
