/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider, Progress } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots, FaYoutube } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import actions from '../../../redux/serviceSettings/actions';
import { FixedServiceTemp, STATUS_COMMENT_ENUM } from '../../../variables/index';

const { Option } = Select;

function DetailOrder({ isOpen, setState, state }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { postLoading, detailService, detailOrderComment } = useSelector(item => {
    return {
      postLoading: item?.settingService?.postLoading,
      detailService: item?.settingService?.detailService,
      detailOrderComment: item?.buffComment?.detailOrderComment
    };
  });

  useEffect(() => {
    formUpdateService.setFieldsValue(detailOrderComment);
    formUpdateService.setFieldValue('category', detailOrderComment?.serviceDetail && detailOrderComment?.serviceDetail[0]?.category);
    formUpdateService.setFieldValue('user_name', detailOrderComment?.userDetail && detailOrderComment?.userDetail[0]?.fullname);
    formUpdateService.setFieldValue('user_email', detailOrderComment?.userDetail && detailOrderComment?.userDetail[0]?.email);
    formUpdateService.setFieldValue('priority', String(detailOrderComment?.priority));
    formUpdateService.setFieldValue('status', STATUS_COMMENT_ENUM.find(item => item.status === detailOrderComment?.status)?.title);
  });

  const handleOk = () => {
    try {

      formUpdateService.validateFields()
        .then((values) => {
          const requestData = {
            id: detailService.id,
            category: values?.category,
            platform: values?.platform || 'Youtube',
            service_type: values?.service_type,
            type: values?.type,
            description: values?.description,
            enabled: detailService?.enabled,
            min: values?.min,
            max: values?.max,
            max_threads: values?.max_threads,
            max_threads_3000: values?.max_threads_3000,
            max_threads_5000: values?.max_threads_5000,
            name: values?.name,
            price_per_10: values?.price_per_10,
            priority: values?.priority === 'true'
          }
      
          dispatch(actions.updateServiceBegin(requestData));
    
          setState({
            isDetailOrderModal: false,
          });
    
          formUpdateService.resetFields();
        })
        .catch((err) => {
          console.error("handle Real Error: ", err);
        });
    } catch (err) {
      setState({
        isDetailOrderModal: false,
      });
      formUpdateService.resetFields();
      console.log(err);
    }

  };

  const handleCancel = () => {
    setState({
      isDetailOrderModal: false,
    });

    formUpdateService.resetFields();
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
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thông tin đơn Comment</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Chi tiết thông tin đơn</p>
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
          <Button key="submit" type="primary" loading={postLoading} onClick={handleOk}>
            Cập nhật
          </Button>
        ]}
      >
        <Form name="add_service" layout="vertical" form={formUpdateService} onFinish={handleOk}>
          <Row gutter="10" style={{ backgroundColor: '#efefef', borderRadius: '10px' }}>
            <Col sm={12}>
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center', marginTop: '10px' }}>
                <span style={{ marginRight: '15px', fontWeight: '600', paddingLeft: '10px' }}>Platform: </span>
                <FaYoutube color="red" fontSize={20} style={{ marginRight: '7px' }}/>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>{detailOrderComment?.serviceDetail && detailOrderComment?.serviceDetail[0]?.platform}</span>
              </div>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="category"
                style={{ margin: '0px' }}
                bordered 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Select
                  style={{ width: '100%', margin: '0px', padding: '0px' }}
                  bordered={false}
                  initialValue="Comments"
                  size='small'
                  disabled
                  onClick={(value) => {
                    const selectedService = FixedServiceTemp.filter(item => item?.category === value?.target?.innerText);

                    if (selectedService?.length > 0) {
                      formUpdateService.setFieldValue('type', selectedService[0]?.type);
                      formUpdateService.setFieldValue('service_type', selectedService[0]?.service_type);
                    }
                  }}
                >
                  <Option value="Comments">
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }}/> <span style={{ fontWeight: '800' }}>Comments</span>
                    </div>
                  </Option>
                  <Option value="Likes">
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <AiOutlineLike color='red' fontSize={17} style={{ marginRight: '10px' }}/> <span style={{ fontWeight: '800' }}>Likes</span>
                    </div>
                  </Option>
                  <Option value="Subscribers">
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <GrNotification color='red' fontSize={15} style={{ marginRight: '10px' }}/> <span style={{ fontWeight: '800' }}>Subscribers</span>
                    </div>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider style={{ fontSize: '0.9em', color: 'gray', padding: '10px 0px', margin: '0px' }}>Thông tin Khách</Divider>
          <Row gutter="10">
            <Col sm={12}>
              <Form.Item
                name="user_name"
                label="Họ tên"
                style={{ margin: '0px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' readOnly placeholder="Nhập tên"/>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="user_email"
                style={{ margin: '0px' }}
                label="Email"
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' readOnly placeholder="Nhập email"/>
              </Form.Item>
            </Col>
          </Row>

          <Divider style={{ fontSize: '0.9em', color: 'gray', padding: '10px 0px', margin: '0px' }}>Thông tin video</Divider>

          <Row gutter="10">
            <Col sm={16}>
              <Form.Item 
                name="link" 
                label="Đường dẫn"
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' style={{ fontWeight: 'bold' }} placeholder='Đường dẫn video'/>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item 
                name="video_id" 
                label="ID Video"
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' style={{ fontWeight: 'bold' }} placeholder='ID của video'/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="10">
            <Col sm={8}>
              <Form.Item
                name="quantity"
                label="Lượng comment"
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' addonAfter="comment" readOnly placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item
                name="processing_count"
                label="Đang chạy"
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' addonAfter="comment" readOnly placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item
                name="performance"
                label="Tiến trình"
                style={{ margin: '0px', padding: '0px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' addonAfter="%" readOnly placeholder="Thêm loại"/>
              </Form.Item>
              <Progress percent={formUpdateService.getFieldValue('performance')}  style={{ margin: '0px', padding: '0px' }} size="small" />
            </Col>
          </Row>

          <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_thread" initialValue={ state?.max_threads } label="Số luồng tối đa" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Nhập vào số luồng tối đa' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="priority"  label="Ưu tiên" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select style={{ width: '100%' }} size='small'>
                  <Option value="false">Không</Option>
                  <Option value="true">Có</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="status"  label="Trạng thái" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

DetailOrder.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func,
  state: PropTypes.object
};

export default DetailOrder;
