/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal } from 'antd';
import actions from '../../../redux/serviceSettings/actions';

const { Option } = Select;

function AddService({ isOpen, setState }) {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [state, setStateModal] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
    values: null,
  });

  const handleSubmit = (values) => {
    setStateModal({ ...state, values: { ...values, tags: state.tags } });
  };

  useEffect(() => {
    dispatch(actions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleOk = () => {
    setStateModal({
      visible: false,
      colorModal: false,
    }); 
  };

  const handleCancel = () => {
    setState({
      isOpenAdd: false,
    });
  }

  return (
    <>
      <Modal
        open={isOpen}
        title="Thêm dịch vụ"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Thêm mới
          </Button>
        ]}
      >
        <Form name="add_service" layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name="name"  initialValue="Duran Clayton" label="Name">
            <Input size='middle' />
          </Form.Item>
          <Form.Item name="phone" initialValue="01742920502" label="Phone Number">
            <Input size='middle' />
          </Form.Item>
          <Form.Item name="country" initialValue="" label="Country">
            <Select style={{ width: '100%' }}>
              <Option value="">Please Select</Option>
              <Option value="bangladesh">Bangladesh</Option>
              <Option value="india">India</Option>
              <Option value="pakistan">Pakistan</Option>
            </Select>
          </Form.Item>
          <Form.Item name="city" initialValue="" label="City">
            <Select style={{ width: '100%' }}>
              <Option value="">Please Select</Option>
              <Option value="dhaka">Dhaka</Option>
              <Option value="mymensingh">Mymensingh</Option>
              <Option value="khulna">Khulna</Option>
            </Select>
          </Form.Item>
          <Form.Item name="company" initialValue="Example" label="Company Name">
            <Input size='middle' />
          </Form.Item>
          <Form.Item name="website" initialValue="www.example.com" label="Website">
            <Input size='middle' />
          </Form.Item>
          <Form.Item
            name="userBio"
            initialValue="Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee."
            label="User Bio"
          >
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

AddService.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default AddService;
