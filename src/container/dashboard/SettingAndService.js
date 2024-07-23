/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Tooltip, Badge, Switch, Form, InputNumber } from 'antd';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FiEdit2 } from "react-icons/fi";
import { WiTime7 } from "react-icons/wi";
import { FaLocationArrow } from "react-icons/fa6";
import { TbServicemark } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';

import AddService from './component/AddService';
import EditService from './component/EditService';
import DelService from './component/DelService';
import AddGoogleKey from './component/AddGoogleKey';
import DetailGoogleKey from './component/DetailGoogleKey';
import EditGoogleKey from './component/EditGoogleKey';
import { GalleryNav, TopToolBox } from './style';
import ConfirmRequestModal from "../ecommerce/components/ConfirmRequestModal";
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
  fontFamily: 'Poppins, sans-serif',
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
  fontFamily: 'Poppins, sans-serif',
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
  fontFamily: 'Poppins, sans-serif',
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

const columnsService = [
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
    title: 'rest_api',
    dataIndex: 'rest_api',
    key: 'rest_api',
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

const columnsGoogleKey = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Key',
    dataIndex: 'google_key',
    key: 'google_key',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Khởi tạo',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Cập nhật',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
  },
];


function SettingAndService() {
  const dispatch = useDispatch();

  const [formUpdateSettingsComment] = Form.useForm();
  const [formUpdateSettingsLike] = Form.useForm();

  const { orders, listService, typeTab, listSettingsComment, listMetaService, listGoogleKey, listGoogleKeyMeta, listSettingsLike } = useSelector(state => {
    return {
      orders: state.orders.data,
      listService: state?.settingService?.listService?.items,
      listMetaService: state?.settingService?.listService?.meta,
      typeTab: state?.settingService?.typeTab,
      listSettingsComment: state?.settingService?.listSettingsComment,
      listSettingsLike: state?.settingService?.listSettingsLike,
      listGoogleKey: state?.settingService?.listGoogleKey?.google_keys,
      listGoogleKeyMeta: state?.settingService?.listGoogleKey?.meta,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  useEffect(() => {
    dispatch(actions.fetchListSettingsCommentBegin());
    dispatch(actions.fetchListSettingsLikeBegin());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.fetchListServiceBegin({
      page: currentPage,
      limit: limitPage,
    }));
  }, [dispatch, currentPage, limitPage]);

  formUpdateSettingsComment.setFieldsValue(listSettingsComment);
  formUpdateSettingsLike.setFieldsValue(listSettingsLike);

  const [state, setState] = useState({
    isOpenAdd: false,
    isOpenEdit: false,
    isOpenDel: false,
    isDetailGoogkeKey: false,
    isAddGoogkeKey: false,
    isUpdateGoogkeKey: false,
    isDelGoogkeKey: false,
    selectedService: '',
    selectedRowData: {},
    notData: {},
    checkBlockVideo: listSettingsComment?.block_video,
    item: orders,
    selectedRowKeys: [],
  });

  const handleSearch = searchText => {
    
  };

  const dataSource = [];
  if (listService?.length) {
    listService?.map((value, key) => {
      const { name, min, max, service_id, max_threads_3000, max_threads, max_threads_5000, priority, enabled, description, price_per_10, category, type, geo, rest_api } = value;
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
                        <img src={require(`../../static/img/flag/${geo}.png`)} alt="" width="20px" height="20px" style={{ outline: '2px solid #d3d3d3', borderRadius: '10px' }} />
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
            <span className="customer-name">{numberWithCommas(max_threads)} / {numberWithCommas(max_threads_3000)} / {numberWithCommas(max_threads_5000)}</span>
          }>
            <span className="customer-name">{numberWithCommas(max_threads)} / {numberWithCommas(max_threads_3000)} / {numberWithCommas(max_threads_5000)}</span>
          </Tooltip>
        </>,
        rest_api: (
          <>
            <Switch checkedChildren="Rest API" unCheckedChildren="No Rest API" size='small' checked={rest_api} />
          </>
        ),
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
            <Switch checked={enabled} checkedChildren="Bật" unCheckedChildren="Tắt" size='small' onChange={() => {
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

  const dataSourceGoogleKey = [];
  if (listGoogleKey?.length) {
    listGoogleKey?.map((google_key, index) => {
      const { email, key, status, created_at, updated_at, id } = google_key;
      return dataSourceGoogleKey?.push({
        key: index + 1,
        email: (
          <>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <ReactNiceAvatar
                style={{ width: '1.7rem', height: '1.7rem', outline: '2px solid orange', border: '2px solid white' }}
                {...genConfig(email?.charAt(0))}
              />
              <span className="customer-name" style={{ color: 'green', fontWeight: '800', marginLeft: '8px' }}>{email}</span>
            </span>
          </>
        ),
        google_key: <>
          <Row>
            <Col>
              <code className="customer-name" style={{ color: 'green', fontWeight: '600' }}>{key}</code>
            </Col>
          </Row>
        </>,
        status: <>
          <Tooltip title={status ? 'Đang hoạt động' : 'Ngừng hoạt động'}>
            <Switch checkedChildren="Hoạt động" unCheckedChildren="Ngừng hoạt động" checked={status} onChange={(state) => {
              console.log('--- Cập nhật trạng thái google key ----', state);
            }}/>
          </Tooltip>
        </>,
        created_at: <>
          <span style={{ fontStyle: 'italic', color: 'gray', fontSize: '0.9em', display: 'inline-flex', alignItems: 'center' }}>
            <WiTime7 fontSize={15} color='#c3c3c3' style={{ marginRight: '4px' }}/>
            {moment(created_at).format('HH:mm DD/MM')}
          </span>
        </>,
        updated_at: <>
          <span style={{ fontStyle: 'italic', color: 'gray', fontSize: '0.9em', display: 'inline-flex', alignItems: 'center' }}>
            <WiTime7 fontSize={15} color='#c3c3c3' style={{ marginRight: '4px' }}/>
            {moment(created_at).format('HH:mm DD/MM')}
          </span>
        </>,
        action: <div className="table-actions">
          <Tooltip title="Chi tiết">
            <Button className="btn-icon" type="primary" to="#" shape="circle" 
              onClick={() => {
                setState({ 
                  ...state,
                  isDetailGoogkeKey: true,
                  selectedRowData: google_key
                });
                dispatch(actions.detailGoogleKeyBegin(id));
              }}
            >
              <FeatherIcon icon="eye" size={16} />
            </Button>
          </Tooltip>
          <Tooltip title="Cập nhật">
            <Button
              size="small"
              className="btn-icon"
              style={{ marginRight: '5px', background: 'none' }}
              onClick={() => {
                setState({ 
                  ...state,
                  isUpdateGoogkeKey: true
                });
                dispatch(actions.detailGoogleKeyBegin(id));
              }}
            >
              <FiEdit2 style={{ marginTop: '4px' }} />
            </Button>
          </Tooltip>
          <Tooltip title="Xóa Google Key">
            <Button
              size="small"
              className="btn-icon"
              style={{ marginRight: '5px', background: 'none' }}
              onClick={() => {
                setState({ 
                  ...state, 
                  isDelGoogkeKey: true,
                  selectedRowData: google_key
                });
              }}
            >
              <FeatherIcon icon="trash-2" size={16} />
            </Button>
          </Tooltip>
        </div>
        
      });
    });
  }

  const handleChangeTabType = (value) => {
    dispatch(actions.changeTypeTabBegin(value));
  };

  const handleTitleChange = (typeTab) => {
    switch (typeTab) {
      case SERVICE_SETTING_TYPE.SERVICE.title:
        return SERVICE_SETTING_TYPE.SERVICE.describe;
      case SERVICE_SETTING_TYPE.SETTING.title:
        return SERVICE_SETTING_TYPE.SETTING.describe;
      case SERVICE_SETTING_TYPE.GOOGLE_KEY.title:
        return SERVICE_SETTING_TYPE.GOOGLE_KEY.describe;
      default:
        return SERVICE_SETTING_TYPE.SERVICE.describe;
    }
  }

  const handleUpdateSettingLike = () => {
    try {
      formUpdateSettingsLike.validateFields()
        .then((values) => {
          const requestData = {
            id: listSettingsLike?.id,
            account_delay_time: values?.account_delay_time,
            block_video: values?.block_video,
            computer_reset_time: values?.computer_reset_time,
            max_order: values?.max_order,
            max_random_time: values?.max_random_time,
            min_random_time: values?.min_random_time,
            min_video_time: values?.min_video_time,
            bonus_lager_500: values?.bonus_lager_500,
            bonus_smaller_500: values?.bonus_smaller_500,
        }

        dispatch(actions.updateListSettingsLikeBegin(requestData));
      })
      .catch((err) => {
          console.error("handle Real Error: ", err);
      });
    } catch (err) {
      console.log(err);
    }
  }
  const handleUpdateSettingComment = () => {
    try {
      formUpdateSettingsComment.validateFields()
        .then((values) => {
          const requestData = {
            id: listSettingsComment?.id,
            account_delay_time: values?.account_delay_time,
            block_video: values?.block_video,
            computer_reset_time: values?.computer_reset_time,
            max_order: values?.max_order,
            max_random_time: values?.max_random_time,
            min_random_time: values?.min_random_time,
            min_video_time: values?.min_video_time
        }

        dispatch(actions.updateListSettingsCommentBegin(requestData));
      })
      .catch((err) => {
          console.error("handle Real Error: ", err);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSwitchBlockVideoComment = (valueBlockVideo) => {
    try {
      formUpdateSettingsComment.validateFields()
        .then((values) => {
          const requestData = {
            id: listSettingsComment?.id,
            account_delay_time: values?.account_delay_time,
            block_video: valueBlockVideo,
            computer_reset_time: values?.computer_reset_time,
            max_order: values?.max_order,
            max_random_time: values?.max_random_time,
            min_random_time: values?.min_random_time,
            min_video_time: values?.min_video_time
        }

        dispatch(actions.updateListSettingsCommentBegin(requestData));
      })
      .catch((err) => {
          console.error("handle Real Error: ", err);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSwitchBlockVideoLike = (valueBlockVideo) => {
    try {
      formUpdateSettingsLike.validateFields()
        .then((values) => {
          const requestData = {
            id: listSettingsLike?.id,
            account_delay_time: values?.account_delay_time,
            block_video: valueBlockVideo,
            computer_reset_time: values?.computer_reset_time,
            max_order: values?.max_order,
            max_random_time: values?.max_random_time,
            min_random_time: values?.min_random_time,
            min_video_time: values?.min_video_time,
            bonus_lager_500: values?.bonus_lager_500,
            bonus_smaller_500: values?.bonus_smaller_500,
        }

        dispatch(actions.updateListSettingsLikeBegin(requestData));
      })
      .catch((err) => {
          console.error("handle Real Error: ", err);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const { isDelGoogkeKey, isOpenEdit, isOpenDel, notData, selectedRowData } = state;

  const CommentSettingComponent = () => {
    return (<>
      {
        listSettingsComment ? (
          <Cards headless>
            <TopToolBox>
              <Row gutter={15} className="justify-content-center">
                <Col lg={6} xs={24}>
                  <div style={{ display: 'inline-flex' }}>
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>Cài đặt Comment</span>
                  </div>
                </Col>
                <Col xxl={18} xs={24}>
                  <div className="table-toolbox-actions">
                    <Button size="small" key="4" type="primary" onClick={handleUpdateSettingComment}>
                      <FeatherIcon icon="save" size={14} />
                      Cập nhật Comment
                    </Button>
                  </div>
                </Col>
              </Row>
            </TopToolBox>
            <Form name='form-update-settings' layout="vertical" form={formUpdateSettingsComment}>
              <Row gutter={30}>
                <Col xs={12}>
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
                            checkedChildren="Đang bật" unCheckedChildren="Đang tắt"
                            checked={listSettingsComment?.block_video}
                            onChange={(value) => handleSwitchBlockVideoComment(value)}
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
                </Col>
                <Col xs={12}>
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
              </Col>
              </Row>
            </Form>
          </Cards>
        ) : null
      }
    </>
    )
  }

  const LikeSettingComponent = () => {
    return (<>
      {
        listSettingsLike ? (
          <Cards headless>
            <TopToolBox>
              <Row gutter={15} className="justify-content-center">
                <Col lg={6} xs={24}>
                  <div style={{ display: 'inline-flex' }}>
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>Cài đặt Like</span>
                  </div>
                </Col>
                <Col xxl={18} xs={24}>
                  <div className="table-toolbox-actions">
                    <Button size="small" key="4" type="primary" onClick={handleUpdateSettingLike}>
                      <FeatherIcon icon="save" size={14} />
                      Cập nhật Like
                    </Button>
                  </div>
                </Col>
              </Row>
            </TopToolBox>
            <Form name='form-update-settings' layout="vertical" form={formUpdateSettingsLike}>
              <Row gutter={20}>
                <Col sm={4}>
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
                <Col sm={3}>
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
                      checkedChildren="Đang bật" unCheckedChildren="Đang tắt"
                      checked={listSettingsLike?.block_video}
                      onChange={(value) => handleSwitchBlockVideoLike(value)}
                    />
                  </Form.Item>
                </Col>
                <Col sm={5}>
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
                <Col sm={4}>
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
                <Col sm={4}>
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
                <Col sm={4}>
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
                <Col sm={4}>
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
                <Col sm={4}>
                  <Form.Item
                    name="bonus_lager_500"
                    label="Bonus lớn hơn 500"
                    style={{ marginBottom: '7px' }}
                    rules={[{
                      required: true,
                      message: 'Trường không được trống'
                    }]}
                  >
                    <InputNumber size='small' addonAfter="%" style={{ fontWeight: 'bold', width: '100%' }} placeholder='Nhập vào thông tin' />
                  </Form.Item>
                </Col>
                <Col sm={4}>
                  <Form.Item
                    name="bonus_smaller_500"
                    label="Bonus nhỏ hơn 500"
                    style={{ marginBottom: '7px' }}
                    rules={[{
                      required: true,
                      message: 'Trường không được trống'
                    }]}
                  >
                    <InputNumber size='small' addonAfter="%" style={{ fontWeight: 'bold', width: '100%' }} placeholder='Nhập vào thông tin' />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Cards>
        ) : null
      }
    </>
    )
  }

  const SubscribeSettingComponent = () => {
    return (
      <Cards headless>
        <TopToolBox>
          <Row gutter={15} className="justify-content-center">
            <Col lg={6} xs={24}>
              <div style={{ display: 'inline-flex' }}>
                <span style={{ fontSize: '16px', fontWeight: '700' }}>Cài đặt Subscribe</span>
              </div>
            </Col>
            <Col xxl={18} xs={24}>
              <div className="table-toolbox-actions">
                <Button size="small" key="4" type="primary" disabled onClick={() => console.log('-- update setting subscribe --')}>
                  <FeatherIcon icon="save" size={14} />
                  Cập nhật
                </Button>
              </div>
            </Col>
          </Row>
        </TopToolBox>
        <Row gutter={50}>
          <Col xs={12}>
            <span>Đang cập nhật</span>
          </Col>
        </Row>
      </Cards>
    )
  }

  const generateMenuTab = (typeTab) => {
    switch (typeTab) {
      case SERVICE_SETTING_TYPE.SERVICE.title: 
        return (
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
                    columns={columnsService}
                    pagination={{
                      current: listMetaService?.current_page,
                      defaultPageSize: listMetaService?.count,
                      pageSize: listMetaService?.per_page,
                      total: listMetaService?.total,
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
        );
      case SERVICE_SETTING_TYPE.SETTING.title: 
        return (
          <div>
            {CommentSettingComponent()}
            {LikeSettingComponent()}
            {SubscribeSettingComponent()}
          </div>
        )
      case SERVICE_SETTING_TYPE.GOOGLE_KEY.title: 
        return (
          <Cards headless>
            <Row gutter={15}>
              <Col xs={24}>
                <TopToolBox>
                  <Row gutter={15} className="justify-content-center">
                    <Col lg={6} xs={24}>
                      <div className="table-search-box">
                        <AutoComplete onSearch={handleSearch} dataSource={notData} width="100%" patterns placeholder="Tìm key" />
                      </div>
                    </Col>
                    <Col xxl={18} xs={24}>
                      <div className="table-toolbox-actions">
                        <Button size="small" key="4" type="primary" onClick={() => {
                          setState({
                            isAddGoogkeKey: true,
                          });
                        }}>
                          <FeatherIcon icon="plus" size={14} />
                          Thêm key
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
                    size='small'
                    showHeader
                    dataSource={dataSourceGoogleKey}
                    columns={columnsGoogleKey}
                    pagination={{
                      current: listGoogleKeyMeta?.current_page,
                      defaultPageSize: listGoogleKeyMeta?.count,
                      pageSize: listGoogleKeyMeta?.per_page,
                      total: listGoogleKeyMeta?.total,
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
                          <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> Google Key</p>
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
        );

      default: 
        return <></>
    }
  }

  return (
    <>
      <ConfirmRequestModal
        isOpen={isDelGoogkeKey}
        setState={setState}
        descriptions={`Xác nhận xóa google key: ${selectedRowData?.id}`}
        title="Xác nhận"
        subtitle="Gửi yêu cầu bảo hành"
        handleOk={() => {
          dispatch(actions.deleteGoogleKeyBegin({ id: selectedRowData?.id }));
          setState({ 
            ...state,
            isDelGoogkeKey: false
          });
        }}
      />
      <EditGoogleKey
        googleKeyState={state}
        setState={setState}
      />
      <DetailGoogleKey
        googleKeyState={state}
        setState={setState}
      />
      <AddGoogleKey
        googleKeyState={state}
        setState={setState}
      />
      <AddService
        serviceState={state}
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
        title={handleTitleChange(typeTab)}
        buttons={[
          <GalleryNav>
            <ul>
              <li>
                <Link
                  className={typeTab === SERVICE_SETTING_TYPE.SERVICE.title ? 'active' : 'deactivate'}
                  onClick={() => {
                    handleChangeTabType(SERVICE_SETTING_TYPE.SERVICE.title);
                  }}
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
                    handleChangeTabType(SERVICE_SETTING_TYPE.SETTING.title);
                    if (Object.keys(listSettingsComment).length !== 0) formUpdateSettingsComment.setFieldsValue(listSettingsComment);
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}
                  to="#"
                >
                  <IoSettingsOutline fontSize={18} style={{ marginRight: '5px' }} /> <span>Cài đặt</span>
                </Link>
              </li>
              <li>
                <Link
                  className={typeTab === SERVICE_SETTING_TYPE.GOOGLE_KEY.title ? 'active' : 'deactivate'}
                  onClick={() => {
                    handleChangeTabType(SERVICE_SETTING_TYPE.GOOGLE_KEY.title);
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}
                  to="#"
                >
                  <FcGoogle fontSize={18} style={{ marginRight: '5px' }} /> <span>Quản lí Google Key</span>
                </Link>
              </li>
            </ul>
          </GalleryNav>,
        ]}
      />
      <Main>
        {generateMenuTab(typeTab)}
      </Main>
    </>
  );
}

export default SettingAndService;
