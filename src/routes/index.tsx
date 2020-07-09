import React from 'react';

import {
    BrowserRouter
} from 'react-router-dom';

import {
    renderRoutes
} from "react-router-config";

import configs from './config';

export default () => (
    <BrowserRouter>
        {renderRoutes(configs)}
    </BrowserRouter>
)