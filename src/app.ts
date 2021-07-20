import { InputDialog } from "./components/dialog/dialog.js";
import { Input } from "./components/dialog/input/input.js";
import { TextInput } from "./components/dialog/input/text-input.js";
import { Component } from "./components/page/base.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
// import { NoteComponent } from "./components/page/item/note.js";
// import { TodoComponent } from "./components/page/item/todo.js";
// import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

class App {
    private readonly page: Component & Composable;
    // private readonly image: ImageComponent;
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        // const image = new ImageComponent("ImageTitle", `https://picsum.photos/300/300`);

        // this.page.addChild(image);
        
        // const note = new NoteComponent("Note Title", "First Note");

        // this.page.addChild(note);

        // const todo = new TodoComponent("HEHEHE", "LOL");

        // this.page.addChild(todo);

        // const video = new VideoComponent("New Video", "https://youtu.be/0-q1KafFCLU")
        
        // this.page.addChild(video);

        const imageBtn = document.querySelector("#image__modal") ! as HTMLButtonElement;

        const videoBtn = document.querySelector("#video__modal") ! as HTMLButtonElement;

        const noteBtn = document.querySelector("#note__modal") ! as HTMLButtonElement;

        const todoBtn = document.querySelector("#todo__modal") ! as HTMLButtonElement;

        imageBtn.addEventListener('click', ()=> {
            const dialog = new InputDialog();
            const inputSection = new Input();

            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(dialogRoot);
            })

            dialog.setOnSubmitListener(()=> {
                // create a section and add it to the page
                const image = new ImageComponent(inputSection.title, inputSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            })
        })

        videoBtn.addEventListener('click', ()=> {
            const dialog = new InputDialog();
            const inputSection = new Input();

            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(dialogRoot);
            })

            dialog.setOnSubmitListener(()=> {
                // create a section and add it to the page
                const video = new VideoComponent(inputSection.title, inputSection.url);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            })
        })

        noteBtn.addEventListener('click', ()=> {
            const dialog = new InputDialog();
            const inputSection = new TextInput();

            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(dialogRoot);
            })

            dialog.setOnSubmitListener(()=> {
                // create a section and add it to the page
                const note = new NoteComponent(inputSection.title, inputSection.body);
                this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            })
        })

        todoBtn.addEventListener('click', ()=> {
            const dialog = new InputDialog();
            const inputSection = new TextInput();

            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(dialogRoot);
            })

            dialog.setOnSubmitListener(()=> {
                // create a section and add it to the page
                const todo = new TodoComponent(inputSection.title, inputSection.body);
                this.page.addChild(todo);
                dialog.removeFrom(dialogRoot);
            })
        })
    }
}

new App(document.querySelector('.main_inner') ! as HTMLElement, document.body);