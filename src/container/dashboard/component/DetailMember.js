/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots, FaYoutube } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import actions from '../../../redux/serviceSettings/actions';

const { Option } = Select;

function DetailMember({ isOpen, setState }) {
  const dispatch = useDispatch();

  const { postLoading } = useSelector(state => {
    return {
      postLoading: state.settingService.postLoading,
    };
  });

  const [formCreateService] = Form.useForm();

  const [state, setStateModal] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
    values: null,
  });

  const handleSubmit = (values) => {
    setStateModal({ ...state, values: { ...values, tags: state.tags } });
  };

  useEffect(() => {
    dispatch(actions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleOk = () => {
    try {
      formCreateService.validateFields();
  
      const requestData = {// {
        category: formCreateService.getFieldValue('category'),
        platform: formCreateService.getFieldValue('platform') || 'Youtube',
        service_type: formCreateService.getFieldValue('service_type'),
        type: formCreateService.getFieldValue('type'),
        description: formCreateService.getFieldValue('description'),
        enabled: true,
        min: formCreateService.getFieldValue('min'),
        max: formCreateService.getFieldValue('max'),
        max_threads: formCreateService.getFieldValue('max_threads'),
        max_threads_3000: formCreateService.getFieldValue('max_threads_3000'),
        max_threads_5000: formCreateService.getFieldValue('max_threads_5000'),
        name: formCreateService.getFieldValue('name'),
        price_per_10: formCreateService.getFieldValue('price_per_10'),
        priority: formCreateService.getFieldValue('priority') === 'true'
      }
  
      dispatch(actions.createServiceBegin(requestData));

      setState({
        isModalDetail: false,
      });

      formCreateService.resetFields();
    } catch (err) {
      console.log(err);
    }

  };

  const handleCancel = () => {
    setState({
      isModalDetail: false,
    });
  }

  return (
    <>
      <Modal
        width='600px'
        open={isOpen}
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật dịch vụ</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Thay đổi thông tin cho dịch vụ</p>
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
            Thêm mới
          </Button>
        ]}
      >
        <Form name="add_service" layout="vertical" form={formCreateService} onFinish={handleSubmit}>
          <Row gutter="10">
            <Col sm={12}>
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center', marginTop: '10px' }}>
                <span style={{ marginRight: '15px' }}>Platform: </span>
                <FaYoutube color="red" fontSize={20} style={{ marginRight: '7px' }}/>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>Youtube</span>
              </div>
            </Col>
            <Col sm={12}>
              <Form.Item name="category" initialValue="Subscribes" bordered rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select style={{ width: '100%', margin: '0px', padding: '0px' }} bordered={false} initialValue="Comments" size='small'>                    
                  <Option value="Comments">
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }}/> <span style={{ fontWeight: '800' }}>Comment</span>
                    </div>
                  </Option>
                  <Option value="Likes">
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <AiOutlineLike color='red' fontSize={17} style={{ marginRight: '10px' }}/> <span style={{ fontWeight: '800' }}>Like</span>
                    </div>
                  </Option>
                  <Option value="Subscribes">
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <GrNotification color='red' fontSize={15} style={{ marginRight: '10px' }}/> <span style={{ fontWeight: '800' }}>Subscribe</span>
                    </div>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider plain style={{ margin: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Thông tin dịch vụ</Divider>

          <Row gutter="10">
            <Col sm={24}>
              <Form.Item 
                name="name" 
                label="Tên dịch vụ" 
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' placeholder='Tên dịch vụ'/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="10">
            <Col sm={24}>
              <Form.Item
                name="description"
                label="Mô tả"
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input.TextArea placeholder='Thêm mô tả dịch vụ' rows={2} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="10">
            <Col sm={9}>
              <Form.Item name="service_type" initialValue="ytbsubscribe" label="Loại dịch vụ" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select style={{ width: '100%' }} initialValue='ytbsubscribe' size='small'>
                  <Option value="ytbsubscribe">Subscribe</Option>
                  <Option value="ytbcomment">Comment</Option>
                  <Option value="ytblike">Like</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={9}>
              <Form.Item name="type" label="Loại" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={6}>
              <Form.Item name="priority" initialValue="false" label="Ưu tiên" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select style={{ width: '100%' }} size='small'>
                  <Option value="false">Không</Option>
                  <Option value="true">Có</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_threads"  label="Luồng < 3000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max_threads_3000" label="3000 < Luồng < 5000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small'style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max_threads_5000"  label="5000 < Luồng" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000'/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="min"  label="Số sub order min" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max" label="Số Sub (order max)" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="price_per_10" label="Prices / 10 Subs" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
          </Row>
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
