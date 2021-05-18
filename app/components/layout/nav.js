import { GLOBAL_VARS } from '../../core/globals.js';
import { routes } from '../../core/router.js';

export class Navigation {
    constructor() {
    }

    getRoutes() {

    }

    render() {
        let linksTemplate = '';
        for (const [key, value] of Object.entries(routes)) {
            if (key === '/' || key === '') {
                continue;
            }
            linksTemplate += `<a href="${key}">${value.name}</a>`
        }

        return `
        <nav>
           ${linksTemplate}
        </nav>
        `;
    }
}