import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import MixerView from '@/components/MixerView'
import ChannelView from '@/components/ChannelView'
import SettingsView from '@/components/SettingsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mixerview',
      component: MixerView
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    },
    {
      path: '/ch/:channel',
      name: 'channelview',
      component: ChannelView
    },
    {
      path: '/settings',
      name: 'settingsview',
      component: SettingsView
    }
  ]
})
