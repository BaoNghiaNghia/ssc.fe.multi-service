import React, { useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import TableServer from './overview/TableServer';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';


function ServerManage() {
  const searchData = useSelector((state) => state.headerSearchData);
  const [state, setState] = useState({
    notData: searchData,
    activeClass: 'all',
    current: 0,
    pageSize: 0,
  });

  const { notData } = state;

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
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={24} md={24} xs={24}>
            <Cards 
              title="Danh sách server"
              isbutton={
                <div className="card-nav">
                  <Button type="primary">
                    <FeatherIcon icon="plus" size={14} />
                    Cập nhật
                  </Button>
                </div>
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
