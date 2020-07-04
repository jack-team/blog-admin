import {
    RouteConfig
} from 'react-router-config';

import {
    LazyLoad
} from './../../components';

import auth from './../auth';

const routes: RouteConfig[] = [
    {
        exact: true,
        path: `/user/login`,
        component: auth(LazyLoad(() => (
            import('./../../pages/login')
        )))
    }
];

export default routes;