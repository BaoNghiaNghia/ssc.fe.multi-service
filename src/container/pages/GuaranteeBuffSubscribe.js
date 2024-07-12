/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table, Tooltip, Badge, Dropdown, Menu } from 'antd';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiSteps } from "react-icons/pi";
import { TiVideo } from "react-icons/ti";
import { CgPerformance } from "react-icons/cg";
import { MdClear } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
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
import actions from '../../redux/buffSubscribe/actions';
import { numberWithCommas } from '../../utility/utility';

function GuaranteeBuffSubscribe() {
  const dispatch = useDispatch();
  const [currentCancelChannel, setCurrentCancelChannel] = useState(-1);

  const [currentGroup, setCurrentGroup] = useState();
  const [order_by, setOrder_by] = useState(0);
  const [currentUser, setCurrentUser] = useState();
  const [currentService, setCurrentService] = useState();
  const [valueService, setValueService] = useState(0);
  const [priority, setPriority] = useState(-1);
  const [currentChannelID, setCurrentChannelID] = useState('');
  const [currentOrderID, setCurrentOrderID] = useState(0);

  const [current, setCurrent] = useState('mail');

  const onClickMenu = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const { searchData, orders, listOrderSubscribe } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      orders: state.orders.data,
      listOrderSubscribe: state?.buffSubscribe?.listOrderSubscribe
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
    dispatch(actions.fetchAdminSettingBegin());
    dispatch(actions.fetchListOrderSubscribeBegin({ 
      state: 'refill' 
    }));
    dispatch(actions.fetchServicePackageListBegin());
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

  if (listOrderSubscribe.length) {
    listOrderSubscribe.map((value, key) => {
      const { status, order_id, customers, amount, date } = value;

      return dataSource.push({
        key: key + 1,
        order_id: <span className="order-id">{order_id}</span>,
        customer: <span className="customer-name">{customers}</span>,
        status: (
          <span
            className={`status ${
              status === 'Shipped' ? 'Success' : status === 'Awaiting Shipment' ? 'warning' : 'error'
            }`}
          >
            {status}
          </span>
        ),
        amount: <span className="ordered-amount">{amount}</span>,
        date: <span className="ordered-date">{date}</span>,
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

  const clickUpdateHandler = (item) => {
    dispatch(actions.showcurrentOrder(item))
  }

  const clickShowListVideo = async (item) => {
    // const res = await getListVideo(item.channel_id)
    
    // if (res?.data?.success === true) {
    //   showModal()
    //   setDataVideo(res.data.data)
    // }
  }

  const clickShowSubEveryday = async (item) => {
    // const params = {
    //   order_id: item.order_id
    // }
    // const res = await getSubOfVideo(params)
    
    // if (res?.data?.success === true) {
    //   showModalSub()
    //   setDataSubOfVideo(res.data.data)
    // }
  }
  
  const clickCompleteHandler = async (item) => {
    // if (window.confirm('bạn có chắc chắn muốn hoàn thành đơn này') === true) {
    //   const res = await completeChannel(item.order_id)
    //   if (res?.data?.success === true) {
    //     setOrders(orders.filter(_item => {
    //       if (_item.order_id === item.order_id) {
    //         return false
    //       }
    //       return true
    //     }))
    //   }
    // }
  }
  const clickReloadVideo = async (item) => {
    // if (window.confirm('bạn có chắc chắn muốn reload video cho kênh này') === true) {
    //   const data = {
    //     channel_id : item.channel_id
    //   }
    //   const res = await reloadVideo(data)
    //   if (res?.data?.success === true) {
    //     alert('Reload thành công')
    //   }
    // }
  }
  const clickCancelHandler = async (item) => {
    // if (window.confirm('bạn có chắc chắn muốn hủy đơn này') === true) {
    //   const res = await cancelChannel(item.order_id)
    //   if (res?.data?.success === true) {
    //     setOrders(orders.filter(_item => {
    //       if (_item.order_id === item.order_id) {
    //         return false
    //       }
    //       return true
    //     }))
    //   }
    // }
  }

  const clickCancelAndRefund = (order_id) => {
    // setIsShowCancelAndRefund(true)
    // setCurrentCancelVideo(order_id)
  }

  const clickShowOrderPerformance = async (order) => {
    // const res = await getPerformanceOrder(order.channel_id)
    // if (res?.data?.success === true) {
    //   setPerformanceOrder(res.data.data)
    //   setShowPerformance(true);
    // }
  }

  const remapOrders = orders.filter((order, index) => {
    if (currentUser !== undefined && order.user_id !== currentUser.id) {
      return false
    }
    if (currentService !== undefined && order.service_id !== currentService.service_id || currentService === undefined && valueService !== 0) {
      return false
    }
    if (currentGroup !== undefined && order.group_id !== currentGroup.id) {
      return false
    }

    if (priority !== -1 && order.priority !== priority) {
      return false
    }

    if (currentChannelID && order.channel_id !== currentChannelID) {
      return false
    }
    if (currentOrderID !== 0 && order.order_id !== currentOrderID) {
      return false
    }

    return true
  });

  remapOrders.sort((a, b) => {
    if(order_by === 0){
      return a.order_id - b.order_id
    } if (order_by === 1) {
      return b.running - a.running;
    } if (order_by === 2) {
      return a.running - b.running;
    } if (order_by === 3) {
      return (b.current_sub - b.start_sub)/b.runed   - (a.current_sub - a.start_sub)/a.runed;
    } if (order_by === 4) {
      return (a.current_sub - a.start_sub)/a.runed  - (b.current_sub - b.start_sub)/b.runed;
    } if (order_by === 5) {
      return (a.sub_need - (a.current_sub - a.start_sub)) - (b.sub_need - (b.current_sub - b.start_sub));
    } if (order_by === 6) {
      return (b.sub_need - (b.current_sub - b.start_sub)) - (a.sub_need - (a.current_sub - a.start_sub));
    } 
      return a.running - b.running;
    
  });


  let totalThieu = 0
  let totalNeed = 0
  let totalRuned = 0

  remapOrders.forEach((item) => {
    totalThieu += item.sub_need - (item.current_sub - item.start_sub)
    totalNeed += item.sub_need
    totalRuned += item.runed
  });

  const columns = [
    {
      title: '#',
      key: 'stt',
      dataIndex: 'stt',
      width: 40,
      render: (value, record, index) => index + 1,
    },
    {
      title: 'OrderID',
      key: 'order_id',
      dataIndex: 'order_id',
      width: 50,
      render: (value, item, index) => {
        return (
          <div className='text-center'>
            <Tooltip 
              placement="topRight" 
              title={`
                ===Lần đầu===\n Sub bắt đầu ${item.first_sub_start},
                Sub order : ${item.first_sub_order},
                Lần đầu : ${ moment.unix(item.first_time).format("DD/MM HH:mm")} , số lần BH ${item.count_bh} 
              `}
            >
                <span>{item.order_id}</span>
            </Tooltip>
            {
              item.priority === 1 && <Badge pill color='success' className='m-1'>
                <i className="feather icon-check-circle" />
              </Badge>
            }
          </div>
        )
      },
    },
    {
      title: 'Thành viên',
      key: 'order_id',
      dataIndex: 'order_id',
      width: 100,
      render: (value, item, index) => {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ReactNiceAvatar 
              style={{ width: '1.9rem', height: '1.9rem', outline: '2px solid orange', border: '2px solid white' }}
              {...genConfig(item?.username?.charAt(0))}
            />
            {item.user_id !== 1 && (<span style={{ marginLeft: '8px' }}>{item?.username}</span>)}{' '}
          </span>
        )
      },
    },
    {
      title: `Channel ID`,
      key: 'channel_id',
      dataIndex: 'channel_id',
      width: 50,
      render: (value, item, index) => {
        return (
          <Tooltip title="Đến kênh Youtube">
            <div>
              <a
                href={item.channel_id  ? `https://www.youtube.com/channel/${  item.channel_id}` : item.order_link   }
                className='text-dark fw-bolder text-hover-primary caption' data-title={item.order_link}
                target='_blank' rel="noreferrer"
              >
                {item.channel_id  ? item.channel_id : item.order_link}
              </a>
            </div>
          </Tooltip>
        )
      },
    },
    {
      title: 'Ngày Thêm',
      key: 'insert_dateString',
      width: 150,
      dataIndex: 'insert_dateString',
      render: (value, item, index) => {
        return (
          <>
            {moment.unix(item.insert_date).format('DD/MM HH:mm')}
            <span
              style={{ fontSize: '12px' }}
              className='fw-bold d-block'
             />
          </>
        )
      },
    },
    {
      title: 'Còn Thiếu',
      key: 'sub_need',
      dataIndex: 'sub_need',
      width: 150,
      render: (value, item, index) => {
        const subNeedRun = item.sub_need - (item.current_sub - item.start_sub);
        const checkEqual = item?.sub_need === Math.abs(subNeedRun);
        return (
          <span className={`${subNeedRun > 0 ? 'text-warning' : 'text-primary'}`} style={{ color: checkEqual ? 'green' : 'black', fontWeight: checkEqual ? 900 : 300 }}>
            {`${numberWithCommas(Math.abs(subNeedRun) || 0)  }/${  numberWithCommas(item?.sub_need || 0)}`}
          </span>
        )
      }
    },
    {
      title: 'Sub bắt đầu/Hiện tại',
      key: 'sub_start',
      width: 200,
      render: (value, record, index) => {
        const checkEqual = record?.start_sub === record?.current_sub;
        return (
          <span style={{ color: checkEqual ? 'green' : 'black', fontWeight: checkEqual ? 900 : 300 }}>
            {
              `${numberWithCommas(record?.start_sub || 0)}/${numberWithCommas(record?.current_sub || 0)}`
            }
          </span>
        );
      }
    },
    {
      title: 'Đã chạy/Thực tế',
      key: 'run',
      width: 200,
      render: (value, record, index) => {
        const increase = record.current_sub - record.start_sub;
        const number = `${Number(((increase / record.runed) * 100).toFixed(2))  }%`;
        const result = number >= 80 ? 'c-order__rate c-order__rate--green' < 80 && number > 50 ? 'c-order__rate c-order__rate--yellow' : 'c-order__rate c-order__rate--red' : 'null';
        return (
          <div>
            <p style={{ 
              margin: 0,
              padding: 0,
              borderTop: '1px solid green',
              textAlign: 'center'
            }}>
              { numberWithCommas(record.runed) }/{ numberWithCommas(increase) }
            </p>
            <p>
              { 
                increase && record?.runed ? (
                  <Badge style={{ borderRadius: '4px' }} color='green' count={number} overflowCount={10000000000}/>
                ): <Badge style={{ borderRadius: '4px' }} color='orange' count="0 %" overflowCount={10000000000}/>
              }
            </p>
          </div>
        )
      }
    },
    {
      title: 'Luồng',
      key: 'running',
      width: 100,
      render: (value, record, index) => {
        return (
          <>
            <p>{record?.running}/{record?.max_thread}</p>
          </>
        )
      }
    },
    {
      title: 'Sub chờ',
      key: 'sub_wait',
      width: 100,
      render: (value, record, index) => {
        return (
          <>
            {numberWithCommas(record?.sub_wait)}
          </>
        )
      }
    },
    {
      title: 'Lần cuối',
      width: 100,
      key: 'last_get',
      render: (value, record, index) => {
        return `${moment(record?.last_get, "yyyy-MM-DD HH:mm:ss").local().format('DD/MM HH:mm')}`
      },
    },
    {
      title: 'Update',
      key: 'last_update',
      width: 100,
      render: (value, record, index) => {
        return `${moment.unix(record?.last_update).format('DD/MM HH:mm')}`
      },
    },
    {
      title: 'Service ID',
      key: 'service_id',
      dataIndex: 'service_id',
      width: 100
    },
    {
      title: 'NOTE',
      key: 'note',
      dataIndex: 'note',
      width: 200,
    },
    {
      width: 90,
      title: 'Hành động',
      key: 'running',
      render: (value, record, index) => {
        if (state === "pending") {
          return (
            <Button
              onClick={() => clickCancelAndRefund(record?.order_id)}
            >
              Hủy & hoàn tiền
            </Button>
          )
        }
        if (state === "wait") {
          return <Button
            onClick={() => clickCancelHandler(record)}
          >
            <i className="feather icon-trash-2" /> Hủy
          </Button>
        }
        if (state === "cancel") {
          return (
            <Button
              onClick={() => setCurrentCancelChannel(record?.order_id)}
            >
              Duyệt hủy
            </Button>
          )
        }

        const menuDropdown = (
          <Menu>
            <Menu.Item onClick={() => clickShowListVideo(record)}>
              <div style={{ display:'inline-flex', alignItems: 'center' }}>
                <TiVideo fontSize={19}  style={{ marginRight: '9px' }}/> <span>List Video</span>
              </div>
            </Menu.Item>
            <Menu.Item onClick={() => clickShowSubEveryday(record)}>
              <div style={{ display:'inline-flex', alignItems: 'center' }}>
                <PiSteps fontSize={19}  style={{ marginRight: '9px' }}/> <span>Số subscribe chạy</span>
              </div>
            </Menu.Item>
            <Menu.Item onClick={() => clickCompleteHandler(record)}>
              <div style={{ display:'inline-flex', alignItems: 'center' }}>
                <IoMdDoneAll fontSize={19}  style={{ marginRight: '9px' }}/> <span>Hoàn Thành</span>
              </div>
            </Menu.Item>
            <Menu.Item onClick={() => clickShowOrderPerformance(record)}>
              <div style={{ display:'inline-flex', alignItems: 'center' }}>
                <CgPerformance fontSize={19}  style={{ marginRight: '9px' }}/> <span>Hiệu suất</span>
              </div>
            </Menu.Item>
            <Menu.Item onClick={() => setCurrentCancelChannel(record.order_id)}>
              <div style={{ display:'inline-flex', alignItems: 'center' }}>
                <MdClear fontSize={19}  style={{ marginRight: '9px' }}/> <span>Hủy</span>
              </div>
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menuDropdown} >
            <HiOutlineDotsHorizontal fontSize={30} style={{ border: '1px solid #dfdfdf', padding: '4px', borderRadius: '5px' }}/>
          </Dropdown>
        )
      },
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
        title="Subscribe - Bảo hành"
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
                  dataSource={listOrderSubscribe}
                  columns={columns}
                  pagination={{ 
                    pageSize: 20, 
                    showSizeChanger: true, 
                    total: listOrderSubscribe.length 
                  }}
                />
              </TableWrapper>
            </Col>
          </Row>
        </Cards>
      </Main>
    </>
  );
}

export default GuaranteeBuffSubscribe;
