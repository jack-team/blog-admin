import {
    RouteConfig
} from 'react-router-config';

import {
    LazyLoad
} from './../../components';

const routes: RouteConfig[] = [
    {
        exact: true,
        path: `/user/login`,
        component: LazyLoad(() => (
            import('./../../pages/login')
        ))
    }
];

export default routes;