/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useState} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserOutlined } from '@ant-design/icons';
import { MdOutlinePassword, MdOutlineAlternateEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { AuthWrapper } from './style';
import actionAuths from '../../../../redux/authentication/actions';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import Heading from '../../../../components/heading/heading';

const { registerReferralBegin } = actionAuths;

function SignUp() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [formSignUp] = Form.useForm();
  const [state, setState] = useState({
    checked: true,
  });

  const handleSubmit = () => {
    try {
      formSignUp.validateFields()
        .then((values) => {
          dispatch(registerReferralBegin(values));
        })
        .catch((err) => {
            console.error("handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <AuthWrapper>
      <div className="auth-contents">
        <Form name="register" form={formSignUp} onFinish={handleSubmit} layout="vertical">
          <Row justify="space-around"  style={{ marginBottom: '40px' }}>
            <Col md={24} sm={24} xs={24}>
              <Heading as="h2" weight="700">ĐĂNG KÝ</Heading>
            </Col>
          </Row>
          <Form.Item
            name="email"
            className='m-0'
            rules={[
              { message: 'Vui lòng nhập tên đăng nhập hoặc Email!', required: true },
              {
                required: true,
                type: "email",
                message: "Email không đúng định dạng",
              }
            ]}
            label="Email"
          >
            <Input size='middle' prefix={<MdOutlineAlternateEmail />} placeholder="Nhập tên đăng nhập" />
          </Form.Item>
          <Form.Item
            name="fullname"
            className='m-0'
            rules={[
              { message: 'Vui lòng nhập tên người dùng', required: true, whitespace: true },
              {
                min: 3,
                message: 'Họ tên ít nhất 3 kí tự'
              }
            ]}
            label="Tên người dùng"
          >
            <Input size='middle' prefix={<UserOutlined />} placeholder="Nhập tên người dùng" />
          </Form.Item>
          <Form.Item
            name="password"
            className='m-0'
            label="Mật khẩu"
            rules={[
              {required: true, message: 'Trường không được trống' },
              {
                min: 8,
                message: 'Mật khẩu ít nhất 8 kí tự'
              }
            ]}
          >
            <Input.Password size='middle' prefix={<MdOutlinePassword />} placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item
            name="phone"
            className='m-0'
            rules={[
              { message: 'Vui lòng nhập số điện thoại', required: true }
            ]}
            label="Số điện thoại"
          >
            <Input size='middle' prefix={<MdOutlinePhoneAndroid />} placeholder="Nhập số điện thoại" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={onChange} checked={state.checked}>
              Tạo tài khoản có nghĩa là bạn đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư của chúng tôi
            </Checkbox>
          </div>
          <Form.Item>
            <Button loading={isLoading} className="btn-signin" htmlType="submit" style={{ width: '100%' }} type="primary" size="large">
              {isLoading ? 'Đang tải...' : 'Đăng ký'}
            </Button>
          </Form.Item>
          <span className='text-center'>Đã có tài khoản? <NavLink to="/">Đăng nhập</NavLink></span>
        </Form>
      </div>
    </AuthWrapper>
  );
}

export default SignUp;
