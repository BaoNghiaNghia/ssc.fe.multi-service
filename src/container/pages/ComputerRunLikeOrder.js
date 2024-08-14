/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { Row, Col, Table, Badge, Tooltip, Button, Image } from 'antd';
import { BiLogoGmail } from 'react-icons/bi';
import { TbServerBolt, TbShoppingBagEdit } from 'react-icons/tb';
import FeatherIcon from 'feather-icons-react';
import { AiTwotoneDelete } from "react-icons/ai";
import { CgServer } from "react-icons/cg";
import { LuLink2 } from "react-icons/lu";
import { MdOutlineNumbers } from "react-icons/md";

import { WiTime7 } from 'react-icons/wi';
import moment from 'moment';
import { Pstates, TopToolBox } from './style';
import DetailLikeComputer from './components/DetailLikeComputer';
import EditLikeComputer from './components/EditLikeComputer';
import BatchUpdateComputerLike from './components/BatchUpdateComputerLike';
import ConfirmRequestModal from './components/ConfirmRequestModal';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import actions from '../../redux/buffLike/actions';
import Heading from '../../components/heading/heading';
import { getPathLocalFromString, numberWithCommas } from '../../utility/utility';
import { COLOR_GENERAL, DEFAULT_PAGESIZE, DEFAULT_PERPAGE } from '../../variables';

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

