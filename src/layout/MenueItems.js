import React from 'react';
import { Badge, Button, Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { TbScan } from "react-icons/tb";
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { useSelector , useDispatch } from 'react-redux';
import { NavTitle } from './style';
import reportActions from '../redux/reports/actions';
import { COLOR_GENERAL, ROLE_GENERAL } from '../variables';
import AddOrderGeneral from '../container/buff-comments/components/AddOrderGeneral';

function MenuItems({ darkMode, toggleCollapsed, topMenu, events }) {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'admin'}`] : [],
  );

  const [collapsedSections, setCollapsedSections] = React.useState({
    TONG_QUAN: false,
    BUFF_VIEW: false,
    BUFF_SUBSCRIBE: false,
    BUFF_LIKE: false,
    BUFF_COMMENT: false,
    ADD_ON: false
  });

  const { userInfo, isOpenCreateOrder } = useSelector(state => {
    return {
      userInfo: state?.auth?.userInfo,
      isOpenCreateOrder: state?.reports?.isOpenCreateOrder
    };
  });

  const checkMatchRole = [ROLE_GENERAL.ADMIN, ROLE_GENERAL.SUPER_ADMIN].includes(userInfo?.group?.role);

  const pendingBadge = <Badge count="Coming" size='small' status='success' color={COLOR_GENERAL.primary} style={{ paddingLeft: '8px' }} />;

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const toggleSection = (sectionKey) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  };

  return (
    <>
      <AddOrderGeneral style={{ padding: '5px' }} />
      <Menu
        onOpenChange={onOpenChange}
        onClick={onClick}
        mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
        theme={darkMode && 'dark'}
        defaultSelectedKeys={
          !topMenu
            ? [ `${ mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2] }` ] : []
        }
        defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
        overflowedIndicator={<FeatherIcon icon="more-vertical" />}
        openKeys={openKeys}
      >
        {
          checkMatchRole ? (
            <>
              {
                !topMenu && (
                  <Button
                    type="primary"
                    size='small'
                    style={{ 
                      width: "92%",
                      margin: '4px 0 0 4px',
                      height: '28px',
                      borderRadius: '6px',
                      outline: '2px solid #478d013b',
                      backgroundColor: COLOR_GENERAL.primary
                    }}
                    onClick={() => {
                      dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                      <span style={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif', marginRight: '10px'}}>Đặt hàng</span>
                      <RiShoppingBag3Fill size={15} style={{ paddingBottom: '1px' }}/>
                    </span>
                  </Button>
                )
              }
              {!topMenu && <NavTitle className="sidebar-nav-title" style={{
                  color: COLOR_GENERAL.primary,
                  cursor: 'pointer',
                  justifyContent: 'space-between',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 700,
                }}>
                  TỔNG QUAN
                  <FeatherIcon
                    icon={collapsedSections.TONG_QUAN ? 'chevron-down' : 'chevron-right'}
                    size={16}
                  />
                </NavTitle>}
              <Menu.Item
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/tong-quan`}>
                      <FiHome fontSize={16} color="gray"/>
                    </NavLink>
                  )
                }
                key="tong-quan"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/tong-quan`}>
                  Tổng quan
                </NavLink>
              </Menu.Item>
            </>
          ) : <></>
        }
        {!topMenu && <NavTitle className="sidebar-nav-title" style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between'}}>
          <span style={{ color: COLOR_GENERAL.primary, fontWeight: 700, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <FaYoutube color="red" fontSize={16} style={{  marginRight: '7px' }} />
            BUFF VIEW
          </span>
          <FeatherIcon
            icon={collapsedSections.TONG_QUAN ? 'chevron-down' : 'chevron-right'}
            size={16}
          />
        </NavTitle>}
        <Menu.Item
          icon={
            !topMenu && (
              <NavLink className="menuItem-icon" to={`${path}/view/danh-sach-don`}>
                <FeatherIcon icon="archive" />
              </NavLink>
            )
          }
          key="buff-view-cho-duyet"
        >
          <NavLink onClick={toggleCollapsed} to={`${path}/view/danh-sach-don`}>
            Danh sách đơn
          </NavLink>
        </Menu.Item>
        {
          checkMatchRole ? (
            <Menu.Item
              icon={
                !topMenu && (
                  <NavLink className="menuItem-icon" to={`${path}/view/danh-sach-may`}>
                    <FeatherIcon icon="hard-drive" />
                  </NavLink>
                )
              }
              key="view-lich-su-don"
            >
              <NavLink onClick={toggleCollapsed} to={`${path}/view/danh-sach-may`}>
                Thiết bị
              </NavLink>
            </Menu.Item>
          ) : <></>
        }
        {!topMenu && <NavTitle className="sidebar-nav-title" style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: COLOR_GENERAL.primary, fontWeight: 700, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <FaYoutube color="red" fontSize={16} style={{ marginTop: '0px', marginRight: '7px' }} />
            BUFF SUBSCRIBE
          </span>
          <FeatherIcon
            icon={collapsedSections.TONG_QUAN ? 'chevron-down' : 'chevron-right'}
            size={16}
          />
        </NavTitle>}
        <Menu.Item
          icon={
            !topMenu && (
              <NavLink className="menuItem-icon" to={`${path}/subscribe/danh-sach-don`}>
                <FeatherIcon icon="archive" />
              </NavLink>
            )
          }
          key="buff-subscribe-cho-duyet"
        >
          <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/danh-sach-don`}>
            Danh sách đơn
          </NavLink>
        </Menu.Item>
        {
          checkMatchRole ? (
            <Menu.Item
              icon={
                !topMenu && (
                  <NavLink className="menuItem-icon" to={`${path}/subscribe/danh-sach-may`}>
                    <FeatherIcon icon="hard-drive" />
                  </NavLink>
                )
              }
              key="subscribe-danh-sach-may"
            >
              <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/danh-sach-may`}>
                Danh sách máy
              </NavLink>
            </Menu.Item>
          ) : <></>
        }
        <Menu.Item
          icon={
            !topMenu && (
              <NavLink className="menuItem-icon" to={`${path}/subscribe/quet-bao-hanh`}>
                <TbScan size={18}/>
              </NavLink>
            )
          }
          key="buff-subscribe-quet-bao-hanh"
        >
          <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/quet-bao-hanh`}>
            Quét bảo hành
          </NavLink>
        </Menu.Item>
        {!topMenu && <NavTitle className="sidebar-nav-title" style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: COLOR_GENERAL.primary, fontWeight: 700, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <FaYoutube color="red" fontSize={16} style={{ marginTop: '0px', marginRight: '7px' }} />
            BUFF LIKE
          </span>
          <FeatherIcon
            icon={collapsedSections.TONG_QUAN ? 'chevron-down' : 'chevron-right'}
            size={16}
          />
        </NavTitle>}
        <Menu.Item
          icon={
            !topMenu && (
              <NavLink className="menuItem-icon" to={`${path}/like/danh-sach-don`}>
                <FeatherIcon icon="archive" />
              </NavLink>
            )
          }
          key="buff-like-cho-duyet"
        >
          <NavLink onClick={toggleCollapsed} to={`${path}/like/danh-sach-don`}>
            Danh sách đơn
          </NavLink>
        </Menu.Item>
        {
          checkMatchRole ? (
            <Menu.Item
              // disabled
              icon={
                !topMenu && (
                  <NavLink className="menuItem-icon" to={`${path}/like/danh-sach-may`}>
                    <FeatherIcon icon="hard-drive" />
                  </NavLink>
                )
              }
              key="buff-like-lich-su-don"
            >
              <NavLink onClick={toggleCollapsed} to={`${path}/like/danh-sach-may`}>
                Danh sách máy
              </NavLink>
            </Menu.Item>
          ) : <></>
        }
        {!topMenu && <NavTitle className="sidebar-nav-title" style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: COLOR_GENERAL.primary, fontWeight: 700, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <FaYoutube color="red" fontSize={16} style={{ marginTop: '0px', marginRight: '7px' }} />
            BUFF COMMENT
          </span>
          <FeatherIcon
            icon={collapsedSections.TONG_QUAN ? 'chevron-down' : 'chevron-right'}
            size={16}
          />
        </NavTitle>}
        <Menu.Item
          icon={
            !topMenu && (
              <NavLink className="menuItem-icon" to={`${path}/comment/danh-sach-don`}>
                <FeatherIcon icon="archive" />
              </NavLink>
            )
          }
          key="buff-comment-danh-sach-don"
        >
          <NavLink onClick={toggleCollapsed} to={`${path}/comment/danh-sach-don`}>
            Danh sách đơn
          </NavLink>
        </Menu.Item>
        {
          checkMatchRole ? (
            <>
              <Menu.Item
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/comment/danh-sach-may`}>
                      <FeatherIcon icon="hard-drive" />
                    </NavLink>
                  )
                }
                key="buff-comment-danh-sach-may"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/comment/danh-sach-may`}>
                  Danh sách máy
                </NavLink>
              </Menu.Item>
              <Menu.Item
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/comment/quet-bao-hanh`}>
                      <TbScan size={18}/>
                    </NavLink>
                  )
                }
                key="buff-comment-quet-bao-hanh"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/comment/quet-bao-hanh`}>
                  Quét bảo hành
                </NavLink>
              </Menu.Item>
            </>
          ) : <></>
        }
        {
          checkMatchRole ? (
            <>
              {!topMenu && <NavTitle className="sidebar-nav-title" style={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: COLOR_GENERAL.primary, fontWeight: 700, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                    ADD-ON
                  </span>
                  <FeatherIcon
                    icon={collapsedSections.TONG_QUAN ? 'chevron-down' : 'chevron-right'}
                    size={16}
                  />
                </NavTitle>
              }
              <Menu.Item
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/gmail`}>
                      <BiLogoGmail  size={17} style={{ paddingBottom: '1px' }}/>
                    </NavLink>
                  )
                }
                key="gmail-management"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/gmail`}>
                  Quản lí Gmail
                </NavLink>
              </Menu.Item>
              <Menu.Item
                disabled
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/blacklist`}>
                      <FeatherIcon icon="slash" />
                    </NavLink>
                  )
                }
                key="black-list"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/blacklist`}>
                  BlackList {pendingBadge}
                </NavLink>
              </Menu.Item>
              <Menu.Item
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/proxy`}>
                      <FeatherIcon icon="command" />
                    </NavLink>
                  )
                }
                key="proxy"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/proxy`}>
                  Proxy
                </NavLink>
              </Menu.Item>
              <Menu.Item
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/thanh-vien`}>
                      <FeatherIcon icon="users" />
                    </NavLink>
                  )
                }
                key="thanh-vien"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/thanh-vien`}>
                  Thành viên
                </NavLink>
              </Menu.Item>
              <Menu.Item
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/dich-vu-cai-dat`}>
                      <FeatherIcon icon="tool" />
                    </NavLink>
                  )
                }
                key="dich-vu-cai-dat"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/dich-vu-cai-dat`}>
                  Dịch vụ & cài đặt
                </NavLink>
              </Menu.Item>
            </>
          ) : <></>
        }
      </Menu>
    </>
  );
}

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
