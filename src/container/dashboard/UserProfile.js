/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Menu, Button, Divider, Typography, Form, Input } from 'antd';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { FaUserAlt } from 'react-icons/fa';
import { MdPassword } from "react-icons/md";
import actions from '../../redux/serviceSettings/actions';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const { Title } = Typography;

const InfoProfile = () => {
    const { userCurrent } = useSelector(state => {
        return {
            userCurrent: state?.auth?.userInfo
        };
    });

    return (
        <>
            <Row>
                <Col md={24} span={24}>
                    <Title level={5}>Thông tin cá nhân</Title>
                    <p>Thông tin người dùng</p>
                </Col>
            </Row>
            <Divider />
            <Row align="middle" justify="space-between">
                <Col md={12} span={24}>
                    <span>Liên hệ</span>
                </Col>

                <Col md={12} span={24}>
                    <Button type="primary" ghost>
                        Thay đổi
                    </Button>
                </Col>

                <Col span={24}>
                    <ul>
                        <li>
                            <span style={{ fontWeight: 700 }}>Họ tên: </span>
                            <span>{userCurrent?.fullname}</span>
                        </li>
                        <li style={{ marginTop: '10px' }}>
                            <span style={{ fontWeight: 700 }}>Email: </span>
                            <span>{userCurrent?.email}</span>
                        </li>
                        <li style={{ marginTop: '10px' }}>
                            <span style={{ fontWeight: 700 }}>Điện thoại: </span>
                            <span>{userCurrent?.phone}</span>
                        </li>
                    </ul>
                </Col>
            </Row>
        </>
    );
}

const PasswordProfile = () => {
    const [formChangePass] = Form.useForm();

    const onFinishForgot = () => {
        try {
            formChangePass.validateFields()
                .then((values) => {
                    console.log('--- values change pass nè ---', values);
                })
                .catch((err) => {
                    console.error("Handle Real Error: ", err);
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Row>
            <Col span={24}>
                <Title level={5}>Cập nhật mật khẩu</Title>
                <p>Đặt mật khẩu duy nhất để bảo vệ tài khoản của bạn.</p>
                <Divider />
            </Col>

            <Col xxl={12} xl={10} md={15} span={24}>
                <Form form={formChangePass} layout="vertical" name="basic" onFinish={onFinishForgot}>
                    <Row gutter={15}>
                        <Col xs={8}>
                            <Form.Item
                                label="Mật khẩu cũ :"
                                name="current_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Trường không được trống'
                                    }
                                ]}
                            >
                                <Input.Password size='small' addonBefore={<MdPassword />} placeholder="Nhập mật khẩu" />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item
                                label="Mật khẩu mới:"
                                name="new_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Trường không được trống'
                                    }
                                ]}
                            >
                                <Input.Password
                                    size='small'
                                    addonBefore={<MdPassword />}
                                    placeholder="Nhập mật khẩu mới"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item
                                label="Nhập lại mật khẩu mới :"
                                name="new_password_confirmation"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Trường không được trống'
                                    }
                                ]}
                            >
                                <Input.Password size='small' addonBefore={<MdPassword />} placeholder="Nhập lại mật khẩu" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Form.Item>
                                <Button block type="primary" htmlType="submit" color="#26695c">
                                    Thay đổi
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}


const UserProfile = () => {
    const dispatch = useDispatch();

    const [tabNumber, setTabNumber] = useState("profile");

    const { userCurrent } = useSelector(state => {
        return {
            userCurrent: state?.auth?.userInfo
        };
    });

    const [selectedKey, setSelectedKey] = useState("profile");

    useEffect(() => {
        dispatch(actions.fetchListServiceBegin({}));
        dispatch(actions.fetchListSettingsCommentBegin({}));
    }, [dispatch]);

    const renderTab = (tabNumber) => {
        switch (tabNumber) {
            case "profile":
                return <InfoProfile userCurrent={userCurrent} />;
            case "password":
                return <PasswordProfile userCurrent={userCurrent} />;
            default:
                return <InfoProfile userCurrent={userCurrent} />;
        }
    }

    const onCloseDrawer = (value) => {
        setTabNumber(parseInt(value.key));
    };

    return (
        <>
            <PageHeader
                ghost
                title="Thông tin cá nhân"
            />
            <Main>
                <Cards headless>
                    <Row gutter={40}>
                        <Col xs={4}>
                            <div style={{ display: 'inline-flex', alignContent: 'center', marginBottom: '30px' }}>
                                <ReactNiceAvatar
                                    style={{
                                        width: '2.4rem',
                                        height: '2.4rem',
                                        outline: '3px solid orange',
                                        border: '2px solid white'
                                    }}
                                    {...genConfig(userCurrent?.fullname?.charAt(0))}
                                />
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ fontWeight: 700, fontSize: '1.1em' }}> {userCurrent?.fullname ? userCurrent?.fullname : userCurrent?.email}</div>
                                    <span style={{ fontSize: '0.7em' }}> {userCurrent?.group?.role}</span>
                                </div>
                            </div>
                            <Menu
                                mode="inline"
                                theme='light'
                                activeKey={selectedKey}
                                selectedKeys={selectedKey}
                            >
                                <Menu.Item
                                    key="profile"
                                    icon={<FaUserAlt />}
                                    onClick={(value) => {
                                        setSelectedKey("profile");
                                        onCloseDrawer(value)
                                    }}
                                >
                                    Thông tin cá nhân
                                </Menu.Item>
                                <Menu.Item
                                    key="password"
                                    icon={<MdPassword set="curved" />}
                                    onClick={(value) => {
                                        setSelectedKey("password");
                                        onCloseDrawer(value)
                                    }}
                                >
                                    Cập nhật mật khẩu
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col xs={20}>
                            {renderTab(selectedKey)}
                        </Col>
                    </Row>
                </Cards>
            </Main>
        </>
    );
}

export default UserProfile;
