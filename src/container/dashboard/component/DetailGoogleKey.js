/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, Switch } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/serviceSettings/actions';
import { LIST_SERVICE_SUPPLY } from '../../../variables';

function DetailGoogleKey({ googleKeyState, setState }) {
    const dispatch = useDispatch();
    const [formCreateGoogleKey] = Form.useForm();

    const { isDetailGoogkeKey, selectedRowData} = googleKeyState;

    const { postLoading, detailGoogleKey } = useSelector(state => {
        return {
            postLoading: state?.settingService?.postLoading,
            detailGoogleKey: state?.settingService?.detailGoogleKey
        };
    });

    const [state, setStateModal] = useState({
        values: null,
    });

    const handleSubmit = (values) => {
        setStateModal({ ...state, values: { ...values, tags: state.tags } });
    };

    useEffect(() => {
        formCreateGoogleKey.setFieldsValue(detailGoogleKey);
    });

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
                        isDetailGoogkeKey: false,
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
            isDetailGoogkeKey: false,
        });

        formCreateGoogleKey.resetFields();
    }

    return (
        <Modal
            width='500px'
            open={isDetailGoogkeKey}
            centered
            title={
                <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                    <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                    <div>
                        <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thông tin Google Key</p>
                        <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Thông tin google key</p>
                    </div>
                </div>
            }
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[ ]}
        >
            <Form name="add_service" layout="vertical" form={formCreateGoogleKey} onFinish={handleSubmit}>
                <Row gutter="10">
                    <Col sm={18}>
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
                            <Input size='small' readOnly style={{ fontWeight: 'bold' }} placeholder='Email người dùng' />
                        </Form.Item>
                    </Col>
                    <Col sm={6}>
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
                        <Switch checked={detailGoogleKey?.status} onChange={(value) => {
                            formCreateGoogleKey.setFieldValue('status', value)
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
                            <Input.Password size='small' readOnly style={{ fontWeight: 'bold' }} placeholder='Google Key' />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

DetailGoogleKey.propTypes = {
    googleKeyState: PropTypes.object,
    setState: PropTypes.func
};

export default DetailGoogleKey;
