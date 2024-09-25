import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import FeatherIcon from 'feather-icons-react';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import { logOut } from '../../../redux/authentication/actionCreator';
import { fbAuthLogout } from '../../../redux/firebase/auth/actionCreator';
import Heading from '../../heading/heading';
import { numberWithCommas, numberWithCommasCurrency } from '../../../utility/utility';
import { VIETNAMES_CURRENCY } from '../../../variables';

function AuthInfo() {
  const dispatch = useDispatch();
  const { isAuthenticate, userInfo } = useSelector(state => {
    return {
      isAuthenticate: state.fb.auth.uid,
      userInfo: state?.auth?.userInfo
    };
  });

  const [state, setState] = useState({
    flag: 'vietnam',
  });
  const { flag } = state;

  const SignOut = e => {
    e.preventDefault();
    if (isAuthenticate) {
      dispatch(fbAuthLogout(dispatch(logOut())));
    } else {
      dispatch(logOut());
    }
  };

  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info" >
          <ReactNiceAvatar 
            className='avatar'
            style={{ width: '2.3rem', height: '2.3rem', outline: '2px solid orange', border: '2px solid white' }}
            {...genConfig(userInfo?.fullname?.charAt(0))}
          />
          <figcaption>
            <Heading as="h5">{userInfo?.fullname}</Heading>
            <p>{userInfo?.group?.role}</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="/admin/thong-tin-ca-nhan">
              <FeatherIcon icon="user" /> Thông tin cá nhân
            </Link>
          </li>
          <li>
            <Link to="/admin/dich-vu-cai-dat">
              <FeatherIcon icon="settings" /> Cài đặt
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <FeatherIcon icon="log-out" /> Đăng xuất
        </Link>
      </div>
    </UserDropDwon>
  );

  const onFlagChangeHandle = value => {
    setState({
      ...state,
      flag: value,
    });
  };

  const country = (
    <NavAuth>
      <Link onClick={() => onFlagChangeHandle('english')} to="#">
        <img src={require('../../../static/img/flag/us.png')} alt="" />
        <span>English</span>
      </Link>
      <Link onClick={() => onFlagChangeHandle('vietnam')} to="#">
        <img src={require('../../../static/img/flag/vn.png')} alt="" />
        <span>Tiếng Việt</span>
      </Link>
    </NavAuth>
  );

  return (
    <InfoWraper>
      <div className="notification">
        <span style={{ display: 'flex', alignContent: 'center', alignItems: 'center', fontSize: '1.1em', color: 'green', fontWeight: 600, padding: '5px 8px', border: '1px dashed #8080805e', borderRadius: '7px' }}>
          {numberWithCommasCurrency(userInfo?.credit)} <span style={{ fontStyle: 'italic', fontSize: '0.7em' }}>({VIETNAMES_CURRENCY})</span>
        </span>
        <span style={{ display: 'flex', alignContent: 'center', alignItems: 'center', fontSize: '1.1em', color: 'orange', fontWeight: 600, padding: '5px 8px', border: '1px dashed #8080805e', borderRadius: '7px'  }}>
          {numberWithCommasCurrency(userInfo?.credit_used)} <span style={{ fontStyle: 'italic', fontSize: '0.7em' }}>({VIETNAMES_CURRENCY})</span>
          </span>
      </div>

      <div className="nav-author" style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
        <Dropdown placement="bottomRight" content={country} trigger="click" disabled>
          <Link to="#" className="head-example">
            <img src={require(`../../../static/img/flag/${flag}.png`)} alt="" width="20px" />
          </Link>
        </Dropdown>
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="head-example">
            <ReactNiceAvatar 
              className='avatar' 
              style={{ width: '2.3rem', height: '2.3rem', outline: '2px solid orange', border: '2px solid white' }} 
              {...genConfig(userInfo?.fullname?.charAt(0))} 
            />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
}

export default AuthInfo;
