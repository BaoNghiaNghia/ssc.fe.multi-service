import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
  </>
);
function TaskSuccessEveryMinutes({ title }) {
  const { preIsLoading, taskSuccessInMinutes, typeService } = useSelector(state => {
    return {
      preIsLoading: state.reports.loading,
      taskSuccessInMinutes: state?.reports?.taskSuccessInMinutes,
      typeService: state?.reports?.typeService,
    };
  });

  const durationReport = taskSuccessInMinutes?.map((rp) => rp?.time);

  const optionTaskSuccess = {
    chart: {
      type: 'line',
      height: 160,
      style: {
        fontFamily: 'Inter', // Set the default font for the chart
      },
    },
    title: {
      text: '',
      style: {
        fontFamily: 'Inter', // Apply to title
      },
    },
    xAxis: {
      categories: durationReport,
      title: {
        text: 'Thời gian',
        style: {
          fontFamily: 'Inter', // Apply to x-axis title
        },
      },
      visible: false,
      labels: {
        format: '{value} km',
        style: {
          fontFamily: 'Inter', // Apply to x-axis labels
        },
      },
      minRange: 5,
    },
    yAxis: {
      min: 0,
      title: {
        text: `Lượt ${typeService}`, // Set the y-axis title text
        align: 'middle',
        style: {
          fontFamily: 'Inter', // Apply to y-axis title
          color: 'black',
          fontSize: '12px',
        },
      },
      labels: {
        style: {
          fontFamily: 'Inter', // Apply to y-axis labels
          fontSize: '13px'
        },
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
          enabled: false,
        },
        threshold: null,
      },
    ],
    legend: {
      enabled: false,
      itemStyle: {
        fontFamily: 'Inter', // Apply to legend
      },
    },
    tooltip: {
      valueDecimals: 0,
      style: {
        fontFamily: 'Inter', // Apply to tooltip
      },
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    accessibility: {
      screenReaderSection: {
        beforeChartFormat:
          '<{headingTagName}>' +
          '{chartTitle}</{headingTagName}><div>{chartSubtitle}</div>' +
          '<div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>' +
          '{yAxisDescription}</div>',
      },
    },
    credits: {
      enabled: false, // Disable the credits
    },
  };
  


  return (
    <RevenueWrapper>
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
