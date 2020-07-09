import React, {
    PureComponent
} from 'react';

import {
    Redirect
} from 'react-router-dom';

import {
    connect
} from './../store';

interface Props {
    user: any
}

export default (Component: any, base: boolean) => (
    connect([`user`])(
        class Auth extends PureComponent<Props> {
            get user() {
                const {
                    user
                } = this.props;
                return user || {};
            }

            get userInfo() {
                const {
                    userInfo
                } = this.user;
                return userInfo || {};
            }

            get isLogin() {
                const {
                    userId = ``
                } = this.userInfo;
                return !!userId;
            }

            private onLogin = (
                component:any
            ) => (
                base ? component : (
                    <Redirect to="/home"/>
                )
            )

            private onLoginOut = (
                component:any
            ) => (
                base ? (
                    <Redirect to="/user/login"/>
                ) : component
            )

            render() {
                const comp = (
                    <Component
                        {...this.props}
                    />
                )
                return this.isLogin ?
                    this.onLogin(comp):
                    this.onLoginOut(comp);
            }
        }
    )
)