import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import { RevenueWrapper } from '../../style';
import { performanceGetData } from '../../../../redux/chartContent/actionCreator';
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
function TaskSuccessEveryMinutes({ title }) {
  const dispatch = useDispatch();
  const { performanceState, preIsLoading, taskSuccessInMinutes, typeService } = useSelector(state => {
    return {
      performanceState: state.chartContent.performanceData,
      preIsLoading: state.chartContent.perLoading,
      taskSuccessInMinutes: state?.reports?.taskSuccessInMinutes,
      typeService: state?.reports?.typeService,
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

  const durationReport = taskSuccessInMinutes?.map((rp) => rp?.time);

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
      visible: false,
      labels: {
        format: '{value} km'
      },
      minRange: 5,
    },
    yAxis: {
      min: 0,
      title: {
        text: `Lượt ${typeService}`,
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
        data: taskSuccessInMinutes?.map((rp) => Math.round(rp?.total)),
        name: `Lượt ${typeService}`,
        color: '#008000',
        fillOpacity: 0.5,
        marker: {
            enabled: false
        },
        threshold: null
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
              },
              stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
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
        beforeChartFormat: '<{headingTagName}>' +
            '{chartTitle}</{headingTagName}><div>{chartSubtitle}</div>' +
            '<div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>' +
            '{yAxisDescription}</div>'
    }
  },
    tooltip: {
        valueDecimals: 0,
    }
  };


  return (
    <RevenueWrapper>
      {performanceState !== null && (
        <Cards
          more={moreContent}
          title={
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 700, margin: 0, padding: 0 }}>{title}</p>
              {durationReport?.length > 0 ? (
                <span>Từ <strong>{moment(durationReport[0]).format("HH:mm DD-MM-YYYY")}</strong> đến <strong>{moment(durationReport?.at(-1)).format("HH:mm DD-MM-YYYY")}</strong></span>
              ) : null}
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
              <HighchartsReact highcharts={Highcharts} options={optionTaskSuccess} />
            </div>
          )}
        </Cards>
      )}
    </RevenueWrapper>
  );
}

TaskSuccessEveryMinutes.defaultProps = {
  title: 'Total Revenue',
};

TaskSuccessEveryMinutes.propTypes = {
  title: PropTypes.string,
};

export default TaskSuccessEveryMinutes;
