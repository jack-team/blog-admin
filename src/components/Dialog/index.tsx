import {
    render,
    unmountComponentAtNode
} from 'react-dom'

import React from 'react';

import Layer, {
    Direction
} from './layer';

interface Opts {
    clickClose?:boolean;
    direction?:Direction
}

class Dialog {
    constructor() {
        const tag: string = `div`;
        this.el = document.createElement(tag);
        document.body.appendChild(this.el);
        this.el.setAttribute(...[`role`, 'modal']);
    }

    private dialog: any = null;
    public el: HTMLElement | any = null;

    private onClosed = () => {
        this.dialog = null;
        unmountComponentAtNode(this.el);
        document.body.removeChild(this.el);
    }

    public show = (Content?: any, opts?:Opts) => {
        const {
            direction,
            clickClose
        } = opts || {};

        render((
            <Layer
                children={Content}
                direction={direction}
                clickClose={clickClose}
                onClosed={this.onClosed}
                ref={(e) => this.dialog = e}
            />
        ), this.el);

        if(module.hot) {
            module.hot.accept();
        }

        return this;
    }

    public close = () => {
        if (this.dialog) {
            this.dialog.close();
        }
        return this;
    }
}

export default Dialog;