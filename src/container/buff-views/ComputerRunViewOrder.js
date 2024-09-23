/* eslint-disable camelcase */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Badge, Tooltip, Button, Image, Spin } from 'antd';
import { TbShoppingBagEdit } from 'react-icons/tb';
import { LoadingOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import FeatherIcon from 'feather-icons-react';
import { AiTwotoneDelete } from "react-icons/ai";
import { WiTime7 } from 'react-icons/wi';
import { SiGmail } from "react-icons/si";
import moment from 'moment';
import DetailViewDevices from './components/DetailViewDevices';
import EditViewDevices from './components/EditViewDevices';
import BatchUpdateComputerComment from './components/BatchUpdateComputerComment';
import ConfirmRequestModal from './components/ConfirmRequestModal';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import actions from '../../redux/buffView/actions';
import { numberWithCommas } from '../../utility/utility';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, VIEW_STATUS_TYPE } from '../../variables';

const devicesColumns = [
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
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   key: 'id',
  // },
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
    isEditViewServer: false,
    isDetailViewServer: false,
    isDeleteViewServer: false,
    isBatchUpdateViewServer: false,
    notData: {},
    activeClass: 'all',
    current: 0,
    pageSize: 0,
    selectedRowKeys: [],
    selectedItem: {}
  });

  const [expandedRows, setExpandedRows] = useState([]);

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
        // id: (
        //   <span>{id}</span>
        // ),
        email: (
          <>
            {email === "" ? (
              <span style={{ color: '#cecece' }}>Chưa có</span>
            ) : (
              <span style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                <SiGmail fontSize={15} style={{margin: '0px 4px 0 0', padding: '0px'}} color='gray'/>
                {email}
              </span>
            )}
          </>
        ),
        profile_id: (
          <span>{profile_id}</span>
        ),
        status: (
          <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'flex-start'}}>
            <Badge color={VIEW_STATUS_TYPE[status].color} dot style={{ marginRight: '5px' }} />
            <span>{VIEW_STATUS_TYPE[status].describe}</span>
            <Badge count={`${status.toString()}`} showZero color={VIEW_STATUS_TYPE[status].color} style={{ marginLeft: '5px' }} />
          </div>
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
              locale={{ emptyText: (
                <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src={require(`../../static/img/empty_order_2.svg`).default} alt="" width="170px" preview={false} style={{margin: '60px 0px', opacity: '80%'}}/>
                  <span style={{ marginLeft: '20px', textAlign: 'left' }}>
                    <span style={{ color: 'gray', fontSize: '1.3em', fontWeight: '600' }}>Trống</span>
                    <span style={{ color: '#8080808a', fontWeight: '200', fontSize: '0.95em' }}>
                      Chưa có profile của thiết bị
                    </span>
                  </span>
                </div>
              ) }}
              size='small'
            />
          )
        }
      </>
    );
  };

  const handleExpandedRowsChange = (expandedKeys) => {
    if (expandedKeys.length > 0) {
      const newlyExpandedRow = expandedKeys[expandedKeys.length - 1];
      const expandedRecord = listDevices?.items?.find(item => item?.id === newlyExpandedRow);
      
      if (expandedRecord) {
        dispatch(actions.detailDeviceRunViewBegin(newlyExpandedRow));
      }

      setExpandedRows([newlyExpandedRow]);
    } else {
      setExpandedRows([]);
    }
  };

  const dataSource = [];
  if (listDevices?.items?.length > 0) {
    listDevices?.items?.map((value, index) => {
      return dataSource.push({
        key: value?.id,
        devices: (
          <span style={{ fontSize: '1.1em', display: 'inline-flex', alignItems: 'flex-start', alignContent: 'center' }}>
            <svg className="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
            </svg>

            <div style={{ marginLeft: '3px', padding: 0 }}>
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
                  dispatch(actions.detailComputerRunViewBegin({
                    id: value?.id
                  }));
                  setState({
                    ...state,
                    isEditViewServer: true
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
                  dispatch(actions.detailComputerRunViewBegin({
                    id: value?.id
                  }));
                  setState({
                    ...state,
                    isDetailViewServer: true
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
                    isDeleteViewServer: true,
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
        isOpen={state?.isDeleteViewServer}
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
      <DetailViewDevices
        computerState={state}
        setState={setState}
      />
      <EditViewDevices
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
                      isBatchUpdateViewServer: true,
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
              columns={devicesColumns}
              locale={{ emptyText: (
                <div>
                  <Image src={require(`../../static/img/lost_connection.svg`).default} alt="" width="400px" preview={false} style={{margin: '60px 0px', opacity: '80%'}}/>
                  <span style={{ color: 'black', marginBottom: '0px', padding: '0px', fontSize: '1.3em', fontWeight: '600' }}>Trống</span>
                  <span style={{ color: '#8080808a', marginBottom: '20px', fontWeight: '200', fontSize: '0.95em' }}>
                    Chưa có server
                  </span>
                </div>
              )}}
              expandable={{
                expandedRowRender: renderExpandedRow,
                rowExpandable: (record) => true,
                expandedRowKeys: expandedRows,
                onExpandedRowsChange: handleExpandedRowsChange,
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
