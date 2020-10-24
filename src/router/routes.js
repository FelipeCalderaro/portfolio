
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/home.vue') },
      { path: 'contact', name: 'contato', component: () => import('pages/contact.vue') },
      { path: 'about', name: 'about', component: () => import('pages/about.vue') },
      { path: 'portfolio', name: 'portfolio', component: () => import('pages/portfolio.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
