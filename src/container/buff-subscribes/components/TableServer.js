import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Pagination, Badge, Tooltip, Button } from 'antd';
import moment from 'moment';
import { TbServerBolt } from "react-icons/tb";
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import { CgServer } from "react-icons/cg";
import { BiLogoGmail } from "react-icons/bi";
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectList } from '../style';
import { numberWithCommas } from '../../../utility/utility';
import { DEFAULT_PAGESIZE, DEFAULT_PERPAGE } from '../../../variables';


function TableServer() {
  const { listServer } = useSelector((state) => {
    return {
      listServer: state?.buffSubscribe?.listComputer?.items,
    }
  });

  const [state, setState] = useState({
    current: 0,
    pageSize: 0,
  });

  const columns = [
    {
      title: 'Máy',
      dataIndex: 'server',
      key: 'server',
    },
    {
      title: 'Cấu hình',
      dataIndex: 'configuration',
      key: 'configuration',
    },
    {
      title: 'Số luồng',
      dataIndex: 'thread',
      key: 'thread',
    },
    {
      title: 'Limit',
      dataIndex: 'limit',
      key: 'limit',
    },
    {
      title: 'Reset',
      dataIndex: 'reset',
      key: 'reset',
    },
    {
      title: 'Mail',
      dataIndex: 'mail',
      key: 'mail',
    },
    {
      title: 'Reset lần cuối',
      dataIndex: 'lastReset',
      key: 'lastReset',
    },
  
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const dataSource = [];

  if (listServer?.length > 0) {
    listServer?.map((value, index) => {
      const color = value.run >= 15 ? 'green' : ((value.run < 15 && value.run > 5) ? 'orange' : 'red');

      const colorObj = value.run >= 15 
        ? { backgroundColor: '#0080001a', border: '2px solid green', color: 'green', padding: '4px 12px', borderRadius: '10px', fontWeight: 'bold' }
        : ((value.run < 15 && value.run > 5) 
            ? { backgroundColor: '#ffa5002e', border: '2px solid orange', color: '#d58200', padding: '4px 12px', borderRadius: '10px', fontWeight: 'bold' }
            : { backgroundColor: '#ff000026', border: '2px solid red', color: 'red', padding: '4px 12px', borderRadius: '10px', fontWeight: 'bold' });

      const threadString = `${value?.run || 0  } / ${  value?.thread}`;

      return dataSource.push({
        key: index,
        server: (
          <span style={{ fontSize: '1.1em', display: 'inline-flex', alignItems: 'flex-start' }}>
            <img src={require('../../../static/img/icon/server.png')} alt="" width={30}/>
            <div style={{ margin: 0, padding: 0 }}>
              <p style={{ fontWeight: 600, margin: 0, padding: 0 }}>{value?.name}</p>
              <p style={{ fontSize: '0.7em', margin: 0, padding: 0 }}><span style={{ fontWeight: "700" }}>Link: </span> {value?.link}</p>
              <p style={{ fontSize: '0.7em', margin: 0, padding: 0 }}><span style={{ fontWeight: "700" }}>IP: </span> {value?.ip}</p>
            </div>
          </span>
        ),
        configuration: (
          <>
            <div style={{ margin: 0, padding: 0 }}>CPU: {value?.cpu}</div>
            <div style={{ margin: 0, padding: 0 }}>Ram: {value?.ram}</div>
          </>
        ),
        thread: (
          <span style={colorObj}>
            <Badge dot color={color} style={{ paddingRight: '5px' }} />
            {threadString}
          </span>
        ),
        limit: (
          <Tooltip title={(
            <>
              <div style={{ marginRight: '12px' }}>Subscribe: {value?.limit_per_day}</div>
            </>
          )}>
            <span>
              <span style={{ marginRight: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                <CgServer fontSize={17} /> {value?.limit_per_day}
              </span>
            </span>
          </Tooltip>
        ),
        reset: (
          <span>{value?.reset_hour} h</span>
        ),
        mail: (
          <Tooltip title={(
            <>
              <div>Mail sống: {value?.account_live}</div>
              <div>Mail hoạt động: {value?.account_work}</div>
              <div>Mail chết: {value?.account_die}</div>
            </>
          )}>
            <span>
              <span style={{ marginRight: '12px', fontWeight: 600,display: 'inline-flex', alignItems: 'center' }}>
                <BiLogoGmail style={{ marginBottom: 0 }} fontSize={19} /> {numberWithCommas(value?.account_live)}
              </span>
              <span style={{ marginRight: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                <BiLogoGmail fontSize={19} color='#27AE60' /> {numberWithCommas(value?.account_work)}
              </span>
              <span style={{ marginRight: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                <BiLogoGmail fontSize={19} color='#EB5757' /> {numberWithCommas(value?.account_die)}
              </span>
            </span>
          </Tooltip>
        ),
        lastReset: (
          <>
            <span>
              {
                value?.last_action_at ? (
                  <span style={{ fontWeight: '700', color: '#8b8b8b' }}>{moment(value?.last_action_at).format('HH:mm DD/MM')}</span>
                ) : (
                  <span style={{ color: '#cdcdcd' }}>Chưa reset</span>
                )
              }
            </span>
          </>
        ),
        action: (
          <div className="table-actions">
            {/* <Tooltip title="Khởi động lại">
              <Button size="default" shape="circle" type="default" to="#" style={{ marginRight: '5px' }} className="btn-icon">
                <GrPowerReset style={{ marginTop: '4px' }}/>
              </Button>
            </Tooltip> */}
            {/* <Tooltip title="Link">
              <Button size="default" shape="circle" type="default" to="#" style={{ marginRight: '5px' }}  className="btn-icon">
                <LuLink2 style={{ marginTop: '4px' }} />
              </Button>
            </Tooltip> */}
            <Tooltip title="Sửa">
              <Button size="default" shape="circle" type="default" to="#" style={{ marginRight: '5px' }}  className="btn-icon">
                <FeatherIcon icon="edit" size={16} style={{ marginTop: '4px' }} />
              </Button>
            </Tooltip>
            <Tooltip title="Chi tiết">
              <Button size="default" shape="circle" type="default" to="#" style={{ marginRight: '5px' }}  className="btn-icon">
                <FeatherIcon icon="eye" size={16} style={{ marginTop: '4px' }} />
              </Button>
            </Tooltip>
            {/* <Tooltip title="Xóa">
              <Button size="default" shape="circle" type="default" to="#" className="btn-icon">
                <LuTrash2 style={{ marginTop: '4px' }} />
              </Button>
            </Tooltip> */}
          </div>
        ),
      });
    });
  }

  const rowSelection = {
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return (
    <Row gutter={25}>
      <Col xs={24}>
        <Cards headless>
          <ProjectList>
            <div className="table-responsive">
              <Table
                rowSelection={rowSelection}
                dataSource={dataSource}
                columns={columns}
                pagination={{
                  current: listServer?.meta?.current_page,
                  defaultPageSize: listServer?.meta?.count,
                  pageSize: listServer?.meta?.per_page,
                  total: listServer?.meta?.total,
                  showSizeChanger: true,
                  pageSizeOptions: DEFAULT_PAGESIZE,
                  position: ['bottomCenter'],
                  responsive: true,
                  showTotal(total, range) {
                      return <p className='mx-4 mt-1'>Tổng cộng <span style={{ fontWeight: 'bold' }}>{numberWithCommas(total || 0)}</span> server</p>
                  },
                  totalBoundaryShowSizeChanger: 100,
                  size: "small"
                }}
            />
            </div>
          </ProjectList>
        </Cards>
      </Col>
    </Row>
  );
}

export default TableServer;
