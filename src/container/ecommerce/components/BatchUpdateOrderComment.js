/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { toast } from 'react-toastify';

import commentActions from '../../../redux/buffComment/actions';
import serviceActions from '../../../redux/serviceSettings/actions';
import { ORDER_YOUTUBE_STATUS } from '../../../variables/index';
import { isEmptyObject } from '../../../utility/utility';

const { Option } = Select;

function BatchUpdateOrderComment({ setState, orderState }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { isBatchUpdateCommentOrderModal, selectedRowKeys } = orderState;

  const { postLoading, detailOrderComment, userList, listService } = useSelector(state => {
    return {
      postLoading: state?.buffComment?.loading,
      detailOrderComment: state?.buffComment?.detailOrderComment,
      userList: state?.member?.userList,
      listService: state?.settingService?.listService?.items
    };
  });

  useEffect(() => {
    dispatch(serviceActions.fetchListServiceBegin());
  }, [dispatch]);

  const findService = listService?.filter((item) => item.service_id === detailOrderComment?.service_id);

  const handleCancel = () => {
    setState({
      ...orderState,
      isBatchUpdateCommentOrderModal: false,
    });

    formUpdateService.resetFields();
  }

  const handleOk = () => {
    try {
      formUpdateService.validateFields()
        .then((values) => {
          Object.keys(values).forEach(key => values[key] === undefined && delete values[key]);
          if (isEmptyObject(values)) {
            toast.warn('Chưa nhập thông tin cập nhật');
            return;
          }

          if (selectedRowKeys?.length > 0) {
            values.ids = selectedRowKeys;
          }

          if (values?.priority) {
            values.priority = (values.priority === 'true');
          }

          dispatch(commentActions.updateManyOrderCommentAdminBegin(values));

          setState({
            ...orderState,
            isBatchUpdateCommentOrderModal: false,
            selectedRowKeys: []
          });

          formUpdateService.resetFields();
        })
        .catch((err) => {
          console.error("Handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
      setState({
        ...orderState,
        isBatchUpdateCommentOrderModal: false
      });
      formUpdateService.resetFields();
    }
  };

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
        open={isBatchUpdateCommentOrderModal}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật {selectedRowKeys?.length} đơn Comment</p>
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
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_thread" label="Số luồng tối đa">
                <InputNumber type='number' addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Nhập vào số luồng tối đa' />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="priority" label="Ưu tiên">
                <Select style={{ width: '100%' }} size='small' placeholder="Chọn mức độ ưu tiên">
                  <Option value="false">Không</Option>
                  <Option value="true">Có</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item name="status" label="Trạng thái">
                <Select
                  style={{ width: '100%', margin: '0px', padding: '0px' }}
                  size='small'
                  placeholder="Chọn trạng thái"
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

BatchUpdateOrderComment.propTypes = {
  setState: PropTypes.func,
  orderState: PropTypes.object
};

export default BatchUpdateOrderComment;
