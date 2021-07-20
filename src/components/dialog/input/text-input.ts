import { BaseComponent } from "../../page/base.js";

export class TextInput extends BaseComponent<HTMLElement> {
    constructor() {
        super(`
        <div>
            <div class="form__container">
                <label for="title">Title</label>
                <input id="title" type="text">
            </div>
            <div class="form__container">
                <label for="body">Body</label>
                <textarea id= "body" type="text" row="3"></textarea>
            </div>
        </div>
    `);
    }

    get title(): string {
        const content = this.element.querySelector("#title") ! as HTMLInputElement;
        return content.value;
    }

    get body(): string {
        const content = this.element.querySelector("#body") ! as HTMLInputElement;
        return content.value;
    } 
}