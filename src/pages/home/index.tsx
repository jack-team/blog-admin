import React,{
    PureComponent
} from 'react';

import service from './../../service';

class HomePage extends PureComponent {
    render() {
        return (
            <div>  home page. </div>
        )
    }

    componentDidMount() {
        service.get(`/plate/list`)
    }
}

export default HomePage;

