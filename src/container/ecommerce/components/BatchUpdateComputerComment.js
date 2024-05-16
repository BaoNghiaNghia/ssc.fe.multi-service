/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Select, Modal } from 'antd';
import { MdAddchart } from "react-icons/md";
import serviceActions from '../../../redux/serviceSettings/actions';
import { STATUS_COMMENT_ENUM } from '../../../variables/index';

function BatchUpdateComputerComment({ setState, computerState }) {
    const dispatch = useDispatch();

    const { isBatchUpdateCommentServer, selectedRowKeys } = computerState;

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
            ...computerState,
            isBatchUpdateCommentServer: false,
        });
        formUpdateService.resetFields();
    }

    return (
        <>
            <Modal
                width='600px'
                open={isBatchUpdateCommentServer}
                centered
                title={
                    <>
                        <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                            <div>
                                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật {selectedRowKeys?.length} computer</p>
                                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Chi tiết thông tin đơn</p>
                            </div>
                        </div>
                    </>
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

BatchUpdateComputerComment.propTypes = {
    setState: PropTypes.func,
    computerState: PropTypes.object
};

export default BatchUpdateComputerComment;
