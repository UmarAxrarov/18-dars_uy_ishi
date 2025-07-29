import React from 'react'
import { Layout } from 'antd';
import HeaderLayout from '../header';
import { Outlet } from 'react-router';
const { Content } = Layout;

const MainLayout:React.FC = () => {
  return (
    <Layout style={{paddingBottom:30}}>
      <HeaderLayout />
      <Content style={{ padding: "0 48px" }}>
        <Outlet/>
      </Content>
    </Layout>
  );
}

export default MainLayout;