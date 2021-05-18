import { Router } from './app/core/router.js';
import { Header } from './app/components/layout/header.js';
import { Navigation } from './app/components/layout/nav.js';
import { Footer } from './app/components/layout/footer.js';


(async () => {
    const app = document.getElementById('app');
    const router = new Router();
    const header = new Header();
    const navigation = new Navigation();
    const footer = new Footer();

    app.innerHTML += await header.render();
    app.innerHTML += await navigation.render();

    await router.start();

    app.innerHTML += await footer.render();
})();