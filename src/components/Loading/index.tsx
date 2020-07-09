import React from 'react';

import Dialog from './../Dialog';

let loadingInstance:any = null;

import Content from './content';

export default class Loading {
    static show = (msg?:string) => {
        const content = (
            <Content
                msg={msg}
            />
        );

        loadingInstance = (
            new Dialog().show(content, {
                direction:'none',
                clickClose:false
            })
        )
    }

    static close = () => {
        if(loadingInstance) {
            loadingInstance.close();
        }
    }
}



