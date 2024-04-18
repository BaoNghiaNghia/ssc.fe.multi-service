import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardBarChart } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { ChartjsBarChartTransparent } from '../../../../components/charts/chartjs';
import ChartSubscribePoint from '../business/ChartSubscribePoint';
import { closeDealFilterData, closeDealGetData } from '../../../../redux/chartContent/actionCreator';
import actions from '../../../../redux/reports/actions';
import Heading from '../../../../components/heading/heading';
import { currentDate, findSecondMinimum, numberWithCommas } from '../../../../utility/utility';

function ClosedDeals(props) {
  const { title } = props;
  const dispatch = useDispatch();
  const { closeDealState, cdIsLoading, fromDate, toDate, subWithPoint, typeService } = useSelector(state => {
    return {
      closeDealState: state?.chartContent?.closeDealData,
      cdIsLoading: state?.chartContent?.cdLoading,
      fromDate: state?.reports.filterRange?.from,
      toDate: state?.reports.filterRange?.to,
      subWithPoint: state?.reports?.subWithPoint,
      typeService: state?.reports?.typeService
    };
  });

  const [state, setState] = useState({
    closeDealTabActive: 'year',
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
      data: subWithPoint?.map(item => Math.abs(item?.totalPoint)),
      backgroundColor: '#20C99780',
      hoverBackgroundColor: '#000',
      label: 'Tổng point (đ)',
      average: '50.8',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 49,
    },
    {
      data: subWithPoint?.map(item => Math.abs(item?.subOrder)),
      backgroundColor: '#5F63F280',
      hoverBackgroundColor: '#5F63F2',
      label: `${typeService} yêu cầu`,
      average: '$28k',
      maxBarThickness: 10,
      barThickness: 12,
      percent: 60,
    },
  ];

  // eslint-disable-next-line no-unsafe-optional-chaining
  const totalPoint = subWithPoint?.map(item => item?.totalPoint*(-1)) || [];
  const arrWaveDate = subWithPoint?.map(item => item?.date);

  const totalSubToday = arrWaveDate?.indexOf(currentDate) > 0 ? totalPoint[arrWaveDate?.indexOf(currentDate)] : 0;

  const chartSubscribePoint = {
    wave_date: arrWaveDate,
    wave_timeline: [
      {
        name: `${typeService} yêu cầu`,
        data: subWithPoint?.map(item => Math.abs(item?.subOrder))
      },
      {
        name: 'Tổng point',
        data: totalPoint
      }
    ],
  }

  const handleActiveChangeYoutube = value => {
    setState({
      ...state,
      closeDealTabActive: value,
    });
    dispatch(closeDealFilterData(value));
  };

  return (
    <>
      {closeDealState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.closeDealTabActive === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.closeDealTabActive === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.closeDealTabActive === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeYoutube('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title={
            <div>
              {title} <span>Từ <strong>{fromDate}</strong> đến <strong>{toDate}</strong></span>
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
              {/* <div className="deals-barChart">
                {closeDealDatasets.map((item, key) => {
                  return (
                    <div key={key + 1} className="card-bar-top">
                      <h4>
                        {item.label}
                        <p className={item.percent >= 50 ? 'growth-up' : 'growth-down'}>
                          <span className="deal-value">{item.average}</span>
                          <span className="deal-percentage">
                            <FeatherIcon icon={item.percent >= 50 ? 'arrow-up' : 'arrow-down'} size={14} />
                            {item.percent}%
                          </span>
                        </p>
                      </h4>
                    </div>
                  );
                })}
              </div> */}

              <div className="card-bar-top d-flex flex-grid">
                {
                  totalSubToday > 0 ? (
                    <div className="flex-grid-child">
                      <p>Hôm nay (đ)</p>
                      <Heading as="h3" className="color-primary">
                        {numberWithCommas(totalPoint?.at(-1) || 0)}
                      </Heading>
                    </div>
                  ) : null
                }
                <div className="flex-grid-child">
                  <p>Doanh thu cao nhất (đ)</p>
                  <Heading as="h3">{numberWithCommas(Math.max(...totalPoint || 0))}</Heading>
                </div>
                <div className="flex-grid-child">
                  <p>Doanh thu thấp nhất (đ)</p>
                  <Heading as="h3">{numberWithCommas(Math.min(...totalPoint || 0))}</Heading>
                </div>
              </div>

              <ChartSubscribePoint loadingChart={false} chartData={chartSubscribePoint || {}} />

              {/* <ChartjsBarChartTransparent
                labels={subWithPoint?.map(item => item.date)}
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
              <ul className="deals-list">
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

ClosedDeals.propTypes = {
  title: PropTypes.string,
};

export default ClosedDeals;
