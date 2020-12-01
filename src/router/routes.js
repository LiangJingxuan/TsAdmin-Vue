export default [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('../components/layout/Layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/Home')
      },
      {
        path: '/house',
        name: 'House',
        component: () => import('../views/house/House')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  },
]