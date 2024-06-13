import React, { useState, useEffect } from 'react';
import { Col, Row, Spin } from 'antd';
import PropTypes from 'prop-types';
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
import { VIETNAMES_CURRENCY } from '../../../../variables';

function SubscribeCountAndIncome(props) {
  const { title } = props;
  const dispatch = useDispatch();
  const { closeDealState, cdIsLoading, fromDate, toDate, typeService, isLoading, orderAmount, performance } = useSelector(state => {
    return {
      closeDealState: state?.chartContent?.closeDealData,
      isLoading: state?.reports?.loading,
      cdIsLoading: state?.chartContent?.cdLoading,
      fromDate: state?.reports.filterRange?.from,
      toDate: state?.reports.filterRange?.to,
      typeService: state?.reports?.typeService,

      orderAmount: state?.reports?.orderAmount,
      performance: state?.reports?.performance
    };
  });

  useEffect(() => {
    if (closeDealGetData) {
      dispatch(closeDealGetData());
    }

    dispatch(actions.countProfitDataTodayBegin());
    dispatch(actions.fetchSubscribeWithPointEverydayBegin({
      from: fromDate,
      to: toDate,
    }));
  }, [dispatch]);

  const closeDealDatasets = closeDealState !== null && [
    {
      backgroundColor: '#20C99780',
      hoverBackgroundColor: '#5F63F2',
      label: 'Tổng point (đ)',
      maxBarThickness: 10,
      barThickness: 7,
      percent: 49,
    },
    {
      backgroundColor: '#008000',
      hoverBackgroundColor: '#008000',
      label: `${typeService} yêu cầu`,
      maxBarThickness: 10,
      barThickness: 7,
      percent: 60,
    },
  ];

  // eslint-disable-next-line no-unsafe-optional-chaining
  const totalPoint = orderAmount?.reverse()?.map(item => Math.round(item?.total)) || [];
  const orderRequest = performance?.reverse()?.map(item => Math.round(item?.avg_performance)) || [];
  const arrWaveDate = performance?.map(item => item?.date) || [];

  const chartSubscribePoint = {
    wave_date: arrWaveDate,
    wave_timeline: [
      {
        name: `${typeService} yêu cầu`,
        data: orderRequest
      },
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

  return (
    <>
      {closeDealState !== null && (
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
          {cdIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <CardBarChart>
              <Row justify="start" style={{ marginLeft: '10px' }}> 
                <Col xxl={3} md={3} sm={3} xs={3}>
                  <div className="flex-grid-child">
                    <p style={{ margin: 0, padding: 0}}>Hôm nay (<span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>{VIETNAMES_CURRENCY}</span>)</p>
                    <Heading as="h5" className="color-primary">
                      {numberWithCommas(totalSubToday)}
                    </Heading>
                  </div>
                </Col>
                <Col xxl={3} md={3} sm={3} xs={3}>
                  {
                    totalPoint?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>Cao nhất (<span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>{VIETNAMES_CURRENCY}</span>)</p>
                        <Heading as="h5">{numberWithCommas(Math.max(...totalPoint || 0))}</Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={3}>
                  {
                    totalPoint?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>Thấp nhất (<span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>{VIETNAMES_CURRENCY}</span>)</p>
                        <Heading as="h5">{numberWithCommas(Math.min(...totalPoint || 0))}</Heading>
                      </div>
                    ) : null
                  }
                </Col>
              </Row>

              <ChartSubscribePoint loadingChart={isLoading} chartData={chartSubscribePoint || {}} />

              {/* <ChartjsBarChartTransparent
                labels={orderAmount?.map(item => item.date)}
                datasets={closeDealDatasets}
                options={{
                  maintainAspectRatio: true,
                  responsive: true,
                  layout: {
                    padding: {
                      top: 20,
                    },
                  },
                  legend: {
                    display: false,
                    position: 'top',
                    align: 'end',
                    labels: {
                      boxWidth: 6,
                      display: true,
                      usePointStyle: true,
                    },
                  },

                  scales: {
                    yAxes: [
                      {
                        gridLines: {
                          color: '#e5e9f2',
                          borderDash: [3, 3],
                          zeroLineColor: '#e5e9f2',
                          zeroLineWidth: 1,
                          zeroLineBorderDash: [3, 3],
                        },
                        ticks: {
                          beginAtZero: true,
                          fontSize: 12,
                          fontColor: '#182b49',
                          // max: Math.max(...closeDealState.won),
                          // stepSize: Math.max(...closeDealState.won) / 5,
                          display: true,
                          min: 0,
                          padding: 10,
                        },
                      },
                    ],
                    xAxes: [
                      {
                        gridLines: {
                          display: true,
                          zeroLineWidth: 2,
                          zeroLineColor: '#fff',
                          color: 'transparent',
                          z: 1,
                        },
                        ticks: {
                          beginAtZero: true,
                          fontSize: 12,
                          fontColor: '#182b49',
                          min: 0,
                        },
                      },
                    ],
                  },
                }}
                height={window.innerWidth <= 575 ? 200 : 65}
              /> */}
              <ul className="deals-list" style={{ margin: 0, padding: 0 }}>
                {closeDealDatasets &&
                  closeDealDatasets.map((item, key) => {
                    return (
                      <li key={key + 1} className="custom-label">
                        <span
                          style={{
                            backgroundColor: item.hoverBackgroundColor,
                          }}
                        />
                        {item.label}
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
