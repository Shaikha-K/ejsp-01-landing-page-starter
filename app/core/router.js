import { HomeComponent } from '../pages/home.js';
import { AboutComponent } from '../pages/about.js';
import { ServicesComponent } from '../pages/services.js';
import { GLOBAL_ROUTES } from './globals.js';

export const routes = {};

routes[''] = { name: 'Home', component: HomeComponent};
routes['/'] = { name: 'Home', component: HomeComponent};
routes[GLOBAL_ROUTES.HOME] = { name: 'Home', component: HomeComponent};
routes[GLOBAL_ROUTES.SERVICES] = { name: 'Services', component: ServicesComponent};
routes[GLOBAL_ROUTES.ABOUT] = { name: 'About', component: AboutComponent};

export class Router {

    constructor() {
        this.route = window.location.pathname.split('/')[1];
    }

    async start() {
        const component = new routes[this.route].component();
        const render = await component.render();
        app.innerHTML += `<main>${render}</main>`;
    }
}