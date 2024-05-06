/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Tooltip } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { FaYoutube } from "react-icons/fa";
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import actions from '../../redux/serviceSettings/actions';

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
          <span className="customer-name">{category}</span>
        </>,
        type: <>
          <span className="customer-name">{type}</span>
        </>,
        range: <>
          <span className="customer-name">{min} - {max}</span>
        </>,
        price: <>
          <span className="currency" style={{ display: 'inline-flex', fontWeight: '800', color: 'green' }}>{price_per_10}</span>
        </>,
        threads: <>
          <Tooltip title={
            <span className="customer-name">{max_threads} / {max_threads_3000} / {max_threads_5000}</span>
          }>
            <span className="customer-name">{max_threads} / {max_threads_3000} / {max_threads_5000}</span>
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
      title: 'type',
      dataIndex: 'type',
      key: 'type',
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
  ];

  return (
    <>
      <PageHeader
        ghost
        title="Dịch vụ & Cài đặt"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
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
                  dataSource={dataSource}
                  columns={columns}
                  // pagination={{ pageSize: 7, showSizeChanger: true, total: orders.length }}
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
