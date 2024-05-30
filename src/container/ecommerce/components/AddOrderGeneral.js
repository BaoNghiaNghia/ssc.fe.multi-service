/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Button, Modal, Divider, Select, Badge, Tooltip, Card } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaLocationArrow, FaYoutube } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import { isEmpty } from 'lodash';
import actions from '../../../redux/buffComment/actions';
import reportActions from '../../../redux/reports/actions';
import actionsService from '../../../redux/serviceSettings/actions';
import { numberWithCommas, validateYouTubeUrl } from '../../../utility/utility';
import { COLOR_GENERAL, VIETNAMES_CURRENCY } from '../../../variables';

const badgeGreenStyle = {
  border: '1.3px solid #00ab00',
  fontFamily: 'Be Vietnam Pro',
  borderRadius: '10px',
  padding: '0px 7px',
  fontSize: '0.7em',
  color: '#00ab00',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
};

const badgeOrangeStyle = {
  border: '1.3px solid orange',
  fontFamily: 'Be Vietnam Pro',
  borderRadius: '10px',
  padding: '0px 7px',
  fontSize: '0.7em',
  color: 'orange',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
};

const badgeRedStyle = {
  border: '1.3px solid red',
  fontFamily: 'Be Vietnam Pro',
  borderRadius: '10px',
  padding: '0px 7px',
  fontSize: '0.7em',
  color: 'red',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
};

const { Option } = Select;

