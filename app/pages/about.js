import { GLOBAL_SVG } from "../core/globals.js";

export class AboutComponent {
    constructor() {

    }

    render() {
        return `
        <div class="page-title">
            <h2>About Us</h2>
        </div>
        <section class="wrapper box">

            <img class="img-svg flex util-center box" src="${GLOBAL_SVG.ACCEPT_REQUEST}" />
            
            <section class="flex flex-column">
                <article class="box white-box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in. Id ornare arcu odio ut sem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in. Id ornare arcu odio ut sem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in. Id ornare arcu odio ut sem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in. Id ornare arcu odio ut sem.
                </article>
            </section>

        </section>
        `;
    }
}