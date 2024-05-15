/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AiOutlineFieldNumber } from "react-icons/ai";
import { Row, Col, Form, Input, InputNumber, Button, Modal, Divider, Switch, Select, Badge } from 'antd';
import { MdAddchart, MdOutlineImportExport } from "react-icons/md";
import { FaLocationArrow, FaYoutube } from 'react-icons/fa';
import actions from '../../../redux/buffComment/actions';
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
}

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
}

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
}

const { Option } = Select;


function AddOrderComment({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formCreateService] = Form.useForm();

  const { postLoading, listService } = useSelector(state => {
    return {
      postLoading: state.settingService.postLoading,
      listService: state?.settingService?.listService?.items
    };
  });

  const [amountChange, setAmountChange] = useState(0);

  useEffect(() => {
    dispatch(actionsService.fetchListServiceBegin());
  }, [dispatch]);

  const validatedServiceComment = listService?.filter(itemService => {
    return itemService?.enabled && itemService?.category === "Comments"
  });

  if (validatedServiceComment?.length > 0) {
    formCreateService.setFieldValue('service_id', validatedServiceComment[0]?.service_id);
  }

  const handleOk = () => {
    try {
      formCreateService.validateFields()
        .then((values) => {
          // const {

          // }

          dispatch(actions.createOrderCommentAdminBegin(values));

          setState({ isCreateCommentOrderModal: false });
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
      isCreateCommentOrderModal: false,
    });
  }

  return (
    <>
      <Modal
        width='800px'
        open={isOpen}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thêm Comment Order</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Điền thông tin cho order comment</p>
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
            Đặt hàng
          </Button>
        ]}
      >
        <Form name="add_service" layout="vertical" form={formCreateService}>
          <Divider style={{ fontSize: '0.9em', color: 'gray', paddingTop: '10px', margin: '0px' }}>Thông tin Order</Divider>
          <Row gutter="10">
            <Col sm={24}>
              <Form.Item
                name="link"
                label="Liên kết"
                style={{ marginBottom: '7px' }}
                rules={[
                  {
                    required: true,
                    message: 'Trường không được trống'
                  },
                  {
                    validator: async (_, link) => {
                      if (!validateYouTubeUrl(link)) {
                        return Promise.reject( `Đường dẫn youtube không hợp lệ`);
                      }
                    },
                  }
                ]}
              >
                <Input size='small' style={{ fontWeight: 'bold' }} placeholder='Thêm liên kết' />
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
                ]}
                onChange={(value) => {
                  console.log('---- value comments -----', value?.target?.value?.split('\n'));

                  setAmountChange(value?.target?.value?.split('\n')?.length)
                  formCreateService.setFieldsValue({ comments: value?.target?.value });
                }}
              >
                <Input.TextArea placeholder={"Comment 1 \nComment 2 \nComment 3 \nComment 4 \nComment 5 \nComment 6 \n..."} rows={7} />
                <span style={{ fontSize: '0.8em', fontWeight: 'bold', color: COLOR_GENERAL.primary }}>Số lượng: {amountChange} comments</span>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter="10">
            <Col sm={24}>
              <Form.Item
                name="service_id"
                label="Dịch vụ"
                style={{ marginBottom: '7px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Select style={{ width: '100%' }} defaultActiveFirstOption size='small'>
                  {
                    listService?.map((itemService, index) => {
                      return (
                        <>
                          {
                            itemService?.enabled && itemService?.category === "Comments" ? (
                              <Option key={index} value={itemService.service_id}>
                                <>
                                  <Row style={{ margin: 0, padding: 0 }}>
                                    <Col style={{ margin: 0, padding: 0 }}>
                                      <span className="label" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        <FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }} />
                                        <span style={{ fontWeight: 'bold', marginRight: '7px' }}>{itemService?.service_id}</span>
                                        <span style={{ padding: '0 5px' }}>-</span>
                                        <span>{itemService?.name}</span>
                                        <span style={{ padding: '0 5px' }}>-</span>
                                        <span style={{ fontWeight: '800', color: '#009ef7' }}>{numberWithCommas(itemService?.price_per_10 || 0)} {VIETNAMES_CURRENCY}</span>
                                      </span>
                                    </Col>
                                  </Row>
                                  <span style={{ color: 'gray', fontSize: '0.8em', margin: '0px', padding: '0px' }}>{itemService?.description}</span>
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
                                </>
                              </Option>
                            ) : null
                          }
                        </>
                      );
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

AddOrderComment.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default AddOrderComment;
