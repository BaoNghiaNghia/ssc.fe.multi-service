/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/serviceSettings/actions';

const { Option } = Select;

function EditAccountGmail({ gmailState, setState }) {
    const dispatch = useDispatch();
    const [formCreateGoogleKey] = Form.useForm();

    const { isUpdateAccountGmailModal, selectedRowData } = gmailState;

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
        formCreateGoogleKey.setFieldValue("status", String(detailGoogleKey.status));
    });

    const handleOk = () => {
        try {
            formCreateGoogleKey.validateFields()
                .then((values) => {
                    const requestData = {
                        email: values?.email,
                        key: values?.key,
                        status: values?.status === 'true',
                        id: detailGoogleKey?.id
                    }
                    dispatch(actions.updateGoogleKeyBegin(requestData));

                    setState({
                        ...gmailState,
                        isUpdateAccountGmailModal: false,
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
            ...gmailState,
            isUpdateAccountGmailModal: false,
        });

        formCreateGoogleKey.resetFields();
    }

    return (
        <Modal
            width='500px'
            open={isUpdateAccountGmailModal}
            centered
            title={
                <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                    <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                    <div>
                        <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật Google Key</p>
                        <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Thay đổi thông tin google key</p>
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
                  Thêm mới
                </Button>
            ]}
        >
            <Form name="add_service" layout="vertical" form={formCreateGoogleKey} onFinish={handleSubmit}>
                <Row gutter="10">
                    <Col sm={15}>
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
                    <Col sm={9}>
                    <Form.Item
                        name="status"
                        initialValue
                        label="Trạng thái"
                        style={{ marginBottom: '7px', textAlign: 'center' }}
                        rules={[{
                            required: true,
                            message: 'Trường không được trống'
                        }]}
                    >
                        <Select style={{ width: '100%', margin: '0px', padding: '0px' }} size='small' placeholder='Chọn trạng thái'>
                            <Option value="true">
                                <div style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                                    <Badge dot color='green' style={{ marginRight: '10px' }}/>
                                    <span>Hoạt động</span>
                                </div>
                            </Option>
                            <Option value="false">
                                <div style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                                    <Badge dot color='orangered' style={{ marginRight: '10px' }}/>
                                    <span>Không hoạt động</span>
                                </div>
                            </Option>
                        </Select>
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

EditAccountGmail.propTypes = {
    gmailState: PropTypes.object,
    setState: PropTypes.func
};

export default EditAccountGmail;
