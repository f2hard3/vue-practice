import Vue from 'vue';
import App from './App.vue';
import 'animate.css';
import router from './router';

// import Navbar from './components/Navbar';
// import ConnectionStatus from './components/ConnectionStatus';
// import Vueliate from 'vuelidate';
// import SocketIO from 'socket.io-client';
// import VueSocketIO from 'vue-socket.io';
// import FancyButton from './components/FancyButton';
// import convertDateToString from './filters/date.filter';

// Vue.component('fancy-button', FancyButton);
// Vue.filter('date', convertDateToString);

// Vue.use(
//     new VueSocketIO({
//         debug: true,
//         connection: SocketIO('http://localhost:3000')
//     })
// );
// Vue.use(Vueliate);
// Vue.component('ConnectionStatus', ConnectionStatus);
// Vue.component('Navbar', Navbar);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