function AddOrderGeneral() {
  const dispatch = useDispatch();
  const [formCreateService] = Form.useForm();

  const { postLoading, listService, isOpenCreateOrder, detailService } = useSelector((state) => {
    return {
      postLoading: state.settingService.postLoading,
      listService: state?.settingService?.listService?.items,
      isOpenCreateOrder: state?.reports?.isOpenCreateOrder,
      detailService: state?.settingService?.detailService

    };
  });

  const validatedServiceComment = listService?.filter((itemService) => {
    return itemService?.enabled && itemService?.category === "Comments"
  }); 

  const [stateCurr, setStateCurr] = useState({
    selectedCategory: 'Comments',
    amountChange: 0
  });

  useEffect(() => {
    dispatch(actionsService.fetchListServiceBegin());
  }, [dispatch]);

  useEffect(() => {
    if (validatedServiceComment && validatedServiceComment?.length > 0) {
      formCreateService.setFieldValue('service_id', validatedServiceComment[0]?.service_id);
    }
  }, [dispatch]);

  const handleOk = () => {
    try {
      formCreateService.validateFields()
        .then((values) => {
          dispatch(actions.createOrderCommentAdminBegin(values));
          dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));

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
    setStateCurr({
      ...stateCurr,
      selectedCategory: 'Comments'
    });

    formCreateService.resetFields();
    dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));
  }

  const handleCountValidateCommentString = (value) => {
    return value?.target?.value?.split('\n')?.length;
  }

  const validateCommentCount = stateCurr?.amountChange >= detailService?.min && stateCurr?.amountChange <= detailService?.max;

  const formCreateCommentService = () => {
    return (
      <>
        <Divider style={{ fontSize: '0.9em', color: 'gray', paddingTop: '10px', margin: '0px' }}>Thông tin dịch vụ</Divider>
        <Row gutter="10">
          <Col sm={24}>
            <Form.Item
              name="link"
              label="Liên kết"
              style={{ marginBottom: '7px' }}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Trường không được trống'
                },
                {
                  validator: async (_, link) => {
                    if (!validateYouTubeUrl(link)) {
                      return Promise.reject( `Đường dẫn video Youtube không hợp lệ`);
                    }
                  },
                }
              ]}
            >
              <Input size='small' allowClear style={{ fontWeight: 'bold' }} placeholder='Thêm liên kết' />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter="10">
          <Col sm={24}>
            <Form.Item
              name="comments"
              label="Comment"
              style={{ marginBottom: '7px' }}
              rules={[
                {
                  required: true,
                  message: 'Trường không được trống'
                },
                {
                  validator: async (_, comments) => {
                    const minComment = detailService?.min;
                    const maxComment = detailService?.max;
                    const count = comments?.split('\n')?.length;

                    if (minComment != null && maxComment != null) {
                      if (count < minComment) {
                        return Promise.reject( `Cần ít nhất ${  minComment} comments`);
                      } if (count > maxComment) {
                        return Promise.reject( `Vượt quá  ${  maxComment} comments`);
                      }
                    }
                  },
                }
              ]}
              onChange={(value) => {
                setStateCurr({
                  ...stateCurr,
                  amountChange: handleCountValidateCommentString(value)
                })
                formCreateService.setFieldsValue({ comments: value?.target?.value });
              }}
            >
              <Input.TextArea placeholder={"Comment 1 \nComment 2 \nComment 3 \nComment 4 \nComment 5 \nComment 6 \n..."} rows={7} />
              <span style={{ fontSize: '0.8em', fontWeight: 'bold', color: COLOR_GENERAL.primary, display: 'flex', justifyContent: 'space-between', marginTop: '3px' }}>
                <span style={{ color: (validateCommentCount) ? 'green' : 'red', display: 'inline-flex', alignItems: 'center' }}>
                  <span>{stateCurr?.amountChange} comments</span> 
                  { validateCommentCount ? <TiTick fontSize={17} style={{ marginLeft: '3px' }} /> : null }
                </span>
                <span>Ít nhất: {numberWithCommas(detailService?.min || 0)} - Nhiều nhất: {numberWithCommas(detailService?.max || 0)}</span>
              </span>
            </Form.Item>
          </Col>
        </Row>
      </>
    )
  }

  const formCreateSubscribeService = () => {
    return (
      <>
        <Divider style={{ fontSize: '0.9em', color: 'gray', paddingTop: '10px', margin: '0px' }}>Thông tin dịch vụ</Divider>
        <Row gutter="10">
          <Col sm={24}>
            <Form.Item
              name="note"
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
      </>
    );
  }

  const formCreateLikeService = () => {
    return (
      <>
        <Divider style={{ fontSize: '0.9em', color: 'gray', paddingTop: '10px', margin: '0px' }}>Thông tin dịch vụ</Divider>
        <Row gutter="10">
          <Col sm={24}>
            <Form.Item
              name="note"
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
      </>
    );
  }

  const switchServiceSelection = (type) => {
    switch (type) {
      case 'Comments':
        return formCreateCommentService();

      case 'Subscribers':
        return formCreateSubscribeService();

      case 'Likes':
        return formCreateLikeService();

      default:
        return (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <span style={{ fontStyle: 'italic', padding: '30px auto' }}>Chưa có thông tin dịch vụ</span>
          </div>
        );
    }
  }

  return (
    <>
      <Modal
        width='900px'
        open={isOpenCreateOrder}
        centered
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
            <div>
              <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Đặt hàng dịch vụ mới</p>
              <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Điền thông tin đơn hàng</p>
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
            Xác nhận
          </Button>
        ]}
      >
        <Form layout="vertical" form={formCreateService}>
          <Row gutter={15}>
            <Col sm={16}>
              <Card size="small" style={{ border: '1px solid #dddddd' }}>
                <Row gutter="10">
                  <Col sm={24}>
                    <Form.Item
                      name="service_id"
                      label="Dịch vụ"
                      style={{ marginBottom: '0px' }}
                      rules={[{
                        required: true,
                        message: 'Trường không được trống'
                      }]}
                    >
                      <Select 
                        allowClear
                        showSearch
                        size='small'
                        className='full-height-dropdown'
                        style={{ width: '100%' }}
                        placeholder="Tìm theo ID của dịch vụ"
                        onSearch={(values) => {
                          setStateCurr({
                            ...stateCurr,
                            selectedCategory: ''
                          });
                          dispatch(actionsService.modalDetailServiceBegin({}));
                        }}
                        onChange={(values) => {
                          const findCategory = listService?.filter(itemService => itemService?.service_id === values);

                          if (findCategory?.length > 0) {
                            if (findCategory[0]?.category !== stateCurr?.selectedCategory) {
                              setStateCurr({
                                ...stateCurr,
                                selectedCategory: findCategory[0]?.category,
                                amountChange: 0
                              });

                              dispatch(actionsService.modalDetailServiceBegin(findCategory[0]));
                              // Reset fields when change service type
                              // formCreateService.resetFields();
                            }
                            dispatch(actionsService.modalDetailServiceBegin(findCategory[0]));
                          }
                        }}
                        onClear={() => {
                          setStateCurr({
                            ...stateCurr,
                            selectedCategory: null
                          });
                          dispatch(actionsService.modalDetailServiceBegin({}));
                        }}
                      >
                        {
                          listService?.map((itemService, index) => {
                            return <>
                              {
                                itemService?.enabled ? (
                                  <Option key={index} value={itemService?.service_id}>
                                    <div>
                                      <Row style={{ margin: 0, padding: 0 }}>
                                        <Col style={{ margin: 0, padding: 0 }}>
                                          <span className="label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                            <FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }} />
                                            {
                                              itemService?.geo ? (
                                                <Tooltip title={itemService?.geo?.toUpperCase()}>
                                                  <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginRight: '7px' }}>
                                                    <img src={require(`../../../static/img/flag/${itemService?.geo}.png`)} alt="" width="17px" height="17px" />
                                                  </span>
                                                </Tooltip>
                                              ) : null
                                            }
                                            <span style={{ fontWeight: 'bold', marginRight: '7px' }}>{itemService?.service_id}</span>
                                            <span style={{ padding: '0 5px' }}>-</span>
                                            <span style={{ fontWeight: 500 }}>{itemService?.name}</span>
                                            <span style={{ padding: '0 5px' }}>-</span>
                                            <span style={{ fontWeight: '800', color: '#009ef7' }}>{numberWithCommas(itemService?.price_per_10 || 0)} {VIETNAMES_CURRENCY}</span>
                                          </span>
                                        </Col>
                                      </Row>
                                      {/* <p style={{ color: 'gray', fontSize: '0.8em', margin: '0px', padding: '0px' }}>{itemService?.description}</p> */}
                                      <Row>
                                        <Col style={{ display: 'inline-flex', alignItems: 'center' }}>
                                          {
                                            itemService?.enabled ? (
                                              <span className="label" style={badgeGreenStyle}>
                                                <Badge color='green' dot style={{ marginRight: '5px' }} />
                                                Đang hoạt động
                                              </span>
                                            ) : (
                                              <span className="label" style={badgeRedStyle}>
                                                <Badge color='red' dot style={{ marginRight: '5px' }} />
                                                Đang tắt
                                              </span>
                                            )
                                          }
                                          <span className="label" style={badgeGreenStyle}>Bảo hành</span>
                                          <span className="label" style={badgeGreenStyle}>Đề xuất sử dụng</span>
                                          {
                                            itemService?.priority ? (
                                              <span className="label" style={badgeOrangeStyle}>
                                                <FaLocationArrow color='orange' style={{ marginRight: '5px' }} />
                                                Ưu tiên
                                              </span>
                                            ) : <></>
                                          }
                                        </Col>
                                      </Row>
                                    </div>
                                  </Option>
                                ) : null
                              }
                            </>;
                          })
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                {switchServiceSelection(stateCurr?.selectedCategory)}
              </Card>
            </Col>
            <Col sm={8}>
              {
                !isEmpty(detailService) ? (
                  <>
                    <Card size="small" style={{ marginBottom: '15px', border: '1px solid #009ef7' }}>
                      <div>
                        <Row style={{ margin: 0, padding: 0 }}>
                          <Col style={{ margin: 0, padding: 0 }}>
                            <p className="label" style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
                              Platform: &nbsp;<FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }} /> Youtube
                            </p>
                            <p className="label" style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
                              GEO: &nbsp;
                              {
                                detailService?.geo ? (
                                  <Tooltip title={detailService?.geo?.toUpperCase()}>
                                    <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginRight: '7px' }}>
                                      <img src={require(`../../../static/img/flag/${detailService?.geo}.png`)} alt="" width="17px" height="17px" />
                                      <span style={{ marginLeft: '6px' }}>{detailService?.geo?.toUpperCase()}</span>
                                    </span>
                                  </Tooltip>
                                ) : 'Không có'
                              }
                            </p>
                            <p style={{ fontWeight: 'bold', marginRight: '7px' }}>ID: &nbsp;{detailService?.service_id}</p>
                            <p style={{ fontWeight: 600, color: 'green', fontSize: '1.1em' }}>{detailService?.name}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #e7e7e7', paddingTop: '7px' }}>
                              <span style={{ fontSize: '0.9em' }}>Giá tiền: </span>
                              <p style={{ fontWeight: '800', color: '#009ef7' }}>{numberWithCommas(detailService?.price_per_10 || 0)} {VIETNAMES_CURRENCY}</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                    <Card size="small" style={{ border: '1px solid #009ef7' }}>
                      <div>
                        <p style={{ color: 'gray', fontSize: '0.8em', margin: '0px', padding: '0px' }}>{detailService?.description}</p>
                        {
                          detailService?.enabled ? (
                            <span className="label" style={badgeGreenStyle}>
                              <Badge color='green' dot style={{ margin: '0 5px 0 0', padding: 0, fontSize: '10px' }} />
                              Đang hoạt động
                            </span>
                          ) : (
                            <span className="label" style={badgeRedStyle}>
                              <Badge color='red' dot style={{ margin: '0 5px 0 0', padding: 0, fontSize: '10px' }} />
                              Đang tắt
                            </span>
                          )
                        }
                        <span className="label" style={badgeGreenStyle}>Bảo hành</span>
                        <span className="label" style={badgeGreenStyle}>Đề xuất sử dụng</span>
                        {
                          detailService?.priority ? (
                            <span className="label" style={badgeOrangeStyle}>
                              <FaLocationArrow color='orange' fontSize={8} style={{  margin: '0 5px 0 0', padding: 0 }}/>
                              Ưu tiên
                            </span>
                          ) : <></>
                        }
                      </div>
                    </Card>
                  </>
                ) : <Card size="small">
                  Chưa chọn dịch vụ
                </Card>
              }
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

// AddOrderGeneral.propTypes = {
//   isOpen: PropTypes.bool,
//   setState: PropTypes.func
// };

export default AddOrderGeneral;
