import { GLOBAL_VARS, IMG_DIR } from '../../core/globals.js';

export class Header {
    render() {
        return `
        <header class="flex flex-align-items-center">
        <img src="${IMG_DIR}logo-secondary.png">
        <h1>${GLOBAL_VARS.APP_TITLE}</h1>
        </header>
        `;
    }
}