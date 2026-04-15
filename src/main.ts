import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { initStorage} from "@/services/storage";

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic layout for the entire app */
import BaseLayout from "@/components/base/BaseLayout.vue";
import BaseButton from "@/components/base/BaseButton.vue";

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

async function bootstrap(){
    const app = createApp(App)
        .use(IonicVue)
        .use(createPinia())
        .use(router);

    app.component('BaseLayout', BaseLayout)
    app.component('BaseButton', BaseButton)


    await initStorage();
    await router.isReady();

    app.mount('#app');
}

bootstrap().catch((error) => {
    console.log('App failed to bootstrap: ', error)
});

