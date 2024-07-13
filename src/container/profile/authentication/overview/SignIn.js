import React, { useCallback, useState} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserOutlined } from '@ant-design/icons';
import { MdOutlinePassword } from "react-icons/md";
import { AuthWrapper } from './style';
import actionAuths from '../../../../redux/authentication/actions';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import Heading from '../../../../components/heading/heading';

const { loginBegin } = actionAuths;

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: true,
  });

  const handleSubmit = useCallback(() => {
    const loginAction = loginBegin({
      request: {
        email: form.getFieldValue('username'),
        password: form.getFieldValue('password'),
      },
      history
    });

    dispatch(loginAction);
  }, [history, dispatch]);

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <AuthWrapper>
      <p className="auth-notice">
        {/* Chưa có tài khoản? <NavLink to="/register">Đăng ký ngay</NavLink> */}
      </p>
      <div className="auth-contents">
        <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
          <Row justify="space-around" style={{ marginBottom: '40px' }}>
            <Col md={24} sm={24} xs={24}>
              <Heading as="h2" weight="700">ĐĂNG NHẬP</Heading>
            </Col>
          </Row>
          <Form.Item
            name="username"
            className='m-0'
            rules={[
              { message: 'Vui lòng nhập tên người dùng hoặc Email!', required: true }
            ]}
            label="Người dùng"
          >
            <Input size='middle' prefix={<UserOutlined />} placeholder="Nhập tên đăng nhập" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            className='m-0'
            rules={[
              {required: true, message: 'Trường không được trống' }
            ]}
          >
            <Input.Password size='middle' prefix={<MdOutlinePassword />} placeholder="Mật khẩu" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={onChange} checked={state.checked}>
              Giữ đăng nhập
            </Checkbox>
            <NavLink className="forgot-pass-link" to="/forgotPassword">
              Quên mật khẩu?
            </NavLink>
          </div>
          <Form.Item>
            <Button loading={isLoading} className="btn-signin" htmlType="submit" style={{ width: '100%' }} type="primary" size="large">
              {isLoading ? 'Đang tải...' : 'Đăng nhập'}
            </Button>
          </Form.Item>
          <span className='text-center'>Chưa có tài khoản? <NavLink to="/register">Đăng ký ngay</NavLink></span>
          {/* <ul className="social-login">
            <li>
              <Link className="google-signup" to="#">
                <img src={require('../../../../static/img/google.png')} alt="" />
                <span>Sign in with Google</span>
              </Link>
            </li>
          </ul> */}
        </Form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
