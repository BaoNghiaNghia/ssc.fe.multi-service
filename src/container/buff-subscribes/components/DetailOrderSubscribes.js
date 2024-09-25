/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Modal, InputNumber, Divider, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaYoutube } from 'react-icons/fa';
import serviceActions from '../../../redux/serviceSettings/actions';
import { generateIconService, LIST_SERVICE_SUPPLY, ORDER_YOUTUBE_STATUS } from '../../../variables/index';
import { performanceStatementTags } from '../../../utility/utility';

const { Option } = Select;

function DetailOrderSubscribe({ setState, orderState }) {
  const dispatch = useDispatch();

  const [formUpdateService] = Form.useForm();

  const { detailOrderSubscribe, userList, listService } = useSelector(state => {
    return {
      detailOrderSubscribe: state?.buffSubscribe?.detailOrderSubscribe,
      userList: state?.member?.userList,
      listService: state?.settingService?.listService?.items,
    };
  });

  useEffect(() => {
    dispatch(serviceActions.fetchListServiceBegin({}));
  }, [dispatch]);

  const { performance } = detailOrderSubscribe;

  const findUser = userList?.filter((item) => item.id === detailOrderSubscribe?.user_id);
  const findService = listService?.filter((item) => item.service_id === detailOrderSubscribe?.service_id);

  useEffect(() => {
    formUpdateService.setFieldsValue(detailOrderSubscribe);
    if (findService?.length > 0) {
      formUpdateService.setFieldValue('category', findService[0]?.category);
    }

    if (findUser?.length > 0) {
      formUpdateService.setFieldValue('user_name', findUser[0]?.fullname);
      formUpdateService.setFieldValue('user_email', findUser[0]?.email);
    }

    formUpdateService.setFieldValue('priority', String(detailOrderSubscribe?.priority));
  });

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
        open={orderState?.isDetailOrderSubscribeModal}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thông tin đơn Subscribe</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Chi tiết thông tin đơn</p>
              </div>
            </div>
          </>
        }
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="add_service" layout="vertical" form={formUpdateService}>
          {
            findService?.length > 0 ? (
              <Row gutter="10" style={{ backgroundColor: '#efefef', borderRadius: '10px' }}>
                <Col sm={12}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center', marginTop: '10px' }}>
                    <span style={{ marginRight: '15px', fontWeight: '600', paddingLeft: '10px' }}>Platform: </span>
                    <FaYoutube color="red" fontSize={20} style={{ marginRight: '7px' }}/>
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>{findService && findService[0]?.platform}</span>
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
                      style={{ width: '100%', margin: '5px 0px 0 0', padding: '0px' }}
                      bordered={false}
                      disabled
                      size='small'
                      onClick={(value) => {
                        const selectedService = LIST_SERVICE_SUPPLY.filter(item => item?.category === value?.target?.innerText);

                        if (selectedService?.length > 0) {
                          formUpdateService.setFieldValue('type', selectedService[0]?.type);
                          formUpdateService.setFieldValue('service_type', selectedService[0]?.service_type);
                        }
                      }}
                    >
                      {
                        LIST_SERVICE_SUPPLY?.map(service => {
                          return (
                            <Option key={service?.category} value={service?.category}>
                              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                { generateIconService(service) }
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
            ) : null
          }

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
                <Input size='small'  readOnly placeholder="Nhập email"/>
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
                <Input size='small' readOnly style={{ fontWeight: 'bold' }} placeholder='Đường dẫn video'/>
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
                <Input size='small' readOnly style={{ fontWeight: 'bold' }} placeholder='ID của video'/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="20">
            <Col sm={8}>
              <Form.Item
                name="quantity"
                label="Lượng subscribe"
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' addonAfter="subscribe" readOnly placeholder="Thêm loại"/>
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
                <Input size='small' addonAfter="subscribe" readOnly placeholder="Thêm loại"/>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item
                name="performance"
                label="Tiến trình"
                style={{ margin: '0px', padding: '0px', width: '100%' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <div style={{ alignContent: 'center', width: '100%' }}>
                  {performanceStatementTags(performance)}
                </div>
              </Form.Item>
            </Col>
          </Row>

          <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_thread" initialValue={ orderState?.max_threads } label="Số luồng tối đa" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber readOnly type='number' addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Nhập vào số luồng tối đa' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="priority"  label="Ưu tiên" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select style={{ width: '100%' }} disabled size='small'>
                  <Option value="false">Không</Option>
                  <Option value="true">Có</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="status" label="Trạng thái" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select
                  style={{ width: '100%', margin: '0px', padding: '0px' }}
                  size='small'
                  disabled
                >
                  {
                    ORDER_YOUTUBE_STATUS?.map(orderState => {
                      return (
                        <Option value={orderState?.value}>
                          <Badge style={{ marginRight: '8px' }} dot color={orderState?.color} />
                          <span>{orderState?.label}</span>
                        </Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

DetailOrderSubscribe.propTypes = {
  setState: PropTypes.func,
  orderState: PropTypes.object
};

export default DetailOrderSubscribe;
