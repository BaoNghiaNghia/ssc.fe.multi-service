/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { Link } from 'react-router-dom';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { GalleryNav } from './style';
import actions from '../../redux/serviceSettings/actions';
import { PageHeader } from '../../components/page-headers/page-headers';
import { MEMBER_TABLE_TYPE } from '../../variables';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';


function UserProfile() {
    const dispatch = useDispatch();

    const { userCurrent } = useSelector(state => {
        return {
            userCurrent : state?.auth?.userInfo
        };
    });

    const [selectedKey, setSelectedKey] = useState("1");

    useEffect(() => {
        dispatch(actions.fetchListServiceBegin({}));
        dispatch(actions.fetchListSettingsBegin({}));
    }, [dispatch]);

    const [state, setState] = useState({

    });

    return (
        <>
        <PageHeader
            ghost
            title="Thông tin cá nhân"
            // buttons={[
            //   <GalleryNav>
            //     <ul>
            //       <li>
            //         <Link
            //           className={typeTable === MEMBER_TABLE_TYPE.MEMBER.title ? 'active' : 'deactivate'}
            //           onClick={() => handleChange(MEMBER_TABLE_TYPE.MEMBER.title)}
            //           to="#"
            //           style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center'}}
            //         >
            //           <IoPeopleOutline fontSize={15}/> <span>Thành viên</span>
            //         </Link>
            //       </li>
            //       <li>
            //         <Link
            //           className={typeTable === MEMBER_TABLE_TYPE.TOPUP.title ? 'active' : 'deactivate'}
            //           onClick={() => handleChange(MEMBER_TABLE_TYPE.TOPUP.title)}
            //           style={{ display: 'inline-flex', alignItems: 'center', alignContent: 'center'}}
            //           to="#"
            //         >
            //           <FaMoneyBillTransfer  fontSize={15}/> <span>Nạp tiền</span>
            //         </Link>
            //       </li>
            //     </ul>
            //   </GalleryNav>,
            // ]}
        />
        <Main>
            <Cards headless>
                <Row gutter={15}>
                    <Col >
                        <div className="mt-4 ml-4 mb-4">
                            <ReactNiceAvatar style={{ width: '2rem', height: '2rem', outline: '3px solid orange', border: '2px solid white' }} {...genConfig(userCurrent?.full_name)} />
                            <div className='pl-3'>
                                <div className='font-weight-bold font-size-md'> {userCurrent?.full_name ? userCurrent?.full_name : userCurrent?.username}</div>
                                <span className='text-black-50'> {userCurrent?.role}</span>
                            </div>
                        </div>
                        {/* <Menu
                            mode="inline"
                            theme='light'
                            activeKey={selectedKey}
                            selectedKeys={selectedKey}
                        >
                            <Menu.Item
                                key="1"
                                icon={<FaUserAlt />}
                                onClick={(value) => {
                                    setSelectedKey("1");
                                    onCloseDrawer(value)
                                }}
                            >
                                Thông tin cá nhân
                            </Menu.Item>

                            <Menu.Item
                                key="2"
                                icon={<Password set="curved" />}
                                className={`hp-mb-16 hp-pl-24 hp-pr-32
                                    ${splitLocation[splitLocation.length - 1] === "password-change"
                                        ? "ant-menu-item-selected"
                                        : "ant-menu-item-selected-in-active"}
                                `}
                                onClick={(value) => {
                                    setSelectedKey("2");
                                    onCloseDrawer(value)
                                }}
                            >
                                Cập nhật mật khẩu
                            </Menu.Item>
                        </Menu> */}
                    </Col>
                </Row>
            </Cards>
        </Main>
        </>
    );
}

export default UserProfile;
