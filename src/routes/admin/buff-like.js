import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const HistoryBuffLike = lazy(() => import('../../container/pages/HistoryBuffLike'));
const PendingBuffLike = lazy(() => import('../../container/pages/PendingBuffLike'));
const RunningBuffLike = lazy(() => import('../../container/pages/RunningBuffLike'));
const GuaranteeBuffLike = lazy(() => import('../../container/pages/GuaranteeBuffLike'));

function FeaturesRoute() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/like/cho-duyet`} component={PendingBuffLike} />
      <Route path={`${path}/like/dang-chay`} component={RunningBuffLike} />
      <Route path={`${path}/like/bao-hanh`} component={GuaranteeBuffLike} />
      <Route path={`${path}/like/lich-su-don`} component={HistoryBuffLike} />
    </Switch>
  );
}

export default FeaturesRoute;
