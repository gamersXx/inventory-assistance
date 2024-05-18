import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { createPinia } from 'pinia';
// import '@fontsource-variable/onest';
import 'sigae-components/dist/style.css';
import './assets/css/style.css';

// const pinia = createPinia();
const app = createApp(App);
// app.use(pinia);
app.use(router);
app.mount('#app');
