/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Table } from 'antd';
import { MdAddchart } from "react-icons/md";
import { numberWithCommas } from '../../../utility/utility';

const columns = [
  {
    title: 'Tên máy',
    dataIndex: 'computer_name',
    key: 'computer_name',
  },
  {
    title: 'ID máy',
    dataIndex: 'computer_id',
    key: 'computer_id',
  },
  {
    title: 'Tổng cộng (mail)',
    dataIndex: 'total',
    key: 'total',
  },
];

function DetailMailList({ setState, mailState }) {
  const [formUpdateService] = Form.useForm();

  const { isMailListPopup, selectedItem } = mailState;

  const handleCancel = () => {
    setState({
      isMailListPopup: false,
    });
    formUpdateService.resetFields();
  }
  const dataSource = [];
  
  if (selectedItem?.data?.length) {
    selectedItem?.data?.map((value, key) => {
      const { computer_id, computer_name, total } = value;

      return dataSource.push({
        key: key + 1,
        computer_id: (
          <span style={{ fontWeight: 300 }}>
            {computer_id || '...'}
          </span>
        ),
        computer_name: (
          <span style={{ fontWeight: 700 }}>
            {computer_name || '...'}
          </span>
        ),
        total: (
          <span style={{ color: '#006799', fontWeight: 800 }}>
            {numberWithCommas(total || 0)}
          </span>
        ),
      });
    });
  }

  return (
    <>
      <Modal
        width='500px'
        open={isMailListPopup}
        centered
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
            <div>
              <p style={{ fontSize: '1.0em', marginBottom: '2px', fontWeight: '700' }}>{ selectedItem?.title }</p>
              <p style={{ fontSize: '0.7em', marginBottom: '0px' }}>{ selectedItem?.title }</p>
            </div>
          </div>
        }
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="add_service" layout="vertical" form={formUpdateService}>
          <Table
            size='small'
            showHeader
            dataSource={dataSource}
            columns={columns}
            pagination={false}
          />
        </Form>
      </Modal>
    </>
  );
}

DetailMailList.propTypes = {
  setState: PropTypes.func,
  mailState: PropTypes.object,
};

export default DetailMailList;
