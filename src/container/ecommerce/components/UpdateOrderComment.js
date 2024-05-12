/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider, Progress, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots, FaYoutube } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import userActions from '../../../redux/member/actions';
import serviceActions from '../../../redux/serviceSettings/actions';
import commentActions from '../../../redux/buffComment/actions';
import { FixedServiceTemp, ORDER_YOUTUBE_STATUS, STATUS_COMMENT_ENUM } from '../../../variables/index';

const { Option } = Select;

function UpdateOrderComment({ setState, state }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { postLoading, detailOrderComment, userList, listService } = useSelector(state => {
    return {
      postLoading: state?.buffComment?.loading,
      detailOrderComment: state?.buffComment?.detailOrderComment,
      userList: state?.member?.userList,
      listService: state?.settingService?.listService?.items
    };
  });

  const findService = listService?.filter((item) => item.service_id === detailOrderComment?.service_id);

  useEffect(() => {
    formUpdateService.setFieldsValue(detailOrderComment);
    formUpdateService.setFieldValue('category', findService && findService[0]?.category);
    formUpdateService.setFieldValue('priority', String(detailOrderComment?.priority));
  });

  const handleCancel = () => {
    setState({
      isUpdateCommentOrderModal: false,
    });
    formUpdateService.resetFields();
  }

  const handleOk = () => {
    try {
      formUpdateService.validateFields()
        .then((values) => {
          dispatch(commentActions.updateOrderCommentAdminBegin({
            id: detailOrderComment?.id,
            max_thread: values?.max_thread,
            note: values?.note,
            priority: values?.priority === "true",
            status: values?.status
          }));

          setState({ isUpdateCommentOrderModal: false });
          formUpdateService.resetFields();
        })
        .catch((err) => {
          console.error("handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  console.log('---- user detail -----', userList, listService);

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
        open={state?.isUpdateCommentOrderModal}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật đơn Comment</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Cập nhật thông tin đơn</p>
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
                <span style={{ fontSize: '16px', fontWeight: '700' }}>{findService && findService[0]?.platform}</span>
              </div>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="category"
                style={{ margin: '0px' }}
                bordered 
              >
                <Select
                  style={{ width: '100%', margin: '0px', padding: '0px' }}
                  bordered={false}
                  size='small'
                  disabled
                >
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

          <Divider plain style={{ marginTop: '10px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_thread" initialValue={ state?.max_threads } label="Số luồng tối đa" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <InputNumber type='number' addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Nhập vào số luồng tối đa' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="priority"  label="Ưu tiên" rules={[{
                required: true,
                message: 'Trường không được trống'
              }]}>
                <Select style={{ width: '100%' }} size='small'>
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
                >
                  {
                    ORDER_YOUTUBE_STATUS?.map(orderState => {
                      return (
                        <Option value={orderState?.value}>
                          <Badge style={{ marginRight: '5px' }} dot color={orderState?.color} />
                          <span>{orderState?.label}</span>
                        </Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter="10">
            <Col sm={24}>
              <Form.Item
                name="note"
                label="Ghi chú"
                style={{ margin: '0px' }}
                rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}
              >
                <Input.TextArea placeholder='Thêm ghi chú cho đơn' rows={2} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

UpdateOrderComment.propTypes = {
  setState: PropTypes.func,
  state: PropTypes.object
};

export default UpdateOrderComment;
