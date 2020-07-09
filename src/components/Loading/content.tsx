import React, {
    PureComponent
} from 'react';

import styles from './styles.scss';

import {
    LoadingOutlined
} from '@ant-design/icons';

interface Props {
    msg?:string
}

class Content extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.loading_container}>
                <div className={styles.loading_icon}>
                    <LoadingOutlined />
                </div>
                <div className={styles.loading_msg}>
                    {this.props.msg || `加载中..`}
                </div>
            </div>
        )
    }
}

export default Content;