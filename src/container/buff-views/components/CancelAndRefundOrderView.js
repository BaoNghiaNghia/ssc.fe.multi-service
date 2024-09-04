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
}

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
}

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
}

const { Option } = Select;


function CancelAndRefundOrderView({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formCancelAndRefundOrder] = Form.useForm();

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
    formCancelAndRefundOrder.setFieldValue('service_id', validatedServiceComment[0]?.service_id);
  }

  const handleOk = () => {
    try {
      formCancelAndRefundOrder.validateFields()
        .then((values) => {
          dispatch(actions.createOrderCommentAdminBegin(values));

          setState({ isCancelRefundCommentOrderModal: false });
          formCancelAndRefundOrder.resetFields();
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
      isCancelRefundCommentOrderModal: false,
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
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Hủy & Hoàn tiền</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Hủy đơn order comment và hoàn tiền cho người dùng</p>
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
            Thêm mới
          </Button>
        ]}
      >
        <Form name="cancelAndRefund" layout="vertical" form={formCancelAndRefundOrder}>
          <span>Đang cập nhật</span>
        </Form>
      </Modal>
    </>
  );
}

CancelAndRefundOrderView.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default CancelAndRefundOrderView;
