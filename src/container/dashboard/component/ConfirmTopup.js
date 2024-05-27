/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button, Modal, Typography } from 'antd';
import { MdAddchart } from "react-icons/md";
import { numberWithCommas } from '../../../utility/utility';
import actions from '../../../redux/member/actions';
import { COLOR_GENERAL } from '../../../variables';

const { Paragraph, Text } = Typography;

function ConfirmTopup({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formTopupAdd] = Form.useForm();

  const { userList, detailUser, detailTopup } = useSelector(state => {
    return {
      userList: state?.member?.userList,
      detailUser: state?.member?.detailUser,
      detailTopup: state?.member?.detailTopup
    };
  });

  useEffect(() => {
    formTopupAdd.setFieldsValue({
      user_id: detailUser?.id,
    });
  });

  const handleOk = () => {
    try {
      dispatch(actions.confirmTopupBegin({ id: detailTopup?.id }));

      setState({ isModalConfirmTopup: false });
    } catch (err) {
      setState({
        isModalConfirmTopup: false,
      });

      formTopupAdd.resetFields();
      console.log(err);
    }
  };

  const handleCancel = () => {
    setState({
      isModalConfirmTopup: false,
    });
  }

  const findUser = userList?.filter((item) => item.id === detailTopup?.user_id);

  return (
    <>
      {
        findUser?.length > 0 ? (
          <Modal
            width='400px'
            open={isOpen}
            centered
            title={
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                <div>
                  <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Xác nhận</p>
                  <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Xác nhận nạp tiền vào tài khoản thành viên</p>
                </div>
              </div>
            }
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Hủy
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                Xác nhận
              </Button>
            ]}
          >
            <Form layout="vertical" form={formTopupAdd}>
              <Row gutter="24">
                <Col sm={24}>
                  <Paragraph>
                    <Text
                      strong
                      style={{
                        fontSize: 14,
                        fontWeight: 400
                      }}
                    >
                      Xác nhận khoản thanh toán <span style={{ color: COLOR_GENERAL.primary }}>{numberWithCommas(detailTopup?.amount || 0)} đ</span> của <span style={{ color: COLOR_GENERAL.primary }}>{findUser[0]?.fullname}</span> ?
                    </Text>
                  </Paragraph>
                </Col>
              </Row>
            </Form>
          </Modal>
        ) : null
      }
    </>
  );
}

ConfirmTopup.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default ConfirmTopup;
