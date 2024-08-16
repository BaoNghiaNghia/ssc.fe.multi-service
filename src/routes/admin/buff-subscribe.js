import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const RunningBuffSubscribe = lazy(() => import('../../container/buff-subscribes/RunningBuffSubscribe'));
const PendingBuffSubscribe = lazy(() => import('../../container/buff-subscribes/PendingBuffSubscribe'));
const HistoryBuffSubscribe = lazy(() => import('../../container/buff-subscribes/HistoryBuffSubscribe'));
const GuaranteeBuffSubscribe = lazy(() => import('../../container/buff-subscribes/GuaranteeBuffSubscribe'));

function BuffSubscribeRoute() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/subscribe/danh-sach-don`} component={PendingBuffSubscribe} />
      <Route path={`${path}/subscribe/dang-chay`} component={RunningBuffSubscribe} />
      <Route path={`${path}/subscribe/bao-hanh`} component={GuaranteeBuffSubscribe} />
      <Route path={`${path}/subscribe/lich-su-don`} component={HistoryBuffSubscribe} />
    </Switch>
  );
}

export default BuffSubscribeRoute;
