/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaYoutube } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Row, Col, Form, Modal, Table, Badge, Tooltip } from 'antd';
import { MdAddchart } from "react-icons/md";
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import actions from '../../../redux/proxy/actions';
import serviceActions from '../../../redux/serviceSettings/actions';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, FixedServiceTemp, VIETNAMES_CURRENCY } from '../../../variables';
import { numberWithCommas } from '../../../utility/utility';

const badgeGreenStyle = {
  border: '1.3px solid #00ab00',
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
  border: '1.3px solid red',
  fontFamily: 'Be Vietnam Pro',
  borderRadius: '7px ',
  padding: '2px 7px',
  fontSize: '0.7em',
  color: 'red',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
}

function CreditHistoryMember({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formDelService] = Form.useForm();

  const { postLoading, detailService, isLoading, creditHistory, listService, userList } = useSelector(state => {
    return {
      postLoading: state?.member?.loading,
      detailService: state?.settingService?.detailService,
      isLoading: state?.proxy?.loading,
      creditHistory: state?.member?.creditHistory,
      listService: state?.settingService?.listService?.items,
      userList: state?.member?.userList,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  useEffect(() => {
    dispatch(serviceActions.fetchListServiceBegin({}));
  }, [dispatch]);

  const initCategory = FixedServiceTemp?.filter(item => item?.category === detailService?.category);

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
        isModalCreditHistory: false,
      });
    } catch (err) {
      console.log(err);
      setState({
        isModalCreditHistory: false,
      });

      formDelService.resetFields();
    }

  };

  const handleCancel = () => {
    setState({
      isModalCreditHistory: false,
    });

    dispatch(actions.getListProxyInDomainBegin({}))
  }

  const dataSource = [];
  
  if (creditHistory?.items?.length) {
    creditHistory?.items?.map((value, key) => {
      const { id, amount, quantity, service_id, order_id, income, note } = value;

      const findService = listService?.filter((item) => item.service_id === service_id);

      return dataSource.push({
        key: key + 1,
        id: <span className="customer-name">{id}</span>,
        order_id: <span className="customer-name">{order_id}</span>,
        amount: (
          <span style={{ color: 'green', fontWeight: 700 }}>
            {numberWithCommas(amount)} (đ)
          </span>
        ),
        quantity: (
          <>
            {
              quantity === 0? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span style={{ color: 'green', fontWeight: 700 }}>{numberWithCommas(quantity)}</span>
              )
            }
          </>
        ),
        service: (
          <>
            {
              findService?.length > 0 ? (
                <>
                  <Tooltip
                    title={
                      <div>
                        <span style={{ fontWeight: 'bold' }}>
                          {findService[0]?.service_id}
                        </span>
                        <span>
                          {` - ${findService[0]?.name} - `}
                        </span>
                        <span style={{ fontWeight: 'bold' }}>
                          {numberWithCommas(findService[0]?.price_per_10 || 0)} {VIETNAMES_CURRENCY}
                        </span>
                      </div>
                    }
                    placement='topLeft'
                  >
                    <div style={{ margin: '0px', fontWeight: '700', display: 'inline-flex', alignItems: 'flex-start' }}>
                      <FaYoutube color="red" fontSize={20} style={{ marginRight: '7px', marginTop: '2px' }} />
                      { `${findService[0]?.name?.substring(0, 20)  }...` }
                    </div>
                    <div style={{ margin: '0px', fontSize: '0.7em' }}><strong>Platform: </strong>{findService[0]?.platform}</div>
                    <div style={{ margin: '0px', fontSize: '0.7em' }}><strong>Category: </strong>{findService[0]?.category}</div>
                  </Tooltip>
                </>
              ) : (
                '...'
              )
            }
          </>
        ),
        note: (
          <>
            {
              note?.length > 0 ? (
                <Tooltip title={note} placement='Top'>
                  <span className="ordered-amount">{ note?.length > 20 ? (`${note?.substring(0, 20)  }...`) : note}</span>
                </Tooltip>
              ) : <>...</>
            }
          </>
        ),
        income: (
          <>
            {
              income ? (
                <span className="label" style={badgeGreenStyle}>
                  <BiMoneyWithdraw size={14} style={{ marginRight: '5px' }}/>
                  Cộng tiền
                </span>
              ) : (
                <span className="label" style={badgeRedStyle}>
                  <BiMoneyWithdraw size={14} style={{ marginRight: '5px' }}/>
                  Trừ tiền
                </span>
              )
            }
          </>
        ),
      });
    });
  }

  const columns = [
    {
      title: 'ID đơn hàng',
      dataIndex: 'order_id',
      key: 'order_id',
    },
    {
      title: 'Số tiền thanh toán',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Số lượng order',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Dịch vụ',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Nội dung thanh toán',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Thu nhập',
      dataIndex: 'income',
      key: 'income',
    },
  ];

  const findUser = userList.filter((item) => item.id === creditHistory?.items[0]?.user_id);

  return (
    <>
      <Modal
        width='900px'
        open={isOpen}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div >
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Danh sách Proxy</p>
                {
                  findUser ? (
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <span style={{ margin: '0px', fontWeight: '700', fontSize: '0.7em', marginRight: '25px' }}>Họ tên: { findUser?.length && findUser[0]?.fullname }</span>
                      <span style={{ margin: '0px', fontSize: '0.7em' }}>Email: { findUser?.length && findUser[0]?.email }</span>
                    </div>
                  ) : null
                }
              </div>
            </div>
          </>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="add_service" layout="vertical" form={formDelService}>
          <Row gutter="10">
            <Col sm={24}>
              <Table
                size='small'
                loading={isLoading}
                dataSource={dataSource}
                columns={columns}
                pagination={{
                  current: creditHistory?.meta?.current_page,
                  defaultPageSize: creditHistory?.meta?.count,
                  pageSize: creditHistory?.meta?.per_page,
                  total: creditHistory?.meta?.total,
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
                          <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> proxy</p>
                      </>
                  },
                  totalBoundaryShowSizeChanger: 100,
                  size: "small"
                }}
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

CreditHistoryMember.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default CreditHistoryMember;
