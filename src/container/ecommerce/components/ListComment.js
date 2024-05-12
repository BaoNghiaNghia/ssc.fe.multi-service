/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Select, Button, Modal, Table, Badge, Tooltip } from 'antd';
import { MdAddchart } from "react-icons/md";

const badgeGreenStyle = {
  fontFamily: 'Be Vietnam Pro',
  borderRadius: '7px ',
  padding: '2px 7px',
  fontSize: '0.7em',
  color: '#00ab00',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
}

const badgeRedStyle = {
  fontFamily: 'Be Vietnam Pro',
  borderRadius: '7px ',
  padding: '2px 7px',
  fontSize: '0.7em',
  color: 'gray',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
}



function ListCommentOfOrder({ isOpen, setState, state }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { commentInOrder } = useSelector(item => {
    return {
      commentInOrder: item?.buffComment?.commentInOrder
    };
  });

  const handleOk = () => {
  };

  const handleCancel = () => {
    setState({
      isListCommentModal: false,
    });

    formUpdateService.resetFields();
  }

  const dataSource = [];
  if (commentInOrder?.items?.length) {
    commentInOrder?.items?.map((value, key) => {
      const { status, id, order_id, message } = value;

      return dataSource.push({
        key: key + 1,
        message: <span className="order-id">{
          message ? (
            <span>{message}</span>
          ) : "..."
        }</span>,
        id: (
          <>
            <p style={{ fontWeight: '700', margin: 0, padding: 0, display: 'inline-flex', alignItems: 'center' }}><strong>ID: </strong>{id}</p>
            <p style={{ fontSize: '0.7em', margin: 0, padding: 0 }}><strong>Order ID: </strong>{order_id}</p>
          </>
        ),
        status: (
          <>
            {
              status ? (
                <Tooltip title="Đã chạy">
                  <span className="label" style={badgeGreenStyle}>
                    <Badge color='green' dot style={{ marginRight: '5px' }}/>
                    
                  </span>
                </Tooltip>
              ) : (
                <Tooltip title="Chưa chạy">
                  <span className="label" style={badgeRedStyle}>
                    <Badge color='gray' dot style={{ marginRight: '5px' }}/>
                  </span>
                </Tooltip>
              )
            }
          </>
        ),
      });
    });
  }

  const columns = [
    {
      title: 'Comment',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
    }
  ];

  return (
    <>
      <Modal
        open={isOpen}
        width="700px"
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Danh sách comment</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Danh sách comment trong đơn chạy comment</p>
              </div>
            </div>
          </>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Table
          style={{ margin: '0px !important', padding: '0px !important' }}
          className='table-fill-modal'
          dataSource={dataSource}
          size='small'
          columns={columns}
          pagination={{ pageSize: 10, showSizeChanger: true, total: commentInOrder?.items?.length }}
        />
      </Modal>
    </>
  );
}

ListCommentOfOrder.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func,
  state: PropTypes.object
};

export default ListCommentOfOrder;
