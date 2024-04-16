import React, { lazy, Suspense, useEffect, useState } from 'react';
// import FeatherIcon from 'feather-icons-react';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrNotification } from "react-icons/gr";
import { CardBarChart2, CardBarChartCenter, EChartCard, GalleryNav } from './style';
import { galleryFilter } from '../../redux/gallary/actionCreator';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { FilterCalendar } from '../../components/buttons/calendar-button/FilterCalendar';
import actions from '../../redux/reports/actions';
import { numberWithCommas } from '../../utility/utility';

const EfficiencySubscribe = lazy(() => import('./overview/business/EfficiencyAction'));
const RatioYoutubeSuccess = lazy(() => import('./overview/business/RatioYoutubeSuccess'));
const SubscribeCountAndIncome = lazy(() => import('./overview/crm/SubscribeCountAndIncome'));
const AnalyseYoutube = lazy(() => import('./overview/business/AnalyseYoutube'));

const CardGroup = lazy(() => import('./overview/business/CardGroup'));

function Overview() {
  const dispatch = useDispatch();

  const { fromDate, toDate, todayProfit, ratioSubSvg } = useSelector((state) => {
    return {
      fromDate: state?.reports?.filterRange?.from,
      toDate: state?.reports?.filterRange?.to,
      todayProfit: state?.reports?.profitToday,
      ratioSubSvg: state?.reports?.ratioSubSvg,
      
    }
  });

  useEffect(() => {
    dispatch(actions.reportSubscribeBegin({
      from: fromDate,
      to: toDate,
    }));

    dispatch(actions.countSuccessSubscribeBegin());
    dispatch(actions.computerDataListBegin());
    dispatch(actions.getStatisticsSubscribeReportBegin());
  }, [dispatch]);

  const [state, setState] = useState({
    activeClass: '',
  });

  const handleChange = (value) => {
    dispatch(galleryFilter('category', value));
    setState({ ...state, activeClass: value });
  };

  const todaySubscribePoint = (Number(todayProfit?.total_point_today))*(-1) || 0;
  const todayCommentPoint = 0;
  const todayLikePoint = 0;

  const todayPoint = todayCommentPoint + todaySubscribePoint + todayLikePoint;

  return (
    <>
      <PageHeader
        ghost
        title={(
          <span>
            Tổng quan
          </span>
        )}
        buttons={[
          <div key="1" className="page-header-actions">
            <span style={{ marginRight: '20px', backgroundColor: 'white', padding: '6px 12px', borderRadius: '5px' }}>
              Từ <strong>{fromDate}</strong> đến <strong>{toDate}</strong>
            </span>
            <FilterCalendar />
            {/* <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Thêm mới
            </Button> */}
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={state.activeClass === '' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('')}
                    to="#"
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <GrNotification fontSize={15} className='pr-3'/> <span>Subscribe</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'webDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('webDesign')}
                    to="#"
                  >
                    <FaRegCommentDots fontSize={15} className='mr-3'/> <span>Comment</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'uiDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('uiDesign')}
                    to="#"
                  >
                    <AiOutlineLike fontSize={17} className='mr-3'/> <span>Like</span>
                  </Link>
                </li>
              </ul>
            </GalleryNav>
          </div>,
        ]}
      />
      <Main>
        {/* <Row>
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
        </Row> */}
        <Row gutter={12}>
          <Col xxl={4} md={8} sm={8} xs={12}>
            <Cards headless 
              // gradient='45deg, white, #FFF9E3'
              border
            >
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px' }} />Mail chưa được gọi</span>
                    <Heading as="h1">100</Heading>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={4} md={8} sm={8} xs={12}>
            <Cards headless 
              gradient='0deg, white, #ffeee3'
            >
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px' }} />Mail bị lỗi</span>
                    <Heading as="h1">33</Heading>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={8} md={8} sm={8} xs={12}>
            <Cards headless border 
              gradient={
                todayPoint >= 0 ? '0deg, rgb(255 226 0 / 28%), rgb(220 255 244)' : '0deg, #fff6d947, #ffac8d'
              }
            >
              <EChartCard>
                <div className="card-chunk text-center">
                  <CardBarChartCenter>
                    <span style={{ fontWeight: 600 }}>
                      Tổng point hôm nay (đ)
                    </span>
                    <Heading as="h1" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommas(todayPoint)}</Heading>
                    <span style={{ paddingBottom: '0px', marginBottom: '0px' }}>
                      <span style={{ marginRight: '23px' }}>
                        Subscribe: <strong>{numberWithCommas(todaySubscribePoint)}</strong>
                      </span>
                      <span style={{ marginRight: '23px' }}>
                        Comment: <strong>{numberWithCommas(todayCommentPoint)}</strong>
                      </span>
                      <span>
                        Like: <strong>{numberWithCommas(todayLikePoint)}</strong>
                      </span>
                    </span>
                  </CardBarChartCenter>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={4} md={8} sm={8} xs={12}>
            <Cards headless
              gradient='0deg, white, #ffeee3'
            >
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px' }} />Mail die trong ngày</span>
                    <Heading as="h1">7,461</Heading>
                  </CardBarChart2>
                </div>
              </EChartCard>
            </Cards>
          </Col>
          <Col xxl={4} md={8} sm={8} xs={12}>
            <Cards headless gradient='0deg, white, #e3ffb7'>
              <EChartCard>
                <div className="card-chunk">
                  <CardBarChart2>
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px' }} />Mail hoạt động 24h</span>
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
          <Col xxl={6} xs={8}>
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
          <Col xxl={18} xs={16}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AnalyseYoutube title="Thống kê Subscribe" />
            </Suspense>
          </Col>
        </Row>

        <Row gutter={15}>
          <Col xxl={6} lg={9} md={10} xs={12}>
            <Row gutter={15}>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='64deg, white, white'>
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tỉ lệ Subscribe</span>
                        <Heading as="h2">{Math.round(ratioSubSvg || 0)} %</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='64deg, white, white' >
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Quest Lỗi/Tổng Quest</span>
                        <Heading as="h2"><span style={{ color: 'red' }}>0</span>/<span>0</span></Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='64deg, white, white' >
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tổng Order hôm nay</span>
                        <Heading as="h2">{numberWithCommas(Math.abs(Number(todayProfit?.count_order)) || 0)}</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='64deg, white, white' >
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tổng Sub hôm nay</span>
                        <Heading as="h2">{numberWithCommas(Math.abs(Number(todayProfit?.total_sub)) || 0)}</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xxl={24} md={24} sm={24} xs={24}>
                <Cards headless gradient='64deg, white, white' >
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tổng luồng/thiếu</span>
                        <Heading as="h2">1,330/1,200</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col>
              {/* <Col xxl={12} md={12} sm={12} xs={12}>
                <Cards headless gradient='64deg, white, white'>
                  <EChartCard>
                    <div className="card-chunk">
                      <CardBarChart2>
                        <span>Tổng point hôm nay</span>
                        <Heading as="h2">5,089,515</Heading>
                      </CardBarChart2>
                    </div>
                  </EChartCard>
                </Cards>
              </Col> */}
            </Row>
          </Col>
          <Col xxl={18} lg={15} md={14} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <SubscribeCountAndIncome title="Số subscribe & doanh thu" />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xxl={14} xs={24}>
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
          <Col xxl={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <EfficiencySubscribe title="Hiệu suất subscribe" />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Overview;
