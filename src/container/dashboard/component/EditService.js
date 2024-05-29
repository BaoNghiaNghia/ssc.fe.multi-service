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
import { FixedServiceTemp } from '../../../variables/index';

const { Option } = Select;

function EditService({ isOpen, setState, state }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { postLoading, detailService } = useSelector(item => {
    return {
      postLoading: item?.settingService?.postLoading,
      detailService: item?.settingService?.detailService,
    };
  });

  const initCategory = FixedServiceTemp.filter(item => item?.category === detailService?.category);

  useEffect(() => {
    formUpdateService.setFieldsValue(detailService);
    formUpdateService.setFieldValue('priority', String(detailService?.priority));
    formUpdateService.setFieldValue('type', initCategory[0]?.type);
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
            geo: values?.geo,
            max_threads: values?.max_threads,
            max_threads_3000: values?.max_threads_3000,
            max_threads_5000: values?.max_threads_5000,
            name: values?.name,
            price_per_10: values?.price_per_10,
            priority: values?.priority === 'true'
          }
      
          dispatch(actions.updateServiceBegin(requestData));
    
          setState({
            isOpenAdd: false,
          });
    
          formUpdateService.resetFields();
        })
        .catch((err) => {
          console.error("handle Real Error: ", err);
        });
    } catch (err) {
      setState({
        isOpenAdd: false,
      });
      formUpdateService.resetFields();
      console.log(err);
    }

  };

  const handleCancel = () => {
    setState({
      isOpenAdd: false,
    });

    formUpdateService.resetFields();
  }

  const iconService = (service) => {
    switch (service?.category) {
      case 'Comments':
        return <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
      case 'Likes':
        return <AiOutlineLike color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
      case 'Subscribers':
        return <GrNotification color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
      default:
        return <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
    }
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
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật dịch vụ</p>
                <p style={{ fontSize: '0.8em', marginBottom: 0 }}>Thay đổi thông tin cho dịch vụ</p>
              </div>
            </div>
          </>
        }
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
        <Form name="add_service" layout="vertical" form={formUpdateService}>
          <Row gutter="10" style={{ backgroundColor: '#efefef', borderRadius: '10px' }}>
            <Col sm={12}>
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center', marginTop: '10px' }}>
                <span style={{ marginRight: '15px', fontWeight: '600', paddingLeft: '10px' }}>Platform: </span>
                <FaYoutube color="red" fontSize={20} style={{ marginRight: '7px' }}/>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>{detailService?.platform}</span>
              </div>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="category"
                style={{ margin: 0 }}
                bordered 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Select
                  style={{ width: '100%', margin: 0, padding: 0 }}
                  bordered={false}
                  initialValue="Comments"
                  size='small'
                  onClick={(value) => {
                    const selectedService = FixedServiceTemp.filter(item => item?.category === value?.target?.innerText);

                    if (selectedService?.length > 0) {
                      formUpdateService.setFieldValue('type', selectedService[0]?.type);
                      formUpdateService.setFieldValue('service_type', selectedService[0]?.service_type);
                    }
                  }}
                >
                  {
                    FixedServiceTemp?.map(service => {
                      return (
                        <Option key={service?.category} value={service?.category}>
                          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            { iconService(service) }
                            <span style={{ fontWeight: '800' }}>{service?.category}</span>
                          </div>
                        </Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider style={{ fontSize: '0.9em', color: 'gray', paddingTop: '10px', margin: 0 }}>Thông tin dịch vụ</Divider>

          <Row gutter="10">
            <Col sm={19}>
              <Form.Item 
                name="name" 
                label="Tên dịch vụ"
                style={{ marginBottom: '7px' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' style={{ fontWeight: 'bold' }} placeholder='Tên dịch vụ'/>
              </Form.Item>
            </Col>
            <Col sm={5}>
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
                  <Option value="vn">
                    <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                      <img src={require(`../../../static/img/flag/vn.png`)} alt="" width="20px" height="20px" />
                      <span style={{ marginLeft: '10px' }}>VN</span>
                    </div>
                  </Option>
                  <Option value="us">
                    <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                      <img src={require(`../../../static/img/flag/us.png`)} alt="" width="20px" height="20px" />
                      <span style={{ marginLeft: '10px' }}>US</span>
                    </div>
                  </Option>
                  <Option value="kr">
                    <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                      <img src={require(`../../../static/img/flag/kr.png`)} alt="" width="20px" height="20px" />
                      <span style={{ marginLeft: '10px' }}>KR</span>
                    </div>
                  </Option>
                  <Option value="jp">
                    <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                      <img src={require(`../../../static/img/flag/jp.png`)} alt="" width="20px" height="20px" />
                      <span style={{ marginLeft: '10px' }}>JP</span>
                    </div>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="10">
            <Col sm={24}>
              <Form.Item
                name="description"
                label="Mô tả"
                tooltip={formUpdateService.getFieldValue('description')}
                style={{ marginBottom: '7px', fontStyle: 'italic' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input.TextArea placeholder='Thêm mô tả dịch vụ' rows={4}  />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="10">
            <Col sm={9}>
              <Form.Item name="service_type"  label="Loại dịch vụ" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select disabled style={{ width: '100%' }} initialValue='ytbsubscribe' size='small'>
                  <Option value="ytbsubscribe">Subscribe</Option>
                  <Option value="ytbcomment">Comment</Option>
                  <Option value="ytblike">Like</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={9}>
              <Form.Item
                name="type"
                label="Loại"
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
                initialValue={initCategory?.length && initCategory[0]?.type}
              >
                <Input size='small' readOnly placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={6}>
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
          </Row>

          <Divider plain style={{ marginTop: 0, padding: 0, fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_threads" initialValue={ state?.max_threads } label="Luồng < 3000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max_threads_3000"  label="3000 < Luồng < 5000" rules={[{
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
          <Row gutter="10" >
            <Col sm={8}>
              <Form.Item name="min" style={{ margin: 0 }}  label="Số sub order min" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%', margin: 0, padding: 0 }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max" style={{ margin: 0 }}  label="Số Sub (order max)" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%', margin: 0, padding: 0 }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="price_per_10" style={{ margin: 0 }}  label="Prices / 10 Subs" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%', margin: 0, padding: 0 }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

EditService.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func,
  state: PropTypes.object
};

export default EditService;
