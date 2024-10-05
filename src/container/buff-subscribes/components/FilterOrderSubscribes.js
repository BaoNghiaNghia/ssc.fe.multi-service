/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button, Modal, Select, Badge } from 'antd';
import { IoMdRefresh } from "react-icons/io";
import { MdAddchart } from "react-icons/md";
import { FaLocationArrow, FaYoutube } from 'react-icons/fa';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import actions from '../../../redux/buffSubscribe/actions';
import actionsService from '../../../redux/serviceSettings/actions';
import { numberWithCommas } from '../../../utility/utility';
import { badgeGrayStyle, FILTER_ORDER_GENERAL, SERVICE_VIEW_TYPE, VIETNAMES_CURRENCY } from '../../../variables';

const { Option } = Select;

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

function FilterOrderSubscribes({ orderState, setState }) {
  const dispatch = useDispatch();
  const [formCreateService] = Form.useForm();

  const { isFilterSubscribeOrderModal } = orderState;

  const { postLoading, listService, userList } = useSelector((state) => {
    return {
      postLoading: state.settingService.postLoading,
      listService: state?.settingService?.listService?.items,
      userList: state?.member?.userList
    };
  });

  useEffect(() => {
    dispatch(actionsService.fetchListServiceBegin());
  }, [dispatch]);

  const handleOk = () => {
    try {
      formCreateService.validateFields()
        .then((values) => {
          Object.keys(values).forEach(key => values[key] === undefined && delete values[key]);

          const { order_type, priority, ...rest } = values;
          if (order_type) {
            const type = order_type.split(' ');
            rest[type[0]] = type[1];
          }
          if (priority) {
            rest.priority = priority === "true";
          }

          dispatch(actions.fetchListOrderSubscribeBegin(rest));

          setState({ ...orderState, isFilterSubscribeOrderModal: false });
        })
        .catch((err) => {
          console.error("handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
      setState({ ...orderState, isFilterSubscribeOrderModal: false });
      formCreateService.resetFields();
    }
  };

  const handleCancel = () => {
    setState({
      ...orderState,
      isFilterSubscribeOrderModal: false,
    });
  }

  const handleResetForm = () => {
    formCreateService.resetFields();
    dispatch(actions.fetchListOrderSubscribeBegin({}));

    setState({
      ...orderState,
      isFilterSubscribeOrderModal: false,
    });
  }

  return (
    <>
      <Modal
        width='400px'
        open={isFilterSubscribeOrderModal}
        centered
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
            <div>
              <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Bộ lọc</p>
              <p style={{ fontSize: '0.8em', marginBottom: 0 }}>Tìm order subscribe phù hợp</p>
            </div>
          </div>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleResetForm} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <IoMdRefresh style={{ margin: 0, padding: 0 }}/>
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" loading={postLoading} onClick={handleOk}>
            Tìm kiếm
          </Button>
        ]}
      >
        <Form layout="vertical" form={formCreateService}>
          <Row gutter="15">
            <Col sm={14}>
              <Form.Item
                name="order_type"
                label="Sắp xếp"
                style={{ margin: 0, padding: 0 }}
              >
                <Select
                  dropdownMatchSelectWidth={false}
                  defaultActiveFirstOption
                  placeholder="Chọn kiểu lọc"
                  size='small'
                  allowClear
                >
                  {
                    FILTER_ORDER_GENERAL?.map((item, index) => (
                      <Option key={index} value={item?.value} style={{ margin: 0, padding: 0 }}>
                          {item?.label}
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
                style={{ margin: 0, padding: 0 }}
              >
                <Select 
                  dropdownMatchSelectWidth={false}
                  size='small'
                  allowClear
                  placeholder="Chọn trạng thái ưu tiên"
                >
                  <Option key="priority_true" value="true" style={{ margin: 0, padding: 0 }}>Có</Option>
                  <Option key="priority_false" value="false" style={{ margin: 0, padding: 0 }}>Không</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={25}>
            <Col sm={24}>
              <Form.Item name="user_id" style={{ margin: 0 }} label="Người dùng">
                <Select
                  defaultActiveFirstOption
                  style={{ width: '100%', margin: 0, padding: 0 }}
                  placeholder='Chọn người dùng'
                  allowClear
                >
                  {
                    userList.map((itemUser, index) => {
                      return (
                        <Option value={itemUser?.id} key={index}>
                          <div style={{ display: 'inline-flex', alignItems: 'flex-start', alignContent: 'center' }}>
                            <ReactNiceAvatar
                              style={{ width: '2.2rem', height: '2.2rem', outline: '2px solid orange', border: '2px solid white', margin: '7px' }}
                              {...genConfig(itemUser[0]?.fullname?.charAt(0))}
                            />
                            <span>
                              <div style={{ margin: 0, padding: 0, fontWeight: '800', height: '19px' }}>{itemUser?.fullname}</div>
                              <div style={{ margin: 0, padding: 0, fontSize: '0.7em', height: '19px' }}>{itemUser?.email}</div>
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
                <Select style={{ width: '100%', marginBottom: 0 }} placeholder="Chọn dịch vụ" allowClear size='small'>
                  {
                    listService?.map((itemService, index) => {
                      return (
                        <>
                          {
                            itemService?.enabled && itemService?.category === "Subscribers" ? (
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
                                  <span style={{ color: 'gray', fontSize: '0.8em', margin: 0, padding: 0 }}>{itemService?.description}</span>
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
                                      {
                                        itemService?.service_view_type ? (
                                          <span className="label" style={badgeGrayStyle}>
                                            <div
                                              style={{ width: '19px', height: '19px', marginRight: '5px' }}
                                              // eslint-disable-next-line react/no-danger
                                              dangerouslySetInnerHTML={{ __html: SERVICE_VIEW_TYPE.find(item => item.type === itemService?.service_view_type)?.svg }}
                                            />
                                            View {SERVICE_VIEW_TYPE.find(item => item.type === itemService?.service_view_type).description}
                                          </span>
                                        ) : null
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

FilterOrderSubscribes.propTypes = {
  orderState: PropTypes.object,
  setState: PropTypes.func
};

export default FilterOrderSubscribes;
