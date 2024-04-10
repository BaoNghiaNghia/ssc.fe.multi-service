import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import TableServer from './overview/TableServer';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Dropdown } from '../../components/dropdown/dropdown';
import actions from '../../redux/servers/actions';

function ServerManage() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);
  const [state, setState] = useState({
    notData: searchData,
    activeClass: 'all',
    current: 0,
    pageSize: 0,
  });

  const { notData } = state;

  useEffect(() => {
    dispatch(actions.computerDataListBegin());
  }, []);

  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  return (
    <>
      <PageHeader
        title="Quản lý máy"
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
              <TableServer />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ServerManage;
