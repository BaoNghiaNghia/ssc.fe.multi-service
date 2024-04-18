/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { TopToolBox } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { orderFilter } from '../../redux/orders/actionCreator';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import actions from '../../redux/member/actions';
import { numberWithCommas } from '../../utility/utility';

function Member() {
  const dispatch = useDispatch();
  const { searchData, orders, userList, isLoading } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      orders: state.orders.data,
      userList: state?.member?.userList,
      isLoading: state?.member?.loading
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    item: orders,
    selectedRowKeys: [],
  });

  const { notData, item, selectedRowKeys } = state;
  const filterKey = ['Shipped', 'Awaiting Shipment', 'Canceled'];

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

  const handleChangeForFilter = e => {
    dispatch(orderFilter('status', e.target.value));
  };

  const dataSource = [];
  if (userList.length) {
    userList.map((value, key) => {
      const { api_key, discount, id, last_order_time, max_threads, order_running, point, sub_order, total_order_runed, username } = value;
      return dataSource.push({
        key: key + 1,
        username: (
          <span className="order-id" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ReactNiceAvatar style={{ width: '1.9rem', height: '1.9rem', outline: '2px solid orange', border: '2px solid white' }} {...genConfig(username.charAt(0))} />
            <span style={{ marginLeft: '8px' }}>{username}</span>
          </span>
        ),
        point: (
          <span className="customer-name" style={{ color: 'green', fontWeight: 700 }}>
            {numberWithCommas(point)} (đ)
          </span>
        ),
        discount: (
          <span>
            {discount}
          </span>
        ),
        max_threads: <span className="ordered-amount">{max_threads}</span>,
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
        order_running: <span className="ordered-date">{order_running}</span>,
        sub_order: <span className="ordered-date">{numberWithCommas(sub_order)}</span>,
        action: (
          <div className="table-actions">
            <>
              <Button className="btn-icon" type="primary" to="#" shape="circle">
                <FeatherIcon icon="eye" size={16} />
              </Button>
              <Button className="btn-icon" type="info" to="#" shape="circle">
                <FeatherIcon icon="edit" size={16} />
              </Button>
              <Button className="btn-icon" type="danger" to="#" shape="circle">
                <FeatherIcon icon="trash-2" size={16} />
              </Button>
            </>
          </div>
        ),
      });
    });
  }

  const columns = [
    {
      title: 'Họ tên',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Số tiền',
      dataIndex: 'point',
      key: 'point',
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Luồng max',
      dataIndex: 'max_threads',
      key: 'max_threads',
    },
    {
      title: 'KEY_API',
      dataIndex: 'api_key',
      key: 'api_key',
    },
    {
      title: 'Đơn cuối',
      dataIndex: 'last_order_time',
      key: 'last_order_time',
    },
    {
      title: 'Đơn đang chạy',
      dataIndex: 'order_running',
      key: 'order_running',
    },
    {
      title: 'Subscribe order',
      dataIndex: 'sub_order',
      key: 'sub_order',
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const onSelectChange = selectedRowKey => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    onChange: (srk) => {
      onSelectChange(srk);
    },
  };

  return (
    <>
      <PageHeader
        ghost
        title="Thành viên"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
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
                    <div className="table-toolbox-menu">
                      <span className="toolbox-menu-title"> Status:</span>
                      <Radio.Group onChange={handleChangeForFilter} defaultValue="">
                        <Radio.Button value="">All</Radio.Button>
                        {item.length &&
                          [...new Set(filterKey)].map(value => {
                            return (
                              <Radio.Button key={value} value={value}>
                                {value}
                              </Radio.Button>
                            );
                          })}
                      </Radio.Group>
                    </div>
                  </Col>
                  <Col xxl={4} xs={24}>
                    <div className="table-toolbox-actions">
                      <Button size="small" type="secondary" transparented>
                        Export
                      </Button>
                      <Button size="small" type="primary">
                        <FeatherIcon icon="plus" size={12} /> Add Order
                      </Button>
                    </div>
                  </Col>
                </Row>
              </TopToolBox>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col md={24}>
              <TableWrapper className="table-order table-responsive">
                <Table
                  rowSelection={rowSelection}
                  dataSource={dataSource}
                  loading={isLoading}
                  columns={columns}
                  pagination={{ pageSize: 20, showSizeChanger: true, total: userList.length }}
                />
              </TableWrapper>
            </Col>
          </Row>
        </Cards>
      </Main>
    </>
  );
}

export default Member;
