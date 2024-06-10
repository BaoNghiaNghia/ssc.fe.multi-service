import React, { useState, useEffect } from 'react';
import { Col, Row, Spin } from 'antd';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChartYoutubeAnalyse from './ChartYoutubeAnalyse';
import { CardBarChart } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { ChartjsBarChartTransparent } from '../../../../components/charts/chartjs';

import { cashFlowGetData, cashFlowFilterData } from '../../../../redux/chartContent/actionCreator';
import { currentDate, numberWithCommas } from '../../../../utility/utility';

function AnalyseYoutube(props) {
  const { title } = props;

  const dispatch = useDispatch();
  const { cashFlowState, cfIsLoading, avgPerformance, reportChart, isLoading, filterRange, typeService, commentByDay } = useSelector(state => {
    return {
      cashFlowState: state?.chartContent?.cashFlowData,
      cfIsLoading: state?.chartContent?.cfLoading,
      isLoading: state?.reports?.loading,
      avgPerformance: state?.reports?.subscribeReport?.avg_performance,
      reportChart: state?.reports?.subscribeReport?.report,
      filterRange: state?.reports?.filterRange,
      typeService: state?.reports?.typeService,
      commentByDay: state?.reports?.commentByDay
    };
  });

  const [state, setState] = useState({
    cashFlowActive: 'year',
  });

  useEffect(() => {
    if (cashFlowGetData) {
      dispatch(cashFlowGetData());
    }
  }, [dispatch]);

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

  const handleActiveChangeCash = value => {
    setState({
      ...state,
      cashFlowActive: value,
    });
    dispatch(cashFlowFilterData(value));
  };

  const cashFlowDataset = cashFlowState !== null && [
    {
      data: avgPerformance && avgPerformance?.map(item => item?.performance),
      backgroundColor: '#00547370',
      hoverBackgroundColor: '#005473',
      label: 'Tỉ lệ thành công (%)',
      maxBarThickness: 10,
      barThickness: 12,
    },
    {
      data: avgPerformance && reportChart?.map(item => item?.total_run),
      backgroundColor: '#ff880070',
      hoverBackgroundColor: '#ff8800',
      label: `Tổng ${  typeService  } chạy`,
      maxBarThickness: 10,
      barThickness: 12,
    },
  ];

  // const chartBar = (
  //   <ChartjsBarChartTransparent
  //     labels={avgPerformance?.map(item => item?.date)}
  //     datasets={cashFlowDataset || []}
  //     height={43}
  //     options={{
  //       maintainAspectRatio: true,
  //       responsive: true,
  //       layout: {
  //         padding: {
  //           top: 20,
  //         },
  //       },
  //       legend: {
  //         display: false,
  //         position: 'bottom',
  //         align: 'start',
  //         labels: {
  //           boxWidth: 6,
  //           display: false,
  //           usePointStyle: true,
  //         },
  //       },
  //       scales: {
  //         yAxes: [
  //           {
  //             gridLines: {
  //               color: '#e5e9f2',
  //               borderDash: [3, 3],
  //               zeroLineColor: '#e5e9f2',
  //               zeroLineWidth: 1,
  //               zeroLineBorderDash: [3, 3],
  //             },
  //             ticks: {
  //               beginAtZero: true,
  //               fontSize: 12,
  //               fontColor: '#182b49',
  //               // max: Math.max(...reportChart.map(item => item?.total_run)),
  //               // stepSize: Math.floor(Math.max(...reportChart.map(item => item?.total_run)) / 5),
  //               callback(label) {
  //                 return `${label}k`;
  //               },
  //             },
  //           },
  //         ],
  //         xAxes: [
  //           {
  //             gridLines: {
  //               display: true,
  //               zeroLineWidth: 2,
  //               zeroLineColor: '#fff',
  //               color: 'transparent',
  //               z: 1,
  //             },
  //             ticks: {
  //               beginAtZero: true,
  //               fontSize: 12,
  //               fontColor: '#182b49',
  //             }
  //           },
  //         ],
  //       },
  //     }}
  //   />
  // )

  const arrTotalSub = commentByDay?.map(item => item?.comments) || [];
  const arrWaveDate = commentByDay?.map(item => item?.date);
  
  const totalSubToday = arrWaveDate?.indexOf(currentDate) > 0 ? arrTotalSub[arrWaveDate?.indexOf(currentDate)] : 0;

  const dataChartYoutube = {
    wave_date: arrWaveDate,
    wave_timeline: [
      {
        name: `Tổng sub chạy (${typeService})`,
        data: arrTotalSub
      },
      // {
      //   name: 'Tỉ lệ thành công (%)',
      //   data: avgPerformance?.map(item => item?.performance)
      // }
    ],
  };

  const chartApex = (
    <ChartYoutubeAnalyse loadingChart={isLoading} chartData={dataChartYoutube || []} />
  );

  const dataIndicator = (
    <ul className="chart-dataIndicator" style={{ margin: 0, padding: 0 }}>
      {
        cashFlowDataset && cashFlowDataset?.map((item, key) => {
          return (
            <li key={key + 1} style={{ display: 'inline-flex', alignItems: 'center', margin: 0, padding: 0 }}>
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
  )

  return (    
      cashFlowState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.cashFlowActive === 'week' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeCash('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.cashFlowActive === 'month' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeCash('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.cashFlowActive === 'year' ? 'active' : 'regular'}>
                  <Link onClick={() => handleActiveChangeCash('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title={
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 700, margin: 0, padding: 0 }}>{title}</p> 
              <span>Từ <strong>{filterRange?.from}</strong> đến <strong>{filterRange?.to}</strong></span>
            </div>
          }
          size="large"
          more={moreContent}
          style={{ backgroundColor: 'gray' }}
        >
          {cfIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <CardBarChart>
              <Row justify="start">
                <Col xxl={3} md={3} sm={3} xs={3}>
                  {
                    totalSubToday > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>Hôm nay</p>
                        <Heading as="h3" className="color-primary" style={{ margin: 0, padding: 0 }}>
                          {numberWithCommas(arrTotalSub?.at(-1) || 0)}
                        </Heading>
                      </div>
                    ) : null
                  }

                </Col>
                <Col xxl={3} md={3} sm={3} xs={3}>
                  {
                    arrTotalSub?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>Cao nhất</p>
                        <Heading as="h3" style={{ margin: 0, padding: 0 }}>{numberWithCommas(Math.max(...arrTotalSub))}</Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={3}>
                  {
                    arrTotalSub?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>Thấp nhất</p>
                        <Heading as="h3" style={{ margin: 0, padding: 0 }}>{numberWithCommas(Math.min(...arrTotalSub))}</Heading>
                      </div>
                    ) : null
                  }
                </Col>
              </Row>

              {/* {chartBar} */}
              {chartApex}
              {dataIndicator}

            </CardBarChart>
          )}
        </Cards>
      )   
  );
}

AnalyseYoutube.propTypes = {
  title: PropTypes.string
};

export default AnalyseYoutube;
