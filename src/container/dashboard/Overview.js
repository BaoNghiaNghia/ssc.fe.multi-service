import React, { lazy, Suspense, useEffect, useState } from 'react';
// import FeatherIcon from 'feather-icons-react';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { BsThreads } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { CardBarChart2, CardBarChartCenter, EChartCard, GalleryNav } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { FilterCalendar } from '../../components/buttons/calendar-button/FilterCalendar';
import actions from '../../redux/reports/actions';
import { numberWithCommas } from '../../utility/utility';
import { SERVICE_TYPE } from '../../variables';

const RatioYoutubeSuccess = lazy(() => import('./overview/business/RatioYoutubeSuccess'));
const SubscribeCountAndIncome = lazy(() => import('./overview/crm/SubscribeCountAndIncome'));
const AnalyseYoutube = lazy(() => import('./overview/business/AnalyseYoutube'));

const CardGroup = lazy(() => import('./overview/business/CardGroup'));

function Overview() {
  const dispatch = useDispatch();

  const { fromDate, toDate, todayProfit, ratioSubSvg, typeService, statisticComment, computerThread } = useSelector((state) => {
    return {
      fromDate: state?.reports?.filterRange?.from,
      toDate: state?.reports?.filterRange?.to,
      todayProfit: state?.reports?.profitToday,
      ratioSubSvg: state?.reports?.ratioSubSvg,
      typeService: state?.reports?.typeService,
      statisticComment: state?.reports?.statisticComment,
      computerThread: state?.reports?.computerThread
    };
  });

  useEffect(() => {
    const initialFilter = {
      start_date: `${fromDate  } 00:00:00`,
      end_date: `${toDate  } 23:59:59`,
      status: 0
    };

    dispatch(actions.reportSubscribeBegin(initialFilter));

    if (typeService === SERVICE_TYPE.SUBSCRIBE.title) {
      dispatch(actions.countSuccessSubscribeBegin());
      dispatch(actions.computerDataListBegin());
      dispatch(actions.getStatisticsSubscribeReportBegin());
    }

    if (typeService === SERVICE_TYPE.COMMENT.title) {
      dispatch(actions.statisticCommentByOrderReportBegin());
      dispatch(actions.statisticTaskSuccessInMinuteBegin());
      dispatch(actions.statisticCommentByDayBegin(initialFilter));
      dispatch(actions.statisticComputerThreadBegin(initialFilter));
    }

    if (typeService === SERVICE_TYPE.LIKE.title) {
      console.log("---- like data ----");
    }
  }, [dispatch]);

  const [state, setState] = useState({
    activeClass: SERVICE_TYPE.SUBSCRIBE.title,
  });

  const handleChange = (value) => {
    dispatch(actions.changeServiceTypeBegin(value));
    setState({ ...state, activeClass: value });
  };

  const todaySubscribePoint = (Number(todayProfit?.total_point_today))*(-1) || 0;
  const todayCommentPoint = 0;
  const todayLikePoint = 0;

  const todayPoint = todayCommentPoint + todaySubscribePoint + todayLikePoint;

  const generalHeaderStatistic = () => {
    return (
      <Row gutter={12}>
        <Col xxl={4} md={8} sm={12} xs={12}>
          <Cards
            headless 
            border
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'center', color: 'gray' }}><SiGmail style={{ marginRight: '7px' }} />Mail chưa được gọi</span>
                  <Heading as="h2">100</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={4} md={8} sm={12} xs={12}>
          <Cards headless >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'center', color: 'gray' }}><SiGmail style={{ marginRight: '7px' }} />Mail bị lỗi</span>
                  <Heading as="h2">33</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={8} md={8} sm={24} xs={24}>
          <Cards
            headless
            border 
            gradient={ todayPoint >= 0 ? '120deg, rgb(212, 252, 121) 0%, rgb(150, 230, 161) 100%' : '0deg, #fff6d947, #ffac8d' }
          >
            <EChartCard>
              <div className="card-chunk text-center">
                <CardBarChartCenter>
                  <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Col sm="12">
                      <span style={{ fontWeight: 600, fontSize: '1em' }}>
                        Tổng point hôm nay (đ)
                      </span>
                      <Heading as="h1" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommas(todayPoint)}</Heading>
                    </Col>
                    <Col sm="12">
                      <span style={{ paddingBottom: '0px', marginBottom: '0px' }}>
                        <div>
                          <span style={{ fontSize: '0.8em' }}>Subscribe:</span> <strong>{numberWithCommas(todaySubscribePoint)}</strong>
                        </div>
                        <div>
                          <span style={{ fontSize: '0.8em' }}>Comment:</span> <strong>{numberWithCommas(todayCommentPoint)}</strong>
                        </div>
                        <div>
                          <span style={{ fontSize: '0.8em' }}>Like:</span> <strong>{numberWithCommas(todayLikePoint)}</strong>
                        </div>
                      </span>
                    </Col>
                  </Row>
                </CardBarChartCenter>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={4} md={8} sm={8} xs={12}>
          <Cards headless
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'center', color: 'gray' }}><SiGmail style={{ marginRight: '7px' }} />Mail die trong ngày</span>
                  <Heading as="h2">7,461</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={4} md={8} sm={8} xs={12}>
          <Cards
            headless
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'center', color: 'gray' }}><SiGmail style={{ marginRight: '7px' }} />Mail hoạt động 24h</span>
                  <Heading as="h2">7,461</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
      </Row>
    )
  }

  const statisticMultipleData = () => {
    return (
      <Row gutter={10}>
        <Col xxl={12} md={12} sm={8} xs={8} style={{ display: 'flex' }}>
          <Cards headless gradient='64deg, white, white'>
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                    <span>Tỉ lệ {typeService}</span>
                  </span>
                  <Heading as="h2"><HiArrowSmRight color="gray" fontSize={17} style={{ marginTop: '3px' }}/> {Math.round(ratioSubSvg || 0)} %</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={12} md={12} sm={8} xs={8} style={{ display: 'flex' }}>
          <Cards headless gradient='64deg, white, white' >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                    <span>Quest Lỗi/Tổng Quest</span>
                  </span>
                  <Heading as="h2"><HiArrowSmRight color="gray" fontSize={17} style={{ marginTop: '3px' }}/> 0/0</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={12} md={12} sm={8} xs={8} style={{ display: 'flex' }}>
          <Cards headless gradient='64deg, white, white' >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                    <span>Tổng Order hôm nay</span>
                  </span>
                  <Heading as="h2"><HiArrowSmRight color="gray" fontSize={17} style={{ marginTop: '3px' }}/> {numberWithCommas(Math.abs(Number(todayProfit?.count_order)) || 0)}</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={12} md={12} sm={12} xs={12} style={{ display: 'flex' }}>
          <Cards headless gradient='64deg, white, white' >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                    <span>Tổng {typeService} hôm nay</span>
                  </span>
                  <Heading as="h2"><HiArrowSmRight color="gray" fontSize={17} style={{ marginTop: '3px' }}/> {numberWithCommas(Math.abs(Number(todayProfit?.total_sub)) || 0)}</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={24} md={24} sm={24} xs={12} style={{ display: 'flex' }}>
          <Cards headless gradient='64deg, white, white' >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'inline-flex', alignItems: 'flex-start' }}>
                    <span>Hiện tại/Tổng luồng</span>
                  </span>
                  <Heading as="h2"><HiArrowSmRight color="gray" fontSize={17} style={{ marginTop: '3px' }}/>
                    {computerThread?.current_thread || 0}/{computerThread?.free_thread || 0}
                  </Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
      </Row>
    )
  }

  return (
    <>
      <PageHeader
        ghost
        title={(
          <span style={{ marginRight: '20px' }}>
            Tổng quan {typeService}
          </span>
        )}
        buttons={[ 
          <div key="1" className="page-header-actions">
            <FilterCalendar actionPicker={actions.setRangeDateFilterBegin}/>
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={typeService === SERVICE_TYPE.SUBSCRIBE.title ? 'active' : 'deactivate'}
                    onClick={() => handleChange(SERVICE_TYPE.SUBSCRIBE.title)}
                    to="#"
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <GrNotification fontSize={15} className='pr-3'/> <span>Subscribe</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={typeService === SERVICE_TYPE.COMMENT.title ? 'active' : 'deactivate'}
                    onClick={() => handleChange(SERVICE_TYPE.COMMENT.title)}
                    to="#"
                  >
                    <FaRegCommentDots fontSize={15} className='mr-3'/> <span>Comment</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={typeService === SERVICE_TYPE.LIKE.title ? 'active' : 'deactivate'}
                    onClick={() => handleChange(SERVICE_TYPE.LIKE.title)}
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
        {generalHeaderStatistic()}
        <Row gutter={15}>
          <Col xxl={6} md={6} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <CardGroup />
            </Suspense>
            {statisticMultipleData()}
          </Col>
          <Col xxl={18} md={18} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AnalyseYoutube title={`Thống kê ${typeService}`} />
            </Suspense>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <SubscribeCountAndIncome title={`Số ${typeService} & doanh thu`} />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xxl={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <RatioYoutubeSuccess title={`Tỉ lệ ${typeService} thành công`} />
            </Suspense>
          </Col>
          {/* <Col xxl={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <EfficiencySubscribe title={`Hiệu suất ${typeService}`} />
            </Suspense>
          </Col> */}
        </Row>
      </Main>
    </>
  );
}

export default Overview;
