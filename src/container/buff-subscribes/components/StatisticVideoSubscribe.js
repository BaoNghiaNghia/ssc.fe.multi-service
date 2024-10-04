/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, Badge, Spin, Table } from 'antd';
import { MdAddchart, MdOndemandVideo } from "react-icons/md";
import { BsFire } from 'react-icons/bs';
import serviceActions from '../../../redux/serviceSettings/actions';
import subscribeActions from '../../../redux/buffSubscribe/actions';
import { DEFAULT_PAGESIZE, ORDER_YOUTUBE_STATUS } from '../../../variables/index';

const { Option } = Select;

function StatisticVideoSubscribe({ setState, orderState }) {
  const dispatch = useDispatch();
  const [formListVideoInChannels] = Form.useForm();


  const { postLoading, detailOrderSubscribe, listService } = useSelector(state => {
    return {
      postLoading: state?.buffSubscribe.loading,
      detailOrderSubscribe: state?.buffSubscribe?.detailOrderSubscribe,
      listService: state?.settingService?.listService?.items
    };
  });

  useEffect(() => {
    dispatch(serviceActions.fetchListServiceBegin());
  }, [dispatch]);

  const findService = listService?.filter((item) => item.service_id === detailOrderSubscribe?.service_id);

  useEffect(() => {
    formListVideoInChannels.setFieldsValue(detailOrderSubscribe);
    if (findService?.length > 0) {
      formListVideoInChannels.setFieldValue('category', findService[0]?.category);
    }
    formListVideoInChannels.setFieldValue('priority', String(detailOrderSubscribe?.priority));
    formListVideoInChannels.setFieldValue('note', detailOrderSubscribe?.note);
  });

  const handleCancel = () => {
    setState({
      isListVideoInChannel: false,
    });

    formListVideoInChannels.resetFields();
  }

  const handleOk = () => {
    try {
      formListVideoInChannels.validateFields()
        .then((values) => {
          dispatch(subscribeActions.updateOrderSubscribeAdminBegin({
            id: detailOrderSubscribe?.id,
            max_thread: values?.max_thread,
            note: values?.note,
            priority: values?.priority === "true",
            status: values?.status
          }));


          setState({ 
            ...orderState,
            isListVideoInChannel: false,
            statusNumber: 'all'
          });

          formListVideoInChannels.resetFields();
        })
        .catch((err) => {
          console.error("Handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
      setState({
        isListVideoInChannel: false });
      formListVideoInChannels.resetFields();
    }
  };

  const renderProfileTable = (listVideo) => {
    const inTableData = [];

    listVideo?.map((video, index) => {
      const { video_id, video_duration, video_title } = video;
      return inTableData.push({
        key: index,
        video_id: (
          <span style={{ fontSize: '12px' }}>{video_id}</span>
        ),
        video_title: (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div style={{ fontWeight: '600', display: 'flex', alignItems: 'self-start' }}>
                <code>{video_title || '...'}</code>
              </div>
              <div style={{ fontSize: '11px', alignSelf: 'flex-end' }}>
                Thời lượng: {video_duration || '...'}
              </div>
            </div>
          </>

        ),
        profile_id: (
          <div>....</div>
        ),
        status: (
          <div>....</div>
        ),
      });
    });

    const expandColumns = [
      {
        title: 'Tiêu đề video',
        dataIndex: 'video_title',
        key: 'video_title',
      },
      {
        title: 'Video ID',
        dataIndex: 'video_id',
        key: 'video_id',
      },
      {
        title: 'Click',
        dataIndex: 'profile_id',
        key: 'profile_id',
      },
      {
        title: 'Load',
        dataIndex: 'status',
        key: 'status',
      }
    ];

    return (
      <>
        {postLoading === true ? (
          <Spin
            size='small'
            style={{ marginRight: '8px', color: '#ff6c00' }}
            indicator={<LoadingOutlined spin />}
            tip="Đang chạy"
          />
        ) : (
          <Table
            columns={expandColumns}
            dataSource={inTableData}
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: DEFAULT_PAGESIZE,
              position: ['bottomLeft'],
              responsive: true,
              size: 'small'
            }}
            size="small"
          />
        )}
      </>
    );
  };

  return (
    <Modal
      width='600px'
      open={orderState?.isListVideoInChannel}
      centered
      title={
        <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
          <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
          <div>
            <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thống kê số lượng video</p>
            <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Cập nhật thông tin đơn</p>
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

          Cập nhật
        </Button>
      ]}
    >
      <Form name="add_service" layout="vertical" form={formListVideoInChannels}>
        {renderProfileTable(detailOrderSubscribe?.videos)}
      </Form>
    </Modal>
  );
}

StatisticVideoSubscribe.propTypes = {
  setState: PropTypes.func,
  orderState: PropTypes.object
};

export default StatisticVideoSubscribe;
