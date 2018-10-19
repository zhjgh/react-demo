export default [
  // user
  {
    path: '/user',
    component: '../layout/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './user/login' }
    ],
  },
  // app
  {
    path: '/',
    component: '../layout/BasicLayout',
    routes: [
      { path: '/', redirect: '/locale' },
      { path: '/locale', component: './locale' },
      { path: '/cards', component: './cards' },
    ]
  },
]