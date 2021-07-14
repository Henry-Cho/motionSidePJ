import { BaseComponent } from "../base.js"

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title : string, url: string) {
        super(`
        <section class = "video">
            <h2 class= "video__title"></h2>
            <iframe class = "video__content"></iframe>
        </section>
        `);

        const videoTitle = this.element.querySelector(".video__title") ! as HTMLHeadElement;

        videoTitle.textContent = title;

        const videoContent = this.element.querySelector(".video__content") ! as HTMLVideoElement;

        videoContent.src = url;
    }
}