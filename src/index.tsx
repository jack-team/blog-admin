import React,{
    Component
} from 'react';

import {
    render
} from 'react-dom';

class App extends Component{
    render() {
        return (
            <div>123456</div>
        )
    }
}

render(<App />,document.getElementById('app'))