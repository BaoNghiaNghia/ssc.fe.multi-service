/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider } from 'antd';
import { MdAddchart, MdAlternateEmail, MdPassword } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import actions from '../../../redux/member/actions';
import authActions from '../../../redux/authentication/actions';
import { VIETNAMES_CURRENCY } from '../../../variables';
import { isVietnamesePhoneNumber, numberWithCommas } from '../../../utility/utility';

function RegisterNewMember({ memberState, setState }) {
  const dispatch = useDispatch();
  const [formAddMember] = Form.useForm();

  const { isModalRegisterNewAccount } = memberState;

  const { detailUser, userInfo } = useSelector(state => {
    return {
      detailUser: state?.member?.detailUser,
      userInfo: state?.auth?.userInfo
    };
  });

  const handleOk = () => {
    try {
      formAddMember.validateFields()
        .then((values) => {
          const requestData = {
            fullname: values?.fullname,
            email: values?.email,
            password: values?.password,
            phone: String(values?.phone),
            referer_id: userInfo?.id,
          }
    
          dispatch(authActions.registerReferralBegin(requestData));

          setState({
            isModalRegisterNewAccount: false,
          });

          formAddMember.resetFields();
        })
        .catch((err) => {
          console.error("handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
    }

  };

  const handleCancel = () => {
    setState({
      isModalRegisterNewAccount: false,
    });
  }

  return (
    <>
      <Modal
        width='600px'
        open={isModalRegisterNewAccount}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <LuUserPlus fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '7px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Tạo thành viên</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Thêm mới thông tin thành viên</p>
              </div>
            </div>
          </>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Xác nhận
          </Button>
        ]}
      >
        <Form name="add_member" layout="vertical" form={formAddMember} onFinish={handleOk}>
          <Row gutter="10">
            <Col sm={12}>
              <Form.Item name="fullname" label="Họ tên" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input addonBefore={<FaUser fontSize={14} style={{marginTop: '3px'}}/>} size='small' placeholder="Thêm họ tên"/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="email" label="Email" rules={[
                {
                  required: true,
                  message: 'Trường không được trống'
                },
                {
                  type: 'email',
                  message: 'Email không hợp lệ'
                },
              ]}>
                <Input addonBefore={<MdAlternateEmail fontSize={17} style={{marginTop: '3px'}}/>} size='small' placeholder="Thêm mail"/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter="10">
            <Col sm={12}>
              <Form.Item name="phone" label="Điện thoại" style={{ margin: 0, padding: 0 }} rules={[
                {
                  required: true,
                  message: 'Trường không được trống'
                },
                { 
                  required: true, 
                  message: "Định dạng số điện thoại không hợp lệ (0-9)",
                  pattern: /^[0-9]+$/
                },
              ]}>
                <Input addonBefore="+84" size='small' style={{ width: '100%', margin: 0, padding: 0 }} placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="password" label="Mật khẩu" style={{ margin: 0, padding: 0 }} rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input.Password size='small' addonBefore={<MdPassword fontSize={17} style={{marginTop: '3px', }}/>} placeholder="Nhập mật khẩu"/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

RegisterNewMember.propTypes = {
    memberState: PropTypes.object,
    setState: PropTypes.func
};

export default RegisterNewMember;
