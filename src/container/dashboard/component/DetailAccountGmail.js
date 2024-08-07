/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TbServerBolt } from 'react-icons/tb';
import { Row, Col, Form, Input, Modal, Switch, Divider } from 'antd';
import { MdAddchart, MdAccessTime, MdOutlineAlternateEmail } from "react-icons/md";
import actions from '../../../redux/serviceSettings/actions';
import { getPathLocalFromString } from '../../../utility/utility';

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
                <Row gutter="10">
                    <Col sm={13}>
                        <Form.Item
                            name="email"
                            label="Email"
                            style={{ marginBottom: '7px' }}
                            rules={[
                                { required: true, message: 'Trường không được trống' },
                                { message: 'Nhập định dạng email', type: 'email' }
                            ]}
                        >
                            <Input size='small' prefix={<MdOutlineAlternateEmail/>} readOnly style={{ fontWeight: '500' }} placeholder='Email người dùng' />
                        </Form.Item>
                    </Col>
                    <Col sm={11}>
                        <Form.Item 
                            name="channel_id"
                            initialValue
                            label="ID Channel"
                            style={{ marginBottom: '7px', textAlign: 'center' }}
                            rules={[{
                                required: true,
                                message: 'Trường không được trống'
                            }]}
                        >
                            <Input size='small' prefix={<span style={{ fontWeight: 700, color: 'gray' }}>ID</span>} readOnly style={{ fontWeight: '500' }} placeholder='Email người dùng' />
                        </Form.Item>
                    </Col>
                </Row>
                <Divider style={{ fontSize: '0.9em', color: 'gray', paddingBottom: '15px', margin: '0px' }}>Thông tin cơ bản</Divider>
                <Row gutter="10">
                    <Col sm={10}>
                        <Form.Item 
                            name="computer"
                            initialValue
                            label="Máy"
                            style={{ marginBottom: '7px', textAlign: 'center' }}
                            rules={[{
                            required: true,
                            message: 'Trường không được trống'
                            }]}
                        >
                            <Input 
                                size='small'
                                prefix={<>{
                                    detailAccountGmail !== null && getPathLocalFromString(detailAccountGmail?.computer) !== null
                                        ? <img
                                            src={require(`../../../${getPathLocalFromString(detailAccountGmail?.computer)}`)}
                                            alt={getPathLocalFromString(detailAccountGmail?.computer)}
                                            width="18px"
                                            height="18px"
                                            style={{ outline: '2px solid #d3d3d3', borderRadius: '10px', margin: '3px 8px 0 0' }}
                                        />
                                        : <TbServerBolt fontSize={17} style={{ marginRight: '8px', marginTop: '5px' }} />
                                    }</>
                                } 
                                readOnly
                                style={{ fontWeight: '500' }}
                                placeholder='Email người dùng'
                            />
                        </Form.Item>
                    </Col>
                    <Col sm={8}>
                        <Form.Item 
                            name="total_task"
                            initialValue
                            label="Tổng nhiệm vụ"
                            style={{ marginBottom: '7px', textAlign: 'center' }}
                            rules={[{
                            required: true,
                            message: 'Trường không được trống'
                            }]}
                        >
                            <Input size='small' readOnly style={{ fontWeight: '600' }} placeholder='Email người dùng' />
                        </Form.Item>
                    </Col>
                    <Col sm={6}>
                        <Form.Item 
                            name="status"
                            initialValue
                            label="Hoạt động"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                            required: true,
                            message: 'Trường không được trống'
                            }]}
                        >
                            <Switch checkedChildren="Mail sống" unCheckedChildren="Mail chết" checked={detailAccountGmail?.live} onChange={(value) => {
                                formDetailAccountGmail.setFieldValue('status', value)
                            }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter="10">
                    {
                        detailAccountGmail?.last_call_at ? (
                            <Col sm={12}>
                                <Form.Item 
                                    name="last_call_at"
                                    initialValue
                                    label="Lần gọi cuối"
                                    style={{ marginBottom: '0px' }}
                                    rules={[{
                                    required: true,
                                    message: 'Trường không được trống'
                                    }]}
                                >
                                    <Input size='small' prefix={<MdAccessTime/>} readOnly style={{ fontWeight: '600' }} placeholder='Email người dùng' />
                                </Form.Item>
                            </Col>
                        ) : null
                    }
                    {
                        detailAccountGmail?.last_success_at ? (
                            <Col sm={12}>
                                <Form.Item 
                                    name="last_success_at"
                                    initialValue
                                    label="Lần hoàn thành cuối"
                                    style={{ marginBottom: '0px' }}
                                    rules={[{
                                    required: true,
                                    message: 'Trường không được trống'
                                    }]}
                                >
                                    <Input size='small' prefix={<MdAccessTime/>} readOnly style={{ fontWeight: '600' }} placeholder='Email người dùng' />
                                </Form.Item>
                            </Col>
                        ) : null
                    }
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
