/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Modal, Divider, Table, Spin, Switch } from 'antd';
import { SiGmail } from 'react-icons/si';
import { LuLink2 } from 'react-icons/lu';
import { MdAddchart } from 'react-icons/md';
import { CheckOutlined, CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import { isEmptyObject } from '../../../utility/utility';

const DEFAULT_PAGESIZE = ['10', '20', '50'];

function DetailViewDevices({ setState, computerState }) {
  const { isDetailViewServer } = computerState;

  const [formDetailComputerCmt] = Form.useForm();

  const { isLoading, detailComputerView } = useSelector(state => ({
    isLoading: state?.buffView?.loading,
    detailComputerView: state?.buffView?.detailComputerView // Assuming this contains the device details with profiles
  }));

  useEffect(() => {
    if (!isEmptyObject(detailComputerView)) {
      console.log('------ data detail -----', detailComputerView);
      formDetailComputerCmt.setFieldsValue(detailComputerView);
    }
  }, [detailComputerView]);

  const handleCancel = () => {
    setState({
      ...computerState,
      isDetailViewServer: false,
    });
    formDetailComputerCmt.resetFields();
  };

  const renderExpandedRow = (detailComputerView) => {
    const inTableData = [];

    detailComputerView?.profiles?.map((profile, index) => {
      const { id, email, profile_id, status } = profile;
      return inTableData.push({
        key: index,
        id: (
          <span>{id}</span>
        ),
        email: (
          <>
            {email === "" ? (
              <span style={{ color: '#cecece' }}>Chưa có</span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <SiGmail fontSize={15} style={{ marginRight: '4px' }} color='gray' />
                {email}
              </span>
            )}
          </>
        ),
        profile_id: (
          <span>{profile_id}</span>
        ),
        status: (
          <span>{status}</span>
          // <Switch
          //   checkedChildren={<CheckOutlined />}
          //   unCheckedChildren={<CloseOutlined />}
          //   checked={!!status}
          // />
        ),
      });
    });

    const expandColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Profile ID',
        dataIndex: 'profile_id',
        key: 'profile_id',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      }
    ];

    return (
      <>
        {isLoading === true ? (
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
              position: ['bottomCenter'],
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
      open={isDetailViewServer}
      centered
      title={
        <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
          <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
          <div>
            <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Chi tiết View Devices</p>
            <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Chi tiết thông tin thiết bị chạy View</p>
          </div>
        </div>
      }
      onCancel={handleCancel}
      footer={null}
    >
      <Form layout="vertical" form={formDetailComputerCmt}>
        {!isLoading ? (
          <>
            <Row gutter="10">
              <Col sm={12}>
                <Form.Item name="device_id" label="Device ID" style={{  margin: 0, padding: 0 }} rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}>
                  <Input size='small' readOnly style={{ width: '100%' }} placeholder='Device ID' />
                </Form.Item>
              </Col>
              <Col sm={12}>
                <Form.Item 
                    name="id"
                    label="ID"
                    style={{  margin: 0, padding: 0 }}
                    rules={[{
                        required: true,
                        message: 'Trường không được trống'
                    }]}
                >
                  <Input size='small' readOnly style={{ width: '100%' }} placeholder='ID' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter="10">
              <Col sm={12}>
                <Form.Item name="last_call_at" label="Lần cuối gọi" style={{  margin: 0, padding: 0 }} rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}>
                  <Input size='small' readOnly style={{ width: '100%' }} placeholder='Lần cuối gọi' />
                </Form.Item>
              </Col>
              <Col sm={12}>
                <Form.Item name="created_at" label="Thời gian tạo" style={{  margin: 0, padding: 0 }} rules={[{
                  required: true,
                  message: 'Trường không được trống'
                }]}>
                  <Input size='small' readOnly style={{ width: '100%' }} placeholder='Thời gian tạo' />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter="10">
              <Col sm={24}> 
                <Divider plain style={{ margin: '0 0 10px 0', padding: '0px', fontSize: '0.9em', color: 'gray' }}>Profiles</Divider>
                {renderExpandedRow(detailComputerView)}
              </Col>
            </Row>
          </>
        ) : (
          <div>Đang tải</div>
        )}
      </Form>
    </Modal>
  );
}

DetailViewDevices.propTypes = {
  setState: PropTypes.func,
  computerState: PropTypes.object
};

export default DetailViewDevices;
