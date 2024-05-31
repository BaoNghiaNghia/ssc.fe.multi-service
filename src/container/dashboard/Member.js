/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Tooltip, Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { MdVerifiedUser } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";
import DetailMember from './component/DetailMember';
import AddTopup from './component/AddTopup';
import { GalleryNav, TopToolBox } from './style';
import EditMember from './component/EditMember';
import ConfirmTopup from './component/ConfirmTopup';
import CreditHistoryMember from './component/CreditHistoryMember';
import RegisterNewMember from './component/RegisterNewMember';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/member/actions';
import { numberWithCommas } from '../../utility/utility';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, MEMBER_TABLE_TYPE, VIETNAMES_CURRENCY } from '../../variables';

const columnsMember = [
  {
    title: 'Họ tên',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Số tiền hiện tại',
    dataIndex: 'point',
    key: 'point',
  },
  {
    title: 'Giảm giá',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: 'Đơn cuối',
    dataIndex: 'last_order_time',
    key: 'last_order_time',
  },
  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
  },
];

const columnsToup = [
  {
    title: 'Người nạp tiền',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Số tiền nạp',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Người xác nhận',
    dataIndex: 'confirmed_by',
    key: 'confirmed_by',
  },
  {
    title: 'Thời gian xác nhận',
    dataIndex: 'confirmed_at',
    key: 'confirmed_at',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'confirmed',
    key: 'confirmed',
    width: '30px',
  },
];

