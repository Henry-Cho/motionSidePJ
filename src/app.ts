import { Component } from "./components/page/base.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent } from "./components/page/page.js";

class App {
    private readonly page: Component & Composable;
    // private readonly image: ImageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent("ImageTitle", `https://picsum.photos/300/300`);

        this.page.addChild(image);
        
        const note = new NoteComponent("Note Title", "First Note");

        this.page.addChild(note);

        const todo = new TodoComponent("HEHEHE", "LOL");

        this.page.addChild(todo);

        const video = new VideoComponent("New Video", "https://youtu.be/0-q1KafFCLU")
        
        this.page.addChild(video);
    }
}

new App(document.querySelector('.main_inner') ! as HTMLElement);