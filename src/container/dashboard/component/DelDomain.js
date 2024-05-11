/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Form, Select, Button, Modal,  Typography } from 'antd';
import { MdAddchart } from "react-icons/md";
import actions from '../../../redux/proxy/actions';
import { COLOR_GENERAL, FixedServiceTemp } from '../../../variables';

const { Paragraph, Text } = Typography;

function DelDomain({ isOpen, setState }) {
  const dispatch = useDispatch();
  const [formDelDomain] = Form.useForm();

  const { postLoading, detailDomain } = useSelector(state => {
    return {
      postLoading: state?.proxy?.postLoading,
      detailDomain: state?.proxy?.detailDomain,
    };
  });

  const currentStateWorking = detailDomain?.enable;

  const handleOk = () => {
    try {
      const requestData = {
        id: detailDomain.id,
        // enable: !detailDomain?.enable,
        // domain: detailDomain?.domain,
        // total: detailDomain?.total,
        // port_start: detailDomain?.port_start,
        // geo: detailDomain?.geo,
        // used_count: detailDomain?.used_count,
      }
  
      dispatch(actions.deleteDomainBegin(requestData));

      setState({
        isDelDomainModal: false,
      });
    } catch (err) {
      console.log(err);
      setState({
        isDelDomainModal: false,
      });

      formDelDomain.resetFields();
    }

  };

  const handleCancel = () => {
    setState({
      isDelDomainModal: false,
    });
  }

  return (
    <>
      <Modal
        width='350px'
        open={isOpen}
        centered
        title={
          <>
            <div style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center' }}>
              <MdAddchart fontSize={40} color='#a1a1a1' style={{ margin: '0 15px 0 0', padding: '5px', border: '1px solid #c5c5c5', borderRadius: '10px' }} />
              <div>
                <p style={{ fontSize: '1.1em', marginBottom: '2px', fontWeight: '700' }}>Xóa domain</p>
                <p style={{ fontSize: '0.8em', marginBottom: '0px' }}>Xóa sử dụng domain </p>
              </div>
            </div>
          </>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="submit" type="primary" loading={postLoading} onClick={handleOk}>
            Xóa
          </Button>
        ]}
      >
        <Form name="add_service" layout="vertical" form={formDelDomain}>
          <Row gutter="10">
            <Col sm={24}>
            <Paragraph>
                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: '400'
                  }}
                >
                  Xác nhận xóa domain <span style={{ color: COLOR_GENERAL.primary }}>{detailDomain?.domain}</span> ?
                </Text>
              </Paragraph>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

DelDomain.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func
};

export default DelDomain;
