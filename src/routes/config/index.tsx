import React from 'react';

import {
    Redirect
} from 'react-router-dom';

import {
    RouteConfig
} from 'react-router-config';

import Auth from './../auth';
import Slot from './../slot';

import userRoutes from './user';
import homeRoutes from './home';

import Layout from './../../pages/home/layout';

const routes:RouteConfig[] = [
    {
        path: `/`,
        exact: true,
        render: () => <Redirect to="/home" />
    },
    {
        path: `/home`,
        routes: homeRoutes,
        component: Auth(Layout,true)
    },
    {
        path: `/user`,
        routes:userRoutes,
        component: Auth(Slot,false)
    }
];

export default routes;