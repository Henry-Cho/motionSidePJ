import { BaseComponent, Component } from "../page/base.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    closeListener? : OnCloseListener;
    submitListener? : OnSubmitListener;

    constructor() {
        super(`<section class="dialog__outer">
                <div class="dialog__inner">
                    <button class="closeBtn">&times;</button>
                    <div id="dialog__body">
                        <button class="dialog__submit">ADD</button>
                    </div>
                </div>
                </section>
              `);

        const closeBtn = this.element.querySelector('.closeBtn') ! as HTMLElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }

        const submitBtn = this.element.querySelector('.dialog__submit') ! as HTMLElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        }
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }

    setOnSubmitListener(listener: OnSubmitListener) {
        this.submitListener = listener;
    }

    addChild(child: Component) {
        const body = this.element.querySelector("#dialog__body") ! as HTMLElement;
        child.attachTo(body);
    }
}