/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Select, Button, Modal,  Typography } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/serviceSettings/actions';
import { COLOR_GENERAL, LIST_SERVICE_SUPPLY } from '../../../variables';

const { Paragraph, Text } = Typography;

function DelService({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formDelService] = Form.useForm();

  const { postLoading, detailService } = useSelector(state => {
    return {
      postLoading: state?.settingService?.postLoading,
      detailService: state?.settingService?.detailService,
    };
  });

  const initCategory = LIST_SERVICE_SUPPLY.filter(item => item?.category === detailService?.category);

  const currentStateWorking = detailService?.enabled;

  useEffect(() => {
    dispatch(actions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleOk = () => {
    try {
      const requestData = {
        id: detailService.id,
        category: detailService?.category,
        platform: detailService?.platform || 'Youtube',
        service_type: detailService?.service_type,
        type: initCategory?.length && initCategory[0]?.type,
        description: detailService?.description,
        enabled: !detailService?.enabled,
        min: detailService?.min,
        max: detailService?.max,
        max_threads: detailService?.max_threads,
        max_threads_3000: detailService?.max_threads_3000,
        max_threads_5000: detailService?.max_threads_5000,
        name: detailService?.name,
        price_per_10: detailService?.price_per_10,
        priority: detailService?.priority
      }
  
      dispatch(actions.updateServiceBegin(requestData));

      setState({
        isOpenDel: false,
      });
    } catch (err) {
      console.log(err);
      setState({
        isOpenDel: false,
      });

      formDelService.resetFields();
    }

  };

  const handleCancel = () => {
    setState({
      isOpenDel: false,
    });
  }

  return (
    <>
      <Modal
        width='350px'
        open={isOpen}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>{ currentStateWorking ? 'Tắt' : 'Bật' } dịch vụ</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>{ currentStateWorking ? 'Ngừng' : 'Tiếp tục' } sử dụng dịch vụ </p>
              </div>
            </div>
          </>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" loading={postLoading} onClick={handleOk}>
            Xác nhận
          </Button>
        ]}
      >
        <Form name="add_service" layout="vertical" form={formDelService}>
          <Row gutter="10">
            <Col sm={24}>
            <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: '400'
                  }}
                >
                  Xác nhận { currentStateWorking ? 'tắt' : 'bật' } dịch vụ <span style={{ color: COLOR_GENERAL.primary }}>{detailService?.name}</span> ?
                </Text>
              </Paragraph>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

DelService.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default DelService;
