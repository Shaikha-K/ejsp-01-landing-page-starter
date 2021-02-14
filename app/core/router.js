import { HomeComponent } from '../pages/home.js';

export const routes = {
    '/': { name: 'Home', component: HomeComponent},
    '/home': { name: 'Home', component: HomeComponent},
};

export class Router {

    constructor() {
        this.route = window.location.pathname;
    }

    start() {
        app.innerHTML += `<main>${new routes[this.route].component().render()}</main>`;
    }
}