function Member() {
  const dispatch = useDispatch();

  const { searchData, orders, userList, isLoading, typeTable, topupList } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      orders: state.orders.data,
      userList: state?.member?.userList,
      isLoading: state?.member?.loading,
      typeTable: state?.member?.typeTable,
      topupList: state?.member?.topupList?.topups
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const [state, setState] = useState({
    isModalDetailMem: false,
    isModalAddTopup: false,
    isModalConfirmTopup: false,
    isModalEditMem: false,
    isModalAddAccount: false,
    isModalCreditHistory: false,
    isModalRegisterNewAccount: false,
    notData: searchData,
    item: orders,
    selectedRowKeys: [],
  });

  const { notData, item, selectedRowKeys } = state;

  useEffect(() => {
    if (orders) {
      setState({
        ...state,
        item: orders,
        selectedRowKeys,
      });
    }
  }, [orders, selectedRowKeys]);

  useEffect(() => {
    dispatch(actions.fetchUserListBegin());
  }, [dispatch]);

  const handleSearch = searchText => {
    const data = searchData?.filter(value => value.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };
  const dataSource = [];
  const dataSourceTopup = [];

  if (userList?.length) {
    userList?.map((value, key) => {
      const { api_key, discount, id, last_order_time, max_threads, order_running, credit, sub_order, fullname, email, credit_used, phone } = value;
      return dataSource.push({
        key: key + 1,
        username: (
          <span className="order-id" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ReactNiceAvatar
              style={{ width: '2.3rem', height: '2.3rem', outline: '2px solid orange', border: '2px solid white' }}
              {...genConfig(fullname?.charAt(0))}
            />
            <span style={{ marginLeft: '8px' }}>
              <p style={{ margin: '0px', fontWeight: '700' }}>{fullname}</p>
              <p style={{ margin: '0px', fontSize: '0.7em' }}>{email}</p>
              <p style={{ margin: '0px', fontSize: '0.7em' }}>{phone}</p>
            </span>
          </span>
        ),
        point: (
          <span style={{ color: 'green', fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>
            {numberWithCommas(credit_used)} / {numberWithCommas(credit)} <span style={{ fontStyle: 'italic', fontSize: '0.8em', marginLeft: '5px' }}>{VIETNAMES_CURRENCY}</span>
          </span>
        ),
        discount: (
          <>
            {
              discount === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span>{discount} %</span>
              )
            }
          </>
        ),
        max_threads: (
          <>
            {
              max_threads === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span>{max_threads}</span>
              )
            }
          </>
        ),
        api_key: <span className="ordered-date">{api_key}</span>,
        last_order_time: (
          <>
            {
              last_order_time === 0 ? (
                <span style={{ color: '#bdbdbd' }}>Chưa có đơn hàng</span>
              ) : (
                <span style={{ fontWeight: 'bold' }}>
                  {
                    moment(last_order_time).format('DD/MM HH:mm')
                  }
                </span>
              )
            }
          </>
        ),
        order_running: (
          <>
            {
              order_running === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span className="ordered-date">{order_running}</span>
              )
            }
          </>
        ),
        sub_order: (
          <>
            {
              sub_order === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span className="ordered-date">{numberWithCommas(sub_order)}</span>
              )
            }
          </>
        ),
        action: (
          <div className="table-actions">
            <Tooltip title="Chi tiết">
              <Button className="btn-icon" type="primary" to="#" shape="circle" 
                onClick={() => {
                  dispatch(actions.detailUserAdminBegin({ id }));
                  setState({ ...state, isModalDetailMem: true });
                }}
              >
                <FeatherIcon icon="eye" size={16} />
              </Button>
            </Tooltip>
            <Tooltip title="Credit Transaction">
              <Button className="btn-icon" type="primary" to="#" shape="circle" onClick={() => {
                dispatch(actions.getCreditHistoryMemberBegin({ 
                  id
                }));

                setState({ ...state, isModalCreditHistory: true });
              }}>
                <AiOutlineTransaction fontSize={18}/>
              </Button>
            </Tooltip>
            <Tooltip title="Tạo Topup">
              <Button className="btn-icon" type="primary" to="#" shape="circle" onClick={() => {
                dispatch(actions.detailUserAdminBegin({ id }));
                setState({ ...state, isModalAddTopup: true });
              }}>
                <FaMoneyBillTransfer  fontSize={15}/>
              </Button>
            </Tooltip>
            <Tooltip title="Cập nhật">
              <Button className="btn-icon" type="info" to="#" shape="circle" onClick={() => {
                dispatch(actions.detailUserAdminBegin({ id }));
                setState({ ...state, isModalEditMem: true });
              }}>
                <FeatherIcon icon="edit" size={16} />
              </Button>
            </Tooltip>
          </div>
        ),
      });
    });
  }

  if (topupList?.length) {
    topupList?.map((value, key) => {
      const { amount, confirmed, confirmed_at, confirmed_by, created_at, id, user_id } = value;
      const findUser = userList?.filter((item) => item.id === user_id);

      const confirmUser = userList?.filter((item) => item.id === confirmed_by);

      return dataSourceTopup.push({
        key: key + 1,
        id: <span>{ id || '...'}</span>,
        amount: (
          <>
            {
              amount === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span style={{ color: 'green', fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>
                  {numberWithCommas(amount)} <span style={{ fontStyle: 'italic', fontSize: '0.8em', marginLeft: '5px' }}>{VIETNAMES_CURRENCY}</span>
                </span>
              )
            }
          </>
        ),
        user_id: (
          <span className="order-id" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ReactNiceAvatar
              style={{ width: '2.3rem', height: '2.3rem', outline: '2px solid orange', border: '2px solid white' }}
              {...genConfig(findUser[0]?.fullname?.charAt(0))}
            />
            <span style={{ marginLeft: '8px' }}>
              <p style={{ margin: '0px', fontWeight: '700' }}>{findUser[0]?.fullname}</p>
              <p style={{ margin: '0px', fontSize: '0.7em' }}>{findUser[0]?.email}</p>
              <p style={{ margin: '0px', fontSize: '0.7em' }}>{findUser[0]?.phone}</p>
            </span>
          </span>
        ),
        
        confirmed_by: (
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ReactNiceAvatar
              isGradient
              style={{ width: '2.3rem', height: '2.3rem' }}
              {...genConfig(confirmUser[0]?.fullname?.charAt(0))}
            />
            <div style={{ marginLeft: '8px' }}>
              <span style={{ margin: '0px', fontWeight: '700' }}>{ confirmed_by ? confirmUser[0]?.fullname : '...' }</span>
              <span style={{ margin: '0px', fontSize: '0.7em' }}>{ confirmed_by ? confirmUser[0]?.email : '' }</span>
            </div>
          </div>
        ),
        confirmed_at: <span>{confirmed_at  || '...'}</span>,
        confirmed: <>{
          confirmed 
            ? <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}><Badge color='green' count='Đã xác nhận' /></div>
            : <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                <Badge color='orange' count='Chưa xác nhận'/>
                <Tooltip title="Tiến hành xác nhận" placement='leftTop'>
                  <Button type="default" size="small" to="#"
                    onClick={() => {
                      dispatch(actions.detailTopupBegin(value));
                      setState({ ...state,isModalConfirmTopup: true });
                    }}
                  >
                    <MdVerifiedUser fontSize={24} />
                  </Button>
                </Tooltip>
              </div>
          }</>,
      });
    });
  }

  const handleChange = (value) => {
    dispatch(actions.changeTypeTableBegin(value));
    setState({ ...state, activeClass: value });
  };

  const onSelectChange = selectedRowKey => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    onChange: (srk) => {
      onSelectChange(srk);
    },
  };

  const { isModalDetailMem, isModalEditMem, isModalAddTopup, isModalConfirmTopup, isModalCreditHistory } = state;

  return (
    <>
      <RegisterNewMember
        memberState={state}
        setState={setState}
      />
      <AddTopup
        isOpen={isModalAddTopup}
        setState={setState}
      />
      <DetailMember
        isOpen={isModalDetailMem}
        setState={setState}
      />
      <EditMember
        isOpen={isModalEditMem}
        setState={setState}
      />
      {
        typeTable === MEMBER_TABLE_TYPE.TOPUP.title ? (
          <ConfirmTopup
            isOpen={isModalConfirmTopup}
            setState={setState}
          />
        ): null
      }
      <CreditHistoryMember
        isOpen={isModalCreditHistory}
        setState={setState}
      />
      <PageHeader
        ghost
        title="Thành viên & Thanh toán"
        buttons={[
          <GalleryNav>
            <ul>
              <li>
                <Link
                  className={typeTable === MEMBER_TABLE_TYPE.MEMBER.title ? 'active' : 'deactivate'}
                  onClick={() => handleChange(MEMBER_TABLE_TYPE.MEMBER.title)}
                  to="#"
                  style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center'}}
                >
                  <IoPeopleOutline fontSize={15}/> <span>Thành viên</span>
                </Link>
              </li>
              <li>
                <Link
                  className={typeTable === MEMBER_TABLE_TYPE.TOPUP.title ? 'active' : 'deactivate'}
                  onClick={() => handleChange(MEMBER_TABLE_TYPE.TOPUP.title)}
                  style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center'}}
                  to="#"
                >
                  <FaMoneyBillTransfer  fontSize={15}/> <span>Nạp tiền</span>
                </Link>
              </li>
            </ul>
          </GalleryNav>,
        ]}
      />
      <Main>
        <Cards headless>
          <Row gutter={15}>
            <Col xs={24}>
              <TopToolBox>
                <Row gutter={15} className="justify-content-center">
                  <Col lg={6} xs={24}>
                    <div className="table-search-box">
                      <AutoComplete onSearch={handleSearch} dataSource={notData} width="100%" patterns />
                    </div>
                  </Col>
                  <Col xxl={18} xs={24}>
                    {
                      typeTable === MEMBER_TABLE_TYPE.MEMBER.title ?(
                        <div className="table-toolbox-actions">
                          <Button
                            size="small"
                            type="primary"
                            onClick={() => {
                              setState({
                                ...state,
                                isModalRegisterNewAccount: true,
                              });
                            }}
                          >
                            <FeatherIcon icon="plus" size={12} /> Thêm thành viên
                          </Button>
                        </div>
                      ) : null
                    }
                  </Col>
                </Row>
              </TopToolBox>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col md={24}>
              <TableWrapper className="table-order table-responsive">
                {
                  typeTable === MEMBER_TABLE_TYPE.MEMBER.title ? (
                    <Table
                      rowSelection={rowSelection}
                      size='small'
                      dataSource={dataSource}
                      loading={isLoading}
                      columns={columnsMember}
                      pagination={{
                        current: userList?.meta?.current_page,
                        defaultPageSize: userList?.meta?.count,
                        pageSize: userList?.meta?.per_page,
                        total: userList?.meta?.total,
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
                                <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> người dùng</p>
                            </>
                        },
                        totalBoundaryShowSizeChanger: 100,
                        size: "small"
                      }}
                    />
                  ) : (
                    <Table
                      rowSelection={rowSelection}
                      size='small'
                      dataSource={dataSourceTopup}
                      loading={isLoading}
                      columns={columnsToup}
                      pagination={{
                        current: topupList?.meta?.current_page,
                        defaultPageSize: topupList?.meta?.count,
                        pageSize: topupList?.meta?.per_page,
                        total: topupList?.meta?.total,
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
                                <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> topup</p>
                            </>
                        },
                        totalBoundaryShowSizeChanger: 100,
                        size: "small"
                      }}
                    />
                  )
                }
              </TableWrapper>
            </Col>
          </Row>
        </Cards>
      </Main>
    </>
  );
}

export default Member;
