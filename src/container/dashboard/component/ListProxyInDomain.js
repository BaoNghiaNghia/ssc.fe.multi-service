/* eslint-disable camelcase */
import React, { useState} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Modal,  Table, Switch, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/proxy/actions';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE, FixedServiceTemp } from '../../../variables';
import { numberWithCommas } from '../../../utility/utility';

function ListProxyInDomain({ currentState, setState }) {
  const dispatch = useDispatch();
  const [formDelService] = Form.useForm();

  const { isListProxyModal } = currentState;

  const { detailService, listProxyInDomain, isLoading } = useSelector(state => {
    return {
      detailService: state?.settingService?.detailService,
      listProxyInDomain: state?.proxy?.listProxyInDomain,
      isLoading: state?.proxy?.loading
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitPage] = useState(DEFAULT_PERPAGE);

  const initCategory = FixedServiceTemp.filter(item => item?.category === detailService?.category);

  const handleOk = () => {
    try {
      const requestData = {
        id: detailService.id,
        category: detailService?.category,
        platform: detailService?.platform || 'Youtube',
        service_type: detailService?.service_type,
        type: initCategory?.length && initCategory[0]?.type,
        description: detailService?.description,
        enabled: !detailService?.enabled,
        min: detailService?.min,
        max: detailService?.max,
        max_threads: detailService?.max_threads,
        max_threads_3000: detailService?.max_threads_3000,
        max_threads_5000: detailService?.max_threads_5000,
        name: detailService?.name,
        price_per_10: detailService?.price_per_10,
        priority: detailService?.priority
      }
  
      dispatch(actions.updateServiceBegin(requestData));

      setState({
        isListProxyModal: false,
      });
    } catch (err) {
      console.log(err);
      setState({
        isListProxyModal: false,
      });
      formDelService.resetFields();
    }
  };

  const handleCancel = () => {
    setState({
      isListProxyModal: false,
    });

    dispatch(actions.getListProxyInDomainBegin({}))
  }

  const dataSource = [];
  
  if (listProxyInDomain?.items?.length) {
    listProxyInDomain?.items?.map((value, key) => {
      const { id, port_start, geo, domain, used_count, total, enable, proxy_string, using } = value;
      return dataSource.push({
        key: key + 1,
        id: <span className="customer-name">{id}</span>,
        proxy_string: (
          <>
            {
              using ? <>
                <p style={{ fontWeight: '700', padding: 0, margin: 0, color: '#538d81' }}>{proxy_string}</p>
              </> : <>
                <p style={{ fontWeight: '700', padding: 0, margin: 0 }}>{proxy_string}</p>
              </>
            }
            <span style={{ fontSize: '0.8em', }}>
              {
                using ? <>
                  <span style={{ fontWeight: 800, display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
                    <Badge dots color="green" size='small' style={{ marginRight: '5px' }} />
                    <span style={{ padding: 0 }}>Đang sử dụng</span>
                  </span>
                </> : <>
                  <span>
                    Không sử dụng
                  </span>
                </>
              }
            </span>
          </>
        ),
        port_start: <span className="customer-name">{port_start}</span>,
        used_count: <>
          {
            used_count ? <>
              <span style={{ fontWeight: '700' }}>{numberWithCommas(used_count || 0)}</span>
            </> : <>
              <span style={{ color: 'gray' }}>0</span>
            </>
          }
        </>,
        enable: (
          <Switch checked={enable} />
        ),
      });
    });
  }

  const columns = [
    {
      title: 'Proxy',
      dataIndex: 'proxy_string',
      key: 'proxy_string',
    },
    {
      title: 'Sử dụng',
      dataIndex: 'used_count',
      key: 'used_count',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'enable',
      key: 'enable',
    },
  ];

  return (
    <>
      <Modal
        width='800px'
        open={isListProxyModal}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div >
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Danh sách Proxy</p>
                {
                  listProxyInDomain?.items ? (
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <span style={{ fontWeight: '700', padding: 0, margin: 0, fontSize: '0.85em' }}>
                        <span style={{ fontSize: '0.6em', marginRight: '10px' }}>DOMAIN  </span>
                        <span>{listProxyInDomain?.items && listProxyInDomain?.items[0]?.domain}</span>
                      </span>
                      {
                        listProxyInDomain?.items && listProxyInDomain?.items[0]?.geo ? (
                          <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginLeft: '40px' }}>
                            <span style={{ fontSize: '0.6em', marginRight: '10px' }}>GEO  </span>
                            <img src={require(`../../../static/img/flag/${listProxyInDomain?.items && listProxyInDomain?.items[0]?.geo}.png`)} alt="" width="18px" height="18px" />
                            <span style={{ marginLeft: '8px' }}>{listProxyInDomain?.items && listProxyInDomain?.items[0]?.geo.toUpperCase()}</span>
                          </div>
                        ) : <></>
                      }
                      {
                        listProxyInDomain?.meta ? (
                          <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center', marginLeft: '40px' }}>
                            <span style={{ fontSize: '0.6em' }}>Số lượng:  </span>
                            <span style={{ marginLeft: '8px',  }}>{numberWithCommas(listProxyInDomain?.meta?.total || 0)} <span style={{ fontSize: '0.6em' }}>proxies</span></span>
                          </div>
                        ) : <></>
                      }
                    </div>
                  ) : <></>
                }
              </div>
            </div>
          </>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form name="add_service" layout="vertical" form={formDelService}>
          <Row gutter="10">
            <Col sm={24}>
              <Table
                size='small'
                loading={isLoading}
                dataSource={dataSource}
                columns={columns}
                // pagination={{ pageSize: 10, showSizeChanger: true, total: listProxyInDomain?.items?.length }}
                pagination={{
                  current: listProxyInDomain?.meta?.current_page,
                  defaultPageSize: listProxyInDomain?.meta?.count,
                  pageSize: listProxyInDomain?.meta?.per_page,
                  total: listProxyInDomain?.meta?.total,
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
                          <p className='mx-4'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> proxy</p>
                      </>
                  },
                  totalBoundaryShowSizeChanger: 100,
                  size: "small"
                }}
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

ListProxyInDomain.propTypes = {
  currentState: PropTypes.object,
  setState: PropTypes.func
};

export default ListProxyInDomain;
