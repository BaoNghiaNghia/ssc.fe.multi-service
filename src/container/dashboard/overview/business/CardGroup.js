import React from 'react';
import { Row, Col, Progress } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import Heading from '../../../../components/heading/heading';
import { Focard, RatioCard } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { ChartjsAreaChart } from '../../../../components/charts/chartjs';
import { chartLinearGradient } from '../../../../components/utilities/utilities';
import { numberWithCommas } from '../../../../utility/utility';

function CardGroup() {
  const { reportData } = useSelector((state) => {
    return {
      reportData: state?.reports?.subscribeReport?.report
    }
  });

  const totalSub = reportData && reportData.map((item) => item.total_run).reduce((partialSum, a) => partialSum + Number(a), 0);

  return (
    <Row gutter={25}>
      <Col md={12}>
        <Focard>
          <div className="forcast-card-box">
            <Cards bodypadding="5px" headless title="Số Subscribe" gradient='120deg, #d4fc79 0%, #96e6a1 100%'>
              <div className="focard-details growth-downward">
                <Heading as="h1"><strong>{numberWithCommas(totalSub || 0)}</strong></Heading>
                <p className="focard-status">
                  <span className="focard-status__percentage">
                    <FeatherIcon icon="arrow-down" /> 25%
                  </span>
                  <span>Since last month</span>
                </p>
              </div>
              <ChartjsAreaChart
                id="netProfit"
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                datasets={[
                  {
                    data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                    borderColor: '#5F63F2',
                    borderWidth: 3,
                    fill: true,
                    pointHoverBackgroundColor: '#5F63F2',
                    pointHoverBorderWidth: 0,
                    pointHoverBorderColor: 'transparent',
                    backgroundColor: () =>
                      chartLinearGradient(document.getElementById('netProfit'), 80, {
                        start: '#5F63F212',
                        end: '#5F63F202',
                      }),
                  },
                ]}
                height={80}
              />
            </Cards>
          </div>
        </Focard>
      </Col>
      <Col md={12}>
        <Focard>
          <div className="forcast-card-box">
            <Cards headless title="Đơn đang chạy">
              <div className="focard-details growth-upward">
                <Heading as="h1">545 đơn</Heading>
                <p className="focard-status">
                  <span className="focard-status__percentage">
                    <FeatherIcon icon="arrow-up" /> 25%
                  </span>
                  <span>Since last month</span>
                </p>
              </div>
              <ChartjsAreaChart
                id="grossProfit"
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct']}
                datasets={[
                  {
                    data: [30, 10, 20, 25, 20, 30, 15, 25, 15, 10],
                    borderColor: '#20C997',
                    borderWidth: 3,
                    fill: true,
                    pointHoverBackgroundColor: '#20c997',
                    pointHoverBorderWidth: 0,
                    pointHoverBorderColor: 'transparent',
                    backgroundColor: () =>
                      chartLinearGradient(document.getElementById('grossProfit'), 80, {
                        start: '#20C99712',
                        end: '#20C99702',
                      }),
                  },
                ]}
                height={80}
              />
            </Cards>
          </div>
        </Focard>
      </Col>
      <Col md={12} sm={12} xs={24}>
        <RatioCard>
          <Cards headless title="Đơn chờ hủy">
            <div className="ratio-content">
              <Heading as="h1">0</Heading>
              <Progress percent={80} className="progress-success" />
            </div>
          </Cards>
        </RatioCard>
      </Col>
      <Col md={12} sm={12} xs={24}>
        <RatioCard>
          <Cards headless title="Đơn chờ duyệt">
            <div className="ratio-content">
              <Heading as="h1">0</Heading>
              <Progress percent={72} status="warning" />
            </div>
          </Cards>
        </RatioCard>
      </Col>
    </Row>
  );
}

export default CardGroup;
