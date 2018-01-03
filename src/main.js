import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import UserPortfolio from './components/UserPortfolio.vue';
import UserPortfolioHeader from './components/UserPortfolioHeader.vue';
import VueResource from 'vue-resource';

Vue.use(BootstrapVue)
Vue.use(VueResource)


Vue.component('user-portfolio', UserPortfolio);
Vue.component('user-portfolio-header', UserPortfolioHeader);

new Vue({
  el: '#app',
  render: h => h(App)
})
