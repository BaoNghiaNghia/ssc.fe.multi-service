/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Button, Modal, Select, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaLocationArrow, FaRegUserCircle, FaYoutube } from 'react-icons/fa';
import actions from '../../../redux/buffComment/actions';
import actionsService from '../../../redux/serviceSettings/actions';
import { numberWithCommas } from '../../../utility/utility';
import { FILTER_ORDER_COMMENT, VIETNAMES_CURRENCY } from '../../../variables';

const { Option } = Select;

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

function FilterOrderComment({ orderState, setState }) {
  const dispatch = useDispatch();
  const [formCreateService] = Form.useForm();

  const { isFilterCommentOrderModal } = orderState;

  const { postLoading, listService, userList } = useSelector((state) => {
    return {
      postLoading: state.settingService.postLoading,
      listService: state?.settingService?.listService?.items,
      userList: state?.member?.userList
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
          dispatch(actions.createOrderCommentAdminBegin(values));

          setState({ isFilterCommentOrderModal: false });
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
      isFilterCommentOrderModal: false,
    });
  }

  return (
    <>
      <Modal
        width='400px'
        open={isFilterCommentOrderModal}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Bộ lọc</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Tìm order comment phù hợp</p>
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
            Tìm kiếm
          </Button>
        ]}
      >
        <Form layout="vertical" form={formCreateService}>
          <Row gutter="10">
            <Col sm={14}>
              <Form.Item
                name="order"
                label="Sắp xếp"
              >
                <Select
                  style={{ width: '100%', margin: '0px', padding: '0px' }}
                  defaultValue={-1}
                  dropdownMatchSelectWidth
                  defaultActiveFirstOption
                >
                  <Option value={-1}>Mặc định</Option>
                  {
                    FILTER_ORDER_COMMENT?.map((item) => (
                      <Option key={item.value} value={item.value} style={{ margin: 0, padding: 0 }}>
                          {item.label}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col sm={10}>
              <Form.Item
                name="priority"
                label="Ưu tiên"
              >
                <Select
                  dropdownMatchSelectWidth
                  defaultValue="false"
                >
                  <Option key="priority_true" value="true" style={{ margin: 0, padding: 0 }}>Có</Option>
                  <Option key="priority_false" value="false" style={{ margin: 0, padding: 0 }}>Không</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={25}>
            <Col sm={24}>
              <Form.Item name="user_id" style={{ margin: '0px' }} label="Người dùng">
                <Select
                  defaultActiveFirstOption
                  style={{ width: '100%', margin: '0px', padding: '0px' }}
                  size='small'
                  placeholder='Chọn người dùng'
                >
                  {
                    userList.map((itemUser) => {
                      return (
                        <Option value={itemUser?.id}>
                          <div style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                            <FaRegUserCircle color='gray' fontSize={20} style={{ marginRight: '10px', marginTop: '5px' }}/> 
                            <span>
                              <p style={{ margin: '0px', padding: '0px', fontWeight: '800' }}>{itemUser?.fullname}</p>
                              <p style={{ margin: '0px', padding: '0px', fontSize: '0.7em' }}>{itemUser?.email}</p>
                            </span>
                          </div>
                        </Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item
                name="service_id"
                label="Dịch vụ"
                style={{ marginTop: '7px', marginBottom: 0 }}
              >
                <Select style={{ width: '100%', marginBottom: 0 }} defaultActiveFirstOption size='small'>
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

FilterOrderComment.propTypes = {
  orderState: PropTypes.object,
  setState: PropTypes.func
};

export default FilterOrderComment;
