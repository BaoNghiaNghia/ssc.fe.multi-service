import React from 'react';
import { Col, Row, Spin } from 'antd';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoArrowDownCircle, IoArrowUpCircle } from 'react-icons/io5';
import ChartYoutubeAnalyse from './ChartYoutubeAnalyse';
import { CardBarChart } from '../style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';

import { currentDate, numberWithCommas } from '../../../utility/utility';
import { SERVICE_TYPE } from '../../../variables';

function AnalyseYoutube(props) {
  const { title } = props;

  const { avgPerformance, reportChart, isLoading, filterRange, typeService, commentByDay, performance } = useSelector(state => {
    return {
      isLoading: state?.reports?.chartLoading,
      avgPerformance: state?.reports?.usuallyReportData?.avg_performance,
      reportChart: state?.reports?.usuallyReportData?.report,
      filterRange: state?.reports?.filterRange,
      typeService: state?.reports?.typeService,
      commentByDay: state?.reports?.commentByDay,
      performance: state?.reports?.performance
    };
  });

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

  const cashFlowDataset = avgPerformance !== null && [
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

  const serviceMap = {
    [SERVICE_TYPE.COMMENT.title]: 'comments',
    [SERVICE_TYPE.SUBSCRIBE.title]: 'sub',
    [SERVICE_TYPE.VIEW.title]: 'view',
    [SERVICE_TYPE.LIKE.title]: 'like'
  };
  
  const arrTotalSubRun = commentByDay?.map(item => {
    const key = serviceMap[typeService] || 'likes'; // default to 'likes' if no match
    return item?.[key];
  }) || [];
  
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
        data: arrTotalSubRun
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

  const totalSubToday = arrWaveDate?.indexOf(currentDate) > 0 ? arrTotalSubRun[arrWaveDate?.indexOf(currentDate)] : 0;
  const sumPoint = arrTotalSubRun.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const averagePoint = (Array.isArray(arrTotalSubRun) && arrTotalSubRun.length > 0) ? (sumPoint / arrTotalSubRun.length) : 0;

  return (    
    avgPerformance !== null && (
        <Cards
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
          { isLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <CardBarChart>
              <Row justify="start" style={{ marginLeft: '10px' }}>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  <div className="flex-grid-child">
                    <p style={{ margin: 0, padding: 0 }}>
                      <span style={{ color: 'gray' }}>Hôm nay</span>
                    </p>
                    <Heading as="h5" style={{ margin: 0, padding: 0 }}>
                      {numberWithCommas(totalSubToday || 0)}
                      <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{typeService}</span>
                    </Heading>
                  </div>
                </Col>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  {
                    arrTotalSubRun?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                          <span style={{ color: 'gray' }}>Cao nhất </span>
                          <IoArrowUpCircle color='green' fontSize={17} style={{ marginLeft: '7px' }} />
                        </p>
                        <Heading as="h5" style={{ margin: 0, padding: 0 }}>
                          {numberWithCommas(Math.max(...arrTotalSubRun) || 0)}
                          <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{typeService}</span>
                        </Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  {
                    arrTotalSubRun?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                          <span style={{ color: 'gray' }}>Thấp nhất</span>
                          <IoArrowDownCircle color='orangered' fontSize={17} style={{ marginLeft: '7px' }} />
                        </p>
                        <Heading as="h5" style={{ margin: 0, padding: 0 }}>
                          {numberWithCommas(Math.min(...arrTotalSubRun) || 0)}
                          <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{typeService}</span>
                        </Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  {
                    arrTotalSubRun?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                          <span style={{ color: 'gray' }}>Trung bình</span>
                        </p>
                        <Heading as="h5" style={{ margin: 0, padding: 0 }}>
                          {numberWithCommas(Math.round(averagePoint) || 0)}
                          <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{typeService}</span>
                        </Heading>
                      </div>
                    ) : null
                  }
                </Col>
                <Col xxl={3} md={3} sm={3} xs={8}>
                  {
                    arrTotalSubRun?.length > 0 ? (
                      <div className="flex-grid-child">
                        <p style={{ margin: 0, padding: 0, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                          <span style={{ color: 'gray' }}>Tổng cộng</span>
                        </p>
                        <Heading as="h5" style={{ margin: 0, padding: 0 }}>
                          {numberWithCommas(Math.round(sumPoint) || 0)}
                          <span style={{ fontStyle: 'italic', fontSize: '0.6em',opacity: '70%' }}>{typeService}</span>
                        </Heading>
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
