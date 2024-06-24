/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots, FaYoutube } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import actions from '../../../redux/serviceSettings/actions';
import { FixedServiceTemp } from '../../../variables';

const { Option } = Select;

function AddService({ serviceState, setState }) {
  const dispatch = useDispatch();

  const { isOpenAdd } = serviceState;

  const { postLoading } = useSelector(state => {
    return {
      postLoading: state.settingService.postLoading,
    };
  });

  const [formCreateService] = Form.useForm();

  const [state, setStateModal] = useState({
    values: null,
  });

  const handleSubmit = (values) => {
    setStateModal({ ...state, values: { ...values, tags: state.tags } });
  };

  useEffect(() => {
    formCreateService.setFieldValue('category', 'Comments');
    const matchService = FixedServiceTemp?.filter((item) => item?.category === 'Comments');
    if (matchService?.length > 0) {
      formCreateService.setFieldValue('type', matchService[0]?.type);
      formCreateService.setFieldValue('service_type', matchService[0]?.service_type);
    }
  }, []);

  useEffect(() => {
    dispatch(actions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleOk = () => {
    try {
      formCreateService.validateFields()
        .then((values) => {
          const requestData = {
            category: formCreateService.getFieldValue('category'),
            platform: formCreateService.getFieldValue('platform') || 'Youtube',
            service_type: formCreateService.getFieldValue('service_type'),
            type: formCreateService.getFieldValue('type'),
            description: formCreateService.getFieldValue('description'),
            enabled: true,
            min: formCreateService.getFieldValue('min'),
            max: formCreateService.getFieldValue('max'),
            geo: formCreateService.getFieldValue('geo'),
            max_threads: formCreateService.getFieldValue('max_threads'),
            max_threads_3000: formCreateService.getFieldValue('max_threads_3000'),
            max_threads_5000: formCreateService.getFieldValue('max_threads_5000'),
            name: formCreateService.getFieldValue('name'),
            price_per_10: formCreateService.getFieldValue('price_per_10'),
            priority: formCreateService.getFieldValue('priority') === 'true'
          }

          dispatch(actions.createServiceBegin(requestData));

          setState({
            ...serviceState,
            isOpenAdd: false,
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
      ...serviceState,
      isOpenAdd: false,
    });
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
        open={isOpenAdd}
        centered
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
            <div>
              <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thêm dịch vụ</p>
              <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Điền thông tin cho dịch vụ mới</p>
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
        <Form name="add_service" layout="vertical" form={formCreateService} onFinish={handleSubmit}>
          <Row gutter="10" style={{ backgroundColor: '#efefef', borderRadius: '10px' }}>
            <Col sm={12}>
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center', marginTop: '10px' }}>
                <span style={{ marginRight: '15px', fontWeight: '600', paddingLeft: '10px' }}>Platform: </span>
                <FaYoutube color="red" fontSize={20} style={{ marginRight: '7px' }} />
                <span style={{ fontSize: '16px', fontWeight: '700' }}>Youtube</span>
              </div>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="category"
                style={{ margin: '0px' }}
                initialValue="Comments"
                bordered
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
                onClick={(value) => {
                  const selectedService = FixedServiceTemp.filter(item => item?.category === value?.target?.innerText);

                  if (selectedService?.length > 0) {
                    formCreateService.setFieldValue('type', selectedService[0]?.type);
                    formCreateService.setFieldValue('service_type', selectedService[0]?.service_type);
                  }
                }}
              >
                <Select style={{ width: '100%', margin: '0px', padding: '0px' }} bordered={false} initialValue="Comments" size='small'>
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

          <Divider style={{ fontSize: '0.9em', color: 'gray', paddingTop: '10px', margin: '0px' }}>Thông tin dịch vụ</Divider>

          <Row gutter="10">
            <Col sm={18}>
              <Form.Item
                name="name"
                label="Tên dịch vụ"
                style={{ marginBottom: '7px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' style={{ fontWeight: 'bold' }} placeholder='Tên dịch vụ' />
              </Form.Item>
            </Col>
            <Col sm={6}>
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
                    <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginLeft: '5px' }}>
                      <img src={require(`../../../static/img/flag/vn.png`)} alt="vn-flag" width="18px" height="18px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }}/>
                      <span style={{ marginLeft: '7px' }}>Việt Nam</span>
                    </div>
                  </Option>
                  <Option value="us">
                    <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginLeft: '5px' }}>
                      <img src={require(`../../../static/img/flag/us.png`)} alt="us-flag" width="18px" height="18px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }}/>
                      <span style={{ marginLeft: '10px' }}>USA</span>
                    </div>
                  </Option>
                  <Option value="kr">
                    <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginLeft: '5px' }}>
                      <img src={require(`../../../static/img/flag/kr.png`)} alt="kr-flag" width="18px" height="18px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }}/>
                      <span style={{ marginLeft: '10px' }}>Korean</span>
                    </div>
                  </Option>
                  <Option value="jp">
                    <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginLeft: '5px' }}>
                      <img src={require(`../../../static/img/flag/jp.png`)} alt="jp-flag" width="18px" height="18px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }}/>
                      <span style={{ marginLeft: '10px' }}>Japan</span>
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
              <Form.Item name="service_type" initialValue="ytbcomment" label="Loại dịch vụ" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select style={{ width: '100%' }} disabled initialValue='ytbsubscribe' size='small'>
                  <Option value="ytbsubscribe">Subscribe</Option>
                  <Option value="ytbcomment">Comment</Option>
                  <Option value="ytblike">Like</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={9}>
              <Form.Item name="type" label="Loại" initialValue="Custom Comments" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' disabled placeholder="Thêm loại" />
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
              <Form.Item name="max_threads" label="Luồng < 3000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' addonAfter="" size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max_threads_3000" label="3000 < Luồng < 5000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max_threads_5000" label="5000 < Luồng" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item 
                style={{ margin: '0px' }}
                name="min" 
                label="Số sub order min"
                rules={[
                  {
                    required: true,
                    message: 'Trường không được trống'
                  },
                  {
                    validator: async (_, min) => {
                      const max = formCreateService.getFieldValue("max");
                      if (max != null && min != null) {
                        if (max <= min) {
                          // eslint-disable-next-line prefer-promise-reject-errors
                          return Promise.reject( `Phải nhỏ hơn ${  max} (Sub order max)`);
                        }
                      }
                    },
                  }
                ]}
              >
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item
                style={{ margin: '0px' }}
                name="max"
                label="Số Sub (order max)"
                rules={[
                  {
                    required: true,
                    message: 'Trường không được trống'
                  },
                  {
                    validator: async (_, max) => {
                      const min = formCreateService.getFieldValue("min");
                      if (max != null && min != null) {
                        if (max <= min) {
                          // eslint-disable-next-line prefer-promise-reject-errors
                          return Promise.reject( `Phải lớn hơn ${  min} (Sub order min)`);
                        }
                      }
                    },
                  }
                ]}
                >
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item style={{ margin: '0px' }} name="price_per_10" label="Prices / 10 Subs" rules={[{
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

AddService.propTypes = {
  serviceState: PropTypes.object,
  setState: PropTypes.func
};

export default AddService;
