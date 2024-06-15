/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { FaYoutube } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { Row, Col, Form, Modal, Table, Tooltip, Popover, Input } from 'antd';
import moment from 'moment';
import memberActions from '../../../redux/member/actions';
import serviceActions from '../../../redux/serviceSettings/actions';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, VIETNAMES_CURRENCY } from '../../../variables';
import { numberWithCommas } from '../../../utility/utility';

const { Search } = Input;

function CreditHistoryMember({ historyState, setState }) {
  const dispatch = useDispatch();
  const [formFilterTransaction] = Form.useForm();
  
  const { isModalCreditHistory, selectedRowID } = historyState;

  const { isLoading, creditHistory, listService, userList } = useSelector(state => {
    return {
      detailService: state?.settingService?.detailService,
      isLoading: state?.member?.loading,
      creditHistory: state?.member?.creditHistory,
      listService: state?.settingService?.listService?.items,
      userList: state?.member?.userList,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  useEffect(() => {
    if (selectedRowID !== null) {
      dispatch(memberActions.getCreditHistoryMemberBegin({
        page: currentPage,
        limit: limitPage,
        user_id: selectedRowID
      }));
    }
  }, [dispatch, currentPage, limitPage]);

  useEffect(() => {
    dispatch(serviceActions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleCancel = () => {
    setState({
      ...historyState,
      isModalCreditHistory: false,
    });

    setCurrentPage(1);
    formFilterTransaction.resetFields();
  }

  const dataSource = [];
  
  if (creditHistory?.items?.length) {
    creditHistory?.items?.map((value, key) => {
      const { id, amount, quantity, service_id, order_id, income, note, current_credit, created_at } = value;

      const findService = listService?.filter((item) => item.service_id === service_id);

      return dataSource.push({
        key: key + 1,
        id: <span className="customer-name">{id}</span>,
        order_id: <span className="customer-name">{order_id}</span>,
        amount: (
          <>
            {
              income === true ? (
                <span style={{ color: 'green', fontWeight: 700 }}>
                   + {numberWithCommas(Math.round(amount))} <span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>{VIETNAMES_CURRENCY}</span>
                </span>
              ) : (
                <span style={{ color: 'orangered', fontWeight: 700 }}>
                   - {numberWithCommas(Math.round(amount))} <span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>{VIETNAMES_CURRENCY}</span>
                </span>
              )
            }
          </>
        ),
        current_credit: (
          <span style={{ color: '#006799', fontWeight: 800 }}>
            {numberWithCommas(Math.round(current_credit))} <span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>{VIETNAMES_CURRENCY}</span>
          </span>
        ),
        payment_date: (
          <span style={{  }}>
            {moment(created_at).format('HH:mm DD/MM')}
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
                          {numberWithCommas(Math.round(findService[0]?.price_per_10) || 0)} {VIETNAMES_CURRENCY}
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
                <Popover placement="top" title="" content={note} action="hover">
                  <span className="ordered-amount">{ note?.length > 20 ? (`${note?.substring(0, 20)  }...`) : note}</span>
                </Popover>
              ) : <>...</>
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
      title: 'Số dư sau thanh toán',
      dataIndex: 'current_credit',
      key: 'current_credit',
    },
    {
      title: 'Số lượng order',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Giao dịch',
      dataIndex: 'payment_date',
      key: 'payment_date',
    },
    {
      title: 'Nội dung thanh toán',
      dataIndex: 'note',
      key: 'note',
    },
  ];

  const findUser = creditHistory?.items?.length > 0 ? userList?.filter((item) => item.id === creditHistory?.items[0]?.user_id) : [];

  const handleSearchOrder = (searchText) => {
    const { value } = searchText.target;

    if (!value) {
      dispatch(memberActions.getCreditHistoryMemberBegin({
        page: 1,
        limit: limitPage,
        user_id: selectedRowID
      }));
    } else {
      dispatch(memberActions.getCreditHistoryMemberBegin({
        page: 1,
        limit: limitPage,
        user_id: selectedRowID,
        order_id: value
      }));
    }
  };

  return (
    <>
      <Modal
        width='900px'
        open={isModalCreditHistory}
        centered
        title={
          <Row gutter="10" style={{ display: 'flex', alignItems: 'end' }}>
            <Col sm={15}>
              <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
                <GrTransaction fontSize={40} color='#a1a1a1' style={{ margin: '0 20px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
                <div >
                  <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Danh sách giao dịch</p>
                  {/* <p style={{ fontSize: '0.7em', marginBottom: '2px', fontWeight: '700' }}>Thống kê toàn bộ giao dịch của khách hàng</p> */}
                  {
                    findUser?.length > 0 ? (
                      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <span style={{ margin: '0px', fontWeight: '700', fontSize: '0.7em', marginRight: '25px' }}>Họ tên: { findUser[0]?.fullname }</span>
                        <span style={{ margin: '0px', fontSize: '0.7em' }}>Email: { findUser[0]?.email }</span>
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </Col>
            <Col sm={8}>
              <Form layout="horizontal" form={formFilterTransaction}>
                <Form.Item
                  name="order_id"
                  label="Tìm kiếm"
                  style={{ margin: 0, padding: 0 }}
                >
                  <Search 
                    size='small'
                    style={{ width: '90%', margin: 0 }}
                    placeholder='Tìm ID đơn hàng'
                    onChange={debounce(handleSearchOrder, 500)}
                    allowClear
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        }
        onCancel={handleCancel}
        footer={null}
      >
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
                    <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> giao dịch</p>
                </>
            },
            totalBoundaryShowSizeChanger: 100,
            size: "small"
          }}
        />
      </Modal>
    </>
  );
}

CreditHistoryMember.propTypes = {
  historyState: PropTypes.object,
  setState: PropTypes.func
};

export default CreditHistoryMember;
