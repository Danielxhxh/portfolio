import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

import Card from "primevue/card";

const app = createApp(App);

app.component("Card", Card);

app.use(PrimeVue).use(router).mount("#app");
