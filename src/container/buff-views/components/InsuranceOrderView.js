/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Select, Button, Modal } from 'antd';
import { MdAddchart } from "react-icons/md";
import commentActions from '../../../redux/buffView/actions';

const { Option } = Select;

function InsuranceOrderView({ setState, state }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { postLoading, detailOrderView, listService } = useSelector((state) => {
    return {
      postLoading: state?.buffView?.loading,
      detailOrderView: state?.buffView?.detailOrderView,
      listService: state?.settingService?.listService?.items
    };
  });

  const findService = listService?.filter((item) => item.service_id === detailOrderView?.service_id);

  useEffect(() => {
    formUpdateService.setFieldsValue(detailOrderView);
    formUpdateService.setFieldValue('category', findService && findService[0]?.category);
    formUpdateService.setFieldValue('priority', String(detailOrderView?.priority));
  });

  const handleCancel = () => {
    setState({
      isInsuranceViewOrderModal: false,
    });
    formUpdateService.resetFields();
  }

  const handleOk = () => {
    try {
      formUpdateService.validateFields()
        .then((values) => {
          dispatch(commentActions.InsuranceOrderViewAdminBegin({
            id: detailOrderView?.id,
            max_thread: values?.max_thread,
            note: values?.note,
            priority: values?.priority === "true",
            status: values?.status
          }));

          setState({ isInsuranceViewOrderModal: false });
          formUpdateService.resetFields();
        })
        .catch((err) => {
          console.error("Handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal
        width='600px'
        open={state?.isInsuranceViewOrderModal}
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

InsuranceOrderView.propTypes = {
  setState: PropTypes.func,
  state: PropTypes.object
};

export default InsuranceOrderView;
