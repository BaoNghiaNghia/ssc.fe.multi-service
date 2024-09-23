/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFire } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider, Switch } from 'antd';
import { FaYoutube } from 'react-icons/fa';
import { GrServicePlay  } from "react-icons/gr";
import actions from '../../../redux/serviceSettings/actions';
import { generateIconService, LIST_SERVICE_SUPPLY, REGION_IDENTIFIER, SERVICE_TYPE, SERVICE_VIEW_TYPE } from '../../../variables';

const { Option } = Select;

function AddService({ serviceState, setState }) {
  const dispatch = useDispatch();

  const { isOpenAdd } = serviceState;

  const { postLoading, typeService } = useSelector(state => {
    return {
      postLoading: state.settingService.postLoading,
      typeService: state?.reports?.typeService
    };
  });

  const [formCreateService] = Form.useForm();

  const [state, setStateModal] = useState({
    values: null,
    rest_api: true,
    category: SERVICE_TYPE.COMMENT.description
  });

  const handleSubmit = (values) => {
    setStateModal({ ...state, values: { ...values, tags: state.tags } });
  };

  useEffect(() => {
    formCreateService.setFieldValue('category', 'Comments');
    const matchService = LIST_SERVICE_SUPPLY?.filter((item) => item?.category === 'Comments');
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
          let requestData = {};

          const generalRequestData = {
            enabled: true,
            priority: formCreateService.getFieldValue('priority') === 'true',
            price_per_10: formCreateService.getFieldValue('price_per_10'),
            name: formCreateService.getFieldValue('name'),
            description: formCreateService.getFieldValue('description'),
            service_type: formCreateService.getFieldValue('service_type'),
            type: formCreateService.getFieldValue('type'),
            category: formCreateService.getFieldValue('category'),
            platform: formCreateService.getFieldValue('platform') || 'Youtube',

            min: formCreateService.getFieldValue('min'),
            max: formCreateService.getFieldValue('max'),
            geo: formCreateService.getFieldValue('geo'),
            max_threads: formCreateService.getFieldValue('max_threads'),
            max_threads_3000: formCreateService.getFieldValue('max_threads_3000'),
            max_threads_5000: formCreateService.getFieldValue('max_threads_5000'),
            rest_api: state?.rest_api
          }
          
          if (SERVICE_TYPE.VIEW.description === values?.category) {
            requestData = {
              ...generalRequestData,
              service_view_type: values?.service_view_type,
              max_view_time: values?.max_view_time,
              min_view_time: values?.min_view_time,
            };
          } else {
            requestData = {
              ...generalRequestData
            };
          }
          dispatch(actions.createServiceBegin(requestData));

          setState({
            ...serviceState,
            isOpenAdd: false,
          });

          setStateModal({
            ...state,
            rest_api: true
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

    setStateModal({
      ...state,
      rest_api: true
    });
  }

  return (
    <>
      <Modal
        width='600px'
        open={isOpenAdd}
        centered
        title={
          <Row gutter={10}>
            <Col sm={16}>
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                <GrServicePlay fontSize={40} color='#a1a1a1' style={{ margin: '0 20px 0 0', padding: '5px', border: '1px solid #e3e3e3', borderRadius: '10px' }} />
                <div>
                  <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thêm dịch vụ mới</p>
                  <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Điền thông tin cho dịch vụ mới</p>
                </div>
              </div>
            </Col>
            <Col sm={8}>
              <Form.Item
                name="rest_api"
                style={{ margin: '0px', padding: '0px'}}
                label="Rest API"
              >
                <Switch style={{ marginTop: '15px', paddingTop: '0px' }} checkedChildren="Rest API" unCheckedChildren="No Rest API" checked={state?.rest_api} onChange={(check) => {
                  setStateModal({
                    ...state,
                    rest_api: check
                  })
                }}/>
              </Form.Item>
            </Col>
          </Row>
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
                style={{ margin: '6px 0px 0 0' }}
                initialValue="Comments"
                bordered
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
                onClick={(value) => {
                  const selectedService = LIST_SERVICE_SUPPLY.filter(item => item?.category === value?.target?.innerText);
                  if (selectedService?.length > 0) {
                    setStateModal({
                      ...state,
                      category: selectedService[0]?.category
                    });

                    formCreateService.setFieldValue('type', selectedService[0]?.type);
                    formCreateService.setFieldValue('service_type', selectedService[0]?.service_type);
                  }
                }}
              >
                <Select style={{ width: '100%', margin: '0px', padding: '0px' }} bordered={false} initialValue="Comments" size='small'>
                {
                    LIST_SERVICE_SUPPLY?.map(service => {
                      return (
                        <Option key={service?.category} value={service?.category}>
                          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            { generateIconService(service) }
                            <span style={{ fontWeight: '600' }}>{service?.category}</span>
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
                style={{ margin: '0px', padding: '0px' }}
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
                initialValue={REGION_IDENTIFIER[0]?.shortcode}
                style={{ margin: '0px', padding: '0px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Select style={{ width: '100%' }} defaultValue={REGION_IDENTIFIER[0]?.shortcode} size='small'>
                  {
                    REGION_IDENTIFIER?.map(region => (
                      <Option value={region?.shortcode}>
                        <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginLeft: '5px' }}>
                          <img src={require(`../../../${region?.path}`)} alt={region?.alt} width="18px" height="18px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }}/>
                          <span style={{ marginLeft: '10px' }}>{region?.region}</span>
                        </div>
                      </Option>
                    ))
                  }
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
                <Input.TextArea placeholder='Thêm mô tả dịch vụ' rows={3} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="10">
            <Col sm={9}>
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="service_type" initialValue="ytbcomment" label="Loại dịch vụ" rules={[{
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
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="type" label="Loại" initialValue="Custom Comments" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Input size='small' disabled placeholder="Thêm loại" />
              </Form.Item>
            </Col>
            <Col sm={6}>
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="priority" initialValue="false" label="Ưu tiên" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select style={{ width: '100%' }} size='small'>
                  <Option value="false">Không</Option>
                  <Option value="true">
                    <BsFire fontSize={15} color='#238f00' style={{ marginRight: '6px', marginTop: '3px', textShadow: '1px 1px 2px yellowgreen' }}/>
                    Có
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình luồng</Divider>
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="max_threads" label="Luồng < 3000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' addonAfter="" size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="max_threads_3000" label="3000 < Luồng < 5000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="max_threads_5000" label="5000 < Luồng" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
          </Row>
          {
            state?.category === SERVICE_TYPE.VIEW.description ? (
              <>
                <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình view</Divider>
                <Row gutter="10">
                  <Col sm={8}>
                    <Form.Item 
                      name="service_view_type" 
                      label="Loại view"
                      initialValue={SERVICE_VIEW_TYPE[0].type}
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
              </>
            ) : null
          }

          <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Số lượng {state?.category} & Giá</Divider>
              
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item 
                style={{ margin: '0px', padding: '0px' }}
                name="min" 
                label={`Số ${state?.category} (MIN)`}
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
                          return Promise.reject( `Phải nhỏ hơn ${  max} (${typeService?.toUpperCase()} max)`);
                        }
                      }
                    },
                  }
                ]}
              >
                <InputNumber type='number' size='small' style={{ width: '100%', margin: '0px', padding: '0px' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item
                style={{ margin: '0px', padding: '0px' }}
                name="max"
                label={`Số ${state?.category} (MAX)`}
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
                          return Promise.reject( `Phải lớn hơn ${  min} (${typeService?.toUpperCase()} min)`);
                        }
                      }
                    },
                  }
                ]}
                >
                <InputNumber type='number' size='small' style={{ width: '100%', margin: '0px', padding: '0px' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item style={{ margin: '0px', padding: '0px' }} name="price_per_10" label={`Prices / 10 ${state?.category}`} rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%', margin: '0px', padding: '0px' }} placeholder='Ví dụ : 1000' />
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
