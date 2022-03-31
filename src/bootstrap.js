import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount fn to start app

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// cases : development & isolation all mount immediately
// if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot){
        mount(devRoot);
    };
// };


// else, run through container, export Mount fn

export { mount };