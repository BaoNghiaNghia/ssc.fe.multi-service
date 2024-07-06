import React from 'react';
import { Badge, Button, Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { LuServer } from "react-icons/lu";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { TbScan } from "react-icons/tb";
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { useSelector , useDispatch } from 'react-redux';
import { NavTitle } from './style';
import reportActions from '../redux/reports/actions';
import { COLOR_GENERAL, ROLE_DETAIL, ROLE_GENERAL } from '../variables';
import AddOrderGeneral from '../container/ecommerce/components/AddOrderGeneral';


const { SubMenu } = Menu;

function MenuItems({ darkMode, toggleCollapsed, topMenu, events }) {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const { userInfo, isOpenCreateOrder } = useSelector(state => {
    return {
      userInfo: state?.auth?.userInfo,
      isOpenCreateOrder: state?.reports?.isOpenCreateOrder
    };
  });

  const checkMatchRole = [ROLE_GENERAL.ADMIN, ROLE_GENERAL.SUPER_ADMIN].includes(userInfo?.group?.role);

  const pendingBadge = <Badge count="Coming" size='small' status='success' color={COLOR_GENERAL.primary}/>;

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <>
      <AddOrderGeneral />
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
                      width: "94%",
                      margin: 0,
                      // backgroundImage: 'linear-gradient(120deg, rgb(248, 255, 242) 0%, rgba(251, 227, 227, 0.27) 40%, rgba(203, 203, 203, 0.27) 70%, rgb(255, 255, 255) 85%, rgba(231, 231, 231, 0) 100%)',
                      border: '1px solid #8080801c',
                      backgroundColor: COLOR_GENERAL.primary
                    }}
                    onClick={() => {
                      dispatch(reportActions.toggleModalCreateOrderBegin(isOpenCreateOrder));
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                      <span style={{ fontWeight: 600, fontFamily: 'Be Vietnam Pro', marginRight: '10px'}}>Đặt hàng</span>
                      <RiShoppingBag3Fill size={15} style={{ paddingBottom: '1px' }}/>
                    </span>
                  </Button>
                )
              }
              {!topMenu && <NavTitle className="sidebar-nav-title" style={{ color: COLOR_GENERAL.primary, fontWeight: 700 }}>TỔNG QUAN</NavTitle>}
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
              <Menu.Item
                disabled
                icon={
                  !topMenu && (
                    <NavLink className="menuItem-icon" to={`${path}/quan-ly-may`}>
                      <LuServer fontSize={16} color="gray"/>
                    </NavLink>
                  )
                }
                key="quan-ly-may"
              >
                <NavLink onClick={toggleCollapsed} to={`${path}/quan-ly-may`}>
                  Quản lý máy {pendingBadge}
                </NavLink>
              </Menu.Item>
            </>
          ) : <></>
        }
        {!topMenu && <NavTitle className="sidebar-nav-title" style={{ color: COLOR_GENERAL.primary, fontWeight: 700 }}>BUFF SUBSCRIBE</NavTitle>}
        <Menu.Item
          disabled
          icon={
            !topMenu && (
              <NavLink className="menuItem-icon" to={`${path}/subscribe/cho-duyet`}>
                <FeatherIcon icon="archive" />
              </NavLink>
            )
          }
          key="buff-subscribe-cho-duyet"
        >
          <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/cho-duyet`}>
            Danh sách đơn {pendingBadge}
          </NavLink>
        </Menu.Item>
        {
          checkMatchRole ? (
            <Menu.Item
              disabled
              icon={
                !topMenu && (
                  <NavLink className="menuItem-icon" to={`${path}/subscribe/lich-su-don`}>
                    <FeatherIcon icon="hard-drive" />
                  </NavLink>
                )
              }
              key="subscribe-lich-su-don"
            >
              <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/lich-su-don`}>
                Danh sách máy {pendingBadge}
              </NavLink>
            </Menu.Item>
          ) : <></>
        }
        {!topMenu && <NavTitle className="sidebar-nav-title" style={{ color: COLOR_GENERAL.primary, fontWeight: 700 }}>
          BUFF LIKE
        </NavTitle>}
        {/* <SubMenu key="buff-like" icon={!topMenu && <FeatherIcon icon="mail" />} title="Danh sách đơn">
          <Menu.Item key="buff-like-cho-duyet">
            <NavLink onClick={toggleCollapsed} to={`${path}/like/danh-sach-don`}>
              Chờ duyệt
            </NavLink>
          </Menu.Item>
          <Menu.Item key="buff-like-dang-chay">
            <NavLink onClick={toggleCollapsed} to={`${path}/like/danh-sach-may`}>
              Đang chạy
            </NavLink>
          </Menu.Item>
          <Menu.Item key="buff-like-bao-hanh">
            <NavLink onClick={toggleCollapsed} to={`${path}/like/bao-hanh`}>
              Bảo hành
            </NavLink>
          </Menu.Item>
        </SubMenu> */}
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
        {!topMenu && <NavTitle className="sidebar-nav-title" style={{ color: COLOR_GENERAL.primary, fontWeight: 700 }}>BUFF COMMENT</NavTitle>}
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
              {!topMenu && <NavTitle className="sidebar-nav-title" style={{ color: COLOR_GENERAL.primary, fontWeight: 700 }}>ADD-ON</NavTitle>}
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
