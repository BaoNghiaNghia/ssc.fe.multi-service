/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Button, Modal, Switch, Divider } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/serviceSettings/actions';
import { LIST_SERVICE_SUPPLY } from '../../../variables';

function AddAccountGmail({ gmailState, setState }) {
    const dispatch = useDispatch();

    const { isAddAccountGmailModal } = gmailState;

    const { postLoading } = useSelector(state => {
        return {
            postLoading: state.settingService.postLoading,
        };
    });

    const [formNewAccountGmail] = Form.useForm();

    const [state, setStateModal] = useState({
        values: null,
        active: true
    });

    useEffect(() => {
        formNewAccountGmail.setFieldValue('category', 'Comments');
        const matchService = LIST_SERVICE_SUPPLY?.filter((item) => item?.category === 'Comments');
        if (matchService?.length > 0) {
            formNewAccountGmail.setFieldValue('type', matchService[0]?.type);
            formNewAccountGmail.setFieldValue('service_type', matchService[0]?.service_type);
        }
    }, []);

    useEffect(() => {
        dispatch(actions.fetchListServiceBegin({}));
    }, [dispatch]);

    const handleOk = () => {
        try {
            formNewAccountGmail.validateFields()
                .then((values) => {
                    const requestData = {
                        email: values?.email,
                        key: values?.key,
                        status: values?.status
                    }

                    dispatch(actions.createGoogleKeyBegin(requestData));

                    setState({
                        ...gmailState,
                        isAddAccountGmailModal: false,
                    });

                    formNewAccountGmail.resetFields();
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
            ...gmailState,
            isAddAccountGmailModal: false,
        });
    }

    return (
        <Modal
            width='600px'
            open={isAddAccountGmailModal}
            centered
            title={
                <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                    <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                    <div>
                        <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thêm tài khoản gmail</p>
                        <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Điền thông tin cho tài khoản mới</p>
                    </div>
                </div>
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
            <Form name="add_account" layout="vertical" form={formNewAccountGmail}>
                <Row gutter="10">
                    <Col sm={16}>
                        <Form.Item
                            name="email"
                            label="Email"
                            style={{ marginBottom: '7px' }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường không được trống'
                                },
                                { message: 'Nhập định dạng email', type: 'email' }
                            ]}
                        >
                            <Input size='small' style={{ fontWeight: '500' }} placeholder='Email người dùng' />
                        </Form.Item>
                    </Col>
                    <Col sm={6}>
                        <Form.Item 
                            name="status"
                            label="Hoạt động"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                            required: true,
                            message: 'Trường không được trống'
                            }]}
                        >
                            <Switch checkedChildren="Mail sống" unCheckedChildren="Mail chết" checked={state?.active}  onChange={(check) => {
                                setStateModal({
                                    ...state,
                                    active: check
                                })
                            }}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Divider style={{ fontSize: '0.9em', color: 'gray', paddingBottom: '15px', margin: '0px' }}>Thông tin cơ bản</Divider>
                <Row gutter="10">
                    <Col sm={10}>
                        <Form.Item 
                            name="channel_id"
                            label="ID Channel"
                            style={{ marginBottom: '7px', textAlign: 'center' }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường không được trống',
                                    whitespace: false
                                },
                                {
                                    required: true,
                                    pattern: /^UC/,
                                    message: "Sai định dạng Channel ID"
                                }
                            ]}
                        >
                            <Input size='small' prefix='ID' style={{ fontWeight: '500' }} placeholder='Email người dùng' />
                        </Form.Item>
                    </Col>
                    <Col sm={8}>
                        <Form.Item 
                            name="computer"
                            label="Máy"
                            style={{ marginBottom: '7px', textAlign: 'center' }}
                            rules={[{
                            required: true,
                            message: 'Trường không được trống'
                            }]}
                        >
                            <Input size='small' style={{ fontWeight: '600' }} placeholder='Email người dùng' />
                        </Form.Item>
                    </Col>
                    
                </Row>
            </Form>
        </Modal>
    );
}

AddAccountGmail.propTypes = {
    gmailState: PropTypes.object,
    setState: PropTypes.func
};

export default AddAccountGmail;
