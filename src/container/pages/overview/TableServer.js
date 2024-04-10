import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Pagination, Badge, Tooltip, Dropdown, Button } from 'antd';
import moment from 'moment';
import { LuLink2, LuTrash2 } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { CgServer } from "react-icons/cg";
import { BiLogoGmail } from "react-icons/bi";
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectListAssignees, ProjectList } from '../style';

function TableServer() {
  const { project, listServer } = useSelector((state) => {
    return {
      project: state?.projects?.data,
      listServer: state?.servers?.listServer
    }
  });
  const [state, setState] = useState({
    projects: project,
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  useEffect(() => {
    if (project) {
      setState({
        projects: project,
      });
    }
  }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  const dataSource = [];

  const handleDelete = (id) => {
     
  }

  if (listServer.length > 0) {
    listServer.map((value, index) => {
      const color = value.run >= 15 ? 'green' : ((value.run < 15 && value.run > 5) ? 'orange' : 'red');

      const colorObj = value.run >= 15 
        ? { backgroundColor: '#0080001a', border: '2px solid green', color: 'green', padding: '4px 12px', borderRadius: '10px', fontWeight: 'bold' }
        : ((value.run < 15 && value.run > 5) 
            ? { backgroundColor: '#ffa5002e', border: '2px solid orange', color: '#d58200', padding: '4px 12px', borderRadius: '10px', fontWeight: 'bold' }
            : { backgroundColor: '#ff000026', border: '2px solid red', color: 'red', padding: '4px 12px', borderRadius: '10px', fontWeight: 'bold' });

      const threadString = `${value?.run  } / ${  value?.thread}`;

      return dataSource.push({
        key: index,
        server: value.computer_name,
        thread: (
          <span style={colorObj}>
            <Badge dot color={color} style={{ paddingRight: '5px' }} />
            {threadString}
          </span>
        ),
        limit: (
          <Tooltip title={(
            <>
              <div style={{ marginRight: '12px'}}>Subscribe: {value?.limit_day}</div>
              <div style={{ marginRight: '12px' }}>Comment: {value?.limit_day}</div>
              <div style={{ marginRight: '12px' }}>Like: {value?.limit_day}</div>
            </>
          )}>
            <span>
              <span style={{ marginRight: '12px'}}><CgServer fontSize={17} /> {value?.limit_day}</span>
              <span style={{ marginRight: '12px',  color: '#EB5757' }}><CgServer fontSize={17} color='#EB5757' /> {value?.limit_day}</span>
              <span style={{ marginRight: '12px',  color: '#27AE60' }}><CgServer fontSize={17} color='#27AE60' /> {value?.limit_day}</span>
            </span>
          </Tooltip>
        ),
        reset: (
          <span style={{ }}>{value?.reset_time}h</span>
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
              <span style={{ marginRight: '12px', }}><BiLogoGmail style={{ marginBottom: 0 }} fontSize={17} /> {value?.account_live}</span>
              <span style={{ marginRight: '12px',  color: '#27AE60' }}><BiLogoGmail fontSize={17} color='#27AE60' /> {value?.account_work}</span>
              <span style={{ marginRight: '12px',  color: '#EB5757' }}><BiLogoGmail fontSize={17} color='#EB5757' /> {value?.account_die}</span>
            </span>
          </Tooltip>
        ),
        lastReset: (
          <span>{moment.unix(value.last_action_time).fromNow()}</span>
        ),
        action: (
          <div>
            <Tooltip title="Khởi động lại">
              <Button size="default" shape="round" type="default" style={{ marginRight: '5px' }}>
                <GrPowerReset style={{ marginTop: '5px' }}/>
              </Button>
            </Tooltip>
            <Tooltip title="Link">
              <Button size="default" shape="round" type="default" style={{ marginRight: '5px' }}>
                <LuLink2 style={{ marginTop: '5px' }} />
              </Button>
            </Tooltip>
            <Tooltip title="Sửa">
              <Button size="default" shape="round" type="default" style={{ marginRight: '5px' }}>
                <FiEdit2 style={{ marginTop: '5px' }} />
              </Button>
            </Tooltip>
            <Tooltip title="Xóa">
              <Button size="default" shape="round" type="default">
                <LuTrash2 style={{ marginTop: '5px' }} />
              </Button>
            </Tooltip>
          </div>
        ),
      });
    });
  }

  // if (projects.length)
  //   projects.map((value) => {
  //     const { id, title, status, category, percentage } = value;
  //     return dataSource.push({
  //       key: id,
  //       project: (
  //         <ProjectListTitle>
  //           <Heading as="h4">
  //             <Link to={`/admin/project/projectDetails/${id}`}>{title}</Link>
  //           </Heading>

  //           <p>{category}</p>
  //         </ProjectListTitle>
  //       ),
  //       startDate: <span className="date-started">26 Dec 2019</span>,
  //       deadline: <span className="date-finished">18 Mar 2020</span>,
  //       assigned: (
  //         <ProjectListAssignees>
  //           <ul>
  //             <li>
  //               <img src={require(`../../../static/img/users/1.png`)} alt="" />
  //             </li>
  //             <li>
  //               <img src={require(`../../../static/img/users/2.png`)} alt="" />
  //             </li>
  //             <li>
  //               <img src={require(`../../../static/img/users/3.png`)} alt="" />
  //             </li>
  //             <li>
  //               <img src={require(`../../../static/img/users/4.png`)} alt="" />
  //             </li>
  //             <li>
  //               <img src={require(`../../../static/img/users/5.png`)} alt="" />
  //             </li>
  //             <li>
  //               <img src={require(`../../../static/img/users/6.png`)} alt="" />
  //             </li>
  //             <li>
  //               <img src={require(`../../../static/img/users/7.png`)} alt="" />
  //             </li>
  //           </ul>
  //         </ProjectListAssignees>
  //       ),
  //       status: <Tag className={status}>{status}</Tag>,
  //       completion: (
  //         <div className="project-list-progress">
  //           <Progress percent={status === 'complete' ? 100 : percentage} strokeWidth={5} className="progress-primary" />
  //           <p>12/15 Task Completed</p>
  //         </div>
  //       ),
  //       action: (
  //         <Dropdown
  //           className="wide-dropdwon"
  //           content={
  //             <>
  //               <Link to="#">View</Link>
  //               <Link to="#">Edit</Link>
  //               <Link to="#">Delete</Link>
  //             </>
  //           }
  //         >
  //           <Link to="#">
  //             <FeatherIcon icon="more-horizontal" size={18} />
  //           </Link>
  //         </Dropdown>
  //       ),
  //     });
  //   });

  const columns = [
    {
      title: 'Máy',
      dataIndex: 'server',
      key: 'server',
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
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const rowSelection = {
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
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
                pagination={false}
                dataSource={dataSource}
                columns={columns}
            />
            </div>
          </ProjectList>
        </Cards>
      </Col>
      <Col xs={24} className="pb-30">
        <ProjectPagination>
          {projects.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </ProjectPagination>
      </Col>
    </Row>
  );
}

export default TableServer;
