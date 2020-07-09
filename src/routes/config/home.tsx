import React from 'react';

import {
    RouteConfig
} from 'react-router-config';

import {
    Redirect
} from 'react-router-dom';

import {
    LazyLoad
} from '../../components';

const routes:RouteConfig[] = [
    {
        exact: true,
        path: `/home`,
        component: LazyLoad(() => (
            import('./../../pages/home')
        ))
    },
    {
        exact: true,
        path: `/home/plate`,
        component: LazyLoad(() => (
            import('./../../pages/plate')
        ))
    },
    {
        exact: true,
        path: `/home/user`,
        render:() => <Redirect to="/home/user/add" />
    },
    {
        exact: true,
        path: `/home/user/add`,
        component: LazyLoad(() => (
            import('./../../pages/user/add')
        ))
    },
    {
        exact: true,
        path: `/home/user/center`,
        component: LazyLoad(() => (
            import('./../../pages/user/center')
        ))
    }
];

export default routes;