import React, {
    PureComponent
} from 'react';

import {
    Menu,
    Avatar,
    Button,
    Layout,
    Popover
} from 'antd';

const {
    SubMenu
} = Menu;

import {
    UserOutlined,
    MenuFoldOutlined,
    ContainerOutlined,
    DashboardOutlined,
    MenuUnfoldOutlined,
    InsertRowBelowOutlined
} from '@ant-design/icons';

import {
    renderRoutes,
    RouteConfigComponentProps
} from 'react-router-config';

import {
    connect
} from './../../store';

import styles from './styles.scss';

import {
    InitState as UserInitState
} from './../../store/reducer/user/types';

import Actions,
    * as userAts from './../../store/actions/user';

interface MenuItem {
    icon?: any,
    path: string,
    name: string,
    subMenu?: Array<MenuItem>
}

interface State {
    collapsed:boolean
}

interface UserProps {
    user:UserInitState,
    userActions:Actions
}

type Props = (
    RouteConfigComponentProps & UserProps
);

const configs: MenuItem[] = [
    {
        path: `/home`,
        name: `Dashboard`,
        icon: <DashboardOutlined/>
    },
    {
        path: `/home/plate`,
        name: `模块管理`,
        icon: <InsertRowBelowOutlined />
    },
    {
        path: `/home/article`,
        name: `文章管理`,
        icon: <ContainerOutlined />
    },
    {
        name: `用户管理`,
        path: `/home/user`,
        icon: <UserOutlined/>,
        subMenu: [
            {
                name: `个人中心`,
                path: `/home/user/center`
            },
            {
                name: `添加用户`,
                path: `/home/user/add`
            },
            {
                name: `用户列表`,
                path: `/home/user/list`
            },
            {
                name: `用户编辑`,
                path: `/home/user/edit`
            }
        ]
    }
];

const findMenu = (menus:MenuItem[] ,path: string) => (
    menus.find(({ subMenu = []}: MenuItem) => (
        subMenu.length > 0 && !!subMenu.find(
            ({path: _path}: MenuItem) =>  _path === path
        )
    )) || {} as MenuItem
);

@connect([`user`],{
    userActions:userAts
})
class HomeLayout extends PureComponent<Props,State> {
    state:State = {
        collapsed: false
    }

    get pathName() {
        const {
            location
        } = this.props;

        const {
            pathname
        } = location;

        return pathname;
    }

    get openKeys() {
        const {
            path = ``
        } = findMenu(
            configs,
            this.pathName
        );

        return !!path?[path]:[];
    }

    get selectedKeys() {
        return [this.pathName];
    }

    get userState() {
        const {
            user
        } = this.props;
        return user || {};
    }

    get userInfo():any {
        const {
            userInfo
        } = this.userState;
        return userInfo || {};
    }

    get userActions() {
      const {
          userActions
      } = this.props;
      return userActions;
    }

    get userName() {
        const {
            userName
        } = this.userInfo;
        return userName;
    }

    get routes() {
        const {
            route
        } = this.props;
        const {
            routes = []
        } = route || {};
        return routes;
    }

    get popoverContent() {
        return (
            <div className={styles.popover_content}>
                <div
                    children="个人中心"
                    onClick={this.toUserCenter}
                    className={styles.popover_item}
                />
                <div
                    children="退出登录"
                    onClick={this.onLoginOut}
                    className={styles.popover_item}
                />
            </div>
        )
    }

    private toUserCenter = () => {
        this.props.history.push(
            `/home/user/center`
        )
    }

    private onLoginOut = () => {
        this.userActions.loginOut();
    }

    private toggleCollapsed = () => {
        const {
            collapsed
        } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };

    private onClickMenu = (e: any) => {
        if(e.key !== this.pathName){
            this.props.history.push(e.key);
        }
    }

    private renderItem = (item: MenuItem) => {
        return (
            <Menu.Item
                key={item.path}
                icon={item.icon}
                children={item.name}
                onClick={this.onClickMenu}
            />
        )
    }

    private onOpenChange = (e:Array<string>) => {
        if(e.length > 0) {
            this.props.history.push(e[0]);
        }
    }

    render() {
        const {
            collapsed
        } = this.state;
        return (
            <Layout className={collapsed ? styles.collapsed : ``}>
                <Layout.Header className={styles.home_header}>
                    <div className={styles.header_title}>
                        管理系统 v1.0
                    </div>
                    <Popover
                        trigger="hover"
                        placement="topRight"
                        content={this.popoverContent}
                    >
                        <div className={styles.header_right}>
                            <Avatar
                                src=""
                                className={styles.avatar_style}
                            />
                            <div className={styles.user_name}>
                                {this.userName}
                            </div>
                        </div>
                    </Popover>
                </Layout.Header>
                <Layout className={styles.home_content_layout}>
                    <Layout.Sider
                        collapsed={collapsed}
                        className={styles.fixed_menu}
                    >
                        <Button
                            type="primary"
                            children={collapsed ?
                                <MenuUnfoldOutlined />:
                                <MenuFoldOutlined />
                            }
                            onClick={this.toggleCollapsed}
                            className={styles.collapsed_switch}
                        />
                        <Menu
                            theme="dark"
                            mode="inline"
                            openKeys={this.openKeys}
                            onOpenChange={this.onOpenChange}
                            selectedKeys={this.selectedKeys}
                            className={styles.menu_container}
                        >
                            {configs.map((menu: MenuItem) => {
                                const {
                                    subMenu = []
                                } = menu;

                                const {
                                    length
                                } = subMenu;

                                return length > 0 ? (
                                    <SubMenu
                                        key={menu.path}
                                        icon={menu.icon}
                                        title={menu.name}
                                        className={styles.sub_menu}
                                        children={subMenu.map(this.renderItem)}
                                    />
                                ) : this.renderItem(menu);
                            })}
                        </Menu>
                    </Layout.Sider>
                    <Layout.Content
                        className={styles.layout_content}
                        children={renderRoutes(this.routes)}
                    />
                </Layout>
            </Layout>
        )
    }
}

export default HomeLayout;