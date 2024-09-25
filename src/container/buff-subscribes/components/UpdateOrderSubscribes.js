/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import { BsFire } from 'react-icons/bs';
import serviceActions from '../../../redux/serviceSettings/actions';
import likeActions from '../../../redux/buffLike/actions';
import { ORDER_YOUTUBE_STATUS } from '../../../variables/index';

const { Option } = Select;

function UpdateOrderLike({ setState, orderState }) {
  const dispatch = useDispatch();
  const [formUpdateLikeOrder] = Form.useForm();

  const { postLoading, detailOrderLike, listService } = useSelector(state => {
    return {
      postLoading: state?.buffComment?.loading,
      detailOrderLike: state?.buffLike?.detailOrderLike,
      listService: state?.settingService?.listService?.items
    };
  });

  useEffect(() => {
    dispatch(serviceActions.fetchListServiceBegin());
  }, [dispatch]);

  const findService = listService?.filter((item) => item.service_id === detailOrderLike?.service_id);

  useEffect(() => {
    formUpdateLikeOrder.setFieldsValue(detailOrderLike);
    if (findService?.length > 0) {
      formUpdateLikeOrder.setFieldValue('category', findService[0]?.category);
    }
    formUpdateLikeOrder.setFieldValue('priority', String(detailOrderLike?.priority));
    formUpdateLikeOrder.setFieldValue('note', detailOrderLike?.note);
  });

  const handleCancel = () => {
    setState({
      isUpdateLikeOrderModal: false,
    });

    formUpdateLikeOrder.resetFields();
  }

  const handleOk = () => {
    try {
      formUpdateLikeOrder.validateFields()
        .then((values) => {
          dispatch(likeActions.updateOrderLikeAdminBegin({
            id: detailOrderLike?.id,
            max_thread: values?.max_thread,
            note: values?.note,
            priority: values?.priority === "true",
            status: values?.status
          }));

          console.log('----- order state ----', orderState)

          setState({ 
            ...orderState,
            isUpdateLikeOrderModal: false,
            statusNumber: 'all'
          });

          formUpdateLikeOrder.resetFields();
        })
        .catch((err) => {
          console.error("Handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
      setState({
        isUpdateLikeOrderModal: false });
      formUpdateLikeOrder.resetFields();
    }
  };

  return (
    <>
      <Modal
        width='600px'
        open={orderState?.isUpdateLikeOrderModal}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật đơn Like</p>
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
        <Form name="add_service" layout="vertical" form={formUpdateLikeOrder}>
          <Row gutter="10">
            <Col sm={8}>
              <Form.Item name="max_thread" initialValue={ orderState?.max_threads } label="Số luồng tối đa" rules={[{
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
                  <Option value="true">
                    <BsFire fontSize={15} color='#238f00' style={{ marginRight: '6px', marginTop: '3px', textShadow: '1px 1px 2px yellowgreen' }}/>
                    Có
                  </Option>
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

UpdateOrderLike.propTypes = {
  setState: PropTypes.func,
  orderState: PropTypes.object
};

export default UpdateOrderLike;
