import React,{
    PureComponent
} from 'react';

import {
    Direction
} from './layer';

interface Props {
    maskShow:boolean,
    duration:number,
    direction:Direction,
    contentShow:boolean,
    onMaskClick:Function,
    onMaskClosed:Function,
    onContentClosed:Function
}

import MaskView from './mask';

import ContentView from './content';

import styles from './styles.scss';

class Container extends PureComponent<Props> {
    static defaultProps = {
        maskShow:false,
        duration:400,
        direction:`center`,
        contentShow:false,
        onMaskClick:() => null,
        onMaskClosed:() => null,
        onContentClosed:() => null
    }

    render() {
        const {
            maskShow,
            direction,
            children,
            duration,
            contentShow,
            onMaskClick,
            onMaskClosed,
            onContentClosed
        } = this.props;
        return (
            <div className={styles.dialog_container}>
                <MaskView
                    show={maskShow}
                    onClick={onMaskClick}
                    onClosed={onMaskClosed}
                />
                <ContentView
                    show={contentShow}
                    children={children}
                    duration={duration}
                    direction={direction}
                    onClosed={onContentClosed}
                />
            </div>
        )
    }
}

export default Container;