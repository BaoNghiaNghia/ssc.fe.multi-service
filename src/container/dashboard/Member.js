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
import DetailMember from './component/DetailMember';
import AddTopup from './component/AddTopup';
import { GalleryNav, TopToolBox } from './style';
import EditMember from './component/EditMember';
import ConfirmTopup from './component/ConfirmTopup';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/member/actions';
import { numberWithCommas } from '../../utility/utility';
import { MEMBER_TABLE_TYPE } from '../../variables';

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

  const [state, setState] = useState({
    isModalDetailMem: false,
    isModalAddTopup: false,
    isModalConfirmTopup: false,
    isModalEditMem: false,
    notData: searchData,
    item: orders,
    selectedRowKeys: [],
  });

  const { notData, item, selectedRowKeys } = state;

  useEffect(() => {
    if (orders) {
      setState({
        item: orders,
        selectedRowKeys,
      });
    }
  }, [orders, selectedRowKeys]);

  useEffect(() => {
    dispatch(actions.fetchUserListBegin());
  }, [dispatch]);

  const handleSearch = searchText => {
    const data = searchData.filter(value => value.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };
  const dataSource = [];
  const dataSourceTopup = [];

  if (userList?.length) {
    userList?.map((value, key) => {
      const { api_key, discount, id, last_order_time, max_threads, order_running, credit, sub_order, total_order_runed, fullname, email, credit_used, phone } = value;
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
          <span style={{ color: 'green', fontWeight: 700 }}>
            {numberWithCommas(credit_used)} / {numberWithCommas(credit)} (đ)
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
                  setState({ isModalDetailMem: true });
                }}
              >
                <FeatherIcon icon="eye" size={16} />
              </Button>
            </Tooltip>
            <Tooltip title="Tạo Topup">
              <Button className="btn-icon" type="primary" to="#" shape="circle" onClick={() => {
                dispatch(actions.detailUserAdminBegin({ id }));
                setState({ isModalAddTopup: true });
              }}>
                <FaMoneyBillTransfer  fontSize={15}/>
              </Button>
            </Tooltip>
            <Tooltip title="Cập nhật">
              <Button className="btn-icon" type="info" to="#" shape="circle" onClick={() => {
                dispatch(actions.detailUserAdminBegin({ id }));
                setState({ isModalEditMem: true });
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
      const findUser = userList.filter((item) => item.id === user_id);

      return dataSourceTopup.push({
        key: key + 1,
        id: <span>{ id || '...'}</span>,
        amount: (
          <>
            {
              amount === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span style={{ color: 'green', fontWeight: 700 }}>{numberWithCommas(amount)} (đ)</span>
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
        
        confirmed_by: <>
          <span style={{ margin: '0px', fontWeight: '700' }}>{ confirmed_by ? userList.filter((item) => item.id === confirmed_by)[0]?.fullname : '...' }</span>
          <span style={{ margin: '0px', fontSize: '0.7em' }}>{ confirmed_by ? userList.filter((item) => item.id === confirmed_by)[0]?.email : '' }</span>
        </>,
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
                      setState({ isModalConfirmTopup: true });
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

  const { isModalDetailMem, isModalEditMem, isModalAddTopup, isModalConfirmTopup } = state;

  return (
    <>
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
      <ConfirmTopup
        isOpen={isModalConfirmTopup}
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
                  <Col xxl={14} lg={16} xs={24}>
                    {/* <div className="table-toolbox-menu">
                      <span className="toolbox-menu-title"> Trạng thái:</span>
                      <Radio.Group onChange={handleChangeForFilter} defaultValue="">
                        <Radio.Button value="">All</Radio.Button>
                        {item?.length &&
                          [...new Set(filterKey)].map(value => {
                            return (
                              <Radio.Button key={value} value={value}>
                                {value}
                              </Radio.Button>
                            );
                          })}
                      </Radio.Group>
                    </div> */}
                  </Col>
                  <Col xxl={4} xs={24}>
                    {/* <div className="table-toolbox-actions">
                      <Button size="small" type="primary">
                        <FeatherIcon icon="plus" size={12} /> Thêm mới
                      </Button>
                    </div> */}
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
                      pagination={{ pageSize: 20, showSizeChanger: true, total: userList?.length }}
                    />
                  ) : (
                    <Table
                      rowSelection={rowSelection}
                      size='small'
                      dataSource={dataSourceTopup}
                      loading={isLoading}
                      columns={columnsToup}
                      pagination={{ pageSize: 20, showSizeChanger: true, total: userList?.length }}
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
