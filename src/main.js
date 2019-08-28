import Vue from 'vue';
import App from './App.vue';
// import FancyButton from './components/FancyButton';

// import convertDateToString from './filters/date.filter';
// Vue.filter('date', convertDateToString);

Vue.config.productionTip = false;
// Vue.component('fancy-button', FancyButton);

new Vue({
    render: h => h(App)
}).$mount('#app');
