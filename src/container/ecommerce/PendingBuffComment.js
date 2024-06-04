/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table, Tooltip, Progress, Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { FaRegCommentDots, FaYoutube } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { TbCreditCardRefund, TbShoppingBagEdit } from "react-icons/tb";
import { MdBlock } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { LuListFilter } from "react-icons/lu";
import { toast } from 'react-toastify';
import { debounce } from 'lodash';

import { TopToolBox } from './Style';
import DetailOrder from './components/DetailOrder';
import ListCommentOfOrder from './components/ListCommentOfOrder';
import CancelAndRefundOrderComment from './components/CancelAndRefundOrderComment';
import UpdateOrderComment from './components/UpdateOrderComment';
import InsuranceOrderComment from './components/InsuranceOrderComment';
import FilterOrderComment from './components/FilterOrderComment';
import BatchUpdateOrderComment from './components/BatchUpdateOrderComment';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/buffComment/actions';
import reportActions from '../../redux/reports/actions';
import userActions from '../../redux/member/actions';
import serviceActions from '../../redux/serviceSettings/actions';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, ORDER_YOUTUBE_STATUS, VIETNAMES_CURRENCY } from '../../variables';
import { convertSeconds, numberWithCommas } from '../../utility/utility';


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
    title: 'Đã chạy / Thực tế',
    dataIndex: 'quantity',
    key: 'quantity',
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

