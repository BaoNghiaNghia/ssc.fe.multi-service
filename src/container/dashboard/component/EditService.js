/* eslint-disable react/jsx-boolean-value */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BsFire } from "react-icons/bs";
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaYoutube } from 'react-icons/fa';
import actions from '../../../redux/serviceSettings/actions';
import { generateIconService, LIST_SERVICE_SUPPLY, REGION_IDENTIFIER, SERVICE_TYPE, SERVICE_VIEW_TYPE } from '../../../variables/index';

const { Option } = Select;

function EditService({ isOpen, setState, state }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { postLoading, detailService, typeService } = useSelector(item => {
    return {
      postLoading: item?.settingService?.postLoading,
      detailService: item?.settingService?.detailService,
      typeService: item?.reports?.typeService
    };
  });

  const initCategory = LIST_SERVICE_SUPPLY.filter(item => item?.category === detailService?.category);

  useEffect(() => {
    if (detailService !== undefined) {
      formUpdateService.setFieldValue('rest_api', detailService?.rest_api);
      formUpdateService.setFieldsValue(detailService);
      formUpdateService.setFieldValue('priority', String(detailService?.priority));
    }
    formUpdateService.setFieldValue('type', initCategory[0]?.type);
  });

  const handleOk = () => {
    try {
      formUpdateService.validateFields()
        .then((values) => {
          let requestData = {};

          const generalRequestData = {
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
            priority: values?.priority === 'true',
            rest_api: values?.rest_api
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

  return (
    <>
      <Modal
        width='600px'
        open={isOpen}
        centered
        title={
          <Row>
            <Col sm={16}>
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                <div>
                  <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật dịch vụ</p>
                  <p style={{ fontSize: '0.8em', marginBottom: 0 }}>Thay đổi thông tin cho dịch vụ</p>
                </div>
              </div>
            </Col>
            <Col sm={8}><></>
            </Col>
          </Row>
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
                  style={{ width: '100%', marginTop: '10px', padding: 0 }}
                  bordered={false}
                  disabled
                  initialValue="Comments"
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

          <Divider style={{ fontSize: '0.9em', color: 'gray', paddingTop: '10px', margin: 0 }}>Thông tin dịch vụ</Divider>

          <Row gutter="10">
            <Col sm={15}>
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
            <Col sm={4}>
              <Form.Item
                name="rest_api"
                label="Rest API"
                style={{ marginBottom: '7px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Select style={{ width: '100%' }} size='small'>
                  <Option value={false}>Không</Option>
                  <Option value={true}>
                    Có
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
                style={{ marginBottom: '7px', fontStyle: 'italic' }} 
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input.TextArea placeholder='Thêm mô tả dịch vụ' rows={4}/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="10">
            <Col sm={9}>
              <Form.Item name="service_type" style={{ margin: '0px', padding: '0px' }} label="Loại dịch vụ" rules={[{
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
                style={{ margin: '0px', padding: '0px' }}
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
              <Form.Item name="priority" style={{ margin: '0px', padding: '0px' }} label="Ưu tiên" rules={[{
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

          <Divider plain style={{ marginTop: 0, padding: 0, fontSize: '0.9em', color: 'gray' }}>Cấu hình luồng</Divider>

          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_threads" style={{ margin: '0px', padding: '0px' }} initialValue={ state?.max_threads } label="Luồng < 3000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max_threads_3000" style={{ margin: '0px', padding: '0px' }} label="3000 < Luồng < 5000" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small'style={{ width: '100%' }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max_threads_5000" style={{ margin: '0px', padding: '0px' }} label="5000 < Luồng" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%' }} placeholder='Ví dụ : 1000'/>
              </Form.Item>
            </Col>
          </Row>
          {
            (detailService && (detailService?.category === SERVICE_TYPE.VIEW.description)) ? (
              <>
                <Divider plain style={{ marginTop: '0px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình view</Divider>
                <Row gutter="10">
                  <Col sm={8}>
                    <Form.Item 
                      name="service_view_type" 
                      label={`Loại ${detailService?.category}`}
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
          <Row gutter="10" >
            <Col sm={8}>
              <Form.Item name="min" style={{ margin: '0px', padding: '0px' }}  label={`Số ${detailService?.category} (MIN)`} rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%', margin: 0, padding: 0 }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="max" style={{ margin: '0px', padding: '0px' }}  label={`Số ${detailService?.category} (MAX)`} rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' size='small' style={{ width: '100%', margin: 0, padding: 0 }} placeholder='Ví dụ : 1000' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="price_per_10" style={{ margin: '0px', padding: '0px' }}  label={`Prices / 10 ${detailService?.category}`} rules={[{
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
