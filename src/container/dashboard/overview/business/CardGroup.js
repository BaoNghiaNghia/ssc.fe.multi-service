import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { IoFileTray } from "react-icons/io5";
import Heading from '../../../../components/heading/heading';
import { Focard, RatioCard } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { ChartjsAreaChart } from '../../../../components/charts/chartjs';
import { chartLinearGradient } from '../../../../components/utilities/utilities';
import { numberWithCommas } from '../../../../utility/utility';

function CardGroup() {
  const { reportData, typeService, statisticComment } = useSelector((state) => {
    return {
      reportData: state?.reports?.subscribeReport?.report,
      typeService: state?.reports?.typeService,
      statisticComment: state?.reports?.statisticComment
    }
  });
  const getValueByKey = (object, row) => object[row];
  const totalSub = reportData && reportData.map((item) => item.total_run).reduce((partialSum, a) => partialSum + Number(a), 0);

  return (
    <Row gutter={25}>
      <Col md={12} xs={12}>
        <Focard>
          <div className="forcast-card-box">
            <Cards bodypadding="5px" headless title={`Số ${typeService}`} gradient='120deg, #d4fc79 0%, #96e6a1 100%'>
              <div className="focard-details growth-downward">
                <Heading as="h1"><strong>{ numberWithCommas(totalSub || 0) }</strong></Heading>
                {/* <p className="focard-status">
                  <span className="focard-status__percentage">
                    <FeatherIcon icon="arrow-down" /> 25%
                  </span>
                  <span>Since last month</span>
                </p> */}
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
      <Col md={12} xs={12}>
        <Focard>
          <div className="forcast-card-box">
            <Cards
              headless
              title={
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <IoFileTray fontSize={20} fontWeight={800} color="green" style={{ marginRight: '7px' }} />
                  <span style={{ fontSize: '14px', fontWeight: 400 }}>Đơn đang chạy</span>
                </div>
              }
            >
              <div className="focard-details growth-upward">
                <Heading as="h1">{ getValueByKey(statisticComment, '1') || 0 }</Heading>
                {/* <p className="focard-status">
                  <span className="focard-status__percentage">
                    <FeatherIcon icon="arrow-up" /> 25%
                  </span>
                  <span>Since last month</span>
                </p> */}
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
      <Col md={12} sm={12} xs={12}>
        <RatioCard>
          <Cards
            headless
            title={
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <IoFileTray fontSize={20} fontWeight={800} color="orange" style={{ marginRight: '7px' }} />
                <span style={{ fontSize: '14px', fontWeight: 400 }}>Đơn tạm tắt</span>
              </div>
            }
          >
            <div className="ratio-content">
              <Heading as="h1">{getValueByKey(statisticComment, '-1') || 0 }</Heading>
              {/* <Progress percent={80} className="progress-success" /> */}
            </div>
          </Cards>
        </RatioCard>
      </Col>
      <Col md={12} sm={12} xs={12}>
        <RatioCard>
          <Cards
            headless
            title={
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <IoFileTray fontSize={20} fontWeight={800} color="gray" style={{ marginRight: '7px' }} />
                <span style={{ fontSize: '14px', fontWeight: 400 }}>Đơn chờ duyệt</span>
              </div>
            }
          >
            <div className="ratio-content">
              <Heading as="h1">{getValueByKey(statisticComment, '0') || 0 }</Heading>
              {/* <Progress percent={72} status="warning" /> */}
            </div>
          </Cards>
        </RatioCard>
      </Col>
    </Row>
  );
}

export default CardGroup;
