import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '@/views/About'
import Experience from '@/views/Experience'
import Skills from '@/views/Skills'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'Dmitry Muzychenko\'s CV'
router.afterEach((to, from) => {
  Vue.nextTick(_ => {
    const title = to.name ? `${to.name} — ${DEFAULT_TITLE}` : DEFAULT_TITLE
    document.title = title
  })
})

export default router
