/** Load packages */
import { createApp, h } from 'vue';
import App from './App.vue';

/** Add everything together */
const app = createApp({
  render: () => h(App)
});

/** v-fit-text-to-box */
import Fit2Box from 'vue-fit2box';
app.directive('fit2box', Fit2Box);

/** Mount the app */
app.mount('#app');