import { BaseComponent } from "../../page/base.js";

export class Input extends BaseComponent<HTMLElement> {
    constructor() {
        super(`
        <div>
            <div class="form__container">
                <label for="title">Title</label>
                <input id="title" type="text">
            </div>
            <div class="form__container">
                <label for="url">URL</label>
                <input id="url" type="text">
            </div>
        </div>
    `);
    }

    get title(): string {
        const content = this.element.querySelector("#title") ! as HTMLInputElement;
        return content.value;
    }

    get url(): string {
        const content = this.element.querySelector("#url") ! as HTMLInputElement;
        return content.value;
    } 
}