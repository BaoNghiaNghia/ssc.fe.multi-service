/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Divider, Progress, Tooltip } from 'antd';
import { MdAddchart } from "react-icons/md";
import { FaRegCommentDots, FaYoutube } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import serviceActions from '../../../redux/serviceSettings/actions';
import { FixedServiceTemp, STATUS_COMMENT_ENUM } from '../../../variables/index';
import { numberWithCommas } from '../../../utility/utility';

const { Option } = Select;

function DetailCommentComputer({ setState, computerState }) {
    const dispatch = useDispatch();

    const { isDetailCommentServer } = computerState;

    const [formUpdateService] = Form.useForm();

    const { detailOrderComment, userList, listService } = useSelector(state => {
        return {
            detailOrderComment: state?.buffComment?.detailOrderComment,
            userList: state?.member?.userList,
            listService: state?.settingService?.listService?.items,
        };
    });

    useEffect(() => {
        dispatch(serviceActions.fetchListServiceBegin({}));
    }, [dispatch]);

    const findUser = userList?.filter((item) => item.id === detailOrderComment?.user_id);
    const findService = listService?.filter((item) => item.service_id === detailOrderComment?.service_id);

    useEffect(() => {
        formUpdateService.setFieldsValue(detailOrderComment);
        if (findService?.length > 0) {
            formUpdateService.setFieldValue('category', findService[0]?.category);
        }

        if (findUser?.length > 0) {
            formUpdateService.setFieldValue('user_name', findUser[0]?.fullname);
            formUpdateService.setFieldValue('user_email', findUser[0]?.email);
        }

        formUpdateService.setFieldValue('priority', String(detailOrderComment?.priority));
        formUpdateService.setFieldValue('status', STATUS_COMMENT_ENUM.find(item => item.status === detailOrderComment?.status)?.title);
    });

    const handleCancel = () => {
        setState({
            isDetailCommentServer: false,
        });
        formUpdateService.resetFields();
    }

    const iconService = (service) => {
        switch (service?.category) {
            case 'Comments':
                return <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }} />
            case 'Likes':
                return <AiOutlineLike color='red' fontSize={15} style={{ marginRight: '10px' }} />
            case 'Subscribers':
                return <GrNotification color='red' fontSize={15} style={{ marginRight: '10px' }} />
            default:
                return <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }} />
        }
    }

    return (
        <>
            <Modal
                width='600px'
                open={isDetailCommentServer}
                centered
                title={
                    <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                        <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                        <div>
                            <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Chi tiết Comment Server</p>
                            <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Chi tiết thông tin máy chạy comment</p>
                        </div>
                    </div>
                }
                onCancel={handleCancel}
                footer={null}
            >
                <Form name="add_service" layout="vertical" form={formUpdateService}>
                    <span>ss</span>
                </Form>
            </Modal>
        </>
    );
}

DetailCommentComputer.propTypes = {
    setState: PropTypes.func,
    computerState: PropTypes.object
};

export default DetailCommentComputer;
