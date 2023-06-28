const routes: any[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'category/:id',
        name: 'category',
        component: () => import('@/views/category/index.vue'),
        props: true
      },
      {
        path: 'secondCategory/:id',
        name: 'secondCategory',
        component: () => import('@/views/secondCategory/index.vue'),
        props: true
      },
      {
        path: 'details/:id',
        name: 'detail',
        component: () => import('@/views/details/index.vue'),
        props: true
      },
      {
        path: '/cartList',
        name: 'cartList',
        component: () => import('@/views/cartList/index.vue')
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('@/views/checkout/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

export default routes
