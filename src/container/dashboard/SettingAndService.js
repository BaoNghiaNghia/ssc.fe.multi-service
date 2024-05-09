/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Tooltip } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { FaYoutube } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";
import AddService from './component/AddService';
import EditService from './component/EditService';
import DelService from './component/DelService';
import { PageHeader } from '../../components/page-headers/page-headers';
import { numberWithCommas } from '../../utility/utility';
import { Main, TableWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/serviceSettings/actions';

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
  justifyContent: 'center',
  marginRight: '5px'
}

function SettingAndService() {
  const dispatch = useDispatch();
  const { searchData, orders, listService } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      orders: state.orders.data,
      listService: state?.settingService?.listService?.items
    };
  });

  useEffect(() => {
    dispatch(actions.fetchListServiceBegin({}));
  }, [dispatch]);

  const [state, setState] = useState({
    isOpenAdd: false,
    isOpenEdit: false,
    isOpenDel: false,
    selectedService: '',
    selectedRowData: {},
    notData: searchData,
    item: orders,
    selectedRowKeys: [],
  });

  useEffect(() => {
    if (orders) {
      setState({
        item: orders,
      });
    }
  }, [orders]);

  const dataSource = [];
  if (listService?.length) {
    listService?.map((value, key) => {
      const { name, min, max, service_id, max_threads_3000, max_threads, max_threads_5000, priority, enabled, description, price_per_10, category, type } = value;
      return dataSource?.push({
        key: key + 1,
        name: <>
          <Row>
            <Col>
              <span className="label" style={{ display: 'inline-flex' }}><span style={{ fontWeight: 'bold', marginRight: '7px' }}>{service_id}</span>  - {name}</span>
            </Col>
          </Row>
          <Row style={{ marginBottom: '5px' }}>
            <Col>
              <span className="label" style={{ color: 'gray', fontSize: '0.8em' }}>{description}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="label" style={badgeGreenStyle}>Bảo hành</span>
              <span className="label" style={badgeGreenStyle}>Đề xuất sử dụng</span>
              {
                priority ? (
                  <span className="label" style={badgeRedStyle}>Ưu tiên</span>
                ) : <></>
              }
              {
                enabled ? (
                  <span className="label" style={badgeRedStyle}>Đang hoạt động</span>
                ) : <></>
              }
            </Col>
          </Row>
        </>,
        category: <>
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
        </>,
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
        action: <>
          <Tooltip title="Sửa dịch vụ">
            <Button size="default" type="default" style={{ marginRight: '5px' }} onClick={() => {
              console.log('----- type nè ------', value);

              setState({ isOpenEdit: true, selectedRowData: value });
              dispatch(actions.modalDetailServiceBegin(value));
            }}>
              <FiEdit2 style={{ marginTop: '4px' }} />
            </Button>
          </Tooltip>
          <Tooltip title="Xóa dịch vụ">
            <Button size="default" type="default" onClick={() => setState({ isOpenDel: true })}>
              <LuTrash2 style={{ marginTop: '4px' }} />
            </Button>
          </Tooltip>
        </>
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

  const { isOpenAdd, isOpenEdit, isOpenDel } = state;

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
          <div key="1" className="page-header-actions">
            <Button size="small" key="4" type="primary" onClick={() => {
              setState({
                isOpenAdd: true,
              });
            }}>
              <FeatherIcon icon="plus" size={14} />
              Thêm dịch vụ
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Cards headless>
          <Row gutter={15}>
            <Col md={24}>
              <TableWrapper className="table-order table-responsive">
                <div style={{ display: 'inline-flex' }}>
                  <FaYoutube color="red" fontSize={20} style={{ marginTop: '2px', marginRight: '7px' }}/>
                  <span style={{ fontSize: '16px', fontWeight: '700' }}>Youtube</span>
                </div>
                <Table
                  showHeader={false}
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                />
              </TableWrapper>
            </Col>
          </Row>
        </Cards>
      </Main>
    </>
  );
}

export default SettingAndService;
