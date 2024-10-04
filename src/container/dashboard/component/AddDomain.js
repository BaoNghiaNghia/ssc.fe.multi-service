/* eslint-disable react/jsx-boolean-value */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaYoutube } from 'react-icons/fa';
import { AiOutlineFieldNumber } from "react-icons/ai";
import { Row, Col, Form, Input, InputNumber, Button, Modal, Divider, Switch, Select } from 'antd';
import { MdAddchart, MdOutlineImportExport } from "react-icons/md";
import actions from '../../../redux/proxy/actions';
import { REGION_IDENTIFIER } from '../../../variables';

const { Option } = Select;

function AddDomain({ isOpen, setState }) {
  const dispatch = useDispatch();

  const { postLoading, domainService } = useSelector(state => {
    return {
        postLoading: state?.settingService?.postLoading,
        domainService: state?.proxy?.domainService,
    };
  });

  const [formCreateService] = Form.useForm();

  const handleOk = () => {
    try {
      formCreateService.validateFields()
        .then((values) => {
            const requestData = {
                domain: values?.domain,
                enable: values?.enable,
                geo: values?.geo,
                password: values?.password,
                port_start: values?.port_start,
                total: values?.total,
                username: values?.username,
                service: values?.service,
            }
            dispatch(actions.createDomainBegin(requestData));
    
            setState({
                isAddDomainModal: false,
            });
    
            formCreateService.resetFields();
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
      isAddDomainModal: false,
    });
  }

  return (
    <>
      <Modal
        width='600px'
        open={isOpen}
        centered
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
            <div>
              <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thêm Domain</p>
              <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Điền thông tin cho domain proxy mới</p>
            </div>
          </div>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" loading={postLoading} onClick={handleOk}>
            Thêm mới
          </Button>
        ]}
      >
        <Form name="add_service" layout="vertical" form={formCreateService}>
          <Divider style={{ fontSize: '0.9em', color: 'gray', paddingTop: '10px', margin: '0px' }}>Thông tin Domain</Divider>

          <Row gutter="10">
            <Col sm={24}>
              <Form.Item  
                name="domain" 
                label="Domain" 
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' style={{ fontWeight: 'bold' }} placeholder='Nhập vào domain'/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item 
                name="service"
                label="Loại dịch vụ"
                style={{ marginBottom: '7px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Select style={{ width: '100%' }} placeholder="Chọn dịch vụ" id="select-service-type" size='small'>
                  {
                    domainService?.map(serviceType => (
                      <Option value={serviceType?.id}>
                        <span style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                          <FaYoutube color="red" fontSize={19} style={{ marginRight: '7px', padding: 0 }} />
                          <span style={{ fontSize: '13px', padding: 0, margin: 0 }}>{serviceType?.name}</span>
                        </span>
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item 
                name="geo" 
                label="Geo"
                initialValue="vn"
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Select style={{ width: '100%' }} defaultValue="vn" size='small'>
                  {
                    REGION_IDENTIFIER?.map(region => (
                      <Option value={region?.shortcode}>
                        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', marginLeft: '5px' }}>
                          <img src={require(`../../../${region?.path}`)} alt={region?.alt} width="17px" height="17px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }}/>
                          <span style={{ marginLeft: '10px' }}>{region?.region}</span>
                        </div>
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

          <Row gutter="10">
            <Col sm={12}>
              <Form.Item 
                name="username" 
                label="Username" 
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' placeholder='Tên đăng nhập'/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item 
                name="password" 
                label="Mật khẩu" 
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input.Password size='small' placeholder='Nhập password'/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter="10">
            <Col sm={10}>
              <Form.Item 
                name="port_start" 
                label="Port khởi đầu" 
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <InputNumber addonBefore={<MdOutlineImportExport/>} size='small' type='number' style={{ width: '100%' }} placeholder='Nhập port khởi đầu'/>
              </Form.Item>
            </Col>
            <Col sm={10}>
              <Form.Item 
                name="total" 
                label="Số lượng proxy" 
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <InputNumber size='small' addonBefore={<AiOutlineFieldNumber />} type='number' style={{ width: '100%' }} placeholder='Nhập số lượng proxy'/>
              </Form.Item>
            </Col>
            <Col sm={4}>
              <Form.Item 
                name="enable"
                initialValue={true}
                label="Hoạt động"
                style={{ marginBottom: '7px', textAlign: 'center' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Switch defaultChecked onChange={(value) => {
                    formCreateService.setFieldValue('enable', value)
                }} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

AddDomain.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default AddDomain;
