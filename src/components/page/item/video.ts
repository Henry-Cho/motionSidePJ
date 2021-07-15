import { BaseComponent } from "../base.js"

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title : string, url: string) {
        super(`
        <section class = "video">
            <h2 class= "video__title"></h2>
            <iframe class = "video__content"></iframe>
        </section>
        `);

        const videoTitle = this.element.querySelector(".video__title") ! as HTMLHeadingElement;

        videoTitle.textContent = title;

        const videoContent = this.element.querySelector(".video__content") ! as HTMLIFrameElement;

        function findVideoID (str: string | string[]) : string {
            str = [...str];
            let new_idx : number = str.findIndex((i, idx) => i === "v" && str[idx - 1] === "?");
            let set_idx : number = new_idx === -1 ? str.findIndex((i, idx) => i === "/" && str[idx - 1] === "e") - 2: new_idx;
            let videoID : string = str.slice(set_idx + 2).join("");
            return videoID;
        }

        videoContent.src = `https://www.youtube.com/embed/${findVideoID(url)}`;
    }
}