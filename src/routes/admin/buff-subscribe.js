import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const RunningBuffSubscribe = lazy(() => import('../../container/pages/RunningBuffSubscribe'));
const PendingBuffSubscribe = lazy(() => import('../../container/pages/PendingBuffSubscribe'));
const HistoryBuffSubscribe = lazy(() => import('../../container/pages/HistoryBuffSubscribe'));
const GuaranteeBuffSubscribe = lazy(() => import('../../container/pages/GuaranteeBuffSubscribe'));

function SubscribeRoute() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/subscribe/cho-duyet`} component={PendingBuffSubscribe} />
      <Route path={`${path}/subscribe/dang-chay`} component={RunningBuffSubscribe} />
      <Route path={`${path}/subscribe/bao-hanh`} component={GuaranteeBuffSubscribe} />
      <Route path={`${path}/subscribe/lich-su-don`} component={HistoryBuffSubscribe} />
    </Switch>
  );
}

export default SubscribeRoute;
