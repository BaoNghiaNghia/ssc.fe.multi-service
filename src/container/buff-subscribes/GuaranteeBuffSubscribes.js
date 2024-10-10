/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Tooltip, Progress, Image} from 'antd';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { PlayCircleOutlined } from '@ant-design/icons';
import { TbCreditCardRefund } from "react-icons/tb";
import { RiScan2Fill } from "react-icons/ri";
import { BsFire } from "react-icons/bs";
import { toast } from 'react-toastify';
import { debounce } from 'lodash';
import { MdOutlineSendTimeExtension } from "react-icons/md";
import moment from 'moment';
import { WiTime7 } from 'react-icons/wi';
import { TopToolBox } from './style';
import ConfirmRequestModal from './components/ConfirmRequestModal';
import FilterOrderSubscribes from './components/FilterOrderSubscribes';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/buffSubscribe/actions';
import userActions from '../../redux/member/actions';
import serviceActions from '../../redux/serviceSettings/actions';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, ORDER_YOUTUBE_STATUS } from '../../variables';
import { convertSeconds, getYouTubeVideoID, numberWithCommas, numberWithCommasCurrency } from '../../utility/utility';
import { FilterCalendar } from '../../components/buttons/calendar-button/FilterCalendar';

const columns = [
  {
    title: 'Người dùng',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: 'Video',
    dataIndex: 'video_id',
    key: 'video_id',
  },
  {
    title: 'Order ID',
    dataIndex: 'order_id',
    key: 'order_id',
  },
  {
    title: 'Hoàn thành',
    dataIndex: 'completed_at',
    key: 'completed_at',
  },
  {
    title: 'Bắt đầu / Hiện tại',
    dataIndex: 'start_count',
    key: 'start_count',
  },
  {
    title: 'Còn thiếu',
    dataIndex: 'loss',
    key: 'loss',
  },
  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
  },
];

