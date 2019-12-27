import Vue from 'vue'
import App from './App.vue'

export const dataBus = new Vue({
  // methods: {
  //   changeStatus(status) {
  //     this.$emit('statusWasChanged', status)
  //   },
  //   changeShowDetail(e) {
  //     this.$emit('showWasChanged', e)
  //   }
  // }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
