import { BaseComponent } from "../base";

export class ImageComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`<section class="image">
                <div class="image_holder"><img class="img_thumnail"></div>
                <p class="image_title"></p>
               </section>`);

    const imageElement = this.element.querySelector(".img_thumnail") ! as HTMLImageElement;

    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(".image_title") ! as HTMLParagraphElement;

    titleElement.textContent = title;
    }
}