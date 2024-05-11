/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Switch } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { TopToolBox } from './style';
import AddDomain from './component/AddDomain';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import actions from '../../redux/proxy/actions';


function ProxyManage() {
  const dispatch = useDispatch();
  const { searchData, orders, isLoading, listDomain } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      orders: state.orders.data,
      isLoading: state?.proxy?.loading,
      listDomain: state?.proxy?.listDomain
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    isAddDomainModal: false,
    item: orders,
    selectedRowKeys: [],
  });

  const { notData, item, selectedRowKeys } = state;

  useEffect(() => {
    if (orders) {
      setState({
        item: orders,
        selectedRowKeys,
      });
    }
  }, [orders, selectedRowKeys]);

  useEffect(() => {
    dispatch(actions.listAllDomainBegin());
  }, [dispatch]);

  const handleSearch = searchText => {
    const data = searchData.filter(value => value.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const dataSource = [];
  
  if (listDomain?.items?.length) {
    listDomain?.items?.map((value, key) => {
      const { id, port_start, geo, domain, used_count, total, enable } = value;
      return dataSource.push({
        key: key + 1,
        id: <span className="customer-name">{id}</span>,
        domain: (
          <>
            <span className="customer-name" style={{ fontWeight: '700' }}>{domain}</span>
            <span className="customer-name" style={{ fontSize: '0.7em' }}>ID: {id}</span>
          </>
        ),
        geo: (
          <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
            <img src={require(`../../static/img/flag/${geo}.png`)} alt="" />
            <span style={{ marginLeft: '5px' }}>{geo.toUpperCase()}</span>
          </div>
        ),
        port_start: <span className="customer-name">{port_start}</span>,
        total: <span className="customer-name">{total}</span>,
        used_count: <span className="customer-name">{used_count}</span>,
        enable: (
          <Switch checked={enable} onChange={() => {
            setState({
              isOpenDel: true
            });
            dispatch(actions.modalDetailServiceBegin(value));
          }} />
        )
      });
    });
  }

  const columns = [
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
    },
    {
      title: 'GEO',
      dataIndex: 'geo',
      key: 'geo',
    },
    {
      title: 'Port',
      dataIndex: 'port_start',
      key: 'port_start',
    },
    {
      title: 'Số lượng',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Đã sử dụng',
      dataIndex: 'used_count',
      key: 'used_count',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'enable',
      key: 'enable',
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

  const { isAddDomainModal } = state;

  return (
    <>
      <AddDomain
        isOpen={isAddDomainModal}
        setState={setState}
      />
      <PageHeader
        ghost
        title="Quản lý proxy"
      />
      <Main>
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
                      <Button
                        size="small"
                        type="primary"
                        onClick={() => {
                          setState({
                            isAddDomainModal: true,
                          });
                        }}
                      >
                        <FeatherIcon icon="plus" size={12} /> Thêm Proxy
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
                  pagination={{ pageSize: 20, showSizeChanger: true, total: listDomain.length }}
                />
              </TableWrapper>
            </Col>
          </Row>
        </Cards>
      </Main>
    </>
  );
}

export default ProxyManage;
