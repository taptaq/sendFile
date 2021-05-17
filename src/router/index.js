import Vue from 'vue'
import VueRouter from 'vue-router'
import personSend from './personSend'
import home from './HOME'
import groupSend from './groupSend'
import chatRoom from './chatRoom'

Vue.use(VueRouter)

const routes = [
  personSend,
  home,
  groupSend,
  chatRoom
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
