import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import locale from 'antd/es/locale/vi_VN';
import { ConfigProvider, Spin } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { persistor, rrfProps, store } from './redux/store';
import Admin from './routes/admin';
import Auth from './routes/auth';
import config from './config/config';
import ProtectedRoute from './components/utilities/protectedRoute';

import './static/css/style.css';
import 'antd/dist/antd.less';

const { theme } = config;

const publicPath = process.env.PUBLIC_URL;

const ProviderConfig = () => {
  const { rtl, isLoggedIn, topMenu, darkMode, auth } = useSelector(state => {
    return {
      darkMode: state.ChangeLayoutMode.data,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      isLoggedIn: state.auth.login,
      auth: state.fb.auth,
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [setPath]);

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'} locale={locale}>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar="true"
        limit={2}
        theme='light'
      />
      <ThemeProvider theme={{ ...theme, rtl, topMenu, darkMode }}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          {!isLoaded(auth) ? (
            <div className="spin">
              <Spin />
            </div>
          ) : (
            <Router basename={publicPath}>
              {!isLoggedIn ? <Route path="/" component={Auth} /> : <ProtectedRoute path="/admin" component={Admin} />}
              {isLoggedIn && (path === publicPath || path === `${publicPath}/`) && (
                <Redirect to="/admin/tong-quan" />
              )}
            </Router>
          )}
        </ReactReduxFirebaseProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Đang tải...</div>} persistor={persistor}>
        <ProviderConfig />
      </PersistGate>
    </Provider>
  );
}

export default hot(App);
