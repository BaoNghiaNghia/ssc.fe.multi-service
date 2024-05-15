/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaYoutube } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { Row, Col, Form, Modal, Table, Tooltip } from 'antd';
import { MdAddchart } from "react-icons/md";
import serviceActions from '../../../redux/serviceSettings/actions';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, VIETNAMES_CURRENCY } from '../../../variables';
import { numberWithCommas } from '../../../utility/utility';

function CreditHistoryMember({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formDelService] = Form.useForm();

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
    dispatch(serviceActions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleCancel = () => {
    setState({
      isModalCreditHistory: false,
    });
  }

  const dataSource = [];
  
  if (creditHistory?.items?.length) {
    creditHistory?.items?.map((value, key) => {
      const { id, amount, quantity, service_id, order_id, income, note, current_credit } = value;

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
                   + {numberWithCommas(amount)} (đ)
                </span>
              ) : (
                <span style={{ color: 'red', fontWeight: 700 }}>
                   - {numberWithCommas(amount)} (đ)
                </span>
              )
            }
          </>
        ),
        current_credit: (
          <span style={{ color: 'green', fontWeight: 800 }}>
            {numberWithCommas(current_credit)} (đ)
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
        // income: (
        //   <>
        //     {
        //       income ? (
        //         <span className="label" style={badgeGreenStyle}>
        //           <BiMoneyWithdraw size={14} style={{ marginRight: '5px' }}/>
        //           Cộng tiền
        //         </span>
        //       ) : (
        //         <span className="label" style={badgeRedStyle}>
        //           <BiMoneyWithdraw size={14} style={{ marginRight: '5px' }}/>
        //           Trừ tiền
        //         </span>
        //       )
        //     }
        //   </>
        // ),
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
    // {
    //   title: 'Dịch vụ',
    //   dataIndex: 'service',
    //   key: 'service',
    // },
    {
      title: 'Nội dung thanh toán',
      dataIndex: 'note',
      key: 'note',
    },
    // {
    //   title: 'Thu nhập',
    //   dataIndex: 'income',
    //   key: 'income',
    // },
  ];

  const findUser = creditHistory?.items?.length > 0 ? userList?.filter((item) => item.id === creditHistory?.items[0]?.user_id) : [];

  return (
    <>
      <Modal
        width='900px'
        open={isOpen}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <GrTransaction fontSize={40} color='#a1a1a1' style={{ margin: '0 20px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div >
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Danh sách giao dịch</p>
                <p style={{ fontSize: '0.7em', marginBottom: '2px', fontWeight: '700' }}>Thông kê toàn bộ giao dịch của khách hàng</p>
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
          </>
        }
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
                          <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> giao dịch</p>
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
