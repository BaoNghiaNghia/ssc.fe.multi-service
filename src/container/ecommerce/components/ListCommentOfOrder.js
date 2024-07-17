/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { IoMdCheckmarkCircle } from "react-icons/io";
import PropTypes from 'prop-types';
import { Form, Modal, Table, Badge, Tooltip } from 'antd';
import { MdAddchart } from "react-icons/md";
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE } from '../../../variables';
import { numberWithCommas } from '../../../utility/utility';
import commentActions from '../../../redux/buffComment/actions';

const badgeGreenStyle = {
  fontFamily: 'Poppins, sans-serif',
  borderRadius: '7px ',
  padding: '2px 7px',
  fontSize: '0.8em',
  color: '#009500',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
}

const badgeRedStyle = {
  fontFamily: 'Poppins, sans-serif',
  borderRadius: '7px ',
  padding: '2px 7px',
  fontSize: '0.8em',
  color: 'gray',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
}

function ListCommentOfOrder({ isOpen, setState, orderState }) {
  const dispatch = useDispatch();
  const [formUpdateService] = Form.useForm();

  const { rowData } = orderState;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const { commentInOrder } = useSelector(item => {
    return {
      commentInOrder: item?.buffComment?.commentInOrder
    };
  });

  useEffect(() => {
    dispatch(commentActions.commentOrderCommentBegin({
      page: currentPage,
      limit: limitPage,
      id: rowData?.id,
    }));
  }, [dispatch, currentPage, limitPage]);

  const handleCancel = () => {
    setState({
      isListCommentModal: false,
    });
    formUpdateService.resetFields();
  }

  const dataSource = [];
  let countWaiting = 0;
  let countRunning = 0;
  let countSuccess = 0;
  if (commentInOrder?.items?.length) {
    commentInOrder?.items?.map((value, key) => {
      const { status, id, order_id, message } = value;

      console.log('---- status ----', status);

      const statusTooltip = () => {
        switch (status) {
          case 0:
            return 'Chờ';
          case 1:
            return 'Đang chạy';
          case 2:
            return 'Hoàn thành';
          default:
            return '';
        }
      }
      const statusContainer = () => {
        switch (status) {
          case 0:
            countWaiting += 1;
            return <span style={{ color: 'gray', fontSize: '0.8em', fontWeight: 'bold', lineHeight: 1.1}}>Chờ</span>;
          case 1:
            countRunning += 1;
            return <span style={{ color: 'orange', fontSize: '0.8em',fontWeight: 'bold', lineHeight: 1.1 }}>Đang chạy</span>;
          case 2:
            countSuccess += 1;
            return <span style={badgeGreenStyle}><IoMdCheckmarkCircle fontSize={20}/></span>;
          default:
            return '';
        }
      }

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
            <Tooltip title={statusTooltip()}>
              <span className="label">
                {statusContainer()}
              </span>
            </Tooltip>
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
    <Modal
      open={isOpen}
      width="700px"
      centered
      title={
        <>
          <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
            <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
            <div>
              <p style={{ fontSize: '1.1em', marginBottom: '4px', fontWeight: '700' }}>Danh sách comment</p>
              <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>
                <span style={{ fontSize: '1.1em', padding: '1px 5px', border: '1px solid #cdcdcd', borderRadius: '5px', fontWeight: 'bold', marginRight: '5px' }}>{countWaiting}</span><span style={{ color: 'gray', fontSize: '1.1em', fontWeight: '600', marginRight: '20px' }}>Đang chờ</span>
                <span style={{ fontSize: '1.1em', padding: '1px 5px', border: '1px solid #cdcdcd', borderRadius: '5px',fontWeight: 'bold', marginRight: '5px' }}>{countRunning}</span> <span style={{ color: 'orange', fontSize: '1.1em',fontWeight: '600', marginRight: '20px' }}>Đang chạy</span>
                <span style={{ fontSize: '1.1em', padding: '1px 5px', border: '1px solid #cdcdcd', borderRadius: '5px', fontWeight: 'bold', marginRight: '5px' }}>{countSuccess}</span> <span style={{ color: '#009500', fontSize: '1.1em',fontWeight: '600', marginRight: '20px' }}>Hoàn thành</span>
              </p>
            </div>
          </div>
        </>
      }
      onCancel={handleCancel}
      footer={null}
    >
      <Table
        style={{ margin: '0px !important', padding: '0px !important' }}
        className='table-fill-modal'
        dataSource={dataSource}
        size='small'
        columns={columns}
        pagination={{
          current: commentInOrder?.meta?.current_page,
          defaultPageSize: commentInOrder?.meta?.count,
          pageSize: commentInOrder?.meta?.per_page,
          total: commentInOrder?.meta?.total,
          showSizeChanger: true,
          pageSizeOptions: DEFAULT_PAGESIZE,
          onChange(page, pageSize) {
              setCurrentPage(page);
              setLimitPage(pageSize)
          },
          position: ['bottomCenter'],
          responsive: true,
          showTotal(total, range) {
              return <>
                  <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> comment</p>
              </>
          },
          totalBoundaryShowSizeChanger: 100,
          size: "small"
        }}
      />
    </Modal>
  );
}

ListCommentOfOrder.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func,
  orderState: PropTypes.object
};

export default ListCommentOfOrder;
