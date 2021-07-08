export class ImageComponent {
    private element : HTMLElement;
    constructor(title: string, url: string) {
        const template = document.createElement('template');
        template.innerHTML = `<section class="image">
        <div class="image_holder"><img class="img_thumnail"></div>
        <p class="image_title"></p>
    </section>`;

    this.element = template.content.firstElementChild ! as HTMLElement;

    const imageElement = this.element.querySelector(".img_thumnail") ! as HTMLImageElement;

    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(".img_title") ! as HTMLParagraphElement;

    titleElement.textContent = title;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}