/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Input, Button, Modal, Divider, Select, Badge, Tooltip, Card, Image, InputNumber } from 'antd';
import { MdAddchart, MdCancel } from "react-icons/md";
import { FaLocationArrow, FaYoutube } from 'react-icons/fa';
import { FaMoneyBillWave } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { isEmpty } from 'lodash';

import { toast } from 'react-toastify';
import actionsComment from '../../../redux/buffComment/actions';
import actionsLike from '../../../redux/buffLike/actions';
import actionsSubscribe from '../../../redux/buffSubscribe/actions';

import reportActions from '../../../redux/reports/actions';
import actionsService from '../../../redux/serviceSettings/actions';
import { numberWithCommas, validateYouTubeUrl } from '../../../utility/utility';
import { COLOR_GENERAL, VIETNAMES_CURRENCY, LIST_SERVICE_SUPPLY } from '../../../variables';
import EmptyBackground from '../../../static/img/empty_bg_2.png';
import { validateYoutubeLinkCommentVideoAPI, validateYoutubeLinkLikeVideoAPI } from '../../../config/apiFactory/Reports';

const badgeGreenStyle = {
  border: '1.3px solid #00ab00',
  fontFamily: 'Poppins, sans-serif',
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
  fontFamily: 'Poppins, sans-serif',
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
  fontFamily: 'Poppins, sans-serif',
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

const DEFAULT_CATEGORY = 'Comments'

const { Option } = Select;

function AddOrderGeneral() {
  const dispatch = useDispatch();
  const [formCreateOrder] = Form.useForm();

  const { postLoading, listService, isOpenCreateOrder, detailService } = useSelector((state) => {
    return {
      postLoading: state.settingService.postLoading,
      listService: state?.settingService?.listService?.items,
      isOpenCreateOrder: state?.reports?.isOpenCreateOrder,
      detailService: state?.settingService?.detailService
    };
  });

  const [stateCurr, setStateCurr] = useState({
    selectedCategory: DEFAULT_CATEGORY,
    listServiceCollection: listService?.filter(service => service?.category === DEFAULT_CATEGORY),
    amountChange: 0
  });

  const [helpMessage, setHelpMessage] = useState({});

  const handleValidateLink = async (value) => {
    let status = 'success';
    let help = '';

    try {
      if (!validateYouTubeUrl(value)) {
        status = 'error';
        help = 'Đường dẫn video Youtube không hợp lệ';
      }
      let responseValidVideo = {};

      switch (stateCurr?.selectedCategory) {
        case 'Comments':
          responseValidVideo = await validateYoutubeLinkCommentVideoAPI({ link: value });
          break;

        case 'Likes':
          responseValidVideo = await validateYoutubeLinkLikeVideoAPI({ link: value });
          break;
  
        case 'Subscribers':
          break;
  
        default:
          console.log('Chưa chọn dịch vụ');
      }

      const mapping = {
        'Comment': 'is_allow_cmt',
        'Like': 'is_allow_like',
        'Livestream': 'is_live',
        'Thời gian': 'is_valid_video_duration',
        'Đường dẫn': 'is_valid_link',
        'Video tồn tại': 'is_exist_video',
      };

      if (responseValidVideo?.data?.error_code === 0) {
        const validData = responseValidVideo.data?.data;
        const mappedObj = Object.keys(mapping).reduce((acc, title) => {
          if (Object.keys(validData).includes(mapping[title])) {
            acc[title] = validData[mapping[title]];
          }
          return acc;
        }, {});


        // Check if any of the required fields are false
        const isValid = mappedObj['Thời gian'] &&
                        mappedObj['Đường dẫn'] &&
                        mappedObj['Video tồn tại'];

        const customHelp = (
          <div style={{ textAlign: 'end', marginBottom: '8px', backgroundColor: '#f1fffa' }}>
            {
              Object.entries(mappedObj).map(([key, value]) => (
                <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                  <span style={{ color: 'gray', fontSize: '0.9em', marginRight: '1px' }}>{key}</span>
                  {value === true ? <IoMdCheckmarkCircle color='green'/> : <MdCancel color='orangered'/> }
                </span>
              ))
            }
          </div>
        );

        if (isValid) {
          status = 'success';
          help = customHelp;
        } else {
          status = 'error';
          help = customHelp;
        }
      } else {
        status = 'error';
        help = 'Đường dẫn video Youtube không hợp lệ';
      }
    } catch (error) {
      status = 'error';
      help = 'Lỗi xác thực liên kết YouTube';
    }

    setHelpMessage((prevHelp) => ({ ...prevHelp, 'link': help }));

    return {
      status: status === 'success',
      help
    };
  };

  useEffect(() => {
    dispatch(actionsService.fetchListServiceBegin());
  }, [dispatch]);

  const handleSubmitComment = () => {
    formCreateOrder.validateFields()
      .then((values) => {
        console.log(values);

        // Split the input into rows
        const rows = values?.comments?.split('\n');

        // Filter out empty rows
        const nonEmptyRows = rows.filter(row => row.trim().length > 0);

        values.comments = nonEmptyRows.join('\n');

        dispatch(actionsComment.createOrderCommentAdminBegin(values));
        dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));

        formCreateOrder.resetFields();
      })
      .catch((err) => {
        console.error("handle Real Error: ", err);
    });
  }

  const handleSubmitLike = () => {
    formCreateOrder.validateFields()
      .then((values) => {
        dispatch(actionsLike.createOrderLikeAdminBegin(values));
        dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));

        formCreateOrder.resetFields();
      })
      .catch((err) => {
        console.error("handle Real Error: ", err);
      });
  }

  const handleSubmitSubscribe = () => {
    formCreateOrder.validateFields()
      .then((values) => {
        dispatch(actionsSubscribe.createOrderCommentAdminBegin(values));
        dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));
        formCreateOrder.resetFields();
      })
      .catch((err) => {
        console.error("handle Real Error: ", err);
    });
  }

  const handleOk = () => {
    try {
      switch (stateCurr?.selectedCategory) {
        case 'Comments':
          handleSubmitComment();
          break;

        case 'Likes':
          handleSubmitLike();
          break;
  
        case 'Subscribers':
          handleSubmitSubscribe();
          break;
  
        default:
          console.log('Chưa chọn dịch vụ');
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleCancel = () => {
    setStateCurr({
      ...stateCurr,
      selectedCategory: DEFAULT_CATEGORY,
      listServiceCollection: listService?.filter(service => service?.category === DEFAULT_CATEGORY)
    });

    setHelpMessage({});

    formCreateOrder.resetFields();
    dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));

    dispatch(actionsService.modalDetailServiceBegin({}));
  }

  const handleCountValidateCommentString = (input) => {
    const commentString = input?.target?.value;

    // Split the input into rows
    const rows = commentString.split('\n');

    // Filter out empty rows
    const nonEmptyRows = rows.filter(row => row.trim().length > 0);

    if (commentString === '') { return 0; } 

    
    // Count the non-empty rows
    const rowCount = nonEmptyRows.length;

    return rowCount;
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
              help={helpMessage.link}
              rules={[
                {
                  required: true,
                  message: 'Trường không được trống'
                },
                {
                  validator: async (_, link) => {
                    if (link) {
                      const { status, help } = await handleValidateLink(link);
                      if (!status) { return Promise.reject(help); }
                    }
                  },
                },
              ]}
            >
              <Input 
                allowClear
                size='small'
                style={{ fontWeight: 'bold' }}
                placeholder='Thêm liên kết'
              />
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
                formCreateOrder.setFieldsValue({ comments: value?.target?.value });
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
              hasFeedback
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
        <Row gutter="10" style={{ marginBottom: '7px' }}>
          <Col sm={19}>
            <Form.Item
              name="link"
              label="Liên kết"
              hasFeedback
              help={helpMessage.link}
              rules={[
                {
                  required: true,
                  message: 'Trường không được trống'
                },
                {
                  validator: async (_, link) => {
                    if (link) {
                      const { status, help } = await handleValidateLink(link);
                      if (!status) { return Promise.reject(help); }
                    }
                  },
                },
              ]}
            >
              <Input size='small' allowClear style={{ fontWeight: 'bold' }} placeholder='Thêm liên kết' />
            </Form.Item>
          </Col>
          <Col sm={5}>
            <Tooltip title={`Min: ${detailService?.min} & Max:${detailService?.max}`} placement='left'>
              <Form.Item
                name="quantity"
                label="Số like"
                hasFeedback
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <InputNumber 
                  size='small'
                  style={{ width: '100% !important' }}
                  onChange={(value) => {
                    setStateCurr({
                      ...stateCurr,
                      amountChange: value
                    })
                  }}
                  min={detailService?.min}
                  max={detailService?.max}
                  placeholder={`Min: ${detailService?.min} & Max:${detailService?.max}`}
                />
              </Form.Item>
            </Tooltip>
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
          <Row>
            <Col sm={16}>
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                <div>
                  <p style={{ fontSize: '1.1em', marginBottom: '0px', fontWeight: '700' }}>Đặt hàng dịch vụ mới</p>
                  <p style={{ fontSize: '0.75em', marginBottom: '0px', color: 'gray', fontWeight: 400 }}>Điền thông tin đơn hàng</p>
                </div>
              </div>
            </Col>
            <Col sm={8}><></></Col>
          </Row>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ backgroundColor: 'gray' }}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" loading={postLoading} onClick={handleOk}>
            Xác nhận
          </Button>
        ]}
      >
        <Form layout="vertical" form={formCreateOrder}>
          <Row gutter={15}>
            <Col
              // sm={!isEmpty(detailService) ? 16 : 24}
              sm={16}
            >
              <Card size="small" style={{ border: '1px solid #dddddd59', padding: '5px' }}>
                <Row gutter="10">
                  <Col sm={8}>
                    <Form.Item
                      name="platform"
                      initialValue='youtube'
                      label="Nền tảng"
                      style={{ marginBottom: '0px' }}
                    >
                      <Select
                        defaultActiveFirstOption
                        size='small'
                        className='full-height-dropdown'
                        style={{ width: '100%' }}
                        placeholder="Tìm theo ID hoặc tên của dịch vụ"
                      >
                        <Option key={1} value='youtube'>
                          <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                            <FaYoutube color="red" fontSize={16} style={{ marginTop: '0px', marginRight: '7px' }} />
                            <span style={{ fontSize: '12px', fontWeight: '500' }}>Youtube</span>
                          </div>
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col sm={16}>
                    <Form.Item
                      name="category"
                      initialValue={stateCurr?.selectedCategory}
                      label="Phân loại "
                      style={{ marginBottom: '0px' }}
                    >
                      <Select
                        showSearch
                        size='small'
                        className='full-height-dropdown'
                        style={{ width: '100%' }}
                        placeholder="Tìm theo ID của dịch vụ"
                        onChange={(values) => {
                          const childService = listService?.filter(service => service?.category === values);

                          setStateCurr({
                            ...stateCurr,
                            listServiceCollection: listService?.filter(service => service?.category === values),
                            selectedCategory: values,
                            amountChange: 0
                          });

                          if (stateCurr?.selectedCategory !== values) {
                            dispatch(actionsService.modalDetailServiceBegin({}));
                            setHelpMessage({});
                            formCreateOrder.resetFields(['link', 'service_id']);

                            if (childService?.length === 0) {
                              toast.info('Không có dịch vụ phù hợp')
                            }
                          }
                        }}
                      >
                        {
                          LIST_SERVICE_SUPPLY?.map((itemService, index) => {
                            return <>
                                <Option key={index} value={itemService?.category}>
                                  <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                                    <FaYoutube color="red" fontSize={16} style={{ marginTop: '0px', marginRight: '7px' }} />
                                    <span style={{ fontSize: '12px', fontWeight: '500', marginRight: '7px' }}>{itemService?.platform}</span>
                                    <span style={{ padding: '0 5px' }}>-</span>
                                    <span style={{ fontSize: '12px', fontWeight: '500' }}>{itemService?.category}</span>
                                    <span style={{ padding: '0 5px' }}>|</span>
                                    <span style={{ fontSize: '12px', fontWeight: '500' }}>{itemService?.type}</span>
                                  </div>
                                </Option>
                            </>;
                          })
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter="10">
                  <Col sm={24}>
                    <Form.Item
                      name="service_id"
                      label="Dịch vụ"
                      style={{ marginBottom: '0px' }}
                      rules={[{
                        required: true,
                        message: 'Chưa chọn dịch vụ'
                      }]}
                    >
                      <Select 
                        allowClear
                        showSearch
                        size='middle'
                        className='full-height-dropdown'
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

                              setHelpMessage({});
                              formCreateOrder.resetFields(['link']);

                              dispatch(actionsService.modalDetailServiceBegin(findCategory[0]));
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
                          (stateCurr?.listServiceCollection || listService?.filter(service => service?.category === DEFAULT_CATEGORY))?.map((itemService, index) => {
                            return <>
                              {
                                itemService?.enabled ? (
                                  <Option key={index} value={itemService?.service_id} style={{ padding: '12px 0px', borderBottom: '1px dashed #cbcbcb' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', height: '20px', paddingTop: '5px' }}>
                                      <FaYoutube color="red" fontSize={20} style={{ margin: '0px 7px 0 0' }} />
                                      {
                                        itemService?.geo ? (
                                          <Tooltip title={itemService?.geo?.toUpperCase()}>
                                            <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginRight: '7px' }}>
                                              <img src={require(`../../../static/img/flag/${itemService?.geo}.png`)} alt="" width="14px" height="14px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }}/>
                                            </span>
                                          </Tooltip>
                                        ) : null
                                      }
                                      <span style={{ fontWeight: 'bold', marginRight: '3px' }}>{itemService?.service_id}</span>
                                      <span style={{ padding: '0 5px' }}>-</span>
                                      <span style={{ fontWeight: 500 }}>{ `${itemService?.name?.substring(0, 37)  }...` }</span>
                                      <span style={{ padding: '0 5px' }}>-</span>
                                      <span style={{ fontWeight: '800', color: '#009ef7' }}>{numberWithCommas(itemService?.price_per_10 || 0)} {VIETNAMES_CURRENCY}</span>
                                    </div>
                                    <div style={{ color: 'gray', fontSize: '0.8em' }}>{itemService?.description}</div>
                                    <div>
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
                {
                  !isEmpty(detailService) ? switchServiceSelection(stateCurr?.selectedCategory) : null
                }
              </Card>
            </Col>
            {
              !isEmpty(detailService) ? (
                <Col sm={8}>
                  <Card size="small" style={{ marginBottom: '15px', border: '1px solid #9d9d9d' }}>
                    <div style={{ padding: '5px' }}>
                      <Row style={{ margin: 0, padding: 0 }}>
                        <Col style={{ margin: 0, padding: 0 }}>
                          <p style={{ fontWeight: 600, color: 'green', fontSize: '1.1em' }}>{detailService?.name}</p>
                          <div className='my-2' style={{ borderTop: '1px dashed #e7e7e7' }}>
                            <p className="label" style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
                              Platform: &nbsp;<FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }} /> Youtube
                            </p>
                            <p className="label" style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
                              GEO: &nbsp;
                              {
                                detailService?.geo ? (
                                  <Tooltip title={detailService?.geo?.toUpperCase()}>
                                    <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginRight: '7px' }}>
                                      <img src={require(`../../../static/img/flag/${detailService?.geo}.png`)} alt="" width="17px" height="17px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }}/>
                                      <span style={{ marginLeft: '6px' }}>{detailService?.geo?.toUpperCase()}</span>
                                    </span>
                                  </Tooltip>
                                ) : 'Không có'
                              }
                            </p>
                            <p style={{ fontWeight: 'bold', marginRight: '7px' }}>ID: &nbsp;{detailService?.service_id}</p>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', borderTop: '1px dashed #e7e7e7', paddingTop: '7px' }}>
                            <span style={{ fontSize: '0.9em' }}>Giá </span>
                            <span style={{ fontWeight: '800', color: '#009ef7', padding: '0px 10px' }}>{numberWithCommas(detailService?.price_per_10 || 0)} {VIETNAMES_CURRENCY}</span>
                            <span style={{ fontSize: '0.9em' }}>/ 10 {stateCurr?.selectedCategory} </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                  <Card size="small" style={{ marginBottom: '15px', border: '1px solid #9d9d9d' }}>
                    <div style={{ padding: '5px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #e7e7e7', paddingBottom: '5px' }}>
                        <p style={{ color: 'gray', fontSize: '0.8em', margin: '0px', padding: '0px' }}>Min: {numberWithCommas(detailService?.min)} {stateCurr?.selectedCategory}</p>
                        <p style={{ color: 'gray', fontSize: '0.8em', margin: '0px', padding: '0px' }}>Max: {numberWithCommas(detailService?.max)} {stateCurr?.selectedCategory}</p>
                      </div>
                      <p style={{ color: 'gray', fontSize: '0.8em', margin: '0px', padding: '4px 0px' }}>{detailService?.description}</p>
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
                  {
                    (stateCurr?.amountChange >= detailService?.min && stateCurr?.amountChange > 0)  ? (
                      <Card
                        size="small"
                        style={{ 
                          border: '3px solid #dddddd7a',
                          backgroundImage: 'linear-gradient(151deg, rgb(255 255 255) 0%, #e3e3e36e 100%)',
                          color: 'black'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center'}}>
                          <FaMoneyBillWave color="green" style={{ fontSize: '19px', marginLeft: '6px', }}/>
                          <span style={{ fontWeight: '800', color: '#00a10e', padding: '0px 10px', fontSize: '15px'  }}>
                            {numberWithCommas((stateCurr?.amountChange ?? 1)*(detailService?.price_per_10 ?? 1)/10 || 0)} {VIETNAMES_CURRENCY}
                          </span>
                        </div>
                      </Card>
                    ) : null
                  }
                </Col>
              ) : (
                <Col sm={8} style={{ display: 'flex', alignItems: 'center' }}>
                  <Card size="small" style={{ border: '1px solid #dddddd59', padding: '5px', height: '-webkit-fill-available' }}>
                    <div className="text-center">
                      <Image src={EmptyBackground}  preview={false} width="86%"/>
                    </div>
                  </Card>
                </Col>
              )
            }
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default AddOrderGeneral;
