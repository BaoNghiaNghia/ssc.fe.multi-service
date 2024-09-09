/* eslint-disable camelcase */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Badge, Tooltip, Button, Image, Spin, Switch } from 'antd';
import { TbShoppingBagEdit } from 'react-icons/tb';
import { LoadingOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import FeatherIcon from 'feather-icons-react';
import { AiTwotoneDelete } from "react-icons/ai";
import { WiTime7 } from 'react-icons/wi';
import moment from 'moment';
import { MdAlternateEmail } from 'react-icons/md';
import DetailCommentComputer from './components/DetailCommentComputer';
import EditCommentComputer from './components/EditCommentComputer';
import BatchUpdateComputerComment from './components/BatchUpdateComputerComment';
import ConfirmRequestModal from './components/ConfirmRequestModal';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import actions from '../../redux/buffView/actions';
import { numberWithCommas } from '../../utility/utility';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE } from '../../variables';

const columns = [
  {
    title: 'ID Devices',
    dataIndex: 'devices',
    key: 'devices',
  },
  {
    title: 'Gọi lần cuối',
    dataIndex: 'lastReset',
    key: 'lastReset',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },

  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
  },
];

const expandColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Profile',
    dataIndex: 'profile_id',
    key: 'profile_id',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

function ComputerRunViewOrder() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const { listServer, listDevices, detailSingleDevice, detailLoading } = useSelector((state) => {
    return {
      listServer: state?.buffComment?.listComputer,
      listDevices: state?.buffView?.listDevices,
      preIsLoading: state.reports.loading,
      detailSingleDevice: state?.buffView?.detailSingleDevice,
      detailLoading: state?.buffView?.detailLoading,
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

  const [expandedRows, setExpandedRows] = useState([]); // Track expanded rows

  const { notData, selectedRowKeys } = state;

  useEffect(() => {
    dispatch(actions.fetchListDevicesRunViewBegin({
      page: currentPage,
      limit: limitPage,
    }));

  }, [dispatch, currentPage, limitPage]);

  const handleSearch = (searchText) => {
    if (searchText) {
      dispatch(actions.fetchListDevicesRunViewBegin({
        page: currentPage,
        limit: limitPage,
        name: searchText
      }));
    } else {
      dispatch(actions.fetchListDevicesRunViewBegin({
        page: 1,
        limit: limitPage,
      }));
    }
  };

  const handleResetComputer = (values) => {
    const requestData = {
      id: values?.id,
      action: "reset",
    };

    dispatch(actions.updateOneComputerCommentAdminBegin(requestData));
  }

  // This function will only render the content
  const renderExpandedRow = (record) => {
    const inTableData = [];

    detailSingleDevice?.profiles?.map((itemService, index) => {
      const { id, email, profile_id, status } = itemService;
      return inTableData.push({
        key: index,
        id: (
          <span>{id}</span>
        ),
        email: (
          <>
            {email === "" ? (
              <span style={{ color: '#cecece' }}>Chưa có</span>
            ) : (
              <span>
                <MdAlternateEmail fontSize={17} style={{marginTop: '3px'}}/>
                {email}
              </span>
            )}
          </>
        ),
        profile_id: (
          <span>{profile_id}</span>
        ),
        status: (
          <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} checked={status} />
        ),
      });
    });

    return (
      <>
        {
          detailLoading === true ? (
            <Spin size='small' style={{ marginRight: '8px', color: '#ff6c00' }} indicator={<LoadingOutlined spin />} tip="Đang chạy" />
          ) :  (
            <Table 
              columns={expandColumns}
              showHeader
              dataSource={inTableData}
              footer={null}
              pagination={{
                // current: listMetaService.current_page,
                // defaultPageSize: listMetaService.count,
                // pageSize: listMetaService.per_page,
                // total: listMetaService.total,
                showSizeChanger: true,
                pageSizeOptions: DEFAULT_PAGESIZE,
                onChange(page, pageSize) {
                    setCurrentPage(page);
                    setLimitPage(pageSize);
                },
                position: ['bottomCenter'],
                responsive: true,
                totalBoundaryShowSizeChanger: 100,
                size: "small"
              }}
              size='small'
            /> 
          )
        }
      </>
    );
  };

  // Handle row expansion and dispatch actions only when a row is expanded
  const handleExpandedRowsChange = (expandedKeys) => {
    if (expandedKeys.length > 0) {
      // Get the most recently expanded row (we only want one row expanded at a time)
      const newlyExpandedRow = expandedKeys[expandedKeys.length - 1];
      
      const expandedRecord = listDevices?.items?.find(item => item?.id === newlyExpandedRow);
      
      if (expandedRecord) {
        // Dispatch action to get details of the device
        dispatch(actions.detailDeviceRunViewBegin(newlyExpandedRow));
      }
  
      // Set only the latest expanded row to the expandedRows state
      setExpandedRows([newlyExpandedRow]);
    } else {
      // No rows expanded, reset expandedRows
      setExpandedRows([]);
    }
  };

  const dataSource = [];
  if (listDevices?.items?.length > 0) {
    listDevices?.items?.map((value, index) => {
      return dataSource.push({
        key: value?.id,
        devices: (
          <span style={{ fontSize: '1.1em', display: 'inline-flex', alignItems: 'flex-start' }}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
            </svg>

            <div style={{ marginLeft: '7px', padding: 0 }}>
              <p style={{ fontWeight: 500, margin: 0, padding: 0 }}>{value?.device_id || '...'}</p>
            </div>
          </span>
        ),
        lastReset: (
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <WiTime7 fontSize={15} color='#c3c3c3' style={{ marginRight: '4px' }}/>
            <span>
              {
                value?.last_call_at ? (
                  <span style={{ fontWeight: '500', color: '#8b8b8b' }}>{moment(value?.last_call_at).format('HH:mm DD/MM')}</span>
                ) : (
                  <span style={{ color: '#cdcdcd' }}>Chưa gọi</span>
                )
              }
            </span>
            <span style={{ marginLeft: '8px' }}>{value?.action ? (
              <Badge count={value?.action?.toUpperCase()} color="green" style={{fontSize: '0.8em', fontWeight: 600}}/>
            ) : null}</span>
          </div>
        ),
        createdAt: (
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <WiTime7 fontSize={15} color='#c3c3c3' style={{ marginRight: '4px' }}/>
            <span>
              {
                value?.created_at ? (
                  <span style={{ fontWeight: '500', color: '#8b8b8b' }}>{moment(value?.created_at).format('HH:mm DD/MM')}</span>
                ) : (
                  <span style={{ color: '#cdcdcd' }}>Chưa gọi</span>
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
        descriptions={`Xác nhận xóa máy chạy comment ${state?.selectedItem?.name}`}
        title="Xác nhận"
        subtitle="Xóa thông tin máy chạy comment"
        handleOk={() => {
          dispatch(actions.deleteComputerRunCommentBegin({id: state?.selectedItem?.id}));
          setState({ 
            ...state,
            isSendRequestModal: false
          });
        }}
      />
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
        title="Quản lý Devices"
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
              )}}
              expandable={{
                expandedRowRender: renderExpandedRow, // Only render content here
                rowExpandable: (record) => true, // Enable expanding for all rows
                expandedRowKeys: expandedRows, // Use expandedRowKeys here
                onExpandedRowsChange: handleExpandedRowsChange, // Trigger dispatch and update expanded rows
              }}
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
                showTotal(total, range) { return <p className='mx-4 mt-1'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> server</p> },
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

export default ComputerRunViewOrder;
