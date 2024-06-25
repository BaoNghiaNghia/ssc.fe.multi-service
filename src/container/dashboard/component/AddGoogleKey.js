/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, Switch } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/serviceSettings/actions';
import { LIST_SERVICE_SUPPLY } from '../../../variables';

function AddGoogleKey({ googleKeyState, setState }) {
    const dispatch = useDispatch();

    const { isAddGoogkeKey } = googleKeyState;

    const { postLoading } = useSelector(state => {
        return {
            postLoading: state.settingService.postLoading,
        };
    });

    const [formCreateGoogleKey] = Form.useForm();

    const [state, setStateModal] = useState({
        values: null,
    });

    const handleSubmit = (values) => {
        setStateModal({ ...state, values: { ...values, tags: state.tags } });
    };

    useEffect(() => {
        formCreateGoogleKey.setFieldValue('category', 'Comments');
        const matchService = LIST_SERVICE_SUPPLY?.filter((item) => item?.category === 'Comments');
        if (matchService?.length > 0) {
            formCreateGoogleKey.setFieldValue('type', matchService[0]?.type);
            formCreateGoogleKey.setFieldValue('service_type', matchService[0]?.service_type);
        }
    }, []);

    useEffect(() => {
        dispatch(actions.fetchListServiceBegin({}));
    }, [dispatch]);

    const handleOk = () => {
        try {
            formCreateGoogleKey.validateFields()
                .then((values) => {
                    const requestData = {
                        email: values?.email,
                        key: values?.key,
                        status: values?.status
                    }

                    dispatch(actions.createGoogleKeyBegin(requestData));

                    setState({
                        ...googleKeyState,
                        isAddGoogkeKey: false,
                    });

                    formCreateGoogleKey.resetFields();
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
            ...googleKeyState,
            isAddGoogkeKey: false,
        });
    }

    return (
        <Modal
            width='600px'
            open={isAddGoogkeKey}
            centered
            title={
                <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                    <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                    <div>
                        <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thêm Google Key</p>
                        <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Điền thông tin cho google key mới</p>
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
            <Form name="add_service" layout="vertical" form={formCreateGoogleKey} onFinish={handleSubmit}>
                <Row gutter="10">
                    <Col sm={20}>
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
                            <Input size='small' style={{ fontWeight: 'bold' }} placeholder='Email người dùng' />
                        </Form.Item>
                    </Col>
                    <Col sm={4}>
                    <Form.Item 
                        name="status"
                        initialValue
                        label="Hoạt động"
                        style={{ marginBottom: '7px', textAlign: 'center' }}
                        rules={[{
                        required: true,
                        message: 'Trường không được trống'
                        }]}
                    >
                        <Switch defaultChecked onChange={(value) => {
                            formCreateGoogleKey.setFieldValue('enable', value)
                        }} />
                    </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col sm={24}>
                        <Form.Item
                            name="key"
                            label="Google Key"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                                required: true,
                                message: 'Trường không được trống'
                            }]}
                        >
                            <Input.Password size='small' style={{ fontWeight: 'bold' }} placeholder='Google Key' />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

AddGoogleKey.propTypes = {
    googleKeyState: PropTypes.object,
    setState: PropTypes.func
};

export default AddGoogleKey;
