/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SiLastpass } from "react-icons/si";
import { Row, Col, Form, Input, Button, Modal, Switch, Divider, Select } from 'antd';
import { MdAddchart, MdAlternateEmail, MdPassword } from "react-icons/md";

import actionsServiceSetting from '../../../redux/serviceSettings/actions';
import actionGmail from '../../../redux/gmailManage/actions';

import { generateIconService, LIST_SERVICE_SUPPLY, SERVICE_TYPE } from '../../../variables';

const { Option } = Select;

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
        active: true,
        category: 'Comments', // Ensure that category is set initially
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
        dispatch(actionsServiceSetting.fetchListServiceBegin({}));
    }, [dispatch]);

    const handleOk = () => {
        try {
            formNewAccountGmail.validateFields()
                .then((values) => {
                    const requestData = {
                        live: 0,
                        email: values?.email,
                        password: values?.password,
                        recover_mail: values?.recover_mail,
                        auth_2fa: values?.auth_2fa,
                    };

                    switch (state?.category) {
                        case SERVICE_TYPE.COMMENT.description:
                            dispatch(actionGmail.createAccountGmailCommentBegin(requestData));
                            break;

                        case SERVICE_TYPE.LIKE.description:
                            dispatch(actionGmail.createAccountGmailLikeBegin(requestData));
                            break;
                  
                        case SERVICE_TYPE.SUBSCRIBE.description:
                            console.log('Subscribes currently not apply');
                            break;
                
                        case SERVICE_TYPE.VIEW.description:
                             dispatch(actionGmail.createAccountGmailViewBegin(requestData));
                            break;
            
                        default:
                          console.log('Service type not recognized');
                    }

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

    const bodyModalCreatNewGmailView = () => {
        return (
            <>
                <Row gutter={10}>
                    <Col sm={12}>
                        <Form.Item
                            name="email"
                            label="Email"
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
                            label="Mật khẩu"
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
                            label="2FA"
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
                                prefix='ID'
                                style={{ fontWeight: '500' }}
                                placeholder='ID 2FA'
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={12}>
                        <Form.Item
                            name="recover_mail"
                            label="Recover Email"
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
            </>
        );
    };

    const bodyModalCreatNewGmailByType = ( serviceType ) => {
       return (
        <>
                <Row gutter={10}>
                    <Col sm={12}>
                        <Form.Item
                            name="email"
                            label={`Email (${serviceType})`}
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
                            label={`Mật khẩu (${serviceType})`}
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
                            label={`2FA (${serviceType})`}
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
                            label={`Recover Email (${serviceType})`}
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
            </>
       )
    }

    return (
        <Modal
            width='600px'
            open={isAddAccountGmailModal}
            centered
            title={
                <Row gutter="10" style={{ display: 'flex', alignItems: 'center', alignContent:'center' }}>
                    <Col sm={14}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                            <div>
                                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: 700 }}>Thêm tài khoản gmail</p>
                                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Điền thông tin cho tài khoản mới</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'self-start' }}>
                        <Form layout="vertical" form={formNewAccountGmail} style={{ margin: 0, padding: 0, marginBottom: 0, width: '100%' }}>
                            <span style={{ fontSize: '12px', padding: 0, margin: 0, fontWeight: 400 }}>Loại dịch vụ</span>
                            <Form.Item
                                name="category"
                                style={{ margin: 0, padding: 0, marginBottom: 0 }}
                                initialValue="Comments"
                                bordered
                                rules={[{
                                    required: true,
                                    message: 'Trường không được trống'
                                }]}
                                onClick={(value) => {
                                    const selectedService = LIST_SERVICE_SUPPLY.filter(item => item?.category === value?.target?.innerText);
                                    if (selectedService?.length > 0) {
                                        setStateModal({
                                            ...state,
                                            category: selectedService[0]?.category
                                        });
                                        formNewAccountGmail.setFieldValue('type', selectedService[0]?.type);
                                        formNewAccountGmail.setFieldValue('service_type', selectedService[0]?.service_type);
                                    }
                                }}
                            >
                                <Select style={{ width: '70%', margin: 0, padding: 0, marginBottom: 0 }} initialValue="Comments" size='small'>
                                    {
                                        LIST_SERVICE_SUPPLY?.map(service => {
                                            return (
                                                <Option key={service?.category} value={service?.category} style={{ padding: 0, margin: 0 }}>
                                                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                        { generateIconService(service) }
                                                        <span style={{ fontWeight: '600' }}>{service?.category}</span>
                                                    </div>
                                                </Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>
                        </Form>
                    </Col>

                </Row>
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
                { bodyModalCreatNewGmailByType(state?.category) }    
            </Form>
        </Modal>
    );
}

AddAccountGmail.propTypes = {
    gmailState: PropTypes.object,
    setState: PropTypes.func
};

export default AddAccountGmail;