function GuaranteeBuffSubscribes() {
  const dispatch = useDispatch();
  const dataSource = [];
  
  const { listOrderSubscribe, userList, isLoading, filterRange, listWarrantyOrder } = useSelector(state => {
    return {
      isLoading: state?.buffSubscribe?.loading,
      listOrderSubscribe: state?.buffSubscribe?.listOrderSubscribe,
      userList: state?.member?.userList,
      listService: state?.settingService?.listService?.items,
      userInfo: state?.auth?.userInfo,
      isOpenCreateOrder: state?.reports?.isOpenCreateOrder,
      filterRange: state?.buffSubscribe?.filterRange,
      listWarrantyOrder: state?.buffSubscribe?.listWarrantyOrder
    };
  });

  const [state, setState] = useState({
    isSendRequestModal: false,
    isRefundModal: false,
    statusNumber: 'all',
    notData: {},
    rowData: {},
    item: listOrderSubscribe,
    selectedRowKeys: [],
    selectedItem: {}
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const { isSendRequestModal, isRefundModal, selectedRowKeys, notData, selectedItem } = state;

  useEffect(() => {
    dispatch(actions.fetchListOrderSubscribeBegin({
      page: currentPage,
      limit: limitPage,
    }));
  }, [dispatch, currentPage, limitPage]);

  useEffect(() => {
    if (dataSource?.length > 0) { 
      dispatch(actions.fetchWarrantySubscribeOrderBegin({
        page: currentPage,
        limit: limitPage,
        start_date: `${filterRange?.from} 00:00:00`,
        end_date: `${filterRange?.to} 23:59:59`,
      }));
    }
  }, [dispatch, currentPage, limitPage]);

  useEffect(() => {
    dispatch(userActions.fetchUserListBegin());
    dispatch(serviceActions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleSearch = (searchText) => {
    if (!searchText) {
      dispatch(actions.fetchListOrderSubscribeBegin({}));
    }

    const arraySearchValidate = searchText.split(',').map(s => s.trim()).filter(elm => elm != null && elm !== false && elm !== "" && elm !== '');

    if (arraySearchValidate && arraySearchValidate.length > 0) {
      const pattern = /^\d+\.?\d*$/;
      if (pattern.test(arraySearchValidate.join(""))) {
        dispatch(actions.fetchListOrderSubscribeBegin({
          order_ids: arraySearchValidate.join(",")
        }));
      } else {
        dispatch(actions.fetchListOrderSubscribeBegin({
          video_ids: arraySearchValidate.join(",")
        }));
      }
    }
  };

  if (listWarrantyOrder?.items?.length) {
    listWarrantyOrder?.items?.map((value, key) => {
      const {
        order_id, 
        amount,
        user_id,
        priority,
        performance, 
        max_thread, 
        id,
        current_count,
        start_count,
        lost_count,
        completed_at,
        channel_id,
        channel_thumbnail,
        channel_title,
        link
       } = value;

      const findUser = userList?.filter((item) => item.id === user_id);

      return dataSource.push({
        key: id,
        order_id: <span style={{ fontSize: '0.9em' }}>{order_id}</span>,
        user_id: (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {
                findUser?.length > 0 ? (
                  <ReactNiceAvatar
                    style={{ width: '2.3rem', height: '2.3rem', outline: '2px solid orange', border: '2px solid white' }}
                    {...genConfig(findUser[0]?.fullname?.charAt(0))}
                  />
                ) : <></>
            }
            <span style={{ marginLeft: '8px' }}>
              {
                findUser?.length > 0 ? (
                  <span >
                    <p style={{ margin: '0px', fontWeight: '700' }}>{findUser[0]?.fullname}</p>
                    <p style={{ margin: '0px', fontSize: '0.7em' }}>{findUser[0]?.email}</p>
                  </span>
                ) : (
                  <span>
                    <p style={{ margin: '0px'}}>.....</p>
                  </span>
                )
              }
            </span>
          </span>
        ),
        video_id: (
          <div style={{ display: 'inline-flex', alignItems: 'flex-start', position: 'relative' }}> {/* Added position: relative */}
              <Tooltip
                title={
                  <Row gutter={10}>
                    <Col sm={24}>
                      <span style={{ marginRight: '5px' }}>Đến kênh</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <strong>{channel_title || '...'}</strong>
                      </span>
                    </Col>
                  </Row>
                }
                placement="topLeft"
              >
                <a
                  href={link}
                  color="black"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'black !important',
                    display: 'inline-flex',
                    alignItems: 'center',
                    position: 'relative' // Added this line
                  }}
                >
                  <span style={{ position: 'relative', marginRight: '10px' }}> 
                    {priority && (
                      <Tooltip title="Ưu tiên">
                        <BsFire
                          fontSize={15}
                          color="#238f00"
                          style={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            position: 'absolute',
                            top: '-2px',
                            right: '-2px',
                            textShadow: '1px 1px 2px yellowgreen',
                            zIndex: 1
                          }}
                        />
                      </Tooltip>
                    )}

                    <Image
                      id="channel-image-cover"
                      src={channel_thumbnail || `https://img.youtube.com/vi/${channel_id}/default.jpg`}
                      preview={false}
                      style={{
                        borderRadius: '25px',
                        padding: '2px',
                        marginBottom: '0',
                        outline: priority ? '2px dashed yellowgreen' : 'none',
                        width: '45px', // Ensure this is large enough
                        height: '45px' // Ensure this is large enough
                      }}
                    />
                  </span>
                  <span>
                    <span
                      style={{
                        margin: 0,
                        padding: 0,
                        color: priority ? 'green' : 'darkslategray',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        textShadow: priority ? `1px 1px 3px yellowgreen` : 'none'
                      }}
                    >
                      {`${channel_title?.substring(0, 30)}...`}
                    </span>

                    <span style={{ fontSize: '0.8em', color: 'gray' }}>
                      <strong>{numberWithCommasCurrency(current_count)} người đăng ký</strong>
                    </span>
                    <span style={{ fontSize: '0.6em', color: 'gray' }}>
                      <strong>Channel ID: </strong> {channel_id || '...'}
                    </span>
                  </span>
                </a>
              </Tooltip>
            </div>
        ),
        start_count: (
          <>
            <p style={{ margin: 0, padding: 0, fontSize: '0.9em', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'gray' }}>Bắt đầu: &nbsp;</span> <strong>{numberWithCommas(start_count || 0)}</strong>
            </p>
            <p style={{ margin: 0, padding: 0, fontSize: '0.9em', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'gray' }}>Hiện tại: &nbsp;</span> <strong>{numberWithCommas(current_count || 0)}</strong>
            </p>
          </>
        ),
        loss: (
          <>
            {
              max_thread === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <Tooltip title="Subscribe thiếu / Tổng subscribe đã đặt">
                  <span><strong>{numberWithCommas(lost_count || 0)}</strong></span>
                </Tooltip>
              )
            }
          </>
        ),
        performance: (
          <>
            <span>{performance} %</span>
            <Progress percent={performance}  style={{ margin: '0px', padding: '0px' }} size="small" />
          </>
        ),
        completed_at: (
          <>
            <span style={{ fontStyle: 'italic', color: 'gray', fontSize: '0.9em', display: 'inline-flex', alignItems: 'center' }}>
              <WiTime7 fontSize={15} color='#c3c3c3' style={{ marginRight: '4px' }}/>
              {moment(completed_at).format('HH:mm DD/MM')}
            </span>
          </>
        ),
        amount: <span className="ordered-amount">{amount}</span>,
        action: (
          <div className="table-actions">
            
            <Tooltip title="Gửi yêu cầu">
              <Button className="btn-icon" type="primary" to="#" shape="circle" 
                onClick={() => {
                  // dispatch(actions.activeWarrantyOrderBegin({id}));
                  setState({ 
                    ...state,
                    isSendRequestModal: true,
                    selectedItem: value
                  });
                }}
              >
                <MdOutlineSendTimeExtension size={18} />
              </Button>
            </Tooltip>
            <Tooltip title="Hủy & Hoàn tiền">
              <Button className="btn-icon" type="primary" to="#" shape="circle" 
                onClick={() => {
                  // dispatch(actions.refundWarrantyOrderBegin({id}));
                  setState({ ...state, isRefundModal: true, selectedItem: value });
                }}
              >
                <TbCreditCardRefund size={18} />
              </Button>
            </Tooltip>
          </div>
        ),
      });
    });
  }

  const onSelectChange = (selectedRowKey) => {
    if (selectedRowKey.length > 0) {
      const matchedOrder = listOrderSubscribe?.items?.filter(r => r.id === selectedRowKey?.slice(-1)?.pop());
      if (matchedOrder?.length > 0) {
        const matchState = ORDER_YOUTUBE_STATUS.find(item => item?.value === matchedOrder[0]?.status)?.name;
        const checkUpdateOrderStatus = [
          'OrderStatusCancelNoRefund',
          'OrderStatusCancelRefund',
          'OrderStatusDone'
        ].includes(matchState);
        if (checkUpdateOrderStatus) {
          toast.error('Không thể cập nhật đơn đã hủy hoặc hoàn thành');
        } else {
          setState({ ...state, selectedRowKeys: selectedRowKey });
        }
      }
    }
  
    if (selectedRowKey.length === 0) {
      setState({ ...state, selectedRowKeys: selectedRowKey });
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      onSelectChange(selectedRowKeys);
    },
  };

  return (
    <>
      <ConfirmRequestModal
        isOpen={isSendRequestModal}
        setState={setState}
        descriptions={`Xác nhận gửi yêu cầu bảo hành cho đơn ${selectedItem?.order_id}`}
        title="Xác nhận"
        subtitle="Gửi yêu cầu bảo hành"
        handleOk={() => {
          dispatch(actions.activeWarrantyOrderSubscribeBegin({id: selectedItem?.order_id}));
          setState({ 
            ...state,
            isSendRequestModal: false
          });
        }}
      />
      <ConfirmRequestModal
        isOpen={isRefundModal}
        setState={setState}
        descriptions={`Xác nhận hoàn tiền cho đơn ${selectedItem?.order_id}`}
        title="Xác nhận"
        subtitle="Yêu cầu hoàn tiền"
        handleOk={() => {
          dispatch(actions.refundWarrantyOrderBegin({id: selectedItem?.order_id}));
          setState({ 
            ...state,
            isRefundModal: false
          });
        }}
      />
      <FilterOrderSubscribes
        orderState={state}
        setState={setState}
      />
      <PageHeader
        ghost
        title="Subscribes - Quét bảo hành"
        buttons={[
          <div className='page-header-actions'>
            <FilterCalendar actionPicker={actions.setRangeDateWarrantyFilterBegin} fromDate={filterRange?.from} toDate={filterRange?.to}/>
          </div>
        ]}
      />
      <Main>
        <Cards headless>
          <Row gutter={15}>
            <Col xs={24}>
              <TopToolBox>
                <Row gutter={15} className="justify-content-center" style={{ marginBottom: '15px' }}>
                  <Col lg={6} xs={6}>
                    <div className="table-search-box">
                      <AutoComplete onSearch={debounce(handleSearch, 500)} dataSource={notData} patterns placeholder="Tìm kiếm Order ID, Video ID"/>
                    </div>
                  </Col>
                  <Col xxl={18} xs={24} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ marginLeft: '5px' }}>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(listWarrantyOrder?.meta?.total || 0)}</span> order</span>
                    <Button
                      size="small"
                      type="primary"
                      onClick={() => {
                        dispatch(actions.fetchWarrantySubscribeOrderBegin({
                          page: currentPage,
                          limit: limitPage,
                          start_date: `${filterRange?.from} 00:00:00`,
                          end_date: `${filterRange?.to} 23:59:59`,
                        }));
                      }}
                    >
                      <RiScan2Fill size={15} style={{ marginRight: '7px', padding: 0 }} />
                      <span style={{ fontWeight: 600,fontFamily: 'Poppins, sans-serif', margin: 0, padding: 0 }}>Quét đơn</span>
                    </Button>
                  </Col>
                </Row>
              </TopToolBox>
            </Col>
          </Row>
          <Row gutter={15}>
            <Col md={24}>
              <TableWrapper className="table-order table-responsive">
                <Table
                  loading={isLoading}
                  rowSelection={rowSelection}
                  size='small'
                  dataSource={dataSource}
                  columns={columns}
                  locale={{ emptyText: (
                    <div>
                      <Image src={require(`../../static/img/scan_order_1.svg`).default} alt="" width="250px" preview={false} style={{margin: '0px'}}/>
                      <span style={{ color: 'black', marginBottom: '0px', padding: '0px', fontSize: '1.3em', fontWeight: '600' }}>Trống</span>
                      <span style={{ color: '#8080808a', marginBottom: '20px', fontWeight: '400', fontSize: '0.95em' }}>
                        Hiện tại chưa có danh sách đơn bảo hành
                      </span>
                      <Button
                        size="small"
                        type="dashed"
                        style={{ borderRadius: '20px', backgroundColor: '#dae0ec5c' }}
                        onClick={() => {
                          dispatch(actions.fetchWarrantySubscribeOrderBegin({
                            page: currentPage,
                            limit: limitPage,
                            start_date: `${filterRange?.from} 00:00:00`,
                            end_date: `${filterRange?.to} 23:59:59`,
                          }));
                        }}
                      >
                        <RiScan2Fill size={18} style={{ marginRight: '7px', padding: 0 }} />
                        <span style={{ fontWeight: 600,fontFamily: 'Poppins, sans-serif', margin: 0, padding: 0 }}>Quét đơn</span>
                      </Button>
                    </div>
                  ) }}
                  pagination={{
                    current: listWarrantyOrder?.meta?.current_page,
                    defaultPageSize: listWarrantyOrder?.meta?.count,
                    pageSize: listWarrantyOrder?.meta?.per_page,
                    total: listWarrantyOrder?.meta?.total,
                    showSizeChanger: true,
                    pageSizeOptions: DEFAULT_PAGESIZE,
                    onChange(page, pageSize) {
                        setCurrentPage(page);
                        setLimitPage(pageSize)
                    },
                    position: ['bottomCenter'],
                    responsive: true,
                    showTotal(total, range) {
                        return <p className='mx-4 mt-1'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> order</p>
                    },
                    totalBoundaryShowSizeChanger: 100,
                    size: "small"
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

export default GuaranteeBuffSubscribes;
