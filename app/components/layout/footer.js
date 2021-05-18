import { GLOBAL_VARS } from '../../core/globals.js';

export class Footer {
    constructor() {
        const date = new Date();
        this.time = date.getFullYear();
    }
    render() {
        return `
        <footer>
            <h4>${GLOBAL_VARS.APP_TITLE}</h4>
            <small>${this.time}</small>
        </footer>
        `;
    }
}