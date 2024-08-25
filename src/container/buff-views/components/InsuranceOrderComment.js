/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Select, Button, Modal } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import commentActions from '../../../redux/buffComment/actions';

const { Option } = Select;

function InsuranceOrderComment({ setState, state }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { postLoading, detailOrderComment, listService } = useSelector((state) => {
    return {
      postLoading: state?.buffComment?.loading,
      detailOrderComment: state?.buffComment?.detailOrderComment,
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
      isInsuranceCommentOrderModal: false,
    });
    formUpdateService.resetFields();
  }

  const handleOk = () => {
    try {
      formUpdateService.validateFields()
        .then((values) => {
          dispatch(commentActions.InsuranceOrderCommentAdminBegin({
            id: detailOrderComment?.id,
            max_thread: values?.max_thread,
            note: values?.note,
            priority: values?.priority === "true",
            status: values?.status
          }));

          setState({ isInsuranceCommentOrderModal: false });
          formUpdateService.resetFields();
        })
        .catch((err) => {
          console.error("Handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
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
        open={state?.isInsuranceCommentOrderModal}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Bảo hành</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Bảo hành thông tin đơn comment</p>
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
          <span>Đang cập nhật</span>
        </Form>
      </Modal>
    </>
  );
}

InsuranceOrderComment.propTypes = {
  setState: PropTypes.func,
  state: PropTypes.object
};

export default InsuranceOrderComment;
