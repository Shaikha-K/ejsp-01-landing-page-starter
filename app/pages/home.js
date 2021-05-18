import { GLOBAL_SVG, SVG_DIR, GLOBAL_IMG, GLOBAL_ROUTES } from "../core/globals.js";

export class HomeComponent {

    async getComments() {
        const url = `https://jsonplaceholder.typicode.com/comments?_limit=3`;
        const request = await fetch(url);
        const response = await request.json();
        return response;
    }

    async render() {
        this.commentTemplate = '';
        const comments = await this.getComments();
        comments.forEach(comment => {
            this.commentTemplate += `
            <div class="flex-box margin-box">
                <h4>${comment.name}</h4>
                <p>${comment.body}</p>
            </div>
            `;
        })
       

        return `
        <section class="box" id="hero-header" style="background-image: linear-gradient(rgba(0, 130, 241,0.4), rgba(0, 130, 241,0.4) 70%), url('${GLOBAL_IMG.HERO_HEADER}')">

            <article class="flex flex-wrap flex-justify-content-center" style="margin-top: var(--theme-padding-xxl)">
                <div class="flex flex-column" class="hero-header-content-container">
                    <p class="hero-header-cta-text" style="max-width:600px">We build, deliver and future-proof websites for everyone.</p>
                    <img class="img-svg box" src="${GLOBAL_SVG.BUILDING_WEBSITES}" />
                </div>
                <div class="box">
                    <a href="${GLOBAL_ROUTES.SERVICES}" class="cta-button">Get Started</a>
                </div>
            </article>
        </section>
            <section class="wrapper box">
                <article class="white-box landing-page-article">
                    <div class="flex flex-wrap flex-align-items-start">
                        <div class="flex-box">
                            <img class="img-svg box" src="${GLOBAL_SVG.SUCCESS_FACTORS}" />
                        </div>

                        <div class="flex-box">
                            <h3>Featured In</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in. Id ornare arcu odio ut sem.</p>
                        </div>
                    </div>

                    <div class="video-container box flex flex-justify-content-center">
                        <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/oe70Uhjc_F4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                </article>

                <article class="white-box landing-page-article">
                    <div class="flex flex-wrap flex-align-items-start">
                        <div class="flex-box">
                            <img class="img-svg box" src="${GLOBAL_SVG.ACCEPT_REQUEST}" />
                        </div>

                        <div class="flex-box">
                            <h3>How We Can Help You</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in. Id ornare arcu odio ut sem.</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap flex-margin-fix">
                        ${this.commentTemplate}
                    </div>

                </article>

                <article class="white-box landing-page-article">
                <h3>Meet The Team</h3>
                    <div class="flex flex-wrap flex-align-items-start">
                        <div class="flex-box flex flex-column">
                            <img class="img-avatar" src="${SVG_DIR}/team_1.svg">
                            <h5 class="txt-avatar">Gilbert Douglas</h5>
                        </div>

                        <div class="flex-box flex flex-column">
                            <img class="img-avatar" src="${SVG_DIR}/team_2.svg">
                            <h5 class="txt-avatar">Jack Dixon</h5>
                        </div>
                        
                        <div class="flex-box flex flex-column">
                            <img class="img-avatar" src="${SVG_DIR}/team_3.svg">
                            <h5 class="txt-avatar">Donald Gray</h5>
                        </div>
                    </div>
                </article>
            </section>

            <style>
            main {
                padding-top:0;
            }
            </style>
        `;
    }

};