function PendingBuffComment() {
  const dispatch = useDispatch();
  const { searchData,  listOrderComment, userList, listService, isLoading, userInfo, isOpenCreateOrder } = useSelector(state => {
    return {
      isLoading: state?.buffComment?.loading,
      searchData: state.headerSearchData,
      listOrderComment: state?.buffComment?.listOrderComment,
      userList: state?.member?.userList,
      listService: state?.settingService?.listService?.items,
      userInfo: state?.auth?.userInfo,
      isOpenCreateOrder: state?.reports?.isOpenCreateOrder
    };
  });

  const [state, setState] = useState({
    isDetailOrderModal: false,
    isListCommentModal: false,
    isCreateCommentOrderModal: false,
    isUpdateCommentOrderModal: false,
    isCancelRefundCommentOrderModal: false,
    isInsuranceCommentOrderModal: false,
    isFilterCommentOrderModal: false,
    isBatchUpdateCommentOrderModal: false,
    statusNumber: 'all',
    notData: {},
    rowData: {},
    item: listOrderComment,
    selectedRowKeys: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const { isListCommentModal, isCancelRefundCommentOrderModal, selectedRowKeys, notData } = state;

  useEffect(() => {
    dispatch(actions.fetchListOrderCommentBegin({
      page: currentPage,
      limit: limitPage,
    }));
  }, [dispatch, currentPage, limitPage]);

  useEffect(() => {
    dispatch(userActions.fetchUserListBegin());
    dispatch(serviceActions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleSearch = (searchText) => {
    if (!searchText) {
      dispatch(actions.fetchListOrderCommentBegin({}));
    }

    const arraySearchValidate = searchText.split(',').map(s => s.trim()).filter(elm => elm != null && elm !== false && elm !== "" && elm !== '');

    if (arraySearchValidate && arraySearchValidate.length > 0) {
      // setTimeout(() => {
      // }, 500);
      const pattern = /^\d+\.?\d*$/;
      if (pattern.test(arraySearchValidate.join(""))) {
        dispatch(actions.fetchListOrderCommentBegin({
          order_ids: arraySearchValidate.join(",")
        }));
      } else {
        dispatch(actions.fetchListOrderCommentBegin({
          video_ids: arraySearchValidate.join(",")
        }));
      }
    }
  };

  // const checkMatchRole = [ROLE_GENERAL.ADMIN, ROLE_GENERAL.SUPER_ADMIN].includes(userInfo?.group?.role);

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
        note,
        video_title,
        video_duration,
        current_count,
        start_count,
        geo
       } = value;

      const findUser = userList?.filter((item) => item.id === user_id);
      const findService = listService?.filter((item) => item.service_id === service_id);

      const checkUpdateOrder = ['OrderStatusPending', 'OrderStatusProcessing', 'OrderStatusDisable'].includes(ORDER_YOUTUBE_STATUS.find(item => item?.value === status)?.name);
      const checkInsuranceOrder = ['OrderStatusDone'].includes(ORDER_YOUTUBE_STATUS.find(item => item?.value === status)?.name);
      const checkRefundOrder = ['OrderStatusPending', 'OrderStatusProcessing', 'OrderStatusDisable', 'OrderStatusDone'].includes(ORDER_YOUTUBE_STATUS.find(item => item?.value === status)?.name);

      const performanceColor = (performance !== 0) 
        ? (performance >= 0.8 ? 'green' : ((performance < 0.8 && performance > 0.5) ? 'yellow' : ((performance < 0.5 && performance > 0.3) ? 'red' : 'gray'))) : 'gray';

      const performanceColorBack = (performance !== 0) 
        ? (performance >= 0.8 ? '#84d984' : ((performance < 0.8 && performance > 0.5) ? '#ffdfa5' : ((performance < 0.5 && performance > 0.3) ? '#f9c1c1' : '#e7e7e7'))) : '#e7e7e7';

      return dataSource.push({
        key: id,
        order_id: <span className="order-id" style={{ fontSize: '0.9em' }}>{order_id}</span>,
        user_id: (
          <span className="order-id" style={{ display: 'inline-flex', alignItems: 'center' }}>
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
          <>
            <div style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
              {
                priority ? (
                  <Tooltip title="Ưu tiên">
                    <BsFire fontSize={15} color='rgb(38, 183, 38)' style={{ marginRight: '6px', marginTop: '3px' }}/>
                  </Tooltip>
                ) : <></>
              }

              <Tooltip 
                title={
                  <span style={{ display: 'inline-flex' }}>
                    <strong>{video_title}</strong>
                  </span>
                } 
                placement='topLeft'
              >
                <a href={link} color='black' target="_blank" rel="noopener noreferrer" style={{ color: 'black !important' }}>
                  <span style={{ margin: 0, padding: 0, color: priority ? '#00ad00' : 'black', fontFamily: 'Be Vietnam Pro' }}>{ `${video_title?.substring(0, 30)  }...` }</span>
                </a>
              </Tooltip>
            </div>

            <span style={{ fontSize: '0.8em' }}>
              <strong>Video ID: </strong> {video_id}
            </span>

            <span style={{ fontSize: '0.8em' }}>
              <strong>Thời lượng: </strong> { video_duration ? convertSeconds(video_duration || 0) : '...'}
            </span>
          </>
        ),
        start_count: (
          <>
            <p style={{ margin: 0, padding: 0, fontSize: '0.9em', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'gray' }}>Bắt đầu: &nbsp;</span> <strong>{numberWithCommas(start_count || 0)}</strong>
            </p>
            <p style={{ margin: 0, padding: 0, fontSize: '0.9em', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'gray' }}>Hiện tại: &nbsp;</span> <strong>{numberWithCommas(current_count || 0)}</strong>
            </p>
            {/* <p style={{ margin: 0, padding: 0, fontSize: '0.9em' }}>Còn thiếu: <strong>{numberWithCommas((quantity - (current_count - start_count)))}</strong></p> */}
          </>
        ),
        quantity: (
          <>
            {
              quantity === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <span>
                  <div style={{ alignContent: 'center' }}>
                    <Tooltip title={
                      <p>Thực tế / Đã chạy</p>
                    }>
                      <p style={{ margin: '5px 0px', padding: '0px' }}><strong>{numberWithCommas((Math.abs(current_count - start_count)) || 0)} / {numberWithCommas(done_count || 0)}</strong></p>
                    </Tooltip>
                    {
                      performance !== 0 ? (
                        <span
                          style={{ 
                            fontSize: '0.8em',
                            fontWeight: 700,
                            padding:'0 5px',
                            borderRadius: '5px',
                            // border: `1px solid ${performanceColor}`,
                            backgroundColor: performanceColorBack,
                            display: 'flex', alignItems: 'center'
                          }}
                        >
                          <span style={{ color: 'green' }}>Hiệu suất: &nbsp;</span> {numberWithCommas(Math.floor(performance, 1) || 0)} %
                        </span>
                      ) : (
                        <span
                          style={{ 
                            fontSize: '0.8em',
                            fontWeight: 700,
                            padding:'0 5px',
                            borderRadius: '5px',
                            // border: '1px solid gray',
                            backgroundColor: '#ebebeb',
                            display: 'flex', alignItems: 'center'
                          }}
                        >
                          <span style={{ color: 'gray' }}>Hiệu suất: &nbsp;</span> {numberWithCommas(Math.floor(performance, 1) || 0)} %
                        </span>
                      )
                    }
                  </div>
                </span>
              )
            }
          </>
        ),
        loss: (
          <>
            {
              max_thread === 0 ? (
                <span style={{ color: '#bdbdbd' }}>0</span>
              ) : (
                <Tooltip title="Comment thiếu / Tổng comment đã đặt">
                  <span><strong>{numberWithCommas(quantity - done_count || 0)} / {numberWithCommas(quantity || 0)}</strong></span>
                </Tooltip>
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
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                          <FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }} />
                          {
                            findService[0]?.geo ? (
                              <Tooltip title={findService[0]?.geo?.toUpperCase()}>
                                <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginRight: '7px' }}>
                                  <img src={require(`../../static/img/flag/${findService[0]?.geo}.png`)} alt="" width="17px" height="17px" />
                                </span>
                              </Tooltip>
                            ) : null
                          }
                          <span style={{ fontWeight: 'bold' }}>
                            {findService[0]?.service_id}
                          </span>
                        </div>
                        <div>
                          <span>
                            {`${findService[0]?.name}`}
                          </span>
                        </div>
                        <div style={{ fontWeight: 'bold', color: 'green' }}>
                          {numberWithCommas(findService[0]?.price_per_10 || 0)} {VIETNAMES_CURRENCY}
                        </div>
                      </div>
                    }
                    placement='topLeft'
                  >
                    <span style={{ margin: '0px', fontWeight: '700', display: 'flex', alignItems: 'center' }}>
                      {
                        findService[0]?.geo ? (
                          <Tooltip title={findService[0]?.geo?.toUpperCase()}>
                            <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginRight: '7px' }}>
                              <img src={require(`../../static/img/flag/${findService[0]?.geo}.png`)} alt="" width="17px" height="17px" />
                            </span>
                          </Tooltip>
                        ) : null
                      }
                      { `${findService[0]?.name?.substring(0, 20)  }...` }
                    </span>
                    <span style={{ margin: '0px', fontSize: '0.7em' }}><strong>Category: </strong>{findService[0]?.category}</span>
                  </Tooltip>
                </>
              ) : (
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <MdBlock color='red' style={{ marginRight: '5px' }}/>
                  <span style={{ color: '#b99696' }}>Dịch vụ không tồn tại</span>
                </div>
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
                dispatch(actions.commentOrderCommentBegin({
                  id,
                  page: 1,
                  limit: DEFAULT_PERPAGE
                }));
                setState({
                  ...state,
                  rowData: value,
                  isListCommentModal: true
                });
              }}>
                <FaRegCommentDots fontSize={15}/>
              </Button>
            </Tooltip>
          </div>
        ),
      });
    });
  }

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

  const onSelectChange = (selectedRowKey) => {
    if (selectedRowKey.length > 0) {
      const matchedOrder = listOrderComment?.items?.filter(r => r.id === selectedRowKey?.slice(-1)?.pop());
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
      <DetailOrder
        state={state}
        setState={setState}
      />
      <ListCommentOfOrder
        orderState={state}
        isOpen={isListCommentModal}
        setState={setState}
      />
      {/* <AddOrderGeneral/> */}
      <BatchUpdateOrderComment
        orderState={state}
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
      <FilterOrderComment
        orderState={state}
        setState={setState}
      />
      <PageHeader
        ghost
        title="Danh sách đơn Comment"
        buttons={[
          <TopToolBox>
            <div className="table-toolbox-menu">
              <Radio.Group buttonStyle="outline" size='small' optionType="button" onChange={handleChangeForFilter} defaultValue="all">
                <Radio.Button value="all">Tất cả</Radio.Button>
                {
                  ORDER_YOUTUBE_STATUS?.map((state) => {
                    return (
                      <Radio.Button  key={state?.name} value={state?.value}>
                        <Badge style={{ marginRight: '5px' }} dot color={ORDER_YOUTUBE_STATUS[ORDER_YOUTUBE_STATUS.findIndex(item => item?.value === state?.value)]?.color} />
                        {state?.label}
                      </Radio.Button>
                    );
                  })
                }
              </Radio.Group>
            </div>
          </TopToolBox>
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
                    <span style={{ marginLeft: '5px' }}>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(listOrderComment?.meta?.total || 0)}</span> order</span>
                    <div className="table-toolbox-actions">
                      <Button
                        size="small"
                        type="default"
                        onClick={() => {
                          setState({...state, isFilterCommentOrderModal: true });
                        }}
                      >
                        <LuListFilter icon="plus" size={15} color='black' /> Bộ lọc
                      </Button>
                      {
                        selectedRowKeys?.length > 0 ? (
                          <Button
                            size="small"
                            type="primary"
                            onClick={() => {
                              setState({
                                ...state,
                                isBatchUpdateCommentOrderModal: true
                              });
                            }}
                          >
                            <TbShoppingBagEdit icon="plus" size={12} /> Cập nhật ({selectedRowKeys?.length})
                          </Button>
                        ) : (
                          <Button
                            size="small"
                            type="primary"
                            onClick={() => {
                              setState({...state, isCreateCommentOrderModal: true });
                              dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));
                            }}
                          >
                            <RiShoppingBag3Fill size={15} style={{ marginRight: '7px', padding: 0 }} />
                            <span style={{ fontWeight: 600, fontFamily: 'Be Vietnam Pro' , margin: 0, padding: 0 }}>Đặt hàng</span>
                          </Button>
                        )
                      }
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
