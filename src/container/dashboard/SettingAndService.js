/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Tooltip, Badge, Switch, Form, InputNumber } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiEdit2 } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa6";
import { TbServicemark } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import AddService from './component/AddService';
import EditService from './component/EditService';
import DelService from './component/DelService';
import { GalleryNav, TopToolBox } from './style';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { PageHeader } from '../../components/page-headers/page-headers';
import { numberWithCommas } from '../../utility/utility';
import { Main, TableWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/serviceSettings/actions';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, SERVICE_SETTING_TYPE } from '../../variables';

const badgeGreenStyle = {
  border: '1.3px solid #00ab00',
  fontFamily: 'Be Vietnam Pro',
  borderRadius: '7px ',
  padding: '2px 7px',
  fontSize: '0.7em',
  color: '#00ab00',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  alignContemt: 'center',
  justifyContent: 'center',
  marginRight: '5px'
}

const badgeOrangeStyle = {
  border: '1.3px solid orange',
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
}

const badgeRedStyle = {
  border: '1.3px solid red',
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
}

function SettingAndService() {
  const dispatch = useDispatch();

  const [formUpdateSettings] = Form.useForm();

  const { searchData, orders, listService, typeTab, listSettings } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      orders: state.orders.data,
      listService: state?.settingService?.listService?.items,
      typeTab: state?.settingService?.typeTab,
      listSettings: state?.settingService?.listSettings
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  useEffect(() => {
    dispatch(actions.fetchListServiceBegin({}));
    dispatch(actions.fetchListSettingsBegin({}));
  }, [dispatch]);

  const [state, setState] = useState({
    isOpenAdd: false,
    isOpenEdit: false,
    isOpenDel: false,
    selectedService: '',
    selectedRowData: {},
    notData: searchData,
    checkBlockVideo: listSettings?.block_video,
    item: orders,
    selectedRowKeys: [],
  });

  const handleSearch = searchText => {
    const data = searchData.filter(value => value.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const dataSource = [];
  if (listService?.length) {
    listService?.map((value, key) => {
      const { name, min, max, service_id, max_threads_3000, max_threads, max_threads_5000, priority, enabled, description, price_per_10, category, type, geo } = value;
      return dataSource?.push({
        key: key + 1,
        name: <>
          <Row>
            <Col>
              <span className="label" style={{ display: 'inline-flex' }}>
                <FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }} />
                {
                  geo ? (
                    <Tooltip title={geo?.toUpperCase()}>
                      <span style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginRight: '7px' }}>
                        <img src={require(`../../static/img/flag/${geo}.png`)} alt="" width="20px" height="20px" style={{ border: '1px solid gray', borderRadius: '4px' }} />
                      </span>
                    </Tooltip>
                  ) : null
                }
                 - <span style={{ fontWeight: 'bold', margin: '0px 7px' }}>{service_id}</span> - <Tooltip title={name} placement='right'>{name.length > 70 ? `${name?.slice(0, 70)  } ...` : name}</Tooltip>
              </span>
            </Col>
          </Row>
          <Row style={{ marginBottom: '5px' }}>
            <Tooltip title={description} placement='right'>
              <Col>
                <span className="label" style={{ color: 'gray', fontSize: '0.8em' }}>{description.length > 80 ? `${description?.slice(0, 80)  } ...` : description}</span>
              </Col>
            </Tooltip>
          </Row>
          <Row>
            <Col>
              {
                enabled ? (
                  <span className="label" style={badgeGreenStyle}>
                    <Badge color='green' dot style={{ marginRight: '5px' }} />
                    Đang hoạt động
                  </span>
                ) : (
                  <span className="label" style={badgeRedStyle}>
                    <Badge color='red' dot style={{ marginRight: '5px' }} />
                    Đang tắt
                  </span>
                )
              }
              <span className="label" style={badgeGreenStyle}>Bảo hành</span>
              <span className="label" style={badgeGreenStyle}>Đề xuất sử dụng</span>
              {
                priority ? (
                  <span className="label" style={badgeOrangeStyle}>
                    <FaLocationArrow color='orange' style={{ marginRight: '5px' }} />
                    Ưu tiên
                  </span>
                ) : <></>
              }
            </Col>
          </Row>
        </>,
        category: (
          <>
            <Row>
              <Col>
                <span className="customer-name" style={{ color: 'green', fontWeight: '600' }}>{category}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="customer-name" style={{ color: 'gray', fontSize: '0.7em' }}>{type}</span>
              </Col>
            </Row>
          </>
        ),
        range: <>
          <span style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
            <span className='index-above-left'>{numberWithCommas(min || 0)}</span> &nbsp; - &nbsp; <span className='index-above-right'>{numberWithCommas(max || 0)}</span>
          </span>
        </>,
        price: <>
          <span className="currency" style={{ display: 'inline-flex', fontWeight: '800', color: 'green' }}>{numberWithCommas(price_per_10 || 0)}</span>
        </>,
        threads: <>
          <Tooltip title={
            <span className="customer-name">{max_threads} / {max_threads_3000} / {max_threads_5000}</span>
          }>
            <span className="customer-name">{max_threads} / {max_threads_3000} / {max_threads_5000}</span>
          </Tooltip>
        </>,
        action: <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Tooltip title="Sửa dịch vụ">
            <Button
              size="small"
              className="btn-icon"
              style={{ marginRight: '5px', background: 'none' }}
              onClick={() => {
                setState({ ...state, isOpenEdit: true });
                dispatch(actions.modalDetailServiceBegin(value));
              }}
            >
              <FiEdit2 style={{ marginTop: '4px' }} />
            </Button>
          </Tooltip>
          <Tooltip title={`${enabled ? 'Tắt' : 'Bật'} dịch vụ`}>
            <Switch checked={enabled} onChange={() => {
              setState({
                ...state,
                isOpenDel: true
              });
              dispatch(actions.modalDetailServiceBegin(value));
            }} />
          </Tooltip>
        </div>
      });
    });
  }

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'range',
      dataIndex: 'range',
      key: 'range',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'threads',
      dataIndex: 'threads',
      key: 'threads',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const handleChange = (value) => {
    dispatch(actions.changeTypeTabBegin(value));
  };

  const handleUpdateSetting = () => {
    try {
      formUpdateSettings.validateFields()
        .then((values) => {
          const requestData = {
            id: listSettings?.id,
            account_delay_time: values?.account_delay_time,
            block_video: values?.block_video,
            computer_reset_time: values?.computer_reset_time,
            max_order: values?.max_order,
            max_random_time: values?.max_random_time,
            min_random_time: values?.min_random_time,
            min_video_time: values?.min_video_time
        }

        dispatch(actions.updateListSettingsBegin(requestData));
      })
      .catch((err) => {
          console.error("handle Real Error: ", err);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSwitchBlockVideo = (valueBlockVideo) => {
    try {
      formUpdateSettings.validateFields()
        .then((values) => {
          const requestData = {
            id: listSettings?.id,
            account_delay_time: values?.account_delay_time,
            block_video: valueBlockVideo,
            computer_reset_time: values?.computer_reset_time,
            max_order: values?.max_order,
            max_random_time: values?.max_random_time,
            min_random_time: values?.min_random_time,
            min_video_time: values?.min_video_time
        }

        dispatch(actions.updateListSettingsBegin(requestData));
      })
      .catch((err) => {
          console.error("handle Real Error: ", err);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const { isOpenAdd, isOpenEdit, isOpenDel, notData } = state;

  return (
    <>
      <AddService
        isOpen={isOpenAdd}
        setState={setState}
      />
      <EditService
        isOpen={isOpenEdit}
        state={state}
        setState={setState}
      />
      <DelService
        isOpen={isOpenDel}
        setState={setState}
      />
      <PageHeader
        ghost
        title="Dịch vụ & Cài đặt"
        buttons={[
          <GalleryNav>
            <ul>
              <li>
                <Link
                  className={typeTab === SERVICE_SETTING_TYPE.SERVICE.title ? 'active' : 'deactivate'}
                  onClick={() => handleChange(SERVICE_SETTING_TYPE.SERVICE.title)}
                  to="#"
                  style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}
                >
                  <TbServicemark fontSize={25} style={{ margin: '0 5px 0 0', padding: 0 }} /> <span>Dịch vụ</span>
                </Link>
              </li>
              <li>
                <Link
                  className={typeTab === SERVICE_SETTING_TYPE.SETTING.title ? 'active' : 'deactivate'}
                  onClick={() => {
                    handleChange(SERVICE_SETTING_TYPE.SETTING.title);

                    if (listSettings) {
                      formUpdateSettings.setFieldsValue(listSettings);
                    }
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}
                  to="#"
                >
                  <IoSettingsOutline fontSize={18} style={{ marginRight: '5px' }} /> <span>Cài đặt</span>
                </Link>
              </li>
            </ul>
          </GalleryNav>,
        ]}
      />
      <Main>
        {
          typeTab === SERVICE_SETTING_TYPE.SERVICE.title ? (
            <Cards headless>
              <Row gutter={15}>
                <Col xs={24}>
                  <TopToolBox>
                    <Row gutter={15} className="justify-content-center">
                      <Col lg={6} xs={24}>
                        <div className="table-search-box">
                          <AutoComplete onSearch={handleSearch} dataSource={notData} width="100%" patterns placeholder="Tìm kiếm dịch vụ" />
                        </div>
                      </Col>
                      <Col xxl={18} xs={24}>
                        <div className="table-toolbox-actions">
                          <Button size="small" key="4" type="primary" onClick={() => {
                            setState({
                              isOpenAdd: true,
                            });
                          }}>
                            <FeatherIcon icon="plus" size={14} />
                            Thêm dịch vụ
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
                    <div style={{ display: 'inline-flex' }}>
                      <FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }} />
                      <span style={{ fontSize: '16px', fontWeight: '700' }}>Youtube</span>
                    </div>
                    <Table
                      size='small'
                      
                      showHeader={false}
                      dataSource={dataSource}
                      columns={columns}
                      pagination={{
                        current: listService?.meta?.current_page,
                        defaultPageSize: listService?.meta?.count,
                        pageSize: listService?.meta?.per_page,
                        total: listService?.meta?.total,
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
                            <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> dịch vụ</p>
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
          ) : (
            <div>
              <Cards headless>
                <TopToolBox>
                  <Row gutter={15} className="justify-content-center">
                    <Col lg={6} xs={24}>
                      <div style={{ display: 'inline-flex' }}>
                        <span style={{ fontSize: '16px', fontWeight: '700' }}>Cài đặt chung</span>
                      </div>
                    </Col>
                    <Col xxl={18} xs={24}>
                      <div className="table-toolbox-actions">
                        <Button size="small" key="4" type="primary" onClick={handleUpdateSetting}>
                          <FeatherIcon icon="save" size={14} />
                          Cập nhật
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </TopToolBox>
                <Row gutter={50}>
                  <Col xs={12}>
                    <Form name='form-update-settings' layout="vertical" form={formUpdateSettings}>
                      <Row gutter="15">
                        <Col sm={12}>
                          <Form.Item
                            name="account_delay_time"
                            label="Thời gian bốc lại account"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                              required: true,
                              message: 'Trường không được trống'
                            }]}
                          >
                            <InputNumber size='small' addonAfter="phút" style={{ fontWeight: 'bold', width: '100%' }} placeholder='Nhập vào thông tin' />
                          </Form.Item>
                        </Col>
                        <Col sm={12}>
                          <Form.Item
                            name="block_video"
                            label="Màn hình đen"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                              required: true,
                              message: 'Trường không được trống'
                            }]}
                          >
                            <Switch
                              checked={listSettings?.block_video}
                              onChange={(value) => handleSwitchBlockVideo(value)}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter="15">
                        <Col sm={12}>
                          <Form.Item
                            name="computer_reset_time"
                            label="Thời gian reset luồng sau khi OFF"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                              required: true,
                              message: 'Trường không được trống'
                            }]}
                          >
                            <InputNumber size='small' addonAfter="phút" style={{ width: '100%' }} placeholder='Nhập vào thông tin' />
                          </Form.Item>
                        </Col>
                        <Col sm={12}>
                          <Form.Item
                            name="max_order"
                            label="Số luồng tối đa hệ thống"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                              required: true,
                              message: 'Trường không được trống'
                            }]}
                          >
                            <InputNumber addonAfter="luồng" size='small' style={{ width: '100%' }} placeholder='Nhập vào thông tin' />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                  <Col xs={12}>
                    <Form layout="vertical" form={formUpdateSettings}>
                      <Row gutter="15">
                        <Col sm={12}>
                          <Form.Item
                            name="max_random_time"
                            label="Thời gian xem tối đa"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                              required: true,
                              message: 'Trường không được trống'
                            }]}
                          >
                            <InputNumber size='small' addonAfter="giây" style={{ fontWeight: 'bold', width: '100%' }} placeholder='Nhập vào thông tin' />
                          </Form.Item>
                        </Col>
                        <Col sm={12}>
                          <Form.Item
                            name="min_random_time"
                            label="Thời gian xem tối thiểu"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                              required: true,
                              message: 'Trường không được trống'
                            }]}
                          >
                            <InputNumber size='small' addonAfter="giây" style={{ fontWeight: 'bold', width: '100%' }} placeholder='Nhập vào thông tin' />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter="15">
                        <Col sm={12}>
                          <Form.Item
                            name="min_video_time"
                            label="Số giây tối đa lấy video"
                            style={{ marginBottom: '7px' }}
                            rules={[{
                              required: true,
                              message: 'Trường không được trống'
                            }]}
                          >
                            <InputNumber size='small' addonAfter="giây" style={{ width: '100%' }} placeholder='Nhập vào thông tin' />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Cards>
              {/* <Cards headless>
                <TopToolBox>
                  <Row gutter={15} className="justify-content-center">
                    <Col lg={24} xs={24}>
                      <div style={{ display: 'inline-flex' }}>
                        <span style={{ fontSize: '16px', fontWeight: '700' }}>Cài đặt khác</span>
                      </div>
                    </Col>
                  </Row>
                </TopToolBox>
              </Cards> */}
            </div>
          )
        }
      </Main>
    </>
  );
}

export default SettingAndService;
