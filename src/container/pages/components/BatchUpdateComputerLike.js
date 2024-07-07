/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Modal, InputNumber, Divider, Button } from 'antd';
import { MdAddchart, MdOutlineNumbers } from "react-icons/md";
import { LuLink2 } from 'react-icons/lu';
import { toast } from 'react-toastify';
import serviceActions from '../../../redux/serviceSettings/actions';
import { STATUS_COMMENT_ENUM } from '../../../variables/index';
import { isEmptyObject } from '../../../utility/utility';
import actions from '../../../redux/buffComment/actions';

const { Option } = Select;

function BatchUpdateComputerLike({ setState, computerState }) {
    const dispatch = useDispatch();

    const { isBatchUpdateCommentServer, selectedRowKeys } = computerState;
    const [formDetailComputerCmt] = Form.useForm();

    const { isLoading, detailComputerComment } = useSelector(state => {
        return {
            isLoading: state?.buffComment?.loading,
            detailComputerComment: state?.buffComment?.detailComputerComment
        };
    });

    const handleOk = () => {
        try {
            formDetailComputerCmt.validateFields()
                .then((values) => {
                    Object.keys(values).forEach(key => values[key] === undefined && delete values[key]);
                    if (isEmptyObject(values)) {
                        toast.warn('Chưa nhập thông tin cập nhật');
                        return;
                    }

                    if (selectedRowKeys?.length > 0) {
                        values.ids = selectedRowKeys;
                    }
                    dispatch(actions.updateManyComputerCommentAdminBegin(values));

                    setState({
                        isModalEditMem: false,
                    });

                    formDetailComputerCmt.resetFields();
                })
                .catch((err) => {
                    console.error("Handle Real Error: ", err);
                });
        } catch (err) {
            console.log(err);
        }
    };

    const handleCancel = () => {
        setState({ ...computerState, isBatchUpdateCommentServer: false });
        formDetailComputerCmt.resetFields();
    }

    return (
        <>
            <Modal
                width='600px'
                open={isBatchUpdateCommentServer}
                centered
                title={
                    <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                        <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                        <div>
                            <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật {selectedRowKeys?.length} Comment Server</p>
                            <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Cập nhật thông tin máy chạy comment</p>
                        </div>
                    </div>
                }
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Cập nhật
                    </Button>
                ]}
            >
                <Form layout="vertical" form={formDetailComputerCmt}>
                    {
                        !isLoading ? (
                            <>
                                <Row gutter="10">
                                    <Col sm={12}>
                                        <Form.Item name="link" style={{ margin: '0px' }} label="Đường dẫn">
                                            <Input size='small' addonBefore={<LuLink2 />} style={{ width: '100%' }} placeholder='Liên kết server comment' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Item name="ip" style={{ margin: '0px' }} label="IP">
                                            <Input size='small' addonBefore={<MdOutlineNumbers />} style={{ width: '100%' }} placeholder='Địa chỉ IP' />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Divider plain style={{ marginTop: '5px', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Cấu hình</Divider>

                                <Row gutter="10">
                                    <Col sm={12}>
                                        <Form.Item name="cpu" label="CPU">
                                            <Input size='small' style={{ width: '100%' }} placeholder='CPU của server' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Item name="ram" label="Ram">
                                            <Input size='small' style={{ width: '100%' }} placeholder='Ram của server' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter="10">
                                    <Col sm={8}>
                                        <Form.Item name="thread" label="Số luồng" style={{ margin: 0 }}>
                                            <InputNumber type="number" addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Số luồng' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={8}>
                                        <Form.Item name="limit_per_day" style={{ margin: 0 }} label="Giới hạn mỗi ngày">
                                            <InputNumber type='number' addonAfter="comment" size='small' style={{ width: '100%' }} placeholder='Giới hạn comment mỗi ngày ' />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={8}>
                                        <Form.Item name="action" label="Hành động" style={{ margin: 0 }}>
                                            <Select style={{ width: '100%' }} placeholder="Chọn hành động" size='small'>
                                                <Option value="reset">Reset</Option>
                                            </Select>
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

BatchUpdateComputerLike.propTypes = {
    setState: PropTypes.func,
    computerState: PropTypes.object
};

export default BatchUpdateComputerLike;
