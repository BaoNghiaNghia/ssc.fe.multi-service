/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input, Select, Modal, Divider, Button, Table, Spin, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import { LoadingOutlined } from '@ant-design/icons';
import { SiGmail } from 'react-icons/si';
import { isEmptyObject } from '../../../utility/utility';
import actions from '../../../redux/buffView/actions';
import { DEFAULT_PAGESIZE, VIEW_STATUS_TYPE } from '../../../variables';

const { Option } = Select;

function EditViewDevices({ setState, computerState }) {
  const dispatch = useDispatch();
  const [formDetailComputerCmt] = Form.useForm();

  const { isLoading, detailComputerView } = useSelector(state => ({
    isLoading: state?.buffView?.loading,
    detailComputerView: state?.buffView?.detailComputerView
  }));

  useEffect(() => {
    if (!isEmptyObject(detailComputerView)) {
      formDetailComputerCmt.setFieldsValue(detailComputerView);
    }
  }, [detailComputerView]);

  const handleOk = () => {
    formDetailComputerCmt.validateFields()
      .then((values) => {
        const requestData = {
          id: detailComputerView?.id,
          action: values?.action,
          cpu: values?.cpu,
          name: values?.name,
          ip: values?.ip,
          limit_per_day: values?.limit_per_day,
          link: values?.link,
          ram: values?.ram,
          thread: values?.thread
        };

        dispatch(actions.updateOneComputerViewAdminBegin(requestData));

        setState({
          isEditViewServer: false,
        });

        formDetailComputerCmt.resetFields();
      })
      .catch((err) => {
        console.error("Handle Real Error: ", err);
      });
  };

  const handleCancel = () => {
    setState({ ...computerState, isEditViewServer: false });
    formDetailComputerCmt.resetFields();
  };

  const renderProfileTable = (detailComputerView) => {
    const inTableData = [];

    detailComputerView?.profiles?.map((profile, index) => {
      const { id, email, profile_id, status } = profile;
      return inTableData.push({
        key: index,
        id: (
          <span style={{ fontSize: '12px' }}>{id}</span>
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
          <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'flex-start'}}>
            <Badge color={VIEW_STATUS_TYPE[status].color} dot style={{ marginRight: '5px' }} />
            <span>{VIEW_STATUS_TYPE[status].describe}</span>
            <Badge count={`${status.toString()}`} showZero color={VIEW_STATUS_TYPE[status]?.color} style={{ marginLeft: '5px' }} />
          </div>
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
      open={computerState.isEditViewServer}
      centered
      title={
        <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
          <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
          <div>
            <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Cập nhật View Devices</p>
            <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Cập nhật thông tin máy chạy View</p>
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
                {renderProfileTable(detailComputerView)}
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

EditViewDevices.propTypes = {
  setState: PropTypes.func.isRequired,
  computerState: PropTypes.shape({
    isEditViewServer: PropTypes.bool.isRequired
  }).isRequired
};

export default EditViewDevices;
