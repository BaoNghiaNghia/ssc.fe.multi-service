import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const RunningBuffSubscribe = lazy(() => import('../../container/buff-likes/RunningBuffSubscribe'));
const PendingBuffSubscribe = lazy(() => import('../../container/buff-likes/PendingBuffSubscribe'));
const HistoryBuffSubscribe = lazy(() => import('../../container/buff-likes/HistoryBuffSubscribe'));
const GuaranteeBuffSubscribe = lazy(() => import('../../container/buff-likes/GuaranteeBuffSubscribe'));

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
