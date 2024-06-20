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

import { cashFlowGetData } from '../../../../redux/chartContent/actionCreator';
import { currentDate, numberWithCommas } from '../../../../utility/utility';

function AnalyseYoutube(props) {
  const { title } = props;

  const dispatch = useDispatch();
  const { cashFlowState, cfIsLoading, avgPerformance, reportChart, isLoading, filterRange, typeService, commentByDay, performance } = useSelector(state => {
    return {
      cashFlowState: state?.chartContent?.cashFlowData,
      cfIsLoading: state?.chartContent?.cfLoading,
      isLoading: state?.reports?.loading,
      avgPerformance: state?.reports?.subscribeReport?.avg_performance,
      reportChart: state?.reports?.subscribeReport?.report,
      filterRange: state?.reports?.filterRange,
      typeService: state?.reports?.typeService,
      commentByDay: state?.reports?.commentByDay,
      performance: state?.reports?.performance
    };
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

  const cashFlowDataset = cashFlowState !== null && [
    {
      data: avgPerformance && reportChart?.map(item => item?.total_run),
      backgroundColor: '#ff880070',
      hoverBackgroundColor: '#ff8800',
      label: `Tổng ${  typeService  } chạy`,
      maxBarThickness: 10,
      barThickness: 12,
    },
    {
      data: avgPerformance && avgPerformance?.map(item => item?.performance),
      backgroundColor: '#00547370',
      hoverBackgroundColor: '#005473',
      label: 'Tỉ lệ thành công (%)',
      maxBarThickness: 10,
      barThickness: 12,
    },
  ];

  const arrTotalSub = commentByDay?.map(item => item?.comments) || [];
  const orderRequest = performance?.map(item => Math.round(item?.avg_performance)) || [];
  const arrWaveDate = commentByDay?.map(item => item?.date);


  const dataChartYoutube = {
    wave_date: arrWaveDate,
    wave_timeline: [
      {
        name: 'Tỉ lệ thành công (%)',
        data: orderRequest
      },
      {
        name: `Tổng ${typeService} chạy (${typeService})`,
        data: arrTotalSub
      },
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
  );

  const totalSubToday = arrWaveDate?.indexOf(currentDate) > 0 ? arrTotalSub[arrWaveDate?.indexOf(currentDate)] : 0;

  return (    
      cashFlowState !== null && (
        <Cards
          // isbutton={
          //   <div className="card-nav">
          //     <ul>
          //       <li className={state.cashFlowActive === 'week' ? 'active' : 'regular'}>
          //         <Link onClick={() => handleActiveChangeCash('week')} to="#">
          //           Week
          //         </Link>
          //       </li>
          //       <li className={state.cashFlowActive === 'month' ? 'active' : 'regular'}>
          //         <Link onClick={() => handleActiveChangeCash('month')} to="#">
          //           Month
          //         </Link>
          //       </li>
          //       <li className={state.cashFlowActive === 'year' ? 'active' : 'regular'}>
          //         <Link onClick={() => handleActiveChangeCash('year')} to="#">
          //           Year
          //         </Link>
          //       </li>
          //     </ul>
          //   </div>
          // }
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
              <Row justify="start" style={{ marginLeft: '10px' }}>
                <Col xxl={3} md={3} sm={3} xs={3}>
                  <div className="flex-grid-child">
                    <p style={{ margin: 0, padding: 0 }}>Hôm nay</p>
                    <Heading as="h5" style={{ margin: 0, padding: 0 }}>
                      {numberWithCommas(totalSubToday || 0)}
                    </Heading>
                  </div>
                </Col>
                <Col xxl={3} md={3} sm={3} xs={3}>
                  {
                    arrTotalSub?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>Cao nhất</p>
                        <Heading as="h5" style={{ margin: 0, padding: 0 }}>{numberWithCommas(Math.max(...arrTotalSub))}</Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={3}>
                  {
                    arrTotalSub?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0 }}>Thấp nhất</p>
                        <Heading as="h5" style={{ margin: 0, padding: 0 }}>{numberWithCommas(Math.min(...arrTotalSub))}</Heading>
                      </div>
                    ) : null
                  }
                </Col>
              </Row>
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
