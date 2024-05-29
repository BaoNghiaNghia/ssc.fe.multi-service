import React from 'react';
import { Row, Col, Image } from 'antd';
import { Aside, Content } from './overview/style';
import Heading from '../../../components/heading/heading';
import logoSSC from '../../../static/img/Logo_Dark.svg';

const AuthLayout = (WraperContent) => {
  return function () {
    return (
      <Row>
        <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
          <Aside>
            <div className="auth-side-content">
              <Content>
                <Image width="50%" style={{ width: '65px !important', marginBottom: '70px' }} src={logoSSC} alt="" />
                <Heading as="h4" weight="800">
                  YOUTUBE
                </Heading>
                <Heading as="h2" weight="800" color="#b70000">
                  SUBSCRIBE - COMMENT - LIKE
                </Heading>
                <img
                  className="auth-content-figure"
                  src={require('../../../static/img/youtube_1.png')}
                  alt="youtube-background"
                  width="100%"
                />
              </Content>
            </div>
          </Aside>
        </Col>
        <Col xxl={16} xl={15} lg={12} md={16} xs={24}>
          <WraperContent />
        </Col>
      </Row>
    );
  };
};

export default AuthLayout;
