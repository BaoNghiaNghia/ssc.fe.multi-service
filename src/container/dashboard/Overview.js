import React, { lazy, Suspense, useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { CardBarChart2, EChartCard, GalleryNav } from './style';
import { galleryFilter } from '../../redux/gallary/actionCreator';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

// const TotalRevenue = lazy(() => import('./overview/crm/TotalRevenue'));
const EfficiencyAction = lazy(() => import('./overview/business/EfficiencyAction'));
const RatioYoutubeSuccess = lazy(() => import('./overview/business/RatioYoutubeSuccess'));
const ClosedDeals = lazy(() => import('./overview/crm/ClosedDeals'));
const CardGroup = lazy(() => import('./overview/business/CardGroup'));
const AnalyseYoutube = lazy(() => import('./overview/business/AnalyseYoutube'));

function Overview() {
  const dispatch = useDispatch();

  const { gallery, isLoading } = useSelector((state) => {
    return {
      gallery: state?.gallery?.data,
      isLoading: state?.gallery?.loading,
    };
  });

  const [state, setState] = useState({
    activeClass: '',
  });

  const handleChange = (value) => {
    dispatch(galleryFilter('category', value));

    setState({ ...state, activeClass: value });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Tổng quan"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Thêm mới
            </Button>
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={state.activeClass === '' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('')}
                    to="#"
                  >
                    <GrNotification fontSize={15} className='mr-3'/> Subscribe
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'webDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('webDesign')}
                    to="#"
                  >
                    <FaRegCommentDots fontSize={15} className='mr-3'/> Comment
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'uiDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('uiDesign')}
                    to="#"
                  >
                    <AiOutlineLike fontSize={17} className='mr-3'/> Like
                  </Link>
                </li>
              </ul>
            </GalleryNav>
          </div>,
        ]}
      />
      <Main>
        <Row>
          {isLoading ? (
            <Col xs={24}>
              <div className="spin">
                <Spin />
              </div>
            </Col>
          ) : (
            gallery.map((item) => {
              const { id } = item;
              return (
                <Col key={id} xxl={1} lg={8} sm={12} xs={24}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <p>{item?.type}</p>
                  </Suspense>
                </Col>
              );
            })
          )}
        </Row>
        <Row gutter={15}>
          <Col xxl={5} md={12} sm={8} xs={12}>
            <Cards headless gradient='45deg, #FFF9E3, white' border>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span>Mail chưa được gọi</span>
                    <Heading as="h1">100</Heading>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={5} md={12} sm={8} xs={12}>
            <Cards headless gradient='45deg, #FFF9E3, white'>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span>Tổng point hôm nay</span>
                    <Heading as="h1">1,394,932</Heading>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={4} md={12} sm={8} xs={12}>
            <Cards headless gradient='45deg, #FFF9E3, white'>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span>Tổng mail bị lỗi</span>
                    <Heading as="h1">33</Heading>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={5} md={12} sm={8} xs={12}>
            <Cards headless gradient='45deg, #FFF9E3, white'>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span>Mail die trong ngày</span>
                    <Heading as="h1">7,461</Heading>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={5} md={12} sm={8} xs={12}>
            <Cards headless gradient='45deg, #FFF9E3, white'>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span>Mail hoạt động 24h</span>
                    <Heading as="h1">7,461</Heading>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
        </Row>
        {/* <Row>
          <GalleryNav>
            <ul>
              <li>
                <Link
                  className={state.activeClass === '' ? 'active' : 'deactivate'}
                  onClick={() => handleChange('')}
                  to="#"
                >
                  Subscribe
                </Link>
              </li>
              <li>
                <Link
                  className={state.activeClass === 'webDesign' ? 'active' : 'deactivate'}
                  onClick={() => handleChange('webDesign')}
                  to="#"
                >
                  Comment
                </Link>
              </li>
              <li>
                <Link
                  className={state.activeClass === 'uiDesign' ? 'active' : 'deactivate'}
                  onClick={() => handleChange('uiDesign')}
                  to="#"
                >
                  Like
                </Link>
              </li>
            </ul>
          </GalleryNav>
        </Row> */}

        <Row gutter={15}>
          <Col xxl={6} xs={12}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <CardGroup />
            </Suspense>
          </Col>
          <Col xxl={18} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AnalyseYoutube />
            </Suspense>
          </Col>
        </Row>

        <Row gutter={15}>
          <Col xxl={8} xl={8} lg={8} xs={12}>
            <Row gutter={15}>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='90deg, #eef7ff, white'>
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tỉ lệ Subscribe</span>
                        <Heading as="h1">86%</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='90deg, #eef7ff, white' >
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Quest lỗi/Tổng quest</span>
                        <Heading as="h1">0/0</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='90deg, #eef7ff, white' >
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tổng Order hôm nay</span>
                        <Heading as="h1">13</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='90deg, #eef7ff, white' >
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tổng Sub hôm nay</span>
                        <Heading as="h1">82,275</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='90deg, #eef7ff, white' >
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tổng luồng/thiếu</span>
                        <Heading as="h1">1,330/1,200</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='90deg, #eef7ff, white'>
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tổng point hôm nay</span>
                        <Heading as="h1">5,089,515</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
            </Row>
          </Col>
          <Col xxl={16} xl={16} lg={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <RatioYoutubeSuccess title="Tỉ lệ Subscribe thành công" />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={15}>
          
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <ClosedDeals />
            </Suspense>
          </Col>
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <EfficiencyAction title="Hiệu suất subscribe" />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Overview;
