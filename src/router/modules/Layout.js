import layout from './layout'
const Layout = {
  path: '/',
  name: 'layout',
  component: layout,
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('./views/home')
    },
    {
      path: '/example',
      name: 'Example',
      component: () => import('./views/example')
    },
    {
      path: '/other',
      name: 'Other',
      component: () => import('./views/other')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('./views/my')
    }
  ]
}
export default Layout

