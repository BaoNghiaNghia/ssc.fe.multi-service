/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegEye } from "react-icons/fa6";
import { Row, Col, Form, Input, Select, Modal, InputNumber, Divider, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots, FaYoutube } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import serviceActions from '../../../redux/serviceSettings/actions';
import { LIST_SERVICE_SUPPLY, ORDER_YOUTUBE_STATUS, SERVICE_VIEW_TYPE } from '../../../variables/index';
import { performanceStatementTags } from '../../../utility/utility';

const { Option } = Select;

function DetailOrder({ setState, state }) {
  const dispatch = useDispatch();

  const [formUpdateService] = Form.useForm();

  const { postLoading, detailOrderView, userList, listService } = useSelector(state => {
    return {
      postLoading: state?.buffView?.loading,
      detailOrderView: state?.buffView?.detailOrderView,
      userList: state?.member?.userList,
      listService: state?.settingService?.listService?.items,
    };
  });

  useEffect(() => {
    dispatch(serviceActions.fetchListServiceBegin({}));
  }, [dispatch]);

  const { performance } = detailOrderView;

  const findUser = userList?.filter((item) => item.id === detailOrderView?.user_id);
  const findService = listService?.filter((item) => item.service_id === detailOrderView?.service_id);

  useEffect(() => {
    formUpdateService.setFieldsValue(detailOrderView);
    if (findService?.length > 0) {
      formUpdateService.setFieldValue('category', findService[0]?.category);
    }

    if (findUser?.length > 0) {
      formUpdateService.setFieldValue('user_name', findUser[0]?.fullname);
      formUpdateService.setFieldValue('user_email', findUser[0]?.email);
    }

    formUpdateService.setFieldValue('priority', String(detailOrderView?.priority));
  });

  const handleCancel = () => {
    setState({
      isDetailOrderModal: false,
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
      case 'Views':
        return <FaRegEye color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
      default:
        return <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
    }
  }

  return (
    <>
      <Modal
        width='600px'
        open={state?.isDetailOrderModal}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thông tin đơn View</p>
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
                      style={{ width: '100%', margin: '0px', padding: '0px' }}
                      bordered={false}
                      initialValue="Comments"
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
                label="Lượng view"
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input size='small' addonAfter="view" readOnly placeholder="Thêm loại"/>
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
                <Input size='small' addonAfter="view" readOnly placeholder="Thêm loại"/>
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

          <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình view</Divider>
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item 
                name="service_view_type" 
                label="Loại view"
                style={{ margin: '0px', padding: '0px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Select style={{ width: '100%' }} defaultValue={SERVICE_VIEW_TYPE[0].type} size='small'>
                  {SERVICE_VIEW_TYPE?.map((viewItem) => (
                    <Option key={viewItem?.type} value={viewItem?.type}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '5px' }}>
                        <div
                          style={{ width: '22px', height: '22px' }}
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{ __html: viewItem?.svg }}
                        />
                        <span style={{ marginLeft: '10px' }}>{viewItem?.description}</span>
                      </div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="min_view_time" label="Thời gian xem (MIN)" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="max_view_time" label="Thời gian xem (MAX)" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
          </Row>

          <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_thread" initialValue={ state?.max_threads } label="Số luồng tối đa" rules={[{
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

DetailOrder.propTypes = {
  setState: PropTypes.func,
  state: PropTypes.object
};

export default DetailOrder;
