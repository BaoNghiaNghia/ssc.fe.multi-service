/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Modal, Divider } from 'antd';
import { MdAddchart, MdAlternateEmail, MdPassword } from "react-icons/md";
import { SiLastpass } from 'react-icons/si';
import actions from '../../../redux/serviceSettings/actions';

function DetailAccountGmail({ gmailState, setState }) {
    const dispatch = useDispatch();
    const [formDetailAccountGmail] = Form.useForm();

    const { isDetailAccountGmailModal, selectedRowData} = gmailState;

    const { postLoading, detailAccountGmail } = useSelector(state => {
        return {
            postLoading: state?.gmailManage?.loading,
            detailAccountGmail: state?.gmailManage?.detailAccountGmail
        };
    });

    const [state, setStateModal] = useState({
        values: null,
    });

    const handleSubmit = (values) => {
        setStateModal({ ...state, values: { ...values, tags: state.tags } });
    };

    useEffect(() => {
        formDetailAccountGmail.setFieldsValue(detailAccountGmail);
    });

    const handleOk = () => {
        try {
            formDetailAccountGmail.validateFields()
                .then((values) => {
                    const requestData = {
                        email: values?.email,
                        key: values?.key,
                        status: values?.status
                    }

                    dispatch(actions.createGoogleKeyBegin(requestData));

                    setState({
                        ...gmailState,
                        isDetailAccountGmailModal: false,
                    });

                    formDetailAccountGmail.resetFields();
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
            isDetailAccountGmailModal: false,
        });

        formDetailAccountGmail.resetFields();
    }

    return (
        <Modal
            width='600px'
            open={isDetailAccountGmailModal}
            centered
            title={
                <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                    <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                    <div>
                        <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thông tin tài khoản</p>
                        <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Thông tin tài khoản gmail</p>
                    </div>
                </div>
            }
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[ ]}
        >
            <Form name="add_service" layout="vertical" form={formDetailAccountGmail} onFinish={handleSubmit}>
            <Row gutter={10}>
                    <Col sm={12}>
                        <Form.Item
                            name="email"
                            label={`Email (${gmailState?.activeClass})`}
                            style={{ marginBottom: '7px' }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường không được trống',
                                },
                                {
                                    type: 'email',
                                    message: 'Nhập định dạng email',
                                },
                            ]}
                        >
                            <Input
                                size='small'
                                addonBefore={<MdAlternateEmail fontSize={17} style={{ marginTop: '4px' }} />}
                                style={{ fontWeight: '500' }}
                                placeholder='Email người dùng'
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item
                            name="password"
                            label={`Mật khẩu (${gmailState?.activeClass})`}
                            style={{ margin: 0, padding: 0 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường không được trống',
                                },
                                {
                                    min: 8,
                                    message: 'Mật khẩu phải có ít nhất 8 ký tự',
                                },
                            ]}
                        >
                            <Input.Password
                                size='small'
                                addonBefore={<MdPassword fontSize={17} style={{ marginTop: '3px' }} />}
                                placeholder="Nhập mật khẩu"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Divider style={{ fontSize: '0.9em', color: 'gray', paddingBottom: '15px', margin: '0px' }}>
                    Security
                </Divider>
                <Row gutter={10}>
                    <Col sm={12}>
                        <Form.Item
                            name="auth_2fa"
                            label={`2FA (${gmailState?.activeClass})`}
                            style={{ marginBottom: '7px', textAlign: 'center' }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường không được trống',
                                    whitespace: false,
                                },
                            ]}
                        >
                            <Input
                                addonBefore={<SiLastpass fontSize={17} style={{ marginTop: '4px' }} />}
                                size='small'
                                style={{ fontWeight: '500' }}
                                placeholder='Nhập mã 2FA'
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item
                            name="recover_mail"
                            label={`Recover Email (${gmailState?.activeClass})`}
                            style={{ marginBottom: '7px' }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường không được trống',
                                },
                                {
                                    type: 'email',
                                    message: 'Nhập định dạng email',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={<MdAlternateEmail fontSize={17} style={{ marginTop: '4px' }} />}
                                size='small'
                                style={{ fontWeight: '500' }}
                                placeholder='Email phục hồi'
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

DetailAccountGmail.propTypes = {
    gmailState: PropTypes.object,
    setState: PropTypes.func
};

export default DetailAccountGmail;
