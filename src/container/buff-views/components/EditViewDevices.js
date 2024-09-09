/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Modal, InputNumber, Divider, Button } from 'antd';
import { MdAddchart, MdOutlineNumbers } from "react-icons/md";
import { LuLink2 } from 'react-icons/lu';
import { isEmptyObject } from '../../../utility/utility';
import actions from '../../../redux/buffView/actions';

const { Option } = Select;

function EditViewDevices({ setState, computerState }) {
  const dispatch = useDispatch();
  const [formDetailComputerCmt] = Form.useForm();

  const { isLoading, detailComputerView } = useSelector(state => ({
    isLoading: state?.buffView?.loading,
    detailComputerView: state?.buffView?.detailComputerView
  }));

  useEffect(() => {
    if (!isEmptyObject(detailComputerView)) {
      formDetailComputerCmt.setFieldsValue(detailComputerView);
    }
  }, [detailComputerView]);

  const handleOk = () => {
    formDetailComputerCmt.validateFields()
      .then((values) => {
        const requestData = {
          id: detailComputerView?.id,
          action: values?.action,
          cpu: values?.cpu,
          name: values?.name,
          ip: values?.ip,
          limit_per_day: values?.limit_per_day,
          link: values?.link,
          ram: values?.ram,
          thread: values?.thread
        };

        dispatch(actions.updateOneComputerCommentAdminBegin(requestData));

        setState({
          isEditCommentServer: false,
        });

        formDetailComputerCmt.resetFields();
      })
      .catch((err) => {
        console.error("Handle Real Error: ", err);
      });
  };

  const handleCancel = () => {
    setState({ ...computerState, isEditCommentServer: false });
    formDetailComputerCmt.resetFields();
  };

  return (
    <Modal
      width='600px'
      open={computerState.isEditCommentServer}
      centered
      title={
        <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
          <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
          <div>
            <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật Comment Server</p>
            <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Cập nhật thông tin máy chạy comment</p>
          </div>
        </div>
      }
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Cập nhật
        </Button>
      ]}
    >
      <Form layout="vertical" form={formDetailComputerCmt}>
        {!isLoading ? (
          <>
            <Row gutter="10">
              <Col sm={12}>
                <Form.Item name="link" label="Đường dẫn">
                  <Input size='small' addonBefore={<LuLink2 />} style={{ width: '100%' }} placeholder='Liên kết server comment' />
                </Form.Item>
              </Col>
              <Col sm={12}>
                <Form.Item name="ip" label="IP">
                  <Input size='small' addonBefore={<MdOutlineNumbers />} style={{ width: '100%' }} placeholder='Địa chỉ IP' />
                </Form.Item>
              </Col>
            </Row>

            <Divider plain style={{ marginTop: '5px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

            <Row gutter="10">
              <Col sm={8}>
                <Form.Item name="name" label="Tên máy" rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}>
                  <Input size='small' style={{ width: '100%' }} placeholder='Tên máy' />
                </Form.Item>
              </Col>
              <Col sm={8}>
                <Form.Item name="cpu" label="CPU">
                  <Input size='small' style={{ width: '100%' }} placeholder='CPU của server' />
                </Form.Item>
              </Col>
              <Col sm={8}>
                <Form.Item name="ram" label="Ram">
                  <Input size='small' style={{ width: '100%' }} placeholder='Ram của server' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter="10">
              <Col sm={8}>
                <Form.Item name="thread" label="Số luồng" rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}>
                  <InputNumber type="number" addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Số luồng' />
                </Form.Item>
              </Col>
              <Col sm={8}>
                <Form.Item name="limit_per_day" label="Giới hạn mỗi ngày" rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}>
                  <InputNumber type='number' addonAfter="comment" size='small' style={{ width: '100%' }} placeholder='Giới hạn comment mỗi ngày' />
                </Form.Item>
              </Col>
              <Col sm={8}>
                <Form.Item name="action" label="Hành động">
                  <Select style={{ width: '100%' }} placeholder="Chọn hành động" size='small'>
                    <Option value="" />
                    <Option value="reset">Reset</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </>
        ) : (
          <div>Đang tải</div>
        )}
      </Form>
    </Modal>
  );
}

EditViewDevices.propTypes = {
  setState: PropTypes.func.isRequired,
  computerState: PropTypes.shape({
    isEditCommentServer: PropTypes.bool.isRequired
  }).isRequired
};

export default EditViewDevices;
