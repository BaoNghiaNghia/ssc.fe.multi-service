/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table, Tooltip, Progress } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { FaRegCommentDots } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { TopToolBox } from './Style';
import DetailOrder from './components/DetailOrder';
import ListCommentOfOrder from './components/ListComment';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/buffComment/actions';
import userActions from '../../redux/member/actions';
import serviceActions from '../../redux/serviceSettings/actions';
import { STATUS_COMMENT_ENUM } from '../../variables';


const badgeOrangeStyle = {
  border: `1.3px solid orange`,
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
};

function PendingBuffComment() {
  const dispatch = useDispatch();
  const { searchData,  listOrderComment, userList, listService } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      listOrderComment: state?.buffComment?.listOrderComment,
      userList: state?.member?.userList,
      listService: state?.settingService?.listService?.items
    };
  });

  const [state, setState] = useState({
    isDetailOrderModal: false,
    isListCommentModal: false,
    notData: searchData,
    item: listOrderComment,
    selectedRowKeys: [],
  });

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
      const { status, order_id, amount, date, user_id, link, video_id, quantity, priority, service_id, performance, max_thread, id, processing_count } = value;

      const findUser = userList?.filter((item) => item.id === user_id);
      const findService = listService?.filter((item) => item.service_id === service_id);

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
              <p style={{ margin: '0px', fontWeight: '700' }}>{findUser[0]?.fullname}</p>
              <p style={{ margin: '0px', fontSize: '0.7em' }}>{findUser[0]?.email}</p>
              <p style={{ margin: '0px', fontSize: '0.7em' }}>{findUser[0]?.phone}</p>
            </span>
          </span>
        ),
        video_id: (
          <>
            <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
              {
                priority ? (
                  <span className="label" style={badgeOrangeStyle}>
                    <FaLocationArrow color='red' style={{ marginRight: '5px' }} />
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
                <span><strong>{quantity}</strong></span>
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
                <span><strong>{processing_count} / {max_thread}</strong></span>
              )
            }
          </>
        ),
        service: (
          <>
            {
              findService?.length > 0 ? (
                <>
                  <Tooltip title={findService[0]?.name} placement='topLeft'>
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
          <span>{STATUS_COMMENT_ENUM.find(item => item.status === status)?.title}</span>
        ),
        amount: <span className="ordered-amount">{amount}</span>,
        date: <span className="ordered-date">{date}</span>,
        action: (
          <div className="table-actions">
            <Tooltip title="Chi tiết">
              <Button className="btn-icon" type="primary" to="#" shape="circle" 
                onClick={() => {
                  dispatch(actions.detailOrderCommentBegin({
                    ...value,
                    userDetail: findUser,
                    serviceDetail: findService
                  }));
                  setState({ isDetailOrderModal: true });
                }}
              >
                <FeatherIcon icon="eye" size={16} />
              </Button>
            </Tooltip>
            <Tooltip title="Danh sách comment">
              <Button className="btn-icon" type="primary" to="#" shape="circle" onClick={() => {
                dispatch(actions.commentOrderCommentBegin({ id }));
                setState({ isListCommentModal: true });
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
    // {
    //   title: 'Tiến trình',
    //   dataIndex: 'performance',
    //   key: 'performance',
    // },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
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

  const { isDetailOrderModal, isListCommentModal } = state;

  return (
    <>
      <DetailOrder
        isOpen={isDetailOrderModal}
        setState={setState}
      />
      <ListCommentOfOrder
        isOpen={isListCommentModal}
        setState={setState}
      />
      <PageHeader
        ghost
        title="Comment - Chờ duyệt"
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
                    </div> */}
                  </Col>
                  <Col xxl={4} xs={24}>
                    <div className="table-toolbox-actions">
                      <Button size="small" type="primary">
                        <FeatherIcon icon="plus" size={12} /> Thêm mới
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
                  size='small'
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{ pageSize: 10, showSizeChanger: true, total: listOrderComment?.items?.length }}
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
