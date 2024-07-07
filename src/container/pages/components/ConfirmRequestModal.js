/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Modal } from 'antd';
import { MdAddchart } from "react-icons/md";

function ConfirmRequestModal({ setState, isOpen, descriptions, title, subtitle, handleOk }) {
  const [formUpdateService] = Form.useForm();

  const { postLoading } = useSelector((state) => {
    return {
      postLoading: state?.buffComment?.loading,
    };
  });

  const handleCancel = () => {
    setState({
      isInsuranceCommentOrderModal: false,
    });
    formUpdateService.resetFields();
  }

  return (
    <>
      <Modal
        width='500px'
        open={isOpen}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>{title}</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>{subtitle}</p>
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
            Xác nhận
          </Button>
        ]}
      >
        <Form name="add_service" layout="vertical" form={formUpdateService}>
          <span>{descriptions}</span>
        </Form>
      </Modal>
    </>
  );
}

ConfirmRequestModal.propTypes = {
  setState: PropTypes.func,
  isOpen: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  descriptions: PropTypes.string,
  handleOk: PropTypes.func
};

export default ConfirmRequestModal;
