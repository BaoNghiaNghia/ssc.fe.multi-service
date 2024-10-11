/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Button, Modal, Tooltip, Image } from 'antd';
import { MdAddchart } from "react-icons/md";
import { BsFire } from 'react-icons/bs';
import ChartSubscribeInChannelByDay from './ChartSubscribeInChannelByDay';
import serviceActions from '../../../redux/serviceSettings/actions';
import subscribeActions from '../../../redux/buffSubscribe/actions';
import { numberWithCommasCurrency } from '../../../utility/utility';

const { Option } = Select;

function StatisticSubscribeQuantity({ setState, orderState }) {
  const dispatch = useDispatch();
  const [formUpdateSubscribeOrder] = Form.useForm();


  const { postLoading, detailOrderSubscribe, listService, listSubscribeInChannel } = useSelector(state => {
    return {
      postLoading: state?.buffSubscribe.loading,
      listSubscribeInChannel: state?.buffSubscribe?.listSubscribeInChannel,
      detailOrderSubscribe: state?.buffSubscribe?.detailOrderSubscribe,
      listService: state?.settingService?.listService?.items,
    };
  });

  useEffect(() => {
    dispatch(serviceActions.fetchListServiceBegin());
  }, [dispatch]);

  const findService = listService?.filter((item) => item.service_id === detailOrderSubscribe?.service_id);

  useEffect(() => {
    formUpdateSubscribeOrder.setFieldsValue(detailOrderSubscribe);
    if (findService?.length > 0) {
      formUpdateSubscribeOrder.setFieldValue('category', findService[0]?.category);
    }
    formUpdateSubscribeOrder.setFieldValue('priority', String(detailOrderSubscribe?.priority));
    formUpdateSubscribeOrder.setFieldValue('note', detailOrderSubscribe?.note);
  });

  const handleCancel = () => {
    setState({
      isStatisticSubscribe: false,
    });

    formUpdateSubscribeOrder.resetFields();
  }

  const handleOk = () => {
    try {
      formUpdateSubscribeOrder.validateFields()
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
            isStatisticSubscribe: false,
            statusNumber: 'all'
          });

          formUpdateSubscribeOrder.resetFields();
        })
        .catch((err) => {
          console.error("Handle Real Error: ", err);
        });
    } catch (err) {
      console.log(err);
      setState({
        isStatisticSubscribe: false
      });
      formUpdateSubscribeOrder.resetFields();
    }
  };

  const arrWaveDate = listSubscribeInChannel?.map(item => item?.date) || [];

  const totalAmountByDays = listSubscribeInChannel?.sort((a, b) => new Date(a.date) - new Date(b.date)).map(item => Math.round(item?.sub)) || [];

  const chartSubscribePoint = {
    wave_date: arrWaveDate,
    wave_timeline: [
      {
        name: `Lượng subscribe`,
        data: totalAmountByDays
      },
    ],
  };

  return (
    <Modal
      width='80%'
      bodyStyle={{ 
        padding: '0 10px'
       }}
      open={orderState?.isStatisticSubscribe}
      centered
      title={
        <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', gap: 70}}>
          <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
            <div>
              <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Thống kê lượng Subscribe</p>
              <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Thống kế lượng subscribe theo ngày</p>
            </div>
          </div>
          <a
            href={detailOrderSubscribe?.link}
            color="black"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'black !important',
              display: 'inline-flex',
              alignItems: 'center',
              paddingRight: '20px'
            }}
          >
            <span style={{ position: 'relative', marginRight: '10px' }}>
              {detailOrderSubscribe?.priority && (
                <Tooltip title="Ưu tiên">
                  <BsFire
                    fontSize={15}
                    color="#238f00"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      textShadow: '1px 1px 2px yellowgreen',
                      zIndex: 1
                    }}
                  />
                </Tooltip>
              )}

              <Image
                id="channel-image-cover"
                src={detailOrderSubscribe?.channel_thumbnail || `https://img.youtube.com/vi/${detailOrderSubscribe?.channel_id}/default.jpg`}
                alt={`Thumbnail for ${detailOrderSubscribe?.channel_title}`}
                preview={false}
                style={{
                  borderRadius: '25px',
                  padding: '2px',
                  marginBottom: '0',
                  outline: detailOrderSubscribe?.priority ? '2px dashed yellowgreen' : 'none',
                  width: '45px', // Ensure this is large enough
                  height: '45px' // Ensure this is large enough
                }}
              />
            </span>
            <span>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  color: detailOrderSubscribe?.priority ? 'green' : 'darkslategray',
                  
                  fontWeight: 600,
                  textShadow: detailOrderSubscribe?.priority ? `1px 1px 3px yellowgreen` : 'none'
                }}
              >
                {detailOrderSubscribe?.channel_title}
              </p>

              <p style={{ fontSize: '0.8em', color: 'gray', margin: 0, padding: 0 }}>
                <strong>{numberWithCommasCurrency(detailOrderSubscribe?.current_count)} người đăng ký</strong>
              </p>
            </span>
          </a>
        </div>
      }
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Hủy
        </Button>,
        // <Button key="submit" type="primary" loading={postLoading} onClick={handleOk}>
        //   Cập nhật
        // </Button>
      ]}
    >
      <Form name="add_service" layout="vertical" form={formUpdateSubscribeOrder}>
        <ChartSubscribeInChannelByDay loadingChart={postLoading} chartData={chartSubscribePoint || {}} />
      </Form>
    </Modal>
  );
}

StatisticSubscribeQuantity.propTypes = {
  setState: PropTypes.func,
  orderState: PropTypes.object
};

export default StatisticSubscribeQuantity;
