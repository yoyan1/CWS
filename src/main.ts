import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from '@/firebase/config';
import '@/assets/main.css';
import '@/assets/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Button from 'primevue/button';

const app = createApp(App);
app.use(VueFire, {
	firebaseApp,
	modules: [VueFireAuth()],
});
app.use(PrimeVue, {
	theme: 'none',
});

// component here:
app.component('Button', Button);

app.use(createPinia());
app.use(router);

app.mount('#app');