function ComputerRunLikeOrder() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const { listServer } = useSelector((state) => {
    return {
      listServer: state?.buffLike?.listComputer,
      preIsLoading: state.reports.loading,
    }
  });

  const [state, setState] = useState({
    isEditCommentServer: false,
    isDetailCommentServer: false,
    isDeleteCommentServer: false,
    isBatchUpdateCommentServer: false,
    notData: {},
    activeClass: 'all',
    current: 0,
    pageSize: 0,
    selectedRowKeys: [],
    selectedItem: {}
  });

  const { notData, selectedRowKeys } = state;

  useEffect(() => {
    dispatch(actions.listComputerRunLikeBegin({
      page: currentPage,
      limit: limitPage,
    }));
  }, [dispatch, currentPage, limitPage]);

  const handleSearch = (searchText) => {
    if (searchText) {
      dispatch(actions.listComputerRunLikeBegin({
        page: currentPage,
        limit: limitPage,
        name: searchText
      }));
    }
  };

  const handleResetComputer = (values) => {
    const requestData = {
      id: values?.id,
      action: "reset",
    };

    dispatch(actions.updateOneComputerLikeAdminBegin(requestData));
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

  const totalThread = listServer?.items?.reduce((total, comp) => total + comp.thread, 0) || 0;

  const accountTotal = (listServer?.items?.length > 0) && numberWithCommas(listServer?.items?.map(item => item?.total_account)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountAlive = (listServer?.items?.length > 0) && numberWithCommas(listServer?.items?.map(item => item?.account_live)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountWork = (listServer?.items?.length > 0) && numberWithCommas(listServer?.items?.map(item => item?.account_run)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountDie = (listServer?.items?.length > 0) && numberWithCommas(listServer?.items?.map(item => item?.account_dead)?.reduce((accumulator, item) => accumulator + item) || 0);

  const dataSource = [];
  if (listServer?.items?.length > 0) {
    listServer?.items?.map((value, index) => {
      const percentThread = (value?.current_thread > 0 && value?.thread > 0) ? value?.current_thread/value?.thread : 0;
      const color = (value.thread !== 0) ? (percentThread >= 0.7 ? 'green' : ((percentThread < 0.7 && percentThread > 0.3) ? 'orange' : 'orangered')) : 'gray';

      const fixedStyle = { display: 'inline-flex', alignItems: 'center', padding: '0px 8px', borderRadius: '13px', fontWeight: 'bold' }

      const colorObj = (value.thread !== 0) ? (percentThread >= 0.7
        ? { backgroundColor: '#0080001a', border: '1px solid green', color: 'green', ...fixedStyle }
        : ((percentThread < 0.7 && percentThread > 0.3)
          ? { backgroundColor: '#ffa5002e', border: '1px solid orange', color: '#d58200', ...fixedStyle }
          : { backgroundColor: '#ff000026', border: '1px solid orangered', color: 'orangered', ...fixedStyle })) 
          : { backgroundColor: '#efefef', border: '1px solid gray', color: 'gray', ...fixedStyle };

      const styleMail = { marginRight: '12px', padding:' 0px 5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', backgroundColor: '#e5e5e585', borderRadius: '5px'};

      const threadString = `${value?.current_thread || 0} / ${value?.thread}`;

      return dataSource.push({
        key: value?.id,
        server: (
          <span style={{ fontSize: '1.1em', display: 'inline-flex', alignItems: 'flex-start' }}>
            {
              getPathLocalFromString(value?.name) !== null
                ? <img 
                    src={require(`../../${getPathLocalFromString(value?.name)}`)}
                    alt={getPathLocalFromString(value?.name)}
                    width="18px"
                    height="18px"
                    style={{ outline: '2px solid #d3d3d3', borderRadius: '10px', margin: '3px 8px 0 0' }}
                  />
                : <TbServerBolt fontSize={17} style={{ marginRight: '8px', marginTop: '5px' }} />
            }
            <div style={{ margin: 0, padding: 0 }}>
              <p style={{ fontWeight: 600, margin: 0, padding: 0 }}>{value?.name || '...'}</p>
              <a href={value?.link} target="_blank" rel="noopener noreferrer" style={{ margin: 0, padding: 0 }}>
                <div style={{ fontSize: '0.7em', margin: 0, padding: 0, display: 'inline-flex', alignItems: 'center' }}>
                  <LuLink2 style={{ fontWeight: 700, marginRight: '5px', color: 'gray' }}/>
                  <span style={{ color: 'gray' }}>{`${value?.link?.substring(0, 25)  }...` || '...'}</span>
                </div>
              </a>
              <div style={{ fontSize: '0.7em', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
                <MdOutlineNumbers style={{ fontWeight: 700, marginRight: '5px', color: 'gray' }} />
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
              <div>Mail hoạt động: {value?.account_run || 'Chưa có'}</div>
              <div>Mail chết: {value?.account_dead || 'Chưa có'}</div>
            </>
          )}>
            <Row gutter={15}>
              <Col xs={7}>
                <span style={styleMail}>
                  <BiLogoGmail style={{ marginBottom: 0, marginRight: '4px' }} color={COLOR_GENERAL.primary} fontSize={19} />
                  {value?.account_live ? numberWithCommas(value?.account_live || 0) : '0'}
                </span>
              </Col>
              <Col xs={7}>
                <span style={styleMail}>
                  <BiLogoGmail fontSize={19} color='#27AE60' style={{ marginRight: '4px' }} />
                  {value?.account_run ? numberWithCommas(value?.account_run || 0) : '0'}
                </span>

              </Col>
              <Col xs={7}>
                <span style={styleMail}>
                  <BiLogoGmail fontSize={19} color='#EB5757' style={{ marginRight: '4px' }} />
                  {value?.account_dead ? numberWithCommas(value?.account_dead || 0) : '0'}
                </span>

              </Col>
            </Row>
          </Tooltip>
        ),
        lastReset: (
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <WiTime7 fontSize={15} color='#c3c3c3' style={{ marginRight: '4px' }}/>
            <span>
              {
                value?.last_action_at ? (
                  <span style={{ fontWeight: '500', color: '#8b8b8b' }}>{moment(value?.last_action_at).format('HH:mm DD/MM')}</span>
                ) : (
                  <span style={{ color: '#cdcdcd' }}>Chưa reset</span>
                )
              }
            </span>
            <span style={{ marginLeft: '8px' }}>{value?.action ? (
              <Badge count={value?.action?.toUpperCase()} color="green" style={{fontSize: '0.8em', fontWeight: 600}}/>
            ) : null}</span>
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
                <FeatherIcon icon="rotate-ccw" size={16} style={{ marginTop: '4px' }} color="orange" />
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
                  dispatch(actions.detailComputerRunLikeBegin({
                    id: value?.id
                  }));
                  setState({
                    ...state,
                    selectedItem: value,
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
                  dispatch(actions.detailComputerRunLikeBegin({
                    id: value?.id
                  }));
                  setState({
                    ...state,
                    selectedItem: value,
                    isDetailCommentServer: true
                  })
                }}
              >
                <FeatherIcon icon="eye" size={16} style={{ marginTop: '4px' }} />
              </Button>
            </Tooltip>
            {/* TODO: */}
            <Tooltip title="Xóa">
              <Button
                size="default"
                shape="circle"
                type="default"
                to="#"
                style={{ marginRight: '5px' }}
                className="btn-icon"
                onClick={() => {
                  setState({
                    ...state,
                    isDeleteCommentServer: true,
                    selectedItem: value
                  })
                }}
              >
                <AiTwotoneDelete size={16} style={{ marginTop: '4px' }} />
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
      <ConfirmRequestModal
        isOpen={state?.isDeleteCommentServer}
        setState={setState}
        descriptions={`Xác nhận xóa máy chạy like ${state?.selectedItem?.name}`}
        title="Xác nhận"
        subtitle="Xóa thông tin máy chạy like"
        handleOk={() => {
          dispatch(actions.deleteComputerRunLikeBegin({id: state?.selectedItem?.id}));
          setState({ 
            ...state,
            isSendRequestModal: false
          });
        }}
      />
      <BatchUpdateComputerLike
        computerState={state}
        setState={setState}
      />
      <DetailLikeComputer
        computerState={state}
        setState={setState}
      />
      <EditLikeComputer
        computerState={state}
        setState={setState}
      />
      <PageHeader
        title="Quản lý Server Like"
        buttons={[
          <div className="table-toolbox-actions">
            {
              selectedRowKeys?.length > 0 ? (
                <Button
                  size="middle"
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
          </div>,
          <div key="search" className="page-header-actions">
            <AutoComplete
              onSearch={debounce(handleSearch, 500)}
              dataSource={notData}
              placeholder="Nhập và tìm server"
              width="100%"
              patterns
            />
          </div>
        ]}
      />
      <Main>
        <Pstates>
          <div
            className="growth-upward"
            role="button"
          >
            <p style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>Servers</p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              {listServer?.meta?.total || 0}
            </Heading>
          </div>
          <div
            className="growth-upward"
            role="button"
          >
            <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color='green' fontSize={17} style={{ marginRight: '5px' }} />Server luồng đủ</p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              <span style={{ color: 'green !important' }}>{fullThreadServer || 0}</span>
            </Heading>
          </div>
          <div
            className="growth-downward"
            role="button"
          >
            <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color='orange' fontSize={17} style={{ marginRight: '5px' }} />Server luồng trung bình</p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              {nonFullThreadServer || 0}
            </Heading>
          </div>
          <div
            className="growth-upward"
            role="button"
          >
            <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color="red" fontSize={17} style={{ marginRight: '5px' }} />Server luồng thiếu</p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              {aBitThreadServer || 0}
            </Heading>
          </div>
          <div
            className="growth-upward active"
            role="button"
          >
            <p style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}><span>Tổng Mail</span></p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              {accountTotal || 0}
            </Heading>
          </div>
          <div
            className="growth-upward"
            role="button"
          >
            <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} color={COLOR_GENERAL.primary} /><span>Mail sống</span></p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              {accountAlive || 0}
            </Heading>
          </div>
          <div
            className="growth-upward"
            role="button"
          >
            <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} color='#27AE60' /><span>Mail hoạt động</span></p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              {accountWork || 0}
            </Heading>
          </div>
          <div
            className="growth-upward"
            role="button"
          >
            <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} color='#EB5757' /><span>Mail chết</span></p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              {accountDie || 0}
            </Heading>
          </div>
          <div
            className="growth-upward"
            role="button"
          >
            <p style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center' }}>Tổng Luồng</p>
            <Heading as="h1" style={{ margin: 0, padding: 0 }}>
              {totalThread}
            </Heading>
          </div>
        </Pstates>
        <Cards headless>
          <TableWrapper>
            <Table
              rowSelection={rowSelection}
              dataSource={dataSource}
              columns={columns}
              locale={{ emptyText: (
                <div>
                  <Image src={require(`../../static/img/lost_connection.svg`).default} alt="" width="400px" preview={false} style={{margin: '60px 0px', opacity: '80%'}}/>
                  <span style={{ color: 'black', marginBottom: '0px', padding: '0px', fontSize: '1.3em', fontWeight: '600' }}>Trống</span>
                  <span style={{ color: 'gray', marginBottom: '20px', fontWeight: '200', fontSize: '0.95em' }}>
                    Chưa có server
                  </span>
                </div>
              ) }}
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
      </Main>
    </>
  );
}

export default ComputerRunLikeOrder;
