/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { numberWithCommas } from '../../../utility/utility';
import actions from '../../../redux/member/actions';
import { COLOR_GENERAL } from '../../../variables';

const { Option } = Select;

function AddTopup({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formTopupAdd] = Form.useForm();

  const [amountChange, setAmountChange] = useState(0);

  const { userList, detailUser } = useSelector(state => {
    return {
      userList: state?.member?.userList,
      detailUser: state?.member?.detailUser
    };
  });

  useEffect(() => {
    formTopupAdd.setFieldsValue({
      user_id: detailUser?.id,
    });
  });

  const handleOk = () => {
    try {
      formTopupAdd.validateFields()
        .then((values) => {
          console.log("handle submit Values:", values);

          const requestData = {
            user_id: values?.user_id,
            amount: values?.amount,
          }
      
          dispatch(actions.createTopupItemBegin(requestData));

          setState({ isModalAddTopup: false });
          formTopupAdd.resetFields();
        })
        .catch((err) => {
          console.error("handle Real Error: ", err);
        });
    } catch (err) {
      setState({
        isModalAddTopup: false,
      });

      formTopupAdd.resetFields();
      console.log(err);
    }
  };

  const handleCancel = () => {
    setState({
      isModalAddTopup: false,
    });
  }

  const selectAfter = (
    <Select defaultValue="VND">
      <Option value="VND">đ</Option>
    </Select>
  );

  return (
    <>
      <Modal
        width='300px'
        centered
        open={isOpen}
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
            <div>
              <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Nạp tiền</p>
              <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Nạp thêm tiền vào tài khoản thành viên</p>
            </div>
          </div>
        }
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Nạp tiền
          </Button>
        ]}
      >
        <Form layout="vertical" form={formTopupAdd}>
          <Row gutter="10">
            <Col sm={24}>
              <Form.Item name="user_id" style={{ margin: '0px' }} label="Họ tên" rules={[{
                required: true,
                message: 'Chưa chọn người dùng'
              }]}>
                <Select disabled defaultActiveFirstOption style={{ width: '100%', margin: '0px', padding: '0px' }} size='small' placeholder='Chọn người dùng'>
                  {
                    userList.map(itemUser => {
                      return (
                        <Option value={itemUser?.id}>
                          <div style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                            <FaRegUserCircle color='gray' fontSize={20} style={{ marginRight: '10px', marginTop: '5px' }}/> 
                            <span>
                              <p style={{ margin: '0px', padding: '0px', fontWeight: '800' }}>{itemUser?.fullname}</p>
                              <p style={{ margin: '0px', padding: '0px', fontSize: '0.7em' }}>{itemUser?.email}</p>
                            </span>
                          </div>
                        </Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item
                name="amount"
                style={{ margin: '0px' }}
                label="Số tiền" 
                rules={[
                  {
                    required: true,
                    message: "Chưa nhập số tiền"
                  }
                ]}
              >
                <InputNumber 
                  style={{ width: '100%' }}
                  size='small'
                  type='number'
                  placeholder="Nhập số tiền cần nạp"
                  addonAfter={selectAfter}
                  onChange={(value) => {
                    setAmountChange(value)
                    formTopupAdd.setFieldsValue({
                      amount: value
                    });
                  }}
                />
                <span style={{ fontSize: '0.7em', fontWeight: 'bold', color: COLOR_GENERAL.primary }}>{numberWithCommas(amountChange || 0)} đ</span>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

AddTopup.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default AddTopup;
