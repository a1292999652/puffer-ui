import Vue from 'vue'
import App from './App.vue'
import packages from './../packages'

Vue.use(packages);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
