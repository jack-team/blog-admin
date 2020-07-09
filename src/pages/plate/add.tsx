import React,{
    PureComponent
} from 'react';

import {
    Form,
    Input,
    Button
} from 'antd';

import styles from './styles.scss';

interface Props {
    onSubmit:Function
}

class PlateAdd extends PureComponent<Props> {
    static defaultProps = {
        onSubmit:() => null
    }

    private onSubmit = (para:any) => {
        this.props.onSubmit(para);
    }

    render() {
        return (
            <Form onFinish={this.onSubmit}>
                <Form.Item
                    name="plateName"
                    className={styles.form_row}
                    rules={[{
                        required: true,
                        message: `请输入模块名`
                    }]}
                >
                    <Input
                        placeholder="模块名"
                        className={styles.input_row}
                    />
                </Form.Item>
                <Form.Item
                    name="plateId"
                    className={styles.form_row}
                    rules={[{
                        required: true,
                        message: `请输入模块Id`
                    }]}
                >
                    <Input
                        placeholder="模块Id"
                        className={styles.input_row}
                    />
                </Form.Item>
                <Form.Item
                    name="describe"
                    className={styles.form_row}
                    rules={[{
                        required: true,
                        message: `请输入模块描述`
                    }]}
                >
                    <Input.TextArea
                        placeholder="模块描述"
                        className={styles.input_area}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        children="添加"
                        htmlType="submit"
                        className={styles.submit_button}
                    />
                </Form.Item>
            </Form>
        )
    }
}

export default PlateAdd;