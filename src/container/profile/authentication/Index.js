import React from 'react';
import { Row, Col, Image } from 'antd';
import { Aside, Content } from './overview/style';
// import Heading from '../../../components/heading/heading';
// import logoSSC from '../../../static/img/Logo_Dark.svg';
// import { COLOR_GENERAL } from '../../../variables';

const AuthLayout = (WraperContent) => {
  return function () {
    return (
      <Row>
        <Col xxl={16} xl={16} lg={12} md={8} xs={24}>
          <Aside>
            <div className="auth-side-content">
              <Content>
                {/* <Image width="40px" src={logoSSC} alt="" preview={false} /> */}
              </Content>
            </div>
          </Aside>
        </Col>
        <Col xxl={8} xl={8} lg={12} md={16} xs={24}>
          <WraperContent />
        </Col>
      </Row>
    );
  };
};

export default AuthLayout;
