/* eslint-disable camelcase */
import React, { lazy, Suspense, useEffect, useState } from 'react';
// import FeatherIcon from 'feather-icons-react';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton, Tooltip, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import FeatherIcon from 'feather-icons-react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { GrNotification } from "react-icons/gr";
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

import { CardBarChart2, CardBarChartCenter, EChartCard, GalleryNav } from './style';
import DetailMailList from './component/DetailMailList';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { FilterCalendar } from '../../components/buttons/calendar-button/FilterCalendar';
import actions from '../../redux/reports/actions';
import { numberWithCommas } from '../../utility/utility';
import { COLOR_GENERAL, SERVICE_TYPE, VIETNAMES_CURRENCY } from '../../variables';

const TaskSuccessEveryMinutes = lazy(() => import('./overview/business/TaskSuccessEveryMinutes'));
const TaskDurationEveryMinutes = lazy(() => import('./overview/business/TaskDurationEveryMinutes'));
const SubscribeCountAndIncome = lazy(() => import('./overview/crm/SubscribeCountAndIncome'));
const AnalyseYoutube = lazy(() => import('./overview/business/AnalyseYoutube'));

const CardGroup = lazy(() => import('./overview/business/CardGroup'));

function Overview() {
  const dispatch = useDispatch();

  const { 
    fromDate,
    toDate, 
    todayProfit, 
    ratioSubSvg, 
    typeService, 
    computerThread, 
    accountStatus,
    orderAmount
  } = useSelector((state) => {
    return {
      fromDate: state?.reports?.filterRange?.from,
      toDate: state?.reports?.filterRange?.to,
      todayProfit: state?.reports?.profitToday,
      ratioSubSvg: state?.reports?.ratioSubSvg,
      typeService: state?.reports?.typeService,
      computerThread: state?.reports?.computerThread,
      accountStatus: state?.reports?.accountStatus,
      orderAmount: state?.reports?.orderAmount
    };
  });

  useEffect(() => {
    const initialFilter = {
      start_date: `${fromDate  } 00:00:00`,
      end_date: `${toDate  } 23:59:59`,
      status: 1
    };

    if (typeService === SERVICE_TYPE.COMMENT.title) {
      dispatch(actions.commentStatisticCommentByOrderReportBegin(initialFilter));
      dispatch(actions.commentStatisticTaskSuccessInMinuteBegin());
      dispatch(actions.commentStatisticTaskDurationInMinuteBegin());
      dispatch(actions.commentStatisticOrderAmountBegin(initialFilter));
      dispatch(actions.commentStatisticAccountStatusCommentBegin(initialFilter));
      dispatch(actions.commentStatisticPerformanceCommentBegin(initialFilter));
      dispatch(actions.commentStatisticCommentByDayBegin(initialFilter));
      dispatch(actions.commentStatisticComputerThreadBegin(initialFilter));
      
      dispatch(actions.commentStatisticAccountOnComputerBegin(initialFilter));
      dispatch(actions.commentStatisticByStatusOrderBegin(initialFilter));
      dispatch(actions.commentStatisticRunningOrderBegin(initialFilter));
      dispatch(actions.commentStatisticTaskOfToolBegin(initialFilter));
      dispatch(actions.commentStatisticRunningUserOrderBegin(initialFilter));
      dispatch(actions.commentStatisticUserPointBegin(initialFilter));
    }
  }, [dispatch]);

  const [state, setState] = useState({
    activeClass: SERVICE_TYPE.COMMENT.title,
    isMailListPopup: false,
    selectedItem: {}
  });

  const handleChange = (value) => {
    console.log('---- value change type ----', value);
    dispatch(actions.changeServiceTypeBegin({
      value,
      from: fromDate,
      to: toDate
    }));

    setState({ ...state, activeClass: value });
  };

  const findObjectByValue = (array, key, value) => {
    return array.find(obj => obj[key] === value);
  };

  const todaySubscribePoint = (Number(todayProfit?.total_point_today))*(-1) || 0;
  const todayCommentPoint = findObjectByValue(orderAmount, 'is_current', true)?.total || 0;
  const todayLikePoint = 0;

  const todayPoint = todayCommentPoint + todaySubscribePoint + todayLikePoint;

  const moreContent = (
    <>
      <NavLink to="#">
        <FeatherIcon size={16} icon="printer" />
        <span>Printer</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="book-open" />
        <span>PDF</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="file-text" />
        <span>Google Sheets</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="x" />
        <span>Excel (XLSX)</span>
      </NavLink>
      <NavLink to="#">
        <FeatherIcon size={16} icon="file" />
        <span>CSV</span>
      </NavLink>
    </>
  );

  const generalHeaderStatistic = () => {
    return (
      <Row gutter={12}>
        <Col xxl={8} md={8} sm={24} xs={24}>
          <Cards
            headless
            border 
            gradient={ todayPoint >= 0 ? '120deg, rgb(212, 252, 121) 0%, #f8ffe6 100%' : '0deg, #fff6d947, #ffac8d' }
          >
            <EChartCard>
              <div className="card-chunk text-center">
                <CardBarChartCenter>
                  <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Col sm="6">
                      <span style={{ fontWeight: 600, fontSize: '1em' }}>
                        Tổng point hôm nay (<span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>{VIETNAMES_CURRENCY}</span>)
                      </span>
                      <Heading as="h2" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommas(todayPoint)}</Heading>
                    </Col>
                    <Col sm="6">
                      <span style={{ fontWeight: 600, fontSize: '1em' }}>
                        Subscribe
                      </span>
                      <Heading as="h4" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommas(todaySubscribePoint)}</Heading>
                    </Col>
                    <Col sm="6">
                      <span style={{ fontWeight: 600, fontSize: '1em' }}>
                        Comment
                      </span>
                      <Heading as="h4" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommas(todayCommentPoint)}</Heading>
                    </Col>
                    <Col sm="6">
                      <span style={{ fontWeight: 600, fontSize: '1em' }}>
                        Like
                      </span>
                      <Heading as="h4" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommas(todayLikePoint)}</Heading>
                    </Col>
                  </Row>
                </CardBarChartCenter>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={4} md={8} sm={12} xs={12}>
          <Cards
            headless 
            more={moreContent}
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px', color: COLOR_GENERAL.primary }} />Mail chưa được gọi</span>
                    <Tooltip title={accountStatus?.list_uncalled ? "Danh sách mail": "Không có mail"}>
                      <Button 
                        type='text'
                        disabled={accountStatus?.list_uncalled === undefined || accountStatus?.list_uncalled === null}
                        onClick={() => setState({ 
                          ...state,
                          isMailListPopup: true,
                          selectedItem: {
                            title: 'Mail chưa được gọi',
                            data: accountStatus?.list_uncalled
                          }
                        })}
                        style={{ margin: 0, padding: 0, height: '8px' }}
                      >
                        <HiOutlineDotsVertical fontSize={16}/>
                      </Button>
                    </Tooltip>
                  </span>
                  <Heading as="h3">{numberWithCommas(accountStatus?.total_uncalled || 0)}</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={4} md={8} sm={12} xs={12}>
          <Cards
            headless 
            more={moreContent}
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px', color: COLOR_GENERAL.primary }} />Mail hoạt động</span>
                    <Tooltip title="Chi tiết">
                      <Button 
                        type='text'
                        onClick={() => console.log('---- chi tiết mail nè ----')}
                        style={{ margin: 0, padding: 0, height: '8px' }}
                      >
                        <HiOutlineDotsVertical fontSize={16} />
                      </Button>
                    </Tooltip>
                  </span>
                  <Heading as="h3">{numberWithCommas(accountStatus?.total_run || 0)}</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={4} md={8} sm={8} xs={12}>
          <Cards
            headless 
            more={moreContent}
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px', color: COLOR_GENERAL.primary }} />Mail chết</span>
                    <Tooltip title={accountStatus?.list_dead ? "Danh sách mail": "Không có mail"}>
                      <Button 
                        type='text'
                        onClick={() => setState({ 
                          ...state,
                          isMailListPopup: true,
                          selectedItem: {
                            title: 'Mail chết',
                            data: accountStatus?.list_dead
                          }
                        })}
                        style={{ margin: 0, padding: 0, height: '8px' }}
                        disabled={accountStatus?.list_dead === undefined || accountStatus?.list_dead === null}
                      >
                        <HiOutlineDotsVertical fontSize={16} />
                      </Button>
                    </Tooltip>
                  </span>
                  <Heading as="h3">{numberWithCommas(accountStatus?.total_dead || 0)}</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={4} md={8} sm={8} xs={12}>
          <Cards
            headless 
            more={moreContent}
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px', color: COLOR_GENERAL.primary }} />Mail sống</span>
                    <Tooltip title="Chi tiết">
                      <Button
                        type='text'
                        onClick={() => console.log('---- chi tiết mail nè ----')}
                        style={{ margin: 0, padding: 0, height: '8px' }}
                      >
                        <HiOutlineDotsVertical fontSize={16} />
                      </Button>
                    </Tooltip>
                  </span>
                  <Heading as="h3">{numberWithCommas(accountStatus?.total_live || 0)}</Heading>
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
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Tỉ lệ {typeService}</span>
                    <TbSquareRoundedPercentage fontSize={17}/>
                  </span>
                  <Heading as="h4">{Math.round(ratioSubSvg || 0)} %</Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={12} md={12} sm={8} xs={8} style={{ display: 'flex' }}>
          <Cards headless gradient='64deg, white, white'>
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <span>Quest Lỗi/Tổng Quest</span>
                    <TbSquareRoundedPercentage fontSize={17} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h4">0/0</Heading>
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
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <span>Tổng Order <br/> hôm nay</span>
                    <TbSquareRoundedPercentage fontSize={17} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h4">{numberWithCommas(Math.abs(Number(todayProfit?.count_order)) || 0)}</Heading>
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
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <span>Tổng {typeService} <br/> hôm nay</span>
                    <TbSquareRoundedPercentage fontSize={17} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h4">{numberWithCommas(Math.abs(Number(todayProfit?.total_sub)) || 0)}</Heading>
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
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <span>Hiện tại/Tổng luồng</span>
                    <TbSquareRoundedPercentage fontSize={17} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h4">
                    {numberWithCommas(computerThread?.current_thread) || 0}/{numberWithCommas(computerThread?.free_thread) || 0}
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
      <DetailMailList
        mailState={state}
        setState={setState}
      />
      <PageHeader
        ghost
        title={(
          <span style={{ marginRight: '20px' }}>
            Tổng quan {typeService}
          </span>
        )}
        buttons={[ 
          <div key="1" className="page-header-actions">
            <FilterCalendar actionPicker={actions.setRangeDateFilterBegin} fromDate={fromDate} toDate={toDate}/>
          </div>,
          <div key="2" className="page-header-actions">
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
        <Row gutter={25}>
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
          <Col xxl={12} xs={12}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <TaskSuccessEveryMinutes title={`Số lượng ${typeService} mỗi phút`} />
            </Suspense>
          </Col>
          <Col xxl={12} xs={12}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active/>
                </Cards>
              }
            >
              <TaskDurationEveryMinutes title={`Thời gian ${typeService} trung bình`} />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Overview;
