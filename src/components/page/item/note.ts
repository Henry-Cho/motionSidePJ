import { BaseComponent } from "../base.js"

export class NoteComponent extends BaseComponent<HTMLElement>{
    constructor(title : string, content: string) {
        super(`
        <section class = "note">
            <h2 class= "note__title"></h2>
            <p class ="note__content"></p>
        </section>
        `);

        const noteTitle = this.element.querySelector(".note__title") ! as HTMLHeadingElement;

        noteTitle.textContent = title;

        const noteContent = this.element.querySelector(".note__content") ! as HTMLParagraphElement;

        noteContent.textContent = content;
    }
}