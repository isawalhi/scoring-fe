import React from 'react';
import { Link } from 'react-router-dom';
import { Layout as AntdLayout, Menu, Spin } from 'antd';
import styles from './Layout.module.css';
import getRoutes from '../../routes';

const { Header, Content, Footer } = AntdLayout;

const Layout = ({ children, showRequestLoader }) => {
  return (
    <AntdLayout className={styles.appContainer}>
      <Header>
        <div className={styles.pageLogo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key={getRoutes.gamesRoute.path}>
            <Link to={getRoutes.gamesRoute.path}>All Times</Link>
          </Menu.Item>
          <Menu.Item key={getRoutes.addGameRoute.path}>
            <Link to={getRoutes.addGameRoute.path}>Add new game</Link>
          </Menu.Item>
        </Menu>
      </Header>
      {showRequestLoader && <Spin size="large" />}
      <Content className={styles.pageContent}>{children}</Content>
      <Footer theme="dark" className={styles.pageFooter}>
        Scopely ©2020 Created by Sawalhi
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
