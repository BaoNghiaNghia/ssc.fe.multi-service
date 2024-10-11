import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { IoFileTray } from "react-icons/io5";
import Heading from '../../../components/heading/heading';
import { Focard, RatioCard } from '../style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { numberWithCommas } from '../../../utility/utility';
import { SERVICE_TYPE } from '../../../variables';

function CardGroup() {
  const { typeService, statisticComment, quantityRunByDay } = useSelector((state) => {
    return {
      isLoading: state?.reports?.chartLoading,
      reportData: state?.reports?.usuallyReportData?.report,
      typeService: state?.reports?.typeService,
      statisticComment: state?.reports?.statisticComment,
      quantityRunByDay: state?.reports?.quantityRunByDay,
      filterRange: state?.reports?.filterRange,
    }
  });
  const getValueByKey = (object, row) => object[row];

  const serviceMap = {
    [SERVICE_TYPE.COMMENT.title]: 'comments',
    [SERVICE_TYPE.SUBSCRIBE.title]: 'sub',
    [SERVICE_TYPE.VIEW.title]: 'views',
    [SERVICE_TYPE.LIKE.title]: 'likes'
  };
  
  const arrTotalSubRun = quantityRunByDay?.map(item => {
    const key = serviceMap[typeService] || 'likes';
    return item?.[key];
  }) || [];
  

  const todayRun = arrTotalSubRun.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <Row gutter={10}>
      <Col md={12} sm={6} xs={6}>
        <Focard>
          <div className="forcast-card-box">
            <Cards bodypadding="5px" headless title={`Tổng ${typeService}`} gradient='120deg, #d4fc79 0%, #96e6a1 100%'>
              <div className="focard-details growth-downward">
                <Heading as="h1" color="#136400"><strong>{ numberWithCommas(todayRun || 0) }</strong></Heading>
              </div>
            </Cards>
          </div>
        </Focard>
      </Col>
      <Col md={12} sm={6} xs={6}>
        <Focard>
          <div className="forcast-card-box">
            <Cards
              headless
              title={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', fontWeight: 400 }}>Đơn đang chạy</span>
                  <IoFileTray fontSize={18} fontWeight={800} color="green" style={{ marginRight: '13px' }} />
                </div>
              }
            >
              <div className="focard-details growth-upward">
                <Heading as="h1">{ getValueByKey(statisticComment, '1') || 0 }</Heading>
              </div>
            </Cards>
          </div>
        </Focard>
      </Col>
      <Col md={12} sm={6} xs={6}>
        <RatioCard>
          <Cards
            headless
            title={
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 400 }}>Đơn tạm dừng</span>
                <IoFileTray fontSize={18} fontWeight={800} color="orange" />
              </div>
            }
          >
            <div className="ratio-content">
              <Heading as="h1">{getValueByKey(statisticComment, '-1') || 0 }</Heading>
            </div>
          </Cards>
        </RatioCard>
      </Col>
      <Col md={12} sm={6} xs={6}>
        <RatioCard>
          <Cards
            headless
            title={
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 400 }}>Đơn chờ duyệt</span>
                <IoFileTray fontSize={18} fontWeight={800} color="gray" />
              </div>
            }
          >
            <div className="ratio-content">
              <Heading as="h1">{getValueByKey(statisticComment, '0') || 0 }</Heading>
            </div>
          </Cards>
        </RatioCard>
      </Col>
    </Row>
  );
}

export default CardGroup;
