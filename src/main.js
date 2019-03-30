import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Multilanguage from 'vue-multilanguage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import router from './router';
import Lang from '@/Translations';

Vue.use(BootstrapVue);
Vue.use(Multilanguage, Lang);
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
