import {
    Provider
} from 'react-redux';

import React from 'react';

import ReactDom from 'react-dom';

import {
    PersistGate
} from 'redux-persist/integration/react';

import store, { persist } from './store';

import './styles/theme.less';

import 'antd/dist/antd.less';

import './styles/common.scss';

import Routers from './routes';

const App:any = (
    <PersistGate persistor={persist}>
        <Provider store={store}>
            <Routers />
        </Provider>
    </PersistGate>
);

const appId:string = `app-root`;

const container = (
    document.getElementById(appId)
);

ReactDom.render(App, container);

if(module.hot) {
    module.hot.accept();
}


