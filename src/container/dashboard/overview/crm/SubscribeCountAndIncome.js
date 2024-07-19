import React, { useState, useEffect } from 'react';
import { Col, Row, Spin } from 'antd';
import PropTypes from 'prop-types';
import { IoArrowUpCircle, IoArrowDownCircle } from "react-icons/io5";
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { CardBarChart } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import ChartSubscribePoint from '../business/ChartSubscribePoint';
import { closeDealGetData } from '../../../../redux/chartContent/actionCreator';
import actions from '../../../../redux/reports/actions';
import Heading from '../../../../components/heading/heading';
import { currentDate, numberWithCommas } from '../../../../utility/utility';
import { SERVICE_TYPE, VIETNAMES_CURRENCY } from '../../../../variables';

function SubscribeCountAndIncome(props) {
  const { title } = props;
  const dispatch = useDispatch();

  const { fromDate, toDate, typeService, isLoading, orderAmountComment, performance, orderAmountLike } = useSelector(state => {
    return {
      isLoading: state?.reports?.chartLoading,
      fromDate: state?.reports.filterRange?.from,
      toDate: state?.reports.filterRange?.to,
      typeService: state?.reports?.typeService,
      orderAmountComment: state?.reports?.orderAmountComment,
      orderAmountLike: state?.reports?.orderAmountLike,
      performance: state?.reports?.performance
    };
  });

  useEffect(() => {
    if (closeDealGetData) {
      dispatch(closeDealGetData());
    }
  }, [dispatch]);

  const closeDealDatasets = orderAmountComment !== null && [
    {
      backgroundColor: '#008000',
      hoverBackgroundColor: '#008000',
      label: `Tổng ${typeService} yêu cầu`,
      maxBarThickness: 10,
      barThickness: 7,
      percent: 60,
    },
    {
      backgroundColor: '#20C99780',
      hoverBackgroundColor: '#5F63F2',
      label: `Tổng point (${VIETNAMES_CURRENCY})`,
      maxBarThickness: 10,
      barThickness: 7,
      percent: 49,
    },
  ];

  // eslint-disable-next-line no-unsafe-optional-chaining
  let totalPoint = [];
  if (typeService === SERVICE_TYPE.COMMENT.title) {
    totalPoint = orderAmountComment?.map(item => Math.round(item?.total)) || [];
  } else if (typeService === SERVICE_TYPE.LIKE.title) {
    totalPoint = orderAmountLike?.map(item => Math.round(item?.total)) || [];
  }

  const arrWaveDate = performance?.map(item => item?.date) || [];

  const chartSubscribePoint = {
    wave_date: arrWaveDate,
    wave_timeline: [
      // {
      //   name: `${typeService} yêu cầu`,
      //   data: orderRequest
      // },
      {
        name: 'Tổng point',
        data: totalPoint
      }
    ],
  }

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

  const totalSubToday = arrWaveDate?.indexOf(currentDate) > 0 ? totalPoint[arrWaveDate?.indexOf(currentDate)] : 0;
  const sumPoint = totalPoint.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const averagePoint = (Array.isArray(totalPoint) && totalPoint.length > 0) ? (sumPoint / totalPoint.length) : 0;

  return (
    <>
      {orderAmountComment !== null && (
        <Cards
          // isbutton={
          //   <div className="card-nav">
          //     <ul>
          //       <li className={state.closeDealTabActive === 'week' ? 'active' : 'deactivate'}>
          //         <Link onClick={() => handleActiveChangeYoutube('week')} to="#">
          //           Week
          //         </Link>
          //       </li>
          //       <li className={state.closeDealTabActive === 'month' ? 'active' : 'deactivate'}>
          //         <Link onClick={() => handleActiveChangeYoutube('month')} to="#">
          //           Month
          //         </Link>
          //       </li>
          //       <li className={state.closeDealTabActive === 'year' ? 'active' : 'deactivate'}>
          //         <Link onClick={() => handleActiveChangeYoutube('year')} to="#">
          //           Year
          //         </Link>
          //       </li>
          //     </ul>
          //   </div>
          // }
          more={moreContent}
          title={
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 700, margin: 0, padding: 0 }}>{title}</p> 
              <span>Từ <strong>{fromDate}</strong> đến <strong>{toDate}</strong></span>
            </div>
          }
          size="large"
        >
          {isLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <CardBarChart>
              <Row justify="start" style={{ marginLeft: '10px' }}> 
                <Col xxl={3} md={3} sm={3} xs={8}>
                  <div className="flex-grid-child">
                    <p style={{ margin: 0, padding: 0}}>
                      <span style={{ color: 'gray' }}>Hôm nay</span>
                    </p>
                    <Heading as="h5" className="color-primary">
                      {numberWithCommas(totalSubToday || 0)}
                      <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{VIETNAMES_CURRENCY}</span>
                    </Heading>
                  </div>
                </Col>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  {
                    totalPoint?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                          <span style={{ color: 'gray' }}>Cao nhất </span>
                          <IoArrowUpCircle color='green' fontSize={17} style={{ marginLeft: '7px' }} />
                        </p>
                        <Heading as="h5">
                          {numberWithCommas(Math.max(...totalPoint || 0))}
                          <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{VIETNAMES_CURRENCY}</span>
                        </Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  {
                    totalPoint?.length > 0 ? (
                      <div className="flex-grid-child" >
                        <p style={{ margin: 0, padding: 0, display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                          <span style={{ color: 'gray' }}>Thấp nhất</span>
                          <IoArrowDownCircle color='orangered' fontSize={17} style={{ marginLeft: '7px' }} />
                        </p>
                        <Heading as="h5">
                          {numberWithCommas(Math.min(...totalPoint || 0))}
                          <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{VIETNAMES_CURRENCY}</span>
                        </Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  {
                    totalPoint?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>
                          <span style={{ color: 'gray' }}>Trung bình</span>
                        </p>
                        <Heading as="h5">
                          {numberWithCommas(Math.round(averagePoint) || 0)}
                          <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{VIETNAMES_CURRENCY}</span>
                        </Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  {
                    totalPoint?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>
                          <span style={{ color: 'gray' }}>Tổng cộng</span>
                        </p>
                        <Heading as="h5">
                          {numberWithCommas(sumPoint || 0)}
                          <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{VIETNAMES_CURRENCY}</span>
                        </Heading>
                      </div>
                    ) : null
                  }
                </Col>
              </Row>

              <ChartSubscribePoint loadingChart={isLoading} chartData={chartSubscribePoint || {}} />
              <ul className="deals-list" style={{ margin: 0, padding: 0 }}>
                {closeDealDatasets &&
                  closeDealDatasets.map((item, key) => {
                    return (
                      <li key={key + 1} style={{ display: 'inline-flex', alignItems: 'center', margin: 0, padding: 0, fontSize: '12px', color: 'gray' }}>
                        <span
                          style={{
                            width: '10px',
                            height: '10px',
                            display: 'flex',
                            backgroundColor: item?.hoverBackgroundColor,
                            borderRadius: '50%',
                            margin: '0px 6.5px',
                          }}
                        />
                        {item?.label}
                      </li>
                    );
                  })}
              </ul>
            </CardBarChart>
          )}
        </Cards>
      )}
    </>
  );
}

SubscribeCountAndIncome.propTypes = {
  title: PropTypes.string,
};

export default SubscribeCountAndIncome;
