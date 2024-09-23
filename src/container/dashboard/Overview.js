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
import { MdRemoveRedEye } from "react-icons/md";
import { GoWorkflow, GoTasklist } from "react-icons/go";
import { TbSquareRoundedPercentage, TbServer2, TbBrandStackoverflow } from "react-icons/tb";
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
import actionsBuffComment from '../../redux/buffComment/actions';
import { numberWithCommas, numberWithCommasCurrency } from '../../utility/utility';
import { COLOR_GENERAL, DEFAULT_PERPAGE, SERVICE_TYPE, VIETNAMES_CURRENCY } from '../../variables';

const TaskSuccessEveryMinutes = lazy(() => import('./component/TaskSuccessEveryMinutes'));
const TaskDurationEveryMinutes = lazy(() => import('./component/TaskDurationEveryMinutes'));
const SubscribeCountAndIncome = lazy(() => import('./component/SubscribeCountAndIncome'));
const AnalyseYoutube = lazy(() => import('./component/AnalyseYoutube'));

const CardGroup = lazy(() => import('./component/CardGroup'));

function Overview() {
  const dispatch = useDispatch();

  const { 
    fromDate,
    toDate, 
    profitToday, 
    typeService, 
    computerThread, 
    accountStatus,
    orderAmountComment,
    orderAmountLike,
    taskOfTool,
    accountOnComputer,
    commentByDay,
    performance,
    totalOrder,
    listComputerComment,
    listComputerLike,
    orderByDays
  } = useSelector((state) => {
    return {
      fromDate: state?.reports?.filterRange?.from,
      toDate: state?.reports?.filterRange?.to,
      profitToday: state?.reports?.profitToday,
      typeService: state?.reports?.typeService,
      computerThread: state?.reports?.computerThread,
      taskOfTool: state?.reports?.taskOfTool,
      accountStatus: state?.reports?.accountStatus,
      performance: state?.reports?.performance,
      orderAmountComment: state?.reports?.orderAmountComment,
      orderAmountLike: state?.reports?.orderAmountLike,
      accountOnComputer: state?.reports?.accountOnComputer,
      commentByDay: state?.reports?.commentByDay,
      totalOrder: state?.reports?.totalOrder,
      listComputerComment: state?.buffComment?.listComputer,
      listComputerLike: state?.buffLike?.listComputer,
      orderByDays: state?.reports?.orderByDays
    };
  });

  useEffect(() => {
    const initialFilter = {
      start_date: `${fromDate  } 00:00:00`,
      end_date: `${toDate  } 23:59:59`,
      status: 1
    };
    const initServerPagination = {
      page: 1,
      limit: DEFAULT_PERPAGE
    };

    dispatch(actions.commentStatisticOrderAmountBegin(initialFilter));
    dispatch(actions.likeStatisticOrderAmountBegin(initialFilter));

    if (typeService === SERVICE_TYPE.COMMENT.title) {
      dispatch(actions.commentStatisticTaskDurationInMinuteBegin());
      dispatch(actions.commentStatisticCommentByOrderReportBegin(initialFilter));
      dispatch(actions.commentStatisticTaskSuccessInMinuteBegin());
      // dispatch(actions.commentStatisticOrderAmountBegin(initialFilter));
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
      dispatch(actions.commentStatisticTotalOrderBegin(initialFilter));
      dispatch(actions.commentStatisticOrderByDaysBegin(initialFilter));

      // Fetch list computer
      dispatch(actionsBuffComment.listComputerRunCommentBegin(initServerPagination));
    }
  }, [dispatch]);

  const [state, setState] = useState({
    activeClass: SERVICE_TYPE.COMMENT.title,
    isMailListPopup: false,
    selectedItem: {}
  });

  const handleChange = (value) => {
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

  const todaySubscribePoint = (Number(profitToday?.total_point_today))*(-1) || 0;
  const todayCommentPoint = findObjectByValue(orderAmountComment, 'is_current', true)?.total || 0;
  const todayLikePoint = findObjectByValue(orderAmountLike, 'is_current', true)?.total || 0;
  const todayOrderCount = findObjectByValue(orderByDays, 'is_current', true)?.comments || 0;

  const todayPoint = todayCommentPoint + todaySubscribePoint + todayLikePoint;

  const listServer = () => {
    switch(typeService) {
      case SERVICE_TYPE.COMMENT.title:
        return listComputerComment?.meta?.total;
      case SERVICE_TYPE.LIKE.title:
        return listComputerLike?.meta?.total;
      case SERVICE_TYPE.SUBSCRIBE.title:
        return 0;
      default:
        return 0;
    }
  }

  const styleMail = {
    marginLeft: '12px',
    padding:' 0px 5px',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#e5e5e585',
    borderRadius: '5px',
    fontSize: '14px'
  };

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
      <Row gutter={6}>
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
                      <Tooltip placement='top' title={`${numberWithCommas(Math.round(todayPoint))} ${VIETNAMES_CURRENCY}`}>
                        <span style={{ fontWeight: 600, fontSize: '1em' }}>
                          Tổng point (<span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>{VIETNAMES_CURRENCY}</span>)
                        </span>
                        <Heading as="h2" textShadow="1px 1px 2px #75f500" weight={700} color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommasCurrency(Math.round(todayPoint))}</Heading>
                      </Tooltip>
                    </Col>
                    <Col sm="6">
                      <Tooltip placement='top' title={`${numberWithCommas(Math.round(todaySubscribePoint))} ${VIETNAMES_CURRENCY}`}>
                        <span style={{ fontWeight: 600, fontSize: '1em' }}>
                          Subscribe
                        </span>
                        <Heading as="h4" textShadow="1px 1px 2px #75f5007a" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommasCurrency(Math.round(todaySubscribePoint))}</Heading>
                      </Tooltip>
                    </Col>
                    <Col sm="6">
                      <Tooltip placement='top' title={`${numberWithCommas(Math.round(todayCommentPoint))} ${VIETNAMES_CURRENCY}`}>
                        <span style={{ fontWeight: 600, fontSize: '1em' }}>
                          Comment
                        </span>
                        <Heading as="h4" textShadow="1px 1px 2px #75f5007a" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommasCurrency(Math.round(todayCommentPoint))}</Heading>
                      </Tooltip>
                    </Col>
                    <Col sm="6">
                      <Tooltip placement='top' title={`${numberWithCommas(Math.round(todayLikePoint))} ${VIETNAMES_CURRENCY}`}>
                        <span style={{ fontWeight: 600, fontSize: '1em' }}>
                          Like
                        </span>
                        <Heading as="h4" textShadow="1px 1px 2px #75f5007a" color={todayPoint >= 0 ? 'green' : '#f96a00'}>{numberWithCommasCurrency(Math.round(todayLikePoint))}</Heading>
                      </Tooltip>
                    </Col>
                  </Row>
                </CardBarChartCenter>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        <Col xxl={4} md={8} sm={6} xs={6}>
          <Cards
            headless 
            more={moreContent}
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <SiGmail style={{ marginRight: '7px', width: '23px', height: '23px', color: COLOR_GENERAL.primary, borderRadius: '5px', backgroundColor: '#00800015', padding: '2px 5px' }} />
                      Mail chưa gọi
                      </span>
                    <Tooltip title={accountStatus?.list_uncalled ? "Danh sách mail": "Không có mail"}>
                      <Button 
                        type='text'
                        disabled={accountStatus?.list_uncalled === undefined || accountStatus?.list_uncalled === null}
                        onClick={() => setState({ 
                          ...state,
                          isMailListPopup: true,
                          selectedItem: {
                            title: 'Mail chưa gọi',
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
        <Col xxl={4} md={8} sm={6} xs={6}>
          <Cards
            headless 
            more={moreContent}
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px', width: '23px', height: '23px', color: COLOR_GENERAL.primary, borderRadius: '5px', backgroundColor: '#00800015', padding: '2px 5px' }} />Mail hoạt động</span>
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
        <Col xxl={4} md={8} sm={6} xs={6}>
          <Cards
            headless 
            more={moreContent}
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px', width: '23px', height: '23px', color: COLOR_GENERAL.primary, borderRadius: '5px', backgroundColor: '#00800015', padding: '2px 5px' }} />Mail chết</span>
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
        <Col xxl={4} md={8} sm={6} xs={6}>
          <Cards
            headless 
            more={moreContent}
          >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}><SiGmail style={{ marginRight: '7px', width: '23px', height: '23px', color: COLOR_GENERAL.primary, borderRadius: '5px', backgroundColor: '#00800015', padding: '2px 5px' }} />Mail sống</span>
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
        <Col xxl={24} md={24} sm={24} xs={24} style={{ display: 'flex' }}>
          <Cards headless gradient='64deg, white, #91ff000d' >
            <EChartCard>
              <div className="card-chunk">
                <CardBarChart2>
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div>Tổng Quest</div>
                    <div>
                      <Tooltip title="Thất bại">
                        <span className="mr-3" style={{color: 'orangered', ...styleMail}}>{numberWithCommas(taskOfTool[-1]) || 0}</span>
                      </Tooltip>
                      <Tooltip title="Đang chạy">
                        <span className="mr-3" style={{color: 'orange', ...styleMail}}>{numberWithCommas(taskOfTool[0]) || 0}</span>
                      </Tooltip>
                      <Tooltip title="Thành công">
                        <span className="mr-3" style={{color: 'green', ...styleMail}}>{numberWithCommas(taskOfTool[1]) || 0}</span>
                      </Tooltip>
                    </div>
                  </span>
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
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Tỉ lệ {typeService}</span>
                    <TbSquareRoundedPercentage fontSize={17}/>
                  </span>
                  <Heading as="h4">{numberWithCommas(Math.round(findObjectByValue(performance, 'is_current', true)?.avg_performance) || 0)} %</Heading>
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
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Quest (Lỗi/Tổng)</span>
                    <GoTasklist fontSize={18} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h5">
                    {numberWithCommas(taskOfTool[-1])}/{numberWithCommas(Object.values(taskOfTool).reduce((accumulator, currentValue) => accumulator + currentValue, 0))}
                  </Heading>
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
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Tổng Order <br/> hôm nay</span>
                    <TbBrandStackoverflow fontSize={18} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h4">{numberWithCommas(Math.abs(Number(totalOrder)) || 0)}</Heading>
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
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Tổng {typeService} <br/> order</span>
                    <TbSquareRoundedPercentage fontSize={17} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h4">{numberWithCommas(Math.abs(Number(todayOrderCount)) || 0)}</Heading>
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
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Hiện tại/Tổng luồng</span>
                    <GoWorkflow fontSize={17} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h4">
                    <Tooltip title={
                      <div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', marginRight: '7px' }}>Luồng hiện tại: <span style={{ fontWeight: '600', marginLeft: '7px' }}>{numberWithCommas(computerThread?.current_thread ?? 0) || 0}</span></div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', marginRight: '7px' }}>Luồng đang trống: <span style={{ fontWeight: '600', marginLeft: '7px' }}>{numberWithCommas(computerThread?.free_thread ?? 0) || 0}</span></div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', marginRight: '7px' }}>Tổng luồng: <span style={{ fontWeight: '600', marginLeft: '7px' }}>{numberWithCommas((computerThread?.free_thread ?? 0) + (computerThread?.current_thread ?? 0)) || 0}</span></div>
                      </div>
                    }>

                      {numberWithCommas(computerThread?.current_thread ?? 0) || 0}/{numberWithCommas((computerThread?.free_thread ?? 0) + (computerThread?.current_thread ?? 0)) || 0}
                    </Tooltip>
                  </Heading>
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
                  <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Máy {typeService}</span>
                    <TbServer2 fontSize={17} style={{ marginTop: '3px' }}/>
                  </span>
                  <Heading as="h4">
                    {listServer()}
                  </Heading>
                </CardBarChart2>
              </div>
            </EChartCard>
          </Cards>
        </Col>
        
      </Row>
    )
  }

  const services = [
    { type: SERVICE_TYPE.VIEW.title, icon: MdRemoveRedEye, label: 'View' },
    { type: SERVICE_TYPE.SUBSCRIBE.title, icon: GrNotification, label: 'Subscribe' },
    { type: SERVICE_TYPE.COMMENT.title, icon: FaRegCommentDots, label: 'Comment' },
    { type: SERVICE_TYPE.LIKE.title, icon: AiOutlineLike, label: 'Like' },
  ];

  return (
    <>
      <DetailMailList mailState={state} setState={setState} />
      <PageHeader
        ghost
        title={<span style={{ marginRight: '20px' }}>Tổng quan {typeService}</span>}
        buttons={[
          <div key="1" className="page-header-actions">
            <FilterCalendar actionPicker={actions.setRangeDateFilterBegin} fromDate={fromDate} toDate={toDate} />
          </div>,
          <div key="2" className="page-header-actions">
            <GalleryNav>
              <ul>
                {services.map(({ type, icon: Icon, label }) => (
                  <li key={type}>
                    <Link
                      className={typeService === type ? 'active' : 'deactivate'}
                      onClick={() => handleChange(type)}
                      to="#"
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Icon fontSize={17} className='pr-3' />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </GalleryNav>
          </div>,
        ]}
      />
      <Main>
        {generalHeaderStatistic()}
        <Row gutter={25}>
          <Col xxl={6} md={6} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <CardGroup />
            </Suspense>
            {statisticMultipleData()}
          </Col>
          <Col xxl={18} md={18} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <AnalyseYoutube title={`Thống kê ${typeService}`} />
            </Suspense>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <SubscribeCountAndIncome title={`Số ${typeService} & doanh thu`} />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col xxl={12} xs={24} sm={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <TaskSuccessEveryMinutes title={`Số lượng ${typeService} mỗi phút`} />
            </Suspense>
          </Col>
          <Col xxl={12} xs={24} sm={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <TaskDurationEveryMinutes title={`Thời gian ${typeService} trung bình`} />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Overview;
