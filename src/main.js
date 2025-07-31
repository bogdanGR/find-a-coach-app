import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from  './App.vue';
import BaseCard from './components/ui/baseCard.vue';
import BaseButton from './components/ui/baseButton.vue';
import BaseBadge from './components/ui/baseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard); // registering of a global component
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');