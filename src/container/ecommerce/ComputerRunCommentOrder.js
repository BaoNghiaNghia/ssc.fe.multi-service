/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Table, Badge, Tooltip, Button } from 'antd';
import { BiLogoGmail } from 'react-icons/bi';
import { TbServerBolt, TbShoppingBagEdit } from 'react-icons/tb';
import FeatherIcon from 'feather-icons-react';
import { CgServer } from "react-icons/cg";
import { LuLink2 } from "react-icons/lu";
import { MdOutlineNumbers } from "react-icons/md";

import { Pstates, TopToolBox } from './Style';
import DetailCommentComputer from './components/DetailCommentComputer';
import EditCommentComputer from './components/EditCommentComputer';
import BatchUpdateComputerComment from './components/BatchUpdateComputerComment';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import actions from '../../redux/buffComment/actions';
import Heading from '../../components/heading/heading';
import { numberWithCommas } from '../../utility/utility';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE } from '../../variables';

const columns = [
  {
    title: 'Máy',
    dataIndex: 'server',
    key: 'server',
  },
  {
    title: 'Cấu hình',
    dataIndex: 'configuration',
    key: 'configuration',
  },
  {
    title: 'Số luồng',
    dataIndex: 'thread',
    key: 'thread',
  },
  {
    title: 'Limit',
    dataIndex: 'limit',
    key: 'limit',
  },
  {
    title: 'Reset',
    dataIndex: 'reset',
    key: 'reset',
  },
  {
    title: 'Mail',
    dataIndex: 'mail',
    key: 'mail',
  },
  {
    title: 'Reset lần cuối',
    dataIndex: 'lastReset',
    key: 'lastReset',
  },

  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
  },
];

function ComputerRunCommentOrder() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const { searchData, listServer } = useSelector((state) => {
    return {
      searchData: state?.headerSearchData,
      listServer: state?.buffComment?.listComputer,
      preIsLoading: state.chartContent.perLoading,
    }
  });

  const [state, setState] = useState({
    isEditCommentServer: false,
    isDetailCommentServer: false,
    isBatchUpdateCommentServer: false,
    notData: searchData,
    activeClass: 'all',
    current: 0,
    pageSize: 0,
    selectedRowKeys: [],
  });

  const { notData, selectedRowKeys } = state;

  useEffect(() => {
    dispatch(actions.listComputerRunCommentBegin({
      page: currentPage,
      limit: limitPage,
    }));

  }, [dispatch, currentPage, limitPage]);

  const handleSearch = (searchText) => {
    const data = searchData?.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const handleResetComputer = (values) => {
    const requestData = {
      id: values?.id,
      action: "reset",
    };

    dispatch(actions.updateOneComputerCommentAdminBegin(requestData));
  }

  const fullThreadServer = listServer?.items?.filter(item => {
    const percentThread = (item?.current_thread > 0 && item?.thread > 0) ? item?.current_thread/item?.thread : 0;
    return percentThread >= 0.7;
  })?.length;

  const nonFullThreadServer = listServer?.items?.filter(item => {
    const percentThread = (item?.current_thread > 0 && item?.thread > 0) ? item?.current_thread/item?.thread : 0;
    return percentThread > 0.7 && percentThread < 0.3;
  })?.length;

  const aBitThreadServer = listServer?.items?.filter(item => {
    const percentThread = (item?.current_thread > 0 && item?.thread > 0) ? item?.current_thread/item?.thread : 0;
    return percentThread < 0.3;
  })?.length;

  const totalThread = listServer?.items?.reduce((total, comp) => total + comp.run, 0) || 0;

  const accountTotal = (listServer?.items?.length > 0) && numberWithCommas(listServer?.items?.map(item => item?.total_account)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountAlive = (listServer?.items?.length > 0) && numberWithCommas(listServer?.items?.map(item => item?.account_live)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountWork = (listServer?.items?.length > 0) && numberWithCommas(listServer?.items?.map(item => item?.account_work)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountDie = (listServer?.items?.length > 0) && numberWithCommas(listServer?.items?.map(item => item?.account_die)?.reduce((accumulator, item) => accumulator + item) || 0);

  const dataSource = [];
  if (listServer?.items?.length > 0) {
    listServer?.items?.map((value, index) => {
      const percentThread = (value?.current_thread > 0 && value?.thread > 0) ? value?.current_thread/value?.thread : 0;
      const color = (value.thread !== 0) ? (percentThread >= 0.7 ? 'green' : ((percentThread < 0.7 && percentThread > 0.3) ? 'orange' : 'red')) : 'gray';

      const fixedStyle = { display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '10px', fontWeight: 'bold' }

      const colorObj = (value.thread !== 0) ? (percentThread >= 0.7
        ? { backgroundColor: '#0080001a', border: '2px solid green', color: 'green', ...fixedStyle }
        : ((percentThread < 0.7 && percentThread > 0.3)
          ? { backgroundColor: '#ffa5002e', border: '2px solid orange', color: '#d58200', ...fixedStyle }
          : { backgroundColor: '#ff000026', border: '2px solid red', color: 'red', ...fixedStyle })) 
          : { backgroundColor: '#efefef', border: '2px solid gray', color: 'gray', ...fixedStyle };

      const styleMail = { marginRight: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' };

      const threadString = `${value?.current_thread || 0} / ${value?.thread}`;

      return dataSource.push({
        key: value?.id,
        server: (
          <span style={{ fontSize: '1.1em', display: 'inline-flex', alignItems: 'flex-start' }}>
            <TbServerBolt fontSize={17} style={{ marginRight: '5px', marginTop: '5px' }} />
            <div style={{ margin: 0, padding: 0 }}>
              <p style={{ fontWeight: 600, margin: 0, padding: 0 }}>{value?.name || '...'}</p>
              <a href={value?.link} target="_blank" rel="noopener noreferrer" style={{ margin: 0, padding: 0 }}>
                <div style={{ fontSize: '0.7em', margin: 0, padding: 0, display: 'inline-flex', alignItems: 'center' }}>
                  <LuLink2 style={{ fontWeight: 700, marginRight: '5px' }}/>
                  {value?.link || '...'}
                </div>
              </a>
              <div style={{ fontSize: '0.7em', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
                <MdOutlineNumbers style={{ fontWeight: 700, marginRight: '5px' }} />
                {<strong>{value?.ip}</strong> || '...'}
              </div>
            </div>
          </span>
        ),
        configuration: (
          <>
            <div style={{ margin: 0, padding: 0 }}>
              CPU: {value?.cpu ? <strong>{value?.cpu}</strong> : '...'}
            </div>
            <div style={{ margin: 0, padding: 0 }}>
              Ram: {value?.ram ? <strong>{value?.ram}</strong> : '...'}
            </div>
          </>
        ),
        thread: (
          <span style={colorObj}>
            <Badge dot color={color} style={{ paddingRight: '5px' }} />
            {threadString}
          </span>
        ),
        limit: (
          <Tooltip title={(<div style={{ marginRight: '12px' }}>Comment: {value?.limit_per_day}</div>)}>
            <span>
              <span style={{ marginRight: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                <CgServer fontSize={17} style={{ marginRight: '5px' }}/> {value?.limit_per_day}
              </span>
            </span>
          </Tooltip>
        ),
        reset: (
          <span>{value?.reset_hour} h</span>
        ),
        mail: (
          <Tooltip title={(
            <>
              <div>Mail sống: {value?.account_live || 'Chưa có' }</div>
              <div>Mail hoạt động: {value?.account_work || 'Chưa có'}</div>
              <div>Mail chết: {value?.account_die || 'Chưa có'}</div>
            </>
          )}>
            <span>
              <span style={styleMail}>
                <BiLogoGmail style={{ marginBottom: 0, marginRight: '4px' }} fontSize={19} />
                {value?.account_live ? numberWithCommas(value?.account_live || 0) : '0'}
              </span>
              <span style={styleMail}>
                <BiLogoGmail fontSize={19} color='#27AE60' style={{ marginRight: '4px' }} />
                {value?.account_work ? numberWithCommas(value?.account_work || 0) : '0'}
              </span>
              <span style={styleMail}>
                <BiLogoGmail fontSize={19} color='#EB5757' style={{ marginRight: '4px' }} />
                {value?.account_die ? numberWithCommas(value?.account_die || 0) : '0'}
              </span>
            </span>
          </Tooltip>
        ),
        lastReset: (
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>{value?.action ? (
              <Badge count={value?.action?.toUpperCase()} color="green" style={{fontSize: '0.8em', fontWeight: 600}}/>
            ) : null}</span>
            <span>
              {
                value?.last_action_at ? (
                  <span style={{ fontWeight: '700' }}>{value?.last_action_at}</span>
                ) : (
                  <span style={{ color: '#cdcdcd' }}>Chưa reset</span>
                )
              }
            </span>
          </div>
        ),
        action: (
          <div className="table-actions">
            <Tooltip title="Reset Computer">
              <Button
                size="default"
                shape="circle"
                type="default"
                to="#"
                style={{ marginRight: '5px' }}
                className="btn-icon"
                onClick={() => handleResetComputer(value)}
              >
                <FeatherIcon icon="rotate-ccw" size={16} style={{ marginTop: '4px' }} />
              </Button>
            </Tooltip>
            <Tooltip title="Sửa">
              <Button
                size="default"
                shape="circle"
                type="default"
                to="#"
                style={{ marginRight: '5px' }}
                className="btn-icon"
                onClick={() => {
                  dispatch(actions.detailComputerRunCommentBegin({
                    id: value?.id
                  }));
                  setState({
                    ...state,
                    isEditCommentServer: true
                  })
                }}
              >
                <FeatherIcon icon="edit" size={16} style={{ marginTop: '4px' }} />
              </Button>
            </Tooltip>
            <Tooltip title="Chi tiết">
              <Button
                size="default"
                shape="circle"
                type="default"
                to="#"
                style={{ marginRight: '5px' }}
                className="btn-icon"
                onClick={() => {
                  dispatch(actions.detailComputerRunCommentBegin({
                    id: value?.id
                  }));
                  setState({
                    ...state,
                    isDetailCommentServer: true
                  })
                }}
              >
                <FeatherIcon icon="eye" size={16} style={{ marginTop: '4px' }} />
              </Button>
            </Tooltip>
          </div>
        ),
      });
    });
  }

  // const rowSelection = {
  //   getCheckboxProps: (record) => ({
  //     disabled: record.name === 'Disabled User',
  //     name: record.name,
  //   }),
  // };

  const onSelectChange = (selectedRowKey) => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    onChange: (srk) => {
      onSelectChange(srk);
    },
  };

  return (
    <>
      <BatchUpdateComputerComment
        computerState={state}
        setState={setState}
      />
      <DetailCommentComputer
        computerState={state}
        setState={setState}
      />
      <EditCommentComputer
        computerState={state}
        setState={setState}
      />
      <PageHeader
        title="Quản lý Server Comment"
        buttons={[
          <div key="search" className="page-header-actions">
            <AutoComplete
              onSearch={handleSearch}
              dataSource={notData}
              placeholder="Nhập và tìm server"
              width="100%"
              patterns
            />
          </div>
        ]}
      />
      <Main>
        <Row gutter={25} >
          <Col xxl={24} md={24} xs={24}>
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
                          {
                            selectedRowKeys?.length > 0 ? (
                              <Button
                                size="small"
                                type="primary"
                                style={{ display: 'flex', alignItems: 'center' }}
                                onClick={() => {
                                  setState({
                                    ...state,
                                    isBatchUpdateCommentServer: true,
                                  });
                                }}
                              >
                                <TbShoppingBagEdit icon="plus" size={16} style={{ marginRight: '7px' }}/> Cập nhật ({selectedRowKeys.length})
                              </Button>
                            ) : null
                          }
                        </div>
                      </Col>
                    </Row>
                  </TopToolBox>
                </Col>
              </Row>
              <Pstates>
                <div
                  className="growth-upward"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ fontWeight: 700 }}>Servers</p>
                  <Heading as="h1">
                    {listServer?.meta?.total}
                  </Heading>
                </div>
                <div
                  className="growth-upward"
                  role="button"
                  tabIndex=""
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color='green' fontSize={17} style={{ marginRight: '5px' }} />Server luồng đủ</p>
                  <Heading as="h1" >
                    <span style={{ color: 'green !important' }}>{fullThreadServer}</span>
                  </Heading>
                </div>
                <div
                  className="growth-downward"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color='orange' fontSize={17} style={{ marginRight: '5px' }} />Server luồng trung bình</p>
                  <Heading as="h1">
                    {nonFullThreadServer}
                  </Heading>
                </div>
                <div
                  className="growth-upward"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color="red" fontSize={17} style={{ marginRight: '5px' }} />Server luổng thiếu</p>
                  <Heading as="h1">
                    {aBitThreadServer}
                  </Heading>
                </div>
                <div
                  className="growth-upward active"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ fontWeight: 700 }}><span>Tổng Mail</span></p>
                  <Heading as="h1">
                    {accountTotal || 0}
                  </Heading>
                </div>
                <div
                  className="growth-upward"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} /><span>Mail sống</span></p>
                  <Heading as="h1">
                    {accountAlive || 0}
                  </Heading>
                </div>
                <div
                  className="growth-upward"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} color='#27AE60' /><span>Mail hoạt động</span></p>
                  <Heading as="h1">
                    {accountWork || 0}
                  </Heading>
                </div>
                <div
                  className="growth-upward"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} color='#EB5757' /><span>Mail chết</span></p>
                  <Heading as="h1">
                    {accountDie || 0}
                  </Heading>
                </div>
                <div
                  className="growth-upward"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ fontWeight: 700 }}>Tổng Luồng</p>
                  <Heading as="h1">
                    {totalThread}
                  </Heading>
                </div>
              </Pstates>
            </Cards>
          </Col>
        </Row>
        <Row>
          <Col xxl={24} md={24} xs={24}>
            <Cards headless>
              <TableWrapper className="">
                <Table
                  rowSelection={rowSelection}
                  dataSource={dataSource}
                  columns={columns}
                  pagination={{
                    current: listServer?.meta?.current_page,
                    defaultPageSize: listServer?.meta?.count,
                    pageSize: listServer?.meta?.per_page,
                    total: listServer?.meta?.total,
                    showSizeChanger: true,
                    pageSizeOptions: DEFAULT_PAGESIZE,
                    onChange(page, pageSize) {
                      setCurrentPage(page);
                      setLimitPage(pageSize)
                    },
                    position: ['bottomCenter'],
                    responsive: true,
                    showTotal(total, range) { return <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> server</p> },
                    totalBoundaryShowSizeChanger: 100,
                    size: "small"
                  }}
                />
              </TableWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ComputerRunCommentOrder;
