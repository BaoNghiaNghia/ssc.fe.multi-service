/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/member/actions';

const { Option } = Select;

function EditMember({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formDetailMember] = Form.useForm();

  const { detailUser } = useSelector(state => {
    return {
      detailUser: state?.member?.detailUser,
    };
  });

  useEffect(() => {
    formDetailMember.setFieldsValue(detailUser);
    formDetailMember.setFieldValue('role', detailUser?.group?.role);
  });

  const handleOk = () => {
    try {
      formDetailMember.validateFields()
      .then((values) => {
        const requestData = {}
  
        dispatch(actions.updateUserAdminBegin(requestData));

        setState({
          isModalEditMem: false,
        });

        formDetailMember.resetFields();
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
      isModalEditMem: false,
    });
  }

  return (
    <>
      <Modal
        width='600px'
        open={isOpen}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật thành viên</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Thay đổi thông tin thành viên</p>
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
            Cập nhật
          </Button>
        ]}
      >
        <Form name="detail_member" layout="vertical" form={formDetailMember} onFinish={handleOk}>
          <Row gutter="10">
            <Col sm={12}>
              <Form.Item name="fullname" label="Họ tên" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="email" label="Email" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
          </Row>

          <Divider style={{ fontSize: '0.9em', color: 'gray', paddingBottom: '10px', margin: '0px' }}>Thông tin cơ bản</Divider>

          <Row gutter="10">
            <Col sm={12}>
              <Form.Item name="phone" label="Điện thoại" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="role" label="Nhóm người dùng" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' placeholder="Chọn người dùng"/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="discount" style={{ margin: '0px' }} label="Discount" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="credit_used" style={{ margin: '0px' }} label="Credit đã dùng" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder="Credit đã dùng"/>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="credit" style={{ margin: '0px' }} label="Tổng Credit" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder="Thêm credit"/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

EditMember.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default EditMember;
