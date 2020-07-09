import React,{
    Fragment,
    PureComponent
} from 'react';

import {
    Tag,
    Button,
    Modal,
    Table,
    message,
    PageHeader
} from 'antd';

import {
    connect
} from './../../store';

import moment from 'moment';

const {
    Column
} = Table;

import {
    Loading
} from './../../components';

import PlateAdd from './add';

import styles from './styles.scss';

import {
    InitState as PlateProps
} from './../../store/reducer/plate/types';

import Actions,
    * as plateActs from './../../store/actions/plate';

interface State {
    visible: boolean,
    dataSource: Array<any>
}

interface Props {
    plate:PlateProps,
    plateActions:Actions,
}

@connect([`plate`], {
    plateActions: plateActs
})
class Plate extends PureComponent<Props, State> {
    state: State = {
        visible: false,
        dataSource: []
    }

    get plate() {
        const {
            plate
        } = this.props;
        return plate;
    }

    get dataSource() {
        const {
            list =[]
        } = this.plate;
        return list.map((item:any) => ({
            ...item,
            key: item._id
        }));
    }

    get plateActions() {
        const {
            plateActions
        } = this.props;
        return plateActions;
    }

    private openModal = () => {
        this.setState({
            visible: true
        })
    }

    private onCloseModal = () => {
        this.setState({
            visible: false
        })
    }

    private onSubmit = async (para: any) => {
        Loading.show();
        try {
           await this.plateActions.addPlate(para);
           this.onCloseModal();
        }
        catch (e) {
            message.error(e.message);
        }
        Loading.close();
    }

    componentDidMount() {
        this.plateActions.getList();
    }

    render() {
        const {
            visible
        } = this.state;
        return (
            <Fragment>
                <PageHeader
                    ghost={false}
                    title="模块管理"
                    extra={[
                        <Button
                            key="1"
                            type="primary"
                            children="添加"
                            onClick={this.openModal}
                        />
                    ]}
                >

                    <Table
                        size="middle"
                        bordered={true}
                        pagination={{
                            total:100,
                            pageSize:10,
                            size:'default',
                            showSizeChanger:false
                        }}
                        className={styles.table_view}
                        dataSource={this.dataSource}
                    >
                        <Column
                            title="模块名"
                            key="plateName"
                            dataIndex="plateName"
                        />
                        <Column
                            title="模块Id"
                            key="plateId"
                            dataIndex="plateId"
                        />
                        <Column
                            title="更新时间"
                            key="updatedAt"
                            dataIndex="updatedAt"
                            render={(value: string) => (
                                moment(value).format(
                                    `YYYY-MM-DD HH:mm:ss`
                                )
                            )}
                        />
                        <Column
                            title="操作"
                            render={(value: string) => {
                                return (
                                    <div>
                                        <Tag
                                            color="#f50"
                                            children="删除"
                                            className={styles.action_tag}
                                        />
                                        <Tag
                                            color="#108ee9"
                                            children="编辑"
                                            className={styles.action_tag}
                                        />
                                    </div>
                                )
                            }}
                        />
                    </Table>
                </PageHeader>
                <Modal
                    title="添加模块"
                    centered={true}
                    visible={visible}
                    footer={false}
                    destroyOnClose={true}
                    onCancel={this.onCloseModal}
                >
                    <PlateAdd
                        onSubmit={this.onSubmit}
                    />
                </Modal>
            </Fragment>
        )
    }
}

export default Plate;

