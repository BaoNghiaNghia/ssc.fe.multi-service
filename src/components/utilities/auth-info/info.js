import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import ReactNiceAvatar, { genConfig } from 'react-nice-avatar';
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import Message from './message';
import Notification from './notification';
import Settings from './settings';
import Support from './support';
import { Popover } from '../../popup/popup';
import { Dropdown } from '../../dropdown/dropdown';
import { logOut } from '../../../redux/authentication/actionCreator';
import { fbAuthLogout } from '../../../redux/firebase/auth/actionCreator';
import Heading from '../../heading/heading';

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
        {/* <ul className="user-dropdwon__links">
          <li>
            <Link to="#">
              <FeatherIcon icon="user" /> Thông tin cá nhân
            </Link>
          </li>
          <li>
            <Link to="#">
              <FeatherIcon icon="settings" /> Cài đặt
            </Link>
          </li>
          <li>
            <Link to="#">
              <FeatherIcon icon="dollar-sign" /> Thanh toán
            </Link>
          </li>
        </ul> */}
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
      <Message />
      <Notification />

      <Settings />
      <Support />
      <div className="nav-author">
        <Dropdown placement="bottomRight" content={country} trigger="click">
          <Link to="#" className="head-example">
            <img src={require(`../../../static/img/flag/${flag}.png`)} alt="" />
          </Link>
        </Dropdown>
      </div>

      <div className="nav-author">
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
