import Vue from 'vue';
import App from './App.vue';
import Vueliate from 'vuelidate';
import 'animate.css';
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import ConnectionStatus from './components/ConnectionStatus';
import Navbar from './components/Navbar';

// import FancyButton from './components/FancyButton';
// import convertDateToString from './filters/date.filter';

// Vue.component('fancy-button', FancyButton);
// Vue.filter('date', convertDateToString);

Vue.config.productionTip = false;
Vue.use(Vueliate);

Vue.use(
    new VueSocketIO({
        debug: true,
        connection: SocketIO('http://localhost:3000')
    })
);
Vue.component('ConnectionStatus', ConnectionStatus);
Vue.component('Navbar', Navbar);

new Vue({
    render: h => h(App)
}).$mount('#app');
