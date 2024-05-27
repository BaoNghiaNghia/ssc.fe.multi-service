/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BsPersonCheck } from "react-icons/bs";
import { Row, Col, Form, Input, Modal, InputNumber, Divider, Button } from 'antd';
import { RiKey2Line } from "react-icons/ri";
import { MdAddchart, MdAlternateEmail } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import userActions from '../../../redux/member/actions';
import { VIETNAMES_CURRENCY } from '../../../variables';

function DetailMember({ isOpen, setState }) {
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

  const handleCancel = () => {
    setState({
      isModalDetailMem: false,
    });
    formDetailMember.resetFields();
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
              <BsPersonCheck fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Chi tiết thành viên</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Thông tin chi tiết thành viên</p>
              </div>
            </div>
          </>
        }
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="detail_member" layout="vertical" form={formDetailMember}>
          <Row gutter="10">
            <Col sm={12}>
              <Form.Item name="fullname" label="Họ tên" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' addonBefore={<FaUser fontSize={14} style={{marginTop: '3px'}}/>} placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="email" label="Email" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' addonBefore={<MdAlternateEmail fontSize={17} style={{marginTop: '3px'}}/>} placeholder="Thêm loại"/>
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
                <InputNumber type='number' addonBefore="+84" size='small' style={{ width: '100%' }} placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item name="role" label="Nhóm người dùng" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' addonBefore={<HiMiniUserGroup fontSize={17} style={{marginTop: '3px'}}/>} placeholder="Chọn người dùng"/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="discount" style={{ margin: '0px' }} label="Discount" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' addonAfter="%" size='small' style={{ width: '100%' }} placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="credit_used" style={{ margin: '0px' }} label="Credit đã dùng" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' addonAfter={VIETNAMES_CURRENCY} size='small' style={{ width: '100%' }} placeholder="Credit đã dùng"/>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="credit" style={{ margin: '0px' }} label="Tổng Credit" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' addonAfter={VIETNAMES_CURRENCY} size='small' style={{ width: '100%' }} placeholder="Thêm credit"/>
              </Form.Item>
            </Col>
          </Row>
          {
            detailUser?.api_key ? (
              <Row gutter={10}>
                <Col sm={24}>
                  <Form.Item name="api_key" style={{ margin: '0px', width: '100%' }} label="Key API" rules={[{
                    required: true,
                    message: 'Trường không được trống'
                  }]}>
                    <Input.Password 
                      type='number'
                      addonBefore={<RiKey2Line style={{ marginRight: '4px' }} fontSize={17}/>}
                      size='small'
                      style={{ width: '100%' }}
                      placeholder="Key API"
                    />
                  </Form.Item>
                </Col>
              </Row>
            ) : (
              <Row gutter={10}>
                <Col sm={24}>
                  <Form.Item name="api_key" style={{ margin: '0px', width: '100%' }} label="Key API" rules={[{
                    required: true,
                    message: 'Trường không được trống'
                  }]}>
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.9em', fontStyle: 'italic', color: 'gray', margin: '10px' }}>Chưa có API Key</span>
                      <Button size='small' type='primary' style={{ display: 'inline-flex', alignItems: 'center' }} onClick={() => {
                        dispatch(userActions.generateApiKeyMemberBegin({ id: detailUser?.id }))
                      }}>
                        <RiKey2Line style={{ marginRight: '4px' }} fontSize={17}/>
                        Tạo API Key
                      </Button>
                    </div>
                  </Form.Item>
                </Col>
              </Row>
            )
          }
        </Form>
      </Modal>
    </>
  );
}

DetailMember.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default DetailMember;
