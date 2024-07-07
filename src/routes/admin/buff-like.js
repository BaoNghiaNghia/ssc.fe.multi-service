import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const HistoryBuffLike = lazy(() => import('../../container/pages/HistoryBuffLike'));
const PendingBuffLike = lazy(() => import('../../container/pages/PendingBuffLike'));
const ComputerRunLikeOrder = lazy(() => import('../../container/pages/ComputerRunLikeOrder'));
const GuaranteeBuffLike = lazy(() => import('../../container/pages/GuaranteeBuffLike'));

function FeaturesRoute() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/like/danh-sach-don`} component={PendingBuffLike} />
      <Route path={`${path}/like/danh-sach-may`} component={ComputerRunLikeOrder} />
      <Route path={`${path}/like/bao-hanh`} component={GuaranteeBuffLike} />
      <Route path={`${path}/like/danh-sach-may`} component={HistoryBuffLike} />
    </Switch>
  );
}

export default FeaturesRoute;
