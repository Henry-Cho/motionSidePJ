import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
    private readonly page: PageComponent;
    // private readonly image: ImageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("ImageTitle", `https://picsum.photos/300/300`);
    
        image.attachTo(appRoot, 'beforeend')
    }
}

new App(document.querySelector('.main_inner') ! as HTMLElement);