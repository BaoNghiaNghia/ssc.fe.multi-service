import React from 'react';
import { Badge, Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { LuServer } from "react-icons/lu";
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { NavTitle } from './style';
import { COLOR_GENERAL } from '../variables';

const { SubMenu } = Menu;

function MenuItems({ darkMode, toggleCollapsed, topMenu, events }) {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const pendingBadge = <Badge count="Pending" size='small' status='success' color={COLOR_GENERAL.primary}/>;

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
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
          Tổng quan {pendingBadge}
        </NavLink>
      </Menu.Item>
      <Menu.Item
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
      {!topMenu && <NavTitle className="sidebar-nav-title">BUFF SUBSCRIBE</NavTitle>}
      <SubMenu key="dashboard" icon={!topMenu && <FeatherIcon icon="home" />} title="Danh sách đơn">
        <Menu.Item key="subscribe-cho-duyet">
          <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/cho-duyet`}>
            Chờ duyệt
          </NavLink>
        </Menu.Item>
        <Menu.Item key="subscribe-dang-chay">
          <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/dang-chay`}>
            Đang chạy
          </NavLink>
        </Menu.Item>
        <Menu.Item key="subscribe-bao-hanh">
          <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/bao-hanh`}>
            Bảo hành
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-icon" to={`${path}/subscribe/lich-su-don`}>
              <FeatherIcon icon="calendar" />
            </NavLink>
          )
        }
        key="subscribe-lich-su-don"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/subscribe/lich-su-don`}>
          Lịch sử đơn
        </NavLink>
      </Menu.Item>
      {!topMenu && <NavTitle className="sidebar-nav-title">BUFF LIKE</NavTitle>}
      <SubMenu key="buff-like" icon={!topMenu && <FeatherIcon icon="mail" />} title="Danh sách đơn">
        <Menu.Item key="buff-like-cho-duyet">
          <NavLink onClick={toggleCollapsed} to={`${path}/like/cho-duyet`}>
            Chờ duyệt
          </NavLink>
        </Menu.Item>
        <Menu.Item key="buff-like-dang-chay">
          <NavLink onClick={toggleCollapsed} to={`${path}/like/dang-chay`}>
            Đang chạy
          </NavLink>
        </Menu.Item>
        <Menu.Item key="buff-like-bao-hanh">
          <NavLink onClick={toggleCollapsed} to={`${path}/like/bao-hanh`}>
            Bảo hành
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-icon" to={`${path}/like/lich-su-don`}>
              <FeatherIcon icon="message-square" />
            </NavLink>
          )
        }
        key="buff-like-lich-su-don"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/like/lich-su-don`}>
          Lịch sử đơn
        </NavLink>
      </Menu.Item>
      {!topMenu && <NavTitle className="sidebar-nav-title">BUFF COMMENT</NavTitle>}
      <SubMenu key="buff-comment" icon={!topMenu && <FeatherIcon icon="shopping-cart" />} title="Danh sách đơn"> 
        <Menu.Item key="buff-comment-cho-duyet">
          <NavLink onClick={toggleCollapsed} to={`${path}/comment/cho-duyet`}>
            Chờ duyệt
          </NavLink>
        </Menu.Item>
        <Menu.Item key="buff-comment-dang-chay">
          <NavLink onClick={toggleCollapsed} to={`${path}/comment/dang-chay`}>
            Đang chạy
          </NavLink>
        </Menu.Item>

        <Menu.Item key="buff-comment-bao-hanh">
          <NavLink onClick={toggleCollapsed} to={`${path}/comment/bao-hanh`}>
            Bảo hành
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-icon" to={`${path}/comment/lich-su-don`}>
              <FeatherIcon icon="message-square" />
            </NavLink>
          )
        }
        key="buff-comment-lich-su-don"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/comment/lich-su-don`}>
          Lịch sử đơn
        </NavLink>
      </Menu.Item>
      {!topMenu && <NavTitle className="sidebar-nav-title">ADD-ON</NavTitle>}
      <Menu.Item
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
    </Menu>
  );
}

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
