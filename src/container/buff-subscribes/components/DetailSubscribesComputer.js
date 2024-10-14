/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Modal, InputNumber, Divider } from 'antd';
import { MdAddchart, MdOutlineNumbers } from "react-icons/md";
import { LuLink2 } from 'react-icons/lu';
import { isEmptyObject } from '../../../utility/utility';

function DetailSubscribesComputer({ setState, computerState }) {
    const { isDetailSubscribeServer, selectedItem } = computerState;

    const [formDetailComputerCmt] = Form.useForm();

    const { isLoading, detailOrderSubscribe } = useSelector(state => {
        return {
            isLoading: state?.buffSubscribe?.loading,
            detailOrderSubscribe: state?.buffSubscribe?.detailOrderSubscribe
        };
    });

    useEffect(() => {
        if (!isEmptyObject(selectedItem)) {
            formDetailComputerCmt.setFieldsValue(selectedItem);
        }
    });

    const handleCancel = () => {
        setState({
            ...computerState,
            isDetailSubscribeServer: false,
        });
        formDetailComputerCmt.resetFields();
    }

    return (
        <>
            <Modal
                width='600px'
                open={isDetailSubscribeServer}
                centered
                title={
                    <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                        <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                        <div>
                            <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Chi tiết Subscribe Server</p>
                            <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Chi tiết thông tin máy chạy subscribe</p>
                        </div>
                    </div>
                }
                onCancel={handleCancel}
                footer={null}
            >
                <Form layout="vertical" form={formDetailComputerCmt}>
                    {
                        !isLoading ? (
                            <>
                                <Row gutter="10">
                                    <Col sm={16}>
                                        <Form.Item name="link" style={{ margin: '0px' }} label="Đường dẫn" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <Input size='small' disabled addonBefore={<LuLink2 />} style={{ width: '100%' }} placeholder='Liên kết server subscribe' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={8}>
                                        <Form.Item name="ip" style={{ margin: '0px' }} label="IP" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <Input size='small' disabled addonBefore={<MdOutlineNumbers />} style={{ width: '100%' }} placeholder='Địa chỉ IP' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Divider plain style={{ marginTop: '5px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>
                                <Row gutter="10">
                                    <Col sm={8}>
                                        <Form.Item name="name" label="Tên máy" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <Input size='small' disabled style={{ width: '100%' }} placeholder='Tên máy subscribe' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={8}>
                                        <Form.Item name="cpu" label="CPU" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <Input size='small' disabled style={{ width: '100%' }} placeholder='CPU của server' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={8}>
                                        <Form.Item name="ram" label="Ram" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <Input size='small' disabled style={{ width: '100%' }} placeholder='Ram của server' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter="10">
                                    <Col sm={8}>
                                        <Form.Item name="current_thread" label="Luồng hiện tại" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <InputNumber type='number' disabled addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Số luồng hiện tại' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={8}>
                                        <Form.Item name="thread" label="Tổng luồng" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <InputNumber type='number' disabled addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Tổng số luồng' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={8}>
                                        <Form.Item name="limit_per_day" label="Giới hạn mỗi ngày" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <InputNumber type='number' disabled addonAfter="subscribe" size='small' style={{ width: '100%' }} placeholder='Giới hạn subscribe mỗi ngày ' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter="10">
                                    <Col sm={12}>
                                        <Form.Item name="last_action_at" style={{ margin: '0px' }} label="Lần cuối Action" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <Input disabled size='small' style={{ width: '100%' }} placeholder='Thời gian hành động cuối' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Item name="last_ping_at" style={{ margin: '0px' }} label="Lần cuối Ping" rules={[{
                                            required: true,
                                            message: 'Trường không được trống'
                                        }]}>
                                            <Input disabled size='small' style={{ width: '100%' }} placeholder='Thời gian Ping lần cuối' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <div>Đang tải</div>
                        )
                    }

                </Form>
            </Modal>
        </>
    );
}

DetailSubscribesComputer.propTypes = {
    setState: PropTypes.func,
    computerState: PropTypes.object
};

export default DetailSubscribesComputer;
