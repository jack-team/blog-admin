import React from 'react';

import {
    Redirect
} from 'react-router-dom';

import {
    RouteConfig
} from 'react-router-config';

import App from './../../app';

import userRoutes from './user';
import homeRoutes from './home';

const routes:RouteConfig[] = [
    {
        path: `/`,
        exact: true,
        render: () => <Redirect to="/home" />
    },
    {
        path: `/home`,
        component: App,
        routes: homeRoutes
    },
    {
        path: `/user`,
        component: App,
        routes:userRoutes
    }
];

export default routes;