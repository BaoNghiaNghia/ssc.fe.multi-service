/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Switch, Tooltip } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { LuListFilter } from 'react-icons/lu';
import { FaRegCommentDots } from 'react-icons/fa';
import { GrNotification } from 'react-icons/gr';
import { AiOutlineLike } from 'react-icons/ai';
import { GalleryNav, TopToolBox } from './style';
import AddDomain from './component/AddDomain';
import DelDomain from './component/DelDomain';
import ListProxyInDomain from './component/ListProxyInDomain';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import gmailActions from '../../redux/gmailManage/actions';
import { numberWithCommas } from '../../utility/utility';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, SERVICE_TYPE } from '../../variables';


const columns = [
  {
    title: 'Tài khoản',
    dataIndex: 'channel_id',
    key: 'channel_id',
  },
  {
    title: 'Máy',
    dataIndex: 'computer',
    key: 'computer',
  },
  {
    title: 'Tổng nhiệm vụ',
    dataIndex: 'total_task',
    key: 'total_task',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'live',
    key: 'live',
  },
  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
  },
];

function GmailManagement() {
  const dispatch = useDispatch();
  const { orders, isLoading, typeService, listAccountgGmail, listAccountgGmailMeta } = useSelector(state => {
    return {
      orders: state.orders.data,
      isLoading: state?.gmailManage?.loading,
      typeService: state?.gmailManage?.typeService,
      listAccountgGmail: state?.gmailManage?.listAccountgGmail?.items,
      listAccountgGmailMeta: state?.gmailManage?.listAccountgGmail?.meta,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const [state, setState] = useState({
    activeClass: SERVICE_TYPE.COMMENT.title,
    notData: {},
    dataRow: {},
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
    dispatch(gmailActions.listAccountGmailCommentBegin({
      page: currentPage,
      limit: limitPage,
    }));
  }, [dispatch, currentPage, limitPage]);
  
  const handleSearch = searchText => {

  };

  const handleChange = (value) => {
    console.log('---- class nè ---', value);
    dispatch(gmailActions.changeServiceTypeInGmailBegin({
      value,
    }));

    setState({ ...state, activeClass: value });
  };

  const dataSource = [];
  
  if (listAccountgGmail?.length) {
    listAccountgGmail?.map((value, key) => {
      const { channel_id, computer, email, live, total_task } = value;
      return dataSource.push({
        key: key + 1,
        channel_id: (
          <>
            <span className="customer-name" style={{ fontWeight: '700' }}>{email}</span>
            <span className="customer-name" style={{ fontSize: '0.7em' }}>{channel_id}</span>
          </>
        ),
        computer: (
          <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>{computer}</div>
        ),
        live: <span className="customer-name">{live}</span>,
        total_task: (
          <span className="customer-name">{total_task}</span>
        ),
        action: (
          <div className="table-actions">
            <Tooltip title="Danh sách proxy">
              <Button 
                className="btn-icon"
                type="danger" 
                shape="circle"
              >
                <FeatherIcon icon="repeat" size={16} />
              </Button>
            </Tooltip>
            <Tooltip title="Xóa">
              <Button 
                className="btn-icon"
                type="danger" 
                shape="circle"
              >
                <FeatherIcon icon="trash-2" size={16} />
              </Button>
            </Tooltip>
          </div>
        )
      });
    });
  }

  const onSelectChange = selectedRowKey => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    onChange: (srk) => {
      onSelectChange(srk);
    },
  };

  const { isAddDomainModal, isDelDomainModal } = state;

  return (
    <>
      <AddDomain
        isOpen={isAddDomainModal}
        setState={setState}
      />
      <DelDomain
        isOpen={isDelDomainModal}
        setState={setState}
      />
      <ListProxyInDomain
        currentState={state}
        setState={setState}
      />
      <PageHeader
        ghost
        title="Quản lý Gmail"
        buttons={[ 
          <div key="1" className="page-header-actions">
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={typeService === SERVICE_TYPE.SUBSCRIBE.title ? 'active' : 'deactivate'}
                    onClick={() => handleChange(SERVICE_TYPE.SUBSCRIBE.title)}
                    to="#"
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <GrNotification fontSize={15} className='pr-3'/> <span>Subscribe</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={typeService === SERVICE_TYPE.COMMENT.title ? 'active' : 'deactivate'}
                    onClick={() => handleChange(SERVICE_TYPE.COMMENT.title)}
                    to="#"
                  >
                    <FaRegCommentDots fontSize={15} className='mr-3'/> <span>Comment</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={typeService === SERVICE_TYPE.LIKE.title ? 'active' : 'deactivate'}
                    onClick={() => handleChange(SERVICE_TYPE.LIKE.title)}
                    to="#"
                  >
                    <AiOutlineLike fontSize={17} className='mr-3'/> <span>Like</span>
                  </Link>
                </li>
              </ul>
            </GalleryNav>
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
                  <Col xxl={18} xs={24}>
                    <div className="table-toolbox-actions">
                      <Button
                        size="small"
                        type="default"
                      >
                        <LuListFilter icon="plus" size={15} color='black' /> Bộ lọc
                      </Button>
                      <Button
                        size="small"
                        type="primary"
                        onClick={() => {
                          setState({
                            ...state,
                            isAddDomainModal: true,
                          });
                        }}
                      >
                        <FeatherIcon icon="plus" size={12} /> Thêm Email
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
                  loading={isLoading}
                  pagination={{
                    current: listAccountgGmailMeta?.current_page,
                    defaultPageSize: listAccountgGmailMeta?.count,
                    pageSize: listAccountgGmailMeta?.per_page,
                    total: listAccountgGmailMeta?.total,
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
                            <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> tài khoản</p>
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

export default GmailManagement;
