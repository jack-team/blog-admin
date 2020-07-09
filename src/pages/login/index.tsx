import React,{
    PureComponent
} from 'react';

import {
    Form,
    Input,
    Button,
    message
} from 'antd';

import {
    connect
} from './../../store';

import styles from './styles.scss';

import Actions,
    * as userActs from './../../store/actions/user';

interface Props {
    userActions?:Actions
}

interface State {
    loading:boolean
}

@connect(false, {
    userActions: userActs
})
class Login extends PureComponent<Props,State> {
    state:State = {
        loading:false
    }

    get userActions() {
        const {
            userActions
        } = this.props;
        return userActions as Actions;
    }

    private onFinish = async (data:any) => {
        this.setState({
            loading: true
        })
        try {
            await this.userActions.login(data);
        }
        catch (e) {
            message.error(e.message);
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const {
            loading
        } = this.state;
        return (
            <div className={styles.user_login_page}>
                <div className={styles.content}>
                    <p className={styles.title}>
                        用户登录
                    </p>
                    <Form onFinish={this.onFinish}>
                        <Form.Item
                            name="userName"
                            className={styles.form_row}
                            rules={[{
                                required: true,
                                message: `请输入用户名`
                            }]}
                        >
                            <Input
                                placeholder="用户名"
                                className={styles.input_row}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            className={styles.form_row}
                            rules={[{
                                required: true,
                                message: `请输入密码`
                            }]}
                        >
                            <Input.Password
                                placeholder="密码"
                                className={styles.input_row}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                children="登录"
                                htmlType="submit"
                                loading={loading}
                                className={styles.login_submit}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;