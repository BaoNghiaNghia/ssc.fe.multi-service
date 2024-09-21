/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Switch, Tooltip, Image } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { LuListFilter } from 'react-icons/lu';
import { debounce } from 'lodash';
import { FaRegCommentDots } from 'react-icons/fa';
import { GrNotification, GrFormUpload } from 'react-icons/gr';
import { AiOutlineLike, AiTwotoneDelete } from 'react-icons/ai';
import { TbServerBolt } from 'react-icons/tb';
import { GalleryNav, TopToolBox } from './style';
import AddAccountGmail from './component/AddAccountGmail';
import DetailAccountGmail from './component/DetailAccountGmail';
import EditAccountGmail from './component/EditAccountGmail';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import gmailActions from '../../redux/gmailManage/actions';
import { getPathLocalFromString, numberWithCommas } from '../../utility/utility';
import { COLOR_GENERAL, DEFAULT_PAGESIZE, DEFAULT_PERPAGE, SERVICE_TYPE } from '../../variables';
import ConfirmRequestModal from '../buff-comments/components/ConfirmRequestModal';


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


// Inline styles
const styles = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',  // Makes the div circular
  backgroundColor: '#4CAF50',  // Green background
  color: 'white',
  display: 'flex',
  alignItems: 'center',  // Vertical alignment
  justifyContent: 'center',  // Horizontal alignment
  fontSize: '15px',
  fontWeight: '500'
};

function Avatar({ name }) {
  // Function to extract initials from the name
  const getInitials = (name) => {
      const initials = name.split(' ').map(word => word[0]?.toUpperCase())?.join('');
      return initials;
  };

  return (
      <div style={styles}>
          {getInitials(name)}
      </div>
  );
}

function GmailManagement() {
  const dispatch = useDispatch();
  const { isLoading, typeService, listAccountgGmail, listAccountgGmailMeta } = useSelector(state => {
    return {
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
    isAddAccountGmailModal: false,
    isDetailAccountGmailModal: false,
    isUpdateAccountGmailModal: false,
    isDeleteAccountGmailModal: false,
    notData: {},
    dataRow: {},
    selectedRowKeys: [],
  }); 

  const { notData, item, selectedRowKeys } = state;

  useEffect(() => {
    setState({
      ...state,
      selectedRowKeys,
    });
  }, [selectedRowKeys]);

  useEffect(() => {
    switch (typeService) {
      case SERVICE_TYPE.COMMENT.title:
        dispatch(gmailActions.listAccountGmailCommentBegin({
          page: currentPage,
          limit: limitPage,
        }));

        break;
  
      case SERVICE_TYPE.LIKE.title:
        dispatch(gmailActions.listAccountGmailLikeBegin({
          page: currentPage,
          limit: limitPage,
        }));

        break;
  
      case SERVICE_TYPE.SUBSCRIBE.title:
        console.log('--- subscribe ---');
        break;

      case SERVICE_TYPE.VIEW.title:
        dispatch(gmailActions.listAccountGmailViewBegin({
          page: currentPage,
          limit: limitPage,
        }));

        break;
  
      default:
        console.log('Service type not recognized');
    }
  }, [dispatch, currentPage, limitPage, typeService]);
  
  const handleSearch = searchText => {
    if (searchText) {
      switch (typeService) {
        case SERVICE_TYPE.COMMENT.title:
          dispatch(gmailActions.listAccountGmailCommentBegin({
            page: currentPage,
            limit: limitPage,
            name: searchText
          }));

          break;
  
        case SERVICE_TYPE.LIKE.title:
          dispatch(gmailActions.listAccountGmailLikeBegin({
            page: currentPage,
            limit: limitPage,
            name: searchText
          }));

          break;
  
        case SERVICE_TYPE.SUBSCRIBE.title:
          console.log('--- subscribe ---');
          break;

        case SERVICE_TYPE.VIEW.title:
          dispatch(gmailActions.listAccountGmailViewBegin({
            page: currentPage,
            limit: limitPage,
            name: searchText
          }));

          break;
  
        default:
          console.log('Service type not recognized');
      }
    } else {
      dispatch(gmailActions.listAccountGmailCommentBegin({
        page: 1,
        limit: limitPage
      }));
    }
  };
  
  const handleChange = (value) => {
    dispatch(gmailActions.changeServiceTypeInGmailBegin({
      value,
    }));

    setState({ ...state, activeClass: value });
  };

  const dataSource = [];

  if (listAccountgGmail?.length) {
    listAccountgGmail?.map((value, key) => {
      const { channel_id, computer, email, live, total_task, _id } = value;
      return dataSource.push({
        key: key + 1,
        channel_id: (
          <span className="customer-name" style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <Avatar name={email} />
            <span style={{ marginLeft: '9px' }} >
              <p style={{ margin: 0, padding: 0, fontWeight: '600' }}>{email}</p>
              <p style={{ fontSize: '0.7em', margin: 0, padding: 0 }}>{channel_id}</p>
            </span>
          </span>
        ),
        computer: (
          <>
            {
              getPathLocalFromString(computer) !== null
                ? <img 
                    src={require(`../../${getPathLocalFromString(computer)}`)}
                    alt={getPathLocalFromString(computer)}
                    width="18px"
                    height="18px"
                    style={{ outline: '2px solid #d3d3d3', borderRadius: '10px', margin: '3px 8px 0 0' }}
                  />
                : <TbServerBolt fontSize={17} style={{ marginRight: '8px', marginTop: '5px' }} />
            }
            <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', color: 'gray' }}>{computer}</div>
          </>
        ),
        live: <Switch checkedChildren="Mail sống" unCheckedChildren="Mail chết" checked={live}/>,
        total_task: (
          <>
            {
              total_task === 0 ? (
                <span style={{ color: '#8080808a' }}>0</span>
              ) : (

                <span className="customer-name" style={{ fontWeight: 700 }}>{numberWithCommas(total_task || 0)}</span>
              )
            }
          </>
        ),
        action: (
          <div className="table-actions">
            <Tooltip title="Chi tiết">
              <Button 
                className="btn-icon" 
                type="primary" 
                to="#" 
                shape="circle"
                onClick={() => {
                  switch (typeService) {
                    case SERVICE_TYPE.COMMENT.title:
                      dispatch(gmailActions.detailAccountGmailCommentBegin(_id));
                      break;

                    case SERVICE_TYPE.LIKE.title:
                      dispatch(gmailActions.detailAccountGmailLikeBegin(_id));
                      break;

                    case SERVICE_TYPE.SUBSCRIBE.title:
                      console.log('--- subscribe ---');
                      dispatch(gmailActions.detailAccountGmailSubscribeBegin(_id));
                      break;
                    
                    case SERVICE_TYPE.VIEW.title:
                      dispatch(gmailActions.detailAccountGmailViewBegin(_id));
                      break;

                    default:
                      console.log('Service type not recognized');
                  }

                  setState({ 
                    ...state,
                    dataRow: value,
                    isDetailAccountGmailModal: true
                  });
                }}
              >
                <FeatherIcon icon="eye" size={16} />
              </Button>
            </Tooltip>


            {/* <Tooltip title="Chỉnh sửa">
              <Button className="btn-icon" type="primary" to="#" shape="circle" 
                onClick={() => {
                  if (typeService === SERVICE_TYPE.COMMENT.title) {
                    dispatch(gmailActions.detailAccountGmailCommentBegin(_id));
                  } else if (typeService === SERVICE_TYPE.LIKE.title) {
                    dispatch(gmailActions.detailAccountGmailLikeBegin(_id));
                  } else if (typeService === SERVICE_TYPE.SUBSCRIBE.title) {
                    console.log('--- subscribe ---')
                  }
                  setState({
                    ...state,
                    dataRow: value,
                    isUpdateAccountGmailModal: true
                  });
                }}
              >
                <FeatherIcon icon="edit" size={16} />
              </Button>
            </Tooltip> */}
            
            <Tooltip title="Xóa">
              <Button className="btn-icon" type="primary" to="#" shape="circle"
                onClick={() => {
                  setState({
                    ...state,
                    dataRow: value,
                    isDeleteAccountGmailModal: true
                  });
                }}
              >
                <AiTwotoneDelete size={16} style={{ marginTop: '4px' }} />
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

  return (
    <>
      <AddAccountGmail
        gmailState={state}
        setState={setState}
      />
      <DetailAccountGmail
        gmailState={state}
        setState={setState}
      />
      <EditAccountGmail
        gmailState={state}
        setState={setState}
      />
      <ConfirmRequestModal
        isOpen={state?.isDeleteAccountGmailModal}
        setState={setState}
        descriptions={`Xác nhận xóa tài khoản ${state?.dataRow?.email}`}
        title="Xác nhận"
        subtitle="Xóa thông tin tài khoản"
        handleOk={() => {
          console.log('---- type service ----', typeService);
          // eslint-disable-next-line no-underscore-dangle
          dispatch(gmailActions.deleteAccountGmailCommentBegin({id: state?.dataRow?._id}));
          setState({ 
            ...state,
            isDeleteAccountGmailModal: false
          });
        }}
      />

      <ConfirmRequestModal
        isOpen={state?.isDeleteAccountGmailModal}
        setState={setState}
        descriptions={`Xác nhận xóa tài khoản ${state?.dataRow?.email}`}
        title="Xác nhận"
        subtitle="Xóa thông tin tài khoản"
        handleOk={() => {
          const deleteID = state?.dataRow?._id;
          
          switch (typeService) {
            case SERVICE_TYPE.COMMENT.title:
              dispatch(gmailActions.deleteAccountGmailCommentBegin({ id: deleteID }));
              break;

            case SERVICE_TYPE.LIKE.title:
              dispatch(gmailActions.deleteAccountGmailLikeBegin({ id: deleteID }));
              break;

            case SERVICE_TYPE.SUBSCRIBE.title:
              dispatch(gmailActions.deleteAccountGmailSubscribeBegin({ id: deleteID }));
              break;

            case SERVICE_TYPE.VIEW.title:
              dispatch(gmailActions.deleteAccountGmailViewBegin({ id: deleteID }));
              break;

            default:
              console.log('Service type not recognized');
          }

          setState({ 
            ...state,
            isDeleteAccountGmailModal: false
          });
        }}
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
                    className={typeService === SERVICE_TYPE.VIEW.title ? 'active' : 'deactivate'}
                    onClick={() => handleChange(SERVICE_TYPE.VIEW.title)}
                    to="#"
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <IoEyeOutline fontSize={15} className='pr-3'/>
                    <span>View</span>
                  </Link>
                </li>
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
                      <AutoComplete onSearch={debounce(handleSearch, 500)} dataSource={notData} width="100%" patterns />
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
                        style={{ backgroundColor: '#26695c17', color: COLOR_GENERAL.primary, border: `1px solid ${COLOR_GENERAL.primary}`, fontWeight: 600 }}
                        onClick={() => {
                          setState({
                            ...state,
                            isAddAccountGmailModal: true,
                          });
                        }}
                      >
                        <GrFormUpload color={COLOR_GENERAL.primary} /> Tải lên .txt
                      </Button>
                      <Button
                        size="small"
                        type="primary"
                        onClick={() => {
                          setState({
                            ...state,
                            isAddAccountGmailModal: true,
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
                            <p className='mx-4 mt-1'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> tài khoản</p>
                        </>
                    },
                    totalBoundaryShowSizeChanger: 100,
                    size: "small"
                  }}
                  locale={{ emptyText: (
                    <div>
                      <Image src={require(`../../static/img/empty_order_4.svg`).default} alt="" width="250px" preview={false} style={{margin: '30px 0px'}}/>
                      <span style={{ color: 'black', marginBottom: '0px', padding: '0px', fontSize: '1.3em', fontWeight: '600' }}>Trống</span>
                      <span style={{ color: '#8080808a', marginBottom: '20px', fontWeight: '200', fontSize: '0.95em' }}>
                        Chưa có danh sách gmail
                      </span>
                    </div>
                  )}}
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
