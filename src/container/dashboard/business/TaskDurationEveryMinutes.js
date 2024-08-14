import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import { RevenueWrapper } from '../style';
import { Cards } from '../../../components/cards/frame/cards-frame';

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
function TaskDurationEveryMinutes({ title }) {
  const dispatch = useDispatch();
  const { preIsLoading, typeService, taskDurationInMinutes } = useSelector(state => {
    return {
      preIsLoading: state.reports.loading,
      typeService: state?.reports?.typeService,
      taskDurationInMinutes: state?.reports?.taskDurationInMinutes
    };
  });


  const durationReport = taskDurationInMinutes?.map((rp) => rp?.time);

  const optionTaskSuccess = {
    chart: {
      type: 'line',
      height: 160,
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
        text: `Thời gian (phút)`,
      },
      align: "center",
      verticalAlign: "middle",
      style: {
          color: 'black',
          fontSize: '17px',
          fontFamily: 'Poppins, sans-serif',
      },
    },
    series: [
      {
        lineWidth: 1,
        data: taskDurationInMinutes?.map((rp) => Math.round(rp?.duration)),
        name: `Thời gian ${typeService}`,
        color: '#008000'
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
        valueDecimals: 0
    }
  };


  return (
    <RevenueWrapper>
      <Cards
        // isbutton={
        //   <div className="card-nav">
        //     <ul>
        //       <li className={state.revenue === 'week' ? 'active' : 'deactivate'}>
        //         <Link onClick={() => handleActiveChangeRevenue('week')} to="#">
        //           Week
        //         </Link>
        //       </li>
        //       <li className={state.revenue === 'month' ? 'active' : 'deactivate'}>
        //         <Link onClick={() => handleActiveChangeRevenue('month')} to="#">
        //           Month
        //         </Link>
        //       </li>
        //       <li className={state.revenue === 'year' ? 'active' : 'deactivate'}>
        //         <Link onClick={() => handleActiveChangeRevenue('year')} to="#">
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
    </RevenueWrapper>
  );
}

TaskDurationEveryMinutes.defaultProps = {
  title: 'Total Revenue',
};

TaskDurationEveryMinutes.propTypes = {
  title: PropTypes.string,
};

export default TaskDurationEveryMinutes;
