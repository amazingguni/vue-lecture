import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue({
  methods:{
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
