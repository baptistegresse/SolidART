const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/marketplace', component: () => import('pages/MarketPlace.vue') },
      {
        path: '/marketplace/1',
        component: () => import('pages/NFTs/_id/IndexPage.vue')
      },
      { path: '/mynft', component: () => import('pages/MyNft.vue') },
      { path: '/contact', component: () => import('pages/ContactUs.vue') },
      { path: '/payment', component: () => import('pages/ToPayment.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
