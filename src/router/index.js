import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {

  }
  Nprogress.start()
  next()
})
router.afterEach(() => {
  Nprogress.done()
})

export default router