import React,{
    Fragment
} from 'react';

import {
    renderRoutes,
    RouteConfigComponentProps
} from 'react-router-config';

import 'antd/dist/antd.css';

const App = (props: RouteConfigComponentProps) => {
    const {
        route
    } = props || {};

    const {
        routes = []
    } = route || {};

    return (
        <Fragment>
            {renderRoutes(routes)}
        </Fragment>
    )
}

export default App;