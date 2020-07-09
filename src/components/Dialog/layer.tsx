import React,{
    PureComponent
} from 'react';

export type Direction =
    'top' |
    'bottom' |
    'left' |
    'right' |
    'center' |
    'none';

interface Props {
    duration?: number,
    onClosed:Function;
    clickClose:boolean;
    direction: Direction
}

interface State {
    show: boolean,
    maskShow: boolean,
    contentShow: boolean
}

import Container from './container';

class Layer extends PureComponent<Props, State> {
    static defaultProps = {
        duration: 400,
        clickClose: true,
        direction: 'center',
        onClosed:() => null
    }

    state: State = {
        show: true,
        maskShow: true,
        contentShow: true
    }

    private onClosed = () => {
        const {
            onClosed
        } = this.props;

        this.setState({
            show: false
        },() => onClosed())
    }

    public close = () => {
        this.setState({
            maskShow: false,
            contentShow: false
        });
    }

    private onClickMask = () => {
       const {
           clickClose
       } = this.props;

       if(clickClose) {
           this.close();
       }
    }

    render() {
        const {
            show,
            maskShow,
            contentShow
        } = this.state;

        const {
            children,
            duration,
            direction
        } = this.props;

        return show ? (
            <Container
                duration={duration}
                children={children}
                maskShow={maskShow}
                direction={direction}
                contentShow={contentShow}
                onMaskClick={this.onClickMask}
                onContentClosed={this.onClosed}
            />
        ) : null;
    }
}

export default Layer;