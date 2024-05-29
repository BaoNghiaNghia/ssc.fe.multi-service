import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import { RevenueWrapper } from '../../style';
import { ChartjsAreaChart, ChartjsLineChart } from '../../../../components/charts/chartjs';
import { customTooltips, chartLinearGradient } from '../../../../components/utilities/utilities';
import { performanceFilterData, performanceGetData } from '../../../../redux/chartContent/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';

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
function RatioYoutubeSuccess({ title }) {
  const dispatch = useDispatch();
  const { performanceState, preIsLoading, countSubscribeSuccess } = useSelector(state => {
    return {
      performanceState: state.chartContent.performanceData,
      preIsLoading: state.chartContent.perLoading,
      countSubscribeSuccess: state?.reports?.reportCountSuccess
    };
  });

  const [state, setState] = useState({
    revenue: 'year',
  });

  useEffect(() => {
    if (performanceGetData) {
      dispatch(performanceGetData());
    }
  }, [dispatch]);

  const handleActiveChangeRevenue = value => {
    setState({
      ...state,
      revenue: value,
    });
    return dispatch(performanceFilterData(value));
  };

  const performanceDatasets = performanceState !== null && [
    {
      data: countSubscribeSuccess?.map(item => item.count),
      borderColor: '#5F63F2',
      borderWidth: 4,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('performance'), 300, {
          start: '#5F63F230',
          end: '#ffffff05',
        }),
      label: 'Current period',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#5F63F2',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
    },
    {
      data: performanceState.users[2],
      borderColor: '#C6D0DC',
      borderWidth: 2,
      fill: false,
      backgroundColor: '#00173750',
      label: 'Previous period',
      borderDash: [3, 3],
      pointRadius: '0',
      hoverRadius: '0',
      amount: '$3,258',
      amountClass: 'prev-amount',
    },
  ];

  const durationReport = countSubscribeSuccess?.map((rp) => rp?.note_date);

  const optionTaskSuccess = {
    chart: {
      type: 'line',
      height: 200,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: durationReport,
      title: {
        text: 'Thời gian',
      },
      visible: false
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Lượt subscribe',
      },
      align: "center",
      verticalAlign: "middle",
      style: {
          color: 'black',
          fontSize: '17px',
          fontFamily: 'Be Vietnam Pro'
      },
    },
    series: [
      {
        lineWidth: 1,
        data: countSubscribeSuccess?.map((rp) => rp?.count),
      },
    ],
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }
        },
        marker: {
            radius: 2
        },
        lineWidth: 1,
        states: {
            hover: {
                lineWidth: 1
            }
        },
        threshold: null
      }
    },
    accessibility: {
      screenReaderSection: {
          beforeChartFormat: '<{headingTagName}>{chartTitle}</{headingTagName}><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div>'
      }
    },
    tooltip: {
        valueDecimals: 2
    }
  };


  return (
    <RevenueWrapper>
      {performanceState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.revenue === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeRevenue('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.revenue === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeRevenue('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.revenue === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeRevenue('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          more={moreContent}
          title={
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 700, margin: 0, padding: 0 }}>{title}</p> 
              <span>Từ <strong>{moment(durationReport[0]).format("HH:mm DD-MM-YYYY")}</strong> đến <strong>{moment(durationReport?.at(-1)).format("HH:mm DD-MM-YYYY")}</strong></span>
            </div>
          }
          size="large"
        >
          {preIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
            <div className="performance-lineChart">
              {/* {performanceDatasets &&
                performanceDatasets.map((item, key) => {
                  return (
                    <li key={key + 1} className="custom-label">
                      <strong className={item.amountClass}>{item.amount}</strong>
                      <div>
                        <span
                          style={{
                            backgroundColor: item.borderColor,
                          }}
                        />
                        {item.label}
                      </div>
                    </li>
                  )
                })} */}

              <HighchartsReact highcharts={Highcharts} options={optionTaskSuccess} />
            </div>
          )}
        </Cards>
      )}
    </RevenueWrapper>
  );
}

RatioYoutubeSuccess.defaultProps = {
  title: 'Total Revenue',
};

RatioYoutubeSuccess.propTypes = {
  title: PropTypes.string,
};

export default RatioYoutubeSuccess;
