/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Select, Button, Modal,  Typography, Table, Switch, Badge } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/serviceSettings/actions';
import { COLOR_GENERAL, FixedServiceTemp } from '../../../variables';
import { numberWithCommas } from '../../../utility/utility';

const { Paragraph, Text } = Typography;

function ListProxyInDomain({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formDelService] = Form.useForm();

  const { postLoading, detailService, listProxyInDomain } = useSelector(state => {
    return {
      postLoading: state?.settingService?.postLoading,
      detailService: state?.settingService?.detailService,
      listProxyInDomain: state?.proxy?.listProxyInDomain
    };
  });

  const initCategory = FixedServiceTemp.filter(item => item?.category === detailService?.category);

  const currentStateWorking = detailService?.enabled;

  useEffect(() => {
    dispatch(actions.fetchListServiceBegin({}));
  }, [dispatch]);

  const handleOk = () => {
    try {
      const requestData = {
        id: detailService.id,
        category: detailService?.category,
        platform: detailService?.platform || 'Youtube',
        service_type: detailService?.service_type,
        type: initCategory[0]?.type,
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
  }

  const dataSource = [];
  
  if (listProxyInDomain?.items?.length) {
    listProxyInDomain?.items?.map((value, key) => {
      const { id, port_start, geo, domain, used_count, total, enable, proxy_string, using } = value;
      return dataSource.push({
        key: key + 1,
        id: <span className="customer-name">{id}</span>,
        domain: (
          <>
            <p style={{ fontWeight: '700', padding: 0, margin: 0 }}>{domain}</p>
          </>
        ),
        proxy_string: (
          <>
            <p style={{ fontWeight: '700', padding: 0, margin: 0 }}>{proxy_string}</p>
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
        geo: (
          <div style={{ display: 'inline-flex', alignContent: 'center', alignItems: 'center' }}>
            <img src={require(`../../../static/img/flag/${geo}.png`)} alt="" />
            <span style={{ marginLeft: '8px' }}>{geo.toUpperCase()}</span>
          </div>
        ),
        port_start: <span className="customer-name">{port_start}</span>,
        total: <span className="customer-name">{numberWithCommas(total || 0)}</span>,
        used_count: <span className="customer-name">{numberWithCommas(used_count || 0)}</span>,
        enable: (
          <Switch checked={enable} />
        ),
      });
    });
  }

//   {
//     "used_count": 0,
//     "using": false,
//     "enable": true,
//     "created_at": "2024-05-11 09:31:32",
//     "updated_at": "2024-05-11 09:31:32"
// }

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
      title: 'Proxy',
      dataIndex: 'proxy_string',
      key: 'proxy_string',
    },
    {
      title: 'Số lượng',
      dataIndex: 'total',
      key: 'total',
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
        open={isOpen}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Danh sách Proxy</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Danh sách proxy thuộc domain</p>
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
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: 10, showSizeChanger: true, total: listProxyInDomain?.items?.length }}
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

ListProxyInDomain.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default ListProxyInDomain;
