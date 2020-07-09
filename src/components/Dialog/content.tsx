import React,{
    PureComponent
} from 'react';

import {
    Direction
} from './layer';

interface Props {
    show: boolean,
    duration: number,
    direction:Direction,
    onShown: Function,
    onClosed: Function
}

interface State {
    show: boolean
}

import styles from './styles.scss';

const strategy:any = {
    top:styles.dialog_direction_top,
    left:styles.dialog_direction_left,
    none:styles.dialog_direction_none,
    right:styles.dialog_direction_right,
    bottom:styles.dialog_direction_bottom,
    center:styles.dialog_direction_center
};

class Content extends PureComponent<Props, State> {
    static defaultProps = {
        show: false,
        duration: 400,
        direction:`center`,
        onShown: () => null,
        onClosed: () => null
    }

    timers:Array<any> = [];

    state: State = {
        show: false
    }

    componentDidMount() {
        this.onShowFn();
    }

    componentWillUnmount() {
        this.timers.forEach(
            (time:any) => (
                clearTimeout(time)
            )
        )
        this.timers = [];
    }

    componentDidUpdate() {
        const {
            show
        } = this.props;

        const {
            show: stateShow
        } = this.state;

        if (show === stateShow) {
            return false
        }

        //显示
        if (show) {
            this.onShowFn();
        }
        else {
            this.onCloseFn();
        }
    }

    private onShowFn = () => {
        const ms: number = 16;
        this.timers.push(
            setTimeout(() => {
                this.setState({
                    show: true
                }, this.onShown);
            }, ms)
        )
    }

    private onShown = () => {
        const {
            duration,
            onShown
        } = this.props;
        this.timers.push(
            setTimeout(
                onShown,
                duration
            )
        );
    }

    private onCloseFn = () => {
        const ms: number = 16;
        this.timers.push(
            setTimeout(() => {
                this.setState({
                    show: false
                }, this.onClosed);
            }, ms)
        );
    }

    private onClosed = () => {
        const {
            duration,
            onClosed
        } = this.props;
        this.timers.push(
            setTimeout(
                onClosed,
                duration
            )
        )
    }

    get className() {
        const {
            direction
        } = this.props;

        const {
            show
        } = this.state;

        const className = [
            strategy[direction],
            styles.dialog_content
        ];

        if(show) {
            className.push(
                styles.dialog_content_show
            )
        }

        return className.join(` `);
    }

    get calcStyle() {
        const {
            duration
        } = this.props;

        return {
            transitionDuration: `${duration}ms`,
            WebkitTransitionDuration: `${duration}ms`,
        }
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <div
                children={children}
                style={this.calcStyle}
                className={this.className}
            />
        )
    }
}


export default Content;