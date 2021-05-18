import { GLOBAL_SVG } from "../core/globals.js";

export class ServicesComponent {
    async getServices() {
        const url = `https://jsonplaceholder.typicode.com/comments?_limit=6`;
        const request = await fetch(url);
        const response = await request.json();
        return response;
    }


    async render() {
        this.servicesTemplate = '';
        const services = await this.getServices();
        services.forEach(service => {
            this.servicesTemplate += `
            <div class="white-box flex-box-s margin-box">
                <div class="flex flex-align-items-center">
                    <small class="icon-button primary-bg">${service.id}</small>
                    <div class="util-spacer-x"></div>
                    <h4>${service.name}</h4>
                </div>
                <p>${service.body}</p>
            </div>
            `;
        })
        return `
        <div class="page-title">
            <h2>Services</h2>
        </div>
        <section class="wrapper box">

        <div class="flex flex-wrap flex-margin-fix">
        ${this.servicesTemplate}
    </div>

        </section>
        `;
    }

};