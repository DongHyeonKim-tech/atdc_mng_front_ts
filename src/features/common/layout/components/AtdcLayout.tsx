import React, {useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Space, Button } from 'antd';
import 'features/common/layout/styles/Common.css';
import '/node_modules/antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Navigation One', 'sub1', null, []),

    getItem('Navigation Two', 'sub2', null,[]),

    getItem('Navigation Three', 'sub4', null,[]),
];

const AtdcLayout = ({changeHandler, children} : {changeHandler?:void, children: any}) => {

    const dispatch = useDispatch();
    const menu = [
        {
            title: '내 근태',
            key: '/atdc/my'
        },
        {
            title: '팀 근태',
            key: '/atdc/team'
        },
        {
            title: '시스템',
            key: '/'
        }
    ]

    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: 'white', borderBottom: '2px solid' }}>
                <div
                    style={{
                        float: 'left',
                        width: '20%',
                        fontSize: 20,
                        paddingRight: '10%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}
                >근태관리 시스템</div>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={new Array(4).fill(null).map((_, index) => ({
                            key: String(index + 1),
                            label: `nav ${index + 1}`,
                        }))}
                        style={{height: '90%', width: '50%', display: 'inline-block'}}
                    />
                <Space style={{float: 'right'}}>
                    <Button >프로필</Button>

                </Space>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 380}}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    )
}
export default AtdcLayout;
