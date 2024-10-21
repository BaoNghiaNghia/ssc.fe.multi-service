import React from 'react';
import { Table, Tooltip, Typography } from 'antd';
import { FaCircleCheck } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from 'prop-types';
import { FaYoutube } from 'react-icons/fa';

const { Link } = Typography;

const MultipleOrderResponseTable = ({ data }) => {
  const successColumns = [
    {
      title: 'No.',
      key: 'index',
      render: (text, record, index) => <span>{index + 1}</span>, // Add index starting from 1
    },
    {
      title: 'Order ID',
      dataIndex: ['result', 'order_id'],
      key: 'orderID',
      render: (id) => <strong>{id}</strong>,
    },
    {
      title: 'Đường dẫn',
      dataIndex: ['order', 'link'],
      key: 'orderLink',
      render: (link) => <Link href={link} target="_blank">{link}</Link>,
    },
    {
      title: 'Số lượng',
      dataIndex: ['result', 'quantity'],
      key: 'quantity',
    },
    {
      title: 'Nền tảng',
      dataIndex: ['order', 'platform'],
      key: 'platform',
      render: (platform) => (
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }} />{platform}
        </div>
      )
    },
    {
      title: 'Loại',
      dataIndex: ['order', 'category'],
      key: 'category',
    },
    {
      title: 'Hiện tại',
      dataIndex: ['result', 'remain_count'],
      key: 'resultQuantity',
    },
    {
      title: 'Geo',
      dataIndex: ['result', 'geo'],
      key: 'geo',
      render: (geo) => (
        <>
          {
            geo ? (
              <Tooltip title={geo?.toUpperCase()}>
                <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                  <img src={require(`../../static/img/flag/${geo}.png`)} alt="" width="17px" height="17px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }} />
                </span>
              </Tooltip>
            ) : null
          }
        </>
      )
    },
  ];

  const failedColumns = [
    {
      title: 'No.',
      key: 'index',
      render: (text, record, index) => <span>{index + 1}</span>, // Add index starting from 1
    },
    {
      title: 'Đường dẫn',
      dataIndex: ['order', 'link'],
      key: 'orderLink',
      render: (link) => <Link href={link} target="_blank">{link}</Link>,
    },
    {
      title: 'Số lượng',
      dataIndex: ['order', 'quantity'],
      key: 'quantity',
    },
    {
      title: 'Chi tiết',
      dataIndex: ['result', 'message'],
      key: 'errorMessage',
      render: (message) => <span style={{ color: 'red' }}>{message}</span>,
    },
  ];

  return (
    <>
      <div>
        Tổng cộng: <strong>{(data?.success?.length || 0) + (data?.failed?.length || 0)}</strong> đơn. 
        Thành công <strong>{data?.success?.length || 0}</strong> đơn. 
        Thất bại <strong>{data?.failed?.length || 0}</strong> đơn.
      </div>

      <div>
        {data?.success?.length > 0 && (
          <>
            <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
              <FaCircleCheck style={{ color: 'green', marginBottom: '7px', marginRight: '7px' }}/>
              <h3 style={{ fontWeight: 700 }}>Thành công {data?.success?.length > 0 ? <>(<>{data?.success?.length}</>)</> : null}</h3>
            </div>
            <Table
              dataSource={data?.success}
              columns={successColumns}
              rowKey={(record) => record?.result?.id}
              pagination={false}
            />
          </>
        )}
        {data?.failed?.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
              <AiFillCloseCircle style={{ color: 'red', marginBottom: '7px', marginRight: '7px' }}/>
              <h3 style={{ fontWeight: 700 }}>Thất bại {data?.failed?.length > 0 ? <>(<>{data?.failed?.length}</>)</> : null}</h3>
            </div>
            <Table
              dataSource={data?.failed}
              columns={failedColumns}
              rowKey={(record) => record?.order?.link}
              pagination={false}
            />
          </div>
        )}
      </div>
    </>
  );
};

MultipleOrderResponseTable.propTypes = {
  data: PropTypes.shape({
    success: PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.object.isRequired,
        result: PropTypes.object.isRequired,
      })
    ),
    failed: PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.object.isRequired,
        result: PropTypes.object.isRequired,
      })
    ),
  }).isRequired,
};

export default MultipleOrderResponseTable;
