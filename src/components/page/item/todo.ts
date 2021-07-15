import { BaseComponent } from "../base.js"

export class TodoComponent extends BaseComponent<HTMLElement>{
    constructor(title : string = "ToDo Title", content: string) {
        super(`
        <section class = "todo">
            <h2 class= "todo__title"></h2>
            <div>
                <input type="checkbox">
                <label for="${content}" class="todo__content"></label>
            </div>
        </section>`);

        const todoTitle = this.element.querySelector(".todo__title") ! as HTMLHeadingElement;

        console.log(todoTitle);

        todoTitle.textContent = title;

        const todoContent = this.element.querySelector(".todo__content") ! as HTMLElement;

        todoContent.textContent = content;
    }
}