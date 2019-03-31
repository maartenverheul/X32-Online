import Vue from 'vue'
import Router from 'vue-router'
import FaderOverviewPage from '@/components/FaderOverviewPage'
import BankPage from '@/components/BankPage'
import ChannelPage from '@/components/ChannelPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bankpage',
      component: BankPage
    },
    {
      path: '/overview',
      name: 'faderoverviewpage',
      component: FaderOverviewPage
    },
    {
      path: '/ch/:channel',
      name: 'channelpage',
      component: ChannelPage
    }
  ]
})
