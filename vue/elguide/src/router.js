import VueRouter from 'vue-router'
import menu1 from '@/components/page/menu1'
import menu2 from '@/components/page/menu2'

let routes = [
  {
    name: 'menu1',
    path: '/menu1',
    component: menu1
  },
  {
    name: 'menu2',
    path: '/menu2',
    component: menu2
  }
]
export default new VueRouter({routes, mode: 'history'})
