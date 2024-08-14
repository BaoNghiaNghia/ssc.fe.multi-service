/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Radio, Table, Tooltip, Image } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { debounce } from 'lodash';
import { TopToolBox } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import actions from '../../redux/blacklist/actions';

import BlackListImg from '../../static/img/block_icon.png.png'

function BlackList() {
  const dispatch = useDispatch();
  const { blackListChannel, isLoading } = useSelector(state => {
    return {
      blackListChannel: state?.blackList?.blackListChannel,
      isLoading: state?.blackList?.loading
    };
  });

  const [state, setState] = useState({
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
    dispatch(actions.fetchBlackListChannelBegin());
  }, [dispatch]);

  const handleSearch = searchText => {
  };

  const dataSource = [];
  
  if (blackListChannel?.length) {
    blackListChannel?.map((value, key) => {
      const { id, channel_id, reason, time } = value;
      return dataSource.push({
        key: key + 1,
        id: <span className="customer-name">{id}</span>,
        channel_id: (
          <Tooltip title="Đến kênh Youtube">
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Image preview={false} 
                style={{ paddingRight: '10px', filter: 'grayscale(30)' }} height="30px"
                src={BlackListImg}
              />
              <a href={`https://www.youtube.com/channel/${  channel_id}`} target="_blank" rel="noopener noreferrer">
                <span className="order-id">{channel_id}</span>
              </a>
            </div>
          </Tooltip>
        ),
        time: <span className="customer-name">{time}</span>,
        reason: <span className="ordered-date">{reason}</span>,
        action: (
          <div className="table-actions">
            <Tooltip title="Xóa">
              <Button className="btn-icon" type="danger" to="#" shape="circle">
                <FeatherIcon icon="trash-2" size={16} />
              </Button>
            </Tooltip>
          </div>
        ),
      });
    });
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Channel ID',
      dataIndex: 'channel_id',
      key: 'channel_id',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Lí do',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

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
      <PageHeader
        ghost
        title="BlackList"
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
            <Col xs={24}>
              <TopToolBox>
                <Row gutter={15} className="justify-content-center">
                  <Col lg={6} xs={24}>
                    <div className="table-search-box">
                      <AutoComplete onSearch={debounce(handleSearch, 500)} dataSource={notData} width="100%" patterns />
                    </div>
                  </Col>
                  <Col xxl={14} lg={16} xs={24}>
                    <></>
                  </Col>
                  <Col xxl={4} xs={24}>
                    <div className="table-toolbox-actions">
                      <Button size="small" type="secondary" transparented>
                        Export
                      </Button>
                      <Button size="small" type="primary">
                        <FeatherIcon icon="plus" size={12} /> Add Order
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
                  dataSource={dataSource}
                  columns={columns}
                  loading={isLoading}
                  pagination={{ pageSize: 20, showSizeChanger: true, total: blackListChannel.length }}
                />
              </TableWrapper>
            </Col>
          </Row>
        </Cards>
      </Main>
    </>
  );
}

export default BlackList;
