import React, {useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import type { MenuProps } from 'antd';
import { Layout, Menu, Space, Button } from 'antd';
import 'features/common/layout/styles/Common.css';
import '/node_modules/antd/dist/antd.css';

const { Header, Content, Footer } = Layout;


interface MenuItemProps {
    key: string,
    label: string,
    path: string
}


const AtdcLayout = ({changeHandler, children} : {changeHandler?:void, children: any}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const menu : MenuItemProps[] = [
        {
            key: '1',
            label: '사용자',
            path: '/atdc/my'
        },
        {
            key: '2',
            label: '관리자',
            path: '/atdc/team'
        },
        {
            key: '3',
            label: '시스템 관리자',
            path: '/admin/code'
        }
    ];



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
                {menu &&
                    <Menu mode="horizontal" style={{height: '90%', display: 'inline-block'}}>
                        {
                            menu.map((item) => {
                                return (
                                <Menu.Item key={item.key} onClick={() => {navigate(item.path)}} style={{width: '100px'}}>
                                    <a>{item.label}</a>
                                </Menu.Item>        
                                )
                            })
                        }

                    </Menu>
                }
                <Space style={{float: 'right'}}>
                    <Button >프로필</Button>

                </Space>
            </Header>
            <Content className="site-layout" style={{ padding: '50px 50px 50px' }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>FOOTERRRRRRRRRRRRRRRR</Footer>
        </Layout>
    )
}
export default AtdcLayout;
