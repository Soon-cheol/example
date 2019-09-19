import VueRouter from 'vue-router'
import menu11 from '@/components/page/menu11'
import menu21 from '@/components/page/menu21'

let routes = [
  {
    name: 'menu',
    path: '/',
    component: menu11
  },
  {
    name: 'menu11',
    path: '/menu11',
    component: menu11
  },
  {
    name: 'menu21',
    path: '/menu21',
    component: menu21
  }
]
export default new VueRouter({routes, mode: 'history'})
