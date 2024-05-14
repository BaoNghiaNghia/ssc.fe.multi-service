/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table, Tooltip, Progress, Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { FaRegCommentDots } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { TbCreditCardRefund } from "react-icons/tb";
import { TopToolBox } from './Style';
import DetailOrder from './components/DetailOrder';

import ListCommentOfOrder from './components/ListComment';
import AddOrderComment from './components/AddOrderComment';
import CancelAndRefundOrderComment from './components/CancelAndRefundOrderComment';
import UpdateOrderComment from './components/UpdateOrderComment';
import InsuranceOrderComment from './components/InsuranceOrderComment';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/buffComment/actions';
import userActions from '../../redux/member/actions';
import serviceActions from '../../redux/serviceSettings/actions';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, LIMIT_ITEM_REQUEST_API, ORDER_YOUTUBE_STATUS, VIETNAMES_CURRENCY } from '../../variables';
import { numberWithCommas } from '../../utility/utility';


const badgeOrangeStyle = {
  border: `1.3px solid orange`,
  fontFamily: 'Be Vietnam Pro',
  borderRadius: '7px ',
  padding: '2px 7px',
  fontSize: '0.7em',
  color: 'orange',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
};

function PendingBuffComment() {
  const dispatch = useDispatch();
  const { searchData,  listOrderComment, userList, listService, isLoading } = useSelector(state => {
    return {
      isLoading: state?.buffComment?.loading,
      searchData: state.headerSearchData,
      listOrderComment: state?.buffComment?.listOrderComment,
      userList: state?.member?.userList,
      listService: state?.settingService?.listService?.items
    };
  });

  const [state, setState] = useState({
    isDetailOrderModal: false,
    isListCommentModal: false,
    isCreateCommentOrderModal: false,
    isUpdateCommentOrderModal: false,
    isCancelRefundCommentOrderModal: false,
    isInsuranceCommentOrderModal: false,
    statusNumber: 'all',
    notData: searchData,
    item: listOrderComment,
    selectedRowKeys: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const { notData } = state;

  useEffect(() => {
    dispatch(actions.fetchListOrderCommentBegin());
    dispatch(userActions.fetchUserListBegin());
    dispatch(serviceActions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleSearch = searchText => {
    const data = searchData.filter(value => value.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const dataSource = [];
  if (listOrderComment?.items?.length) {
    listOrderComment?.items?.map((value, key) => {
      const { status, 
        order_id, 
        amount,
        user_id, 
        link, 
        video_id, 
        quantity, 
        priority, 
        service_id, 
        performance, 
        max_thread, 
        id, 
        processing_count,
        done_count,
        note
       } = value;

      const findUser = userList?.filter((item) => item.id === user_id);
      const findService = listService?.filter((item) => item.service_id === service_id);

      const checkUpdateOrder = ['OrderStatusPending', 'OrderStatusProcessing', 'OrderStatusDisable'].includes(ORDER_YOUTUBE_STATUS.find(item => item?.value === status)?.name);
      const checkInsuranceOrder = ['OrderStatusDone'].includes(ORDER_YOUTUBE_STATUS.find(item => item?.value === status)?.name);
      const checkRefundOrder = ['OrderStatusPending', 'OrderStatusProcessing', 'OrderStatusDisable', 'OrderStatusDone'].includes(ORDER_YOUTUBE_STATUS.find(item => item?.value === status)?.name);

      return dataSource.push({
        key: key + 1,
        order_id: <span className="order-id">{order_id}</span>,
        user_id: (
          <span className="order-id" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ReactNiceAvatar
              style={{ width: '2.3rem', height: '2.3rem', outline: '2px solid orange', border: '2px solid white' }}
              {...genConfig(findUser[0]?.fullname?.charAt(0))}
            />
            <span style={{ marginLeft: '8px' }}>
              {
                findUser?.length > 0 ? (
                  <span >
                    <p style={{ margin: '0px', fontWeight: '700' }}>{findUser[0]?.fullname}</p>
                    <p style={{ margin: '0px', fontSize: '0.7em' }}>{findUser[0]?.email}</p>
                    <p style={{ margin: '0px', fontSize: '0.7em' }}>{findUser[0]?.phone}</p>
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
          <>
            <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
              {
                priority ? (
                  <span className="label" style={badgeOrangeStyle}>
                    <FaLocationArrow color='orange' style={{ marginRight: '5px' }} />
                    Ưu tiên
                  </span>
                ) : <></>
              }
              <Tooltip title="Xem Video" placement='topLeft'>
                <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'black !important' }}>
                  <span className="customer-name">{ `${link.substring(0, 30)  }...` }</span>
                </a>
              </Tooltip>
            </div>
            <span style={{ fontSize: '0.8em' }}><strong>Video ID:</strong> {video_id}</span>
          </>
        ),
        quantity: (
          <>
            {
              quantity === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span>
                  <Tooltip title={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>Đã chạy / Tổng số lượng</p>
                    <p>Hiệu suất</p>
                  </div>
                }>
                    <p style={{ margin: '0px', padding: '0px' }}><strong>{numberWithCommas(done_count || 0)} / {numberWithCommas(quantity || 0)}</strong></p>
                    <Progress percent={Math.floor(performance, 1)} size="small" />
                  </Tooltip>
                </span>
              )
            }
          </>
        ),
        thread: (
          <>
            {
              max_thread === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <Tooltip title="Đang chạy / Mức cao nhất">
                  <span><strong>{numberWithCommas(processing_count || 0)} / {numberWithCommas(max_thread || 0)}</strong></span>
                </Tooltip>
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
                    <span style={{ margin: '0px', fontWeight: '700' }}>{ `${findService[0]?.name?.substring(0, 20)  }...` }</span>
                    <span style={{ margin: '0px', fontSize: '0.7em' }}><strong>Platform: </strong>{findService[0]?.platform}</span>
                    <span style={{ margin: '0px', fontSize: '0.7em' }}><strong>Category: </strong>{findService[0]?.category}</span>
                  </Tooltip>
                </>
              ) : (
                '...'
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
        status: (
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Badge style={{ marginRight: '5px' }} dot color={ORDER_YOUTUBE_STATUS[ORDER_YOUTUBE_STATUS.findIndex(item => item?.value === status)]?.color} />
            <span>{ORDER_YOUTUBE_STATUS[ORDER_YOUTUBE_STATUS.findIndex(item => item?.value === status)]?.label}</span>
          </div>
        ),
        amount: <span className="ordered-amount">{amount}</span>,
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
        action: (
          <div className="table-actions">
            {
              checkUpdateOrder ? (
                <Tooltip title="Chỉnh sửa">
                  <Button className="btn-icon" type="primary" to="#" shape="circle" 
                    onClick={() => {
                      dispatch(actions.detailOrderCommentBegin({
                        ...value,
                        userDetail: findUser,
                        serviceDetail: findService
                      }));
                      setState({ ...state, isUpdateCommentOrderModal: true });
                    }}
                  >
                    <FeatherIcon icon="edit" size={16} />
                  </Button>
                </Tooltip>
              ) : <></>
            }
            {
              checkInsuranceOrder ? (
                <Tooltip title="Bảo hành">
                  <Button className="btn-icon" type="primary" to="#" shape="circle" 
                    onClick={() => {
                      dispatch(actions.detailOrderCommentBegin({
                        ...value,
                        userDetail: findUser,
                        serviceDetail: findService
                      }));
                      setState({ ...state, isInsuranceCommentOrderModal: true });
                    }}
                  >
                    <FeatherIcon icon="shield" size={16} />
                  </Button>
                </Tooltip>
              ) : <></>
            }
            {
              checkRefundOrder ? (
                <Tooltip title="Hủy & Hoàn tiền">
                  <Button className="btn-icon" type="primary" to="#" shape="circle" 
                    onClick={() => {
                      dispatch(actions.detailOrderCommentBegin({
                        ...value,
                        userDetail: findUser,
                        serviceDetail: findService
                      }));
                      setState({ ...state, isCancelRefundCommentOrderModal: true });
                    }}
                  >
                    <TbCreditCardRefund style={{ fontSize: '1em' }} />
                  </Button>
                </Tooltip>
              ) : <></>
            }
            <Tooltip title="Chi tiết">
              <Button className="btn-icon" type="primary" to="#" shape="circle" 
                onClick={() => {
                  dispatch(actions.detailOrderCommentBegin({
                    ...value,
                  }));
                  setState({ 
                    ...state, 
                    isDetailOrderModal: true
                  });
                }}
              >
                <FeatherIcon icon="eye" size={16} />
              </Button>
            </Tooltip>
            <Tooltip title="Danh sách comment">
              <Button className="btn-icon" type="primary" to="#" shape="circle" onClick={() => {
                dispatch(actions.commentOrderCommentBegin({ id }));
                setState({ ...state, isListCommentModal: true });
              }}>
                <FaRegCommentDots fontSize={15}/>
              </Button>
            </Tooltip>
          </div>
        ),
      });
    });
  }

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
      title: 'Số lượng comment',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Luồng tối đa',
      dataIndex: 'thread',
      key: 'thread',
    },
    {
      title: 'Loại dịch vụ',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const handleChangeForFilter = (e) => {
    setState({
      ...state,
      statusNumber: e.target.value
    })

    if (e.target.value !== "all") {
      dispatch(actions.fetchListOrderCommentBegin({ status: e.target.value }));
    } else {
      dispatch(actions.fetchListOrderCommentBegin());
    }
  };

  const onSelectChange = selectedRowKey => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    onChange: (srk) => {
      onSelectChange(srk);
    },
  };

  const { isListCommentModal, isCreateCommentOrderModal, isUpdateCommentOrderModal, isCancelRefundCommentOrderModal } = state;

  return (
    <>
      <DetailOrder
        state={state}
        setState={setState}
      />
      <ListCommentOfOrder
        isOpen={isListCommentModal}
        setState={setState}
      />
      <AddOrderComment
        isOpen={isCreateCommentOrderModal}
        setState={setState}
      />
      <UpdateOrderComment
        state={state}
        setState={setState}
      />
      <CancelAndRefundOrderComment
        isOpen={isCancelRefundCommentOrderModal}
        setState={setState}
      />
      <InsuranceOrderComment
        state={state}
        setState={setState}
      />
      <PageHeader
        ghost
        title="Đơn Comment"
      />
      <Main>
        <Cards headless>
          <Row gutter={15}>
            <Col xs={24}>
              <TopToolBox>
                <Row gutter={15} className="justify-content-center">
                  <Col lg={6} xs={24}>
                    <div className="table-search-box">
                      <AutoComplete onSearch={handleSearch} dataSource={notData} patterns />
                    </div>
                  </Col>
                  <Col xxl={16} xs={24}>
                    <div className="table-toolbox-menu">
                      <span className="toolbox-menu-title"> Trạng thái:</span>
                      <Radio.Group buttonStyle="outline" optionType="button" onChange={handleChangeForFilter} defaultValue="all">
                        <Radio.Button value="all">Tất cả</Radio.Button>
                        { 
                          ORDER_YOUTUBE_STATUS?.map(state => {
                            return (
                              <Radio.Button key={state?.name} value={state?.value}>
                                <Badge style={{ marginRight: '5px' }} dot color={ORDER_YOUTUBE_STATUS[ORDER_YOUTUBE_STATUS.findIndex(item => item?.value === state?.value)]?.color} />
                                {state?.label}
                              </Radio.Button>
                            );
                          })
                        }
                      </Radio.Group>
                    </div>
                  </Col>
                  <Col xxl={2} xs={24}>
                    <div className="table-toolbox-actions">
                      <Button
                        size="small"
                        type="primary"
                        onClick={() => {
                          setState({...state, isCreateCommentOrderModal: true });
                        }}
                      >
                        <FeatherIcon icon="plus" size={12} /> Đặt hàng
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
                  loading={isLoading}
                  rowSelection={rowSelection}
                  size='small'
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{
                    current: listOrderComment?.meta?.current_page,
                    defaultPageSize: listOrderComment?.meta?.count,
                    pageSize: listOrderComment?.meta?.per_page,
                    total: listOrderComment?.meta?.total,
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
                            <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> order</p>
                        </>
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

export default PendingBuffComment;
