import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { BiLogoGmail } from 'react-icons/bi';
import { TbServerBolt } from 'react-icons/tb';
import TableServer from './overview/TableServer';
import { Pstates } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Dropdown } from '../../components/dropdown/dropdown';
import actions from '../../redux/servers/actions';
import Heading from '../../components/heading/heading';
import { numberWithCommas } from '../../utility/utility';

function ServerManage() {
  const dispatch = useDispatch();
  const { searchData, listServer } = useSelector((state) => {
    return {
      searchData: state?.headerSearchData,
      listServer: state?.servers?.listServer,
      preIsLoading: state.chartContent.perLoading,
    }
  });

  const [stateTab, setStateTab] = useState({
    performance: 'year',
    performanceTab: 'users',
  });

  const { performance, performanceTab } = stateTab;

  const [state, setState] = useState({
    notData: {},
    activeClass: 'all',
    current: 0,
    pageSize: 0,
  });

  const { notData } = state;

  useEffect(() => {
    dispatch(actions.computerDataListBegin());
  }, []);

  const handleSearch = (searchText) => {
  };

  const fullThreadServer = listServer.filter(item => item?.run >=15).length;
  const nonFullThreadServer = listServer?.filter(item => item?.run < 15 && item?.run > 5).length;
  const aBitThreadServer = listServer?.filter(item => item?.run <= 5).length;

  const totalThread = listServer?.reduce((total, comp) => total + comp.run, 0) || 0;

  const accountTotal = (listServer.length > 0) && numberWithCommas(listServer?.map(item => item?.total_account)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountAlive = (listServer.length > 0) && numberWithCommas(listServer?.map(item => item?.account_live)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountWork = (listServer.length > 0) && numberWithCommas(listServer?.map(item => item?.account_work)?.reduce((accumulator, item) => accumulator + item) || 0);
  const accountDie = (listServer.length > 0) && numberWithCommas(listServer?.map(item => item?.account_die)?.reduce((accumulator, item) => accumulator + item) || 0);

  return (
    <>
      <PageHeader
        title="Quản lý Server"
        buttons={[
          <div key="search" className="page-header-actions">
            <AutoComplete
              onSearch={handleSearch}
              dataSource={notData}
              placeholder="Nhập và tìm server"
              width="100%"
              patterns
            />
          </div>
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={24} md={24} xs={24}>
            <Cards 
              title="Danh sách server"
              isbutton={
                <Form name="sDash_vertical-form" layout="inline">
                  <Dropdown size="small" placement="bottomLeft" >
                    <Button className="btn-outlined" size="small" outlined type="light">
                      Cập nhật
                    </Button>
                  </Dropdown>
                </Form>
              } 
            >
              <Pstates>
                <div
                  // onClick={() => onPerformanceTab('users')}
                  className={`growth-upward ${performanceTab === 'users' && 'active'}`}
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ fontWeight: 700 }}>Servers</p>
                  <Heading as="h1">
                    {listServer.length}
                  </Heading>
                </div>
                <div
                  // onClick={() => onPerformanceTab('sessions')}
                  className={`growth-upward ${performanceTab === 'sessions' && 'active'}`}
                  role="button"
                  tabIndex=""
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color='green' fontSize={17} style={{ marginRight: '5px' }} />Server luồng đủ</p>
                  <Heading as="h1" >
                    <span style={{ color: 'green !important' }}>{fullThreadServer}</span>
                  </Heading>
                </div>
                <div
                  // onClick={() => onPerformanceTab('bounce')}
                  className={`growth-downward ${performanceTab === 'bounce' && 'active'}`}
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color='orange' fontSize={17} style={{ marginRight: '5px' }} />Server luồng trung bình</p>
                  <Heading as="h1">
                    {nonFullThreadServer}
                  </Heading>
                </div>
                <div
                  // onClick={() => onPerformanceTab('duration')}
                  className={`growth-upward ${performanceTab === 'duration' && 'active'}`}
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><TbServerBolt color="red" fontSize={17} style={{ marginRight: '5px' }} />Server luổng thiếu</p>
                  <Heading as="h1">
                    {aBitThreadServer}
                  </Heading>
                </div>
                <div
                  className="growth-upward active"
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ fontWeight: 700 }}><span>Tổng Mail</span></p>
                  <Heading as="h1">
                    {accountTotal || 0}
                  </Heading>
                </div>
                <div
                  className={`growth-upward ${performanceTab === 'duration' && 'active'}`}
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} /><span>Mail sống</span></p>
                  <Heading as="h1">
                    {accountAlive || 0}
                  </Heading>
                </div>
                <div
                  className={`growth-upward ${performanceTab === 'duration' && 'active'}`}
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} color='#27AE60' /><span>Mail hoạt động</span></p>
                  <Heading as="h1">
                    {accountWork || 0}
                  </Heading>
                </div>
                <div
                  className={`growth-upward ${performanceTab === 'duration' && 'active'}`}
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ display: 'inline-flex', alignItems: 'center' }}><BiLogoGmail style={{ marginRight: '5px' }} fontSize={19} color='#EB5757' /><span>Mail chết</span></p>
                  <Heading as="h1">
                    {accountDie || 0}
                  </Heading>
                </div>
                <div
                  className={`growth-upward ${performanceTab === 'users' && 'active'}`}
                  role="button"
                  tabIndex="0"
                >
                  <p style={{ fontWeight: 700 }}>Tổng Luồng</p>
                  <Heading as="h1">
                    {totalThread}
                  </Heading>
                </div>
              </Pstates>
              <TableServer />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ServerManage;
