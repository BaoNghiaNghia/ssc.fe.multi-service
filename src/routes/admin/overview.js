import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const BlackList = lazy(() => import('../../container/dashboard/BlackList'));
const GmailManagement = lazy(() => import('../../container/dashboard/GmailManagement'));
const ProxyManage = lazy(() => import('../../container/dashboard/ProxyManage'));
const Member = lazy(() => import('../../container/dashboard/Member'));
const SettingAndService = lazy(() => import('../../container/dashboard/SettingAndService'));
const UserProfile = lazy(() => import('../../container/dashboard/UserProfile'));
const Overview = lazy(() => import('../../container/dashboard/Overview'));
const ServerManage = lazy(() => import('../../container/subscribes/ServerManage'));

function DashboardRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Overview} />
      <Route path={`${path}/tong-quan`} component={Overview} />
      <Route path={`${path}/quan-ly-may`} component={ServerManage} />
      <Route exact path={`${path}/blacklist`} component={BlackList} />
      <Route exact path={`${path}/gmail`} component={GmailManagement} />
      <Route exact path={`${path}/proxy`} component={ProxyManage} />
      <Route exact path={`${path}/thanh-vien`} component={Member} />
      <Route exact path={`${path}/dich-vu-cai-dat`} component={SettingAndService} />
      <Route exact path={`${path}/thong-tin-ca-nhan`} component={UserProfile} />
    </Switch>
  );
}

export default DashboardRoutes;
