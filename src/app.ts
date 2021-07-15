import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
    private readonly page: PageComponent;
    // private readonly image: ImageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("ImageTitle", `https://picsum.photos/300/300`);
        
        const note = new NoteComponent("Note Title", "First Note");

        const todo = new TodoComponent("HEHEHE", "LOL");

        const video = new VideoComponent("New Video", "https://youtu.be/0-q1KafFCLU")
        image.attachTo(appRoot, 'beforeend');
        note.attachTo(appRoot, "beforeend");
        todo.attachTo(appRoot, "beforeend");
        video.attachTo(appRoot, "beforeend");
    }
}

new App(document.querySelector('.main_inner') ! as HTMLElement);