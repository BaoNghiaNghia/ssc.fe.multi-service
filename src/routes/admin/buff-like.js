import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const HistoryBuffLike = lazy(() => import('../../container/buff-likes/HistoryBuffLike'));
const PendingBuffLike = lazy(() => import('../../container/buff-likes/PendingBuffLike'));
const ComputerRunLikeOrder = lazy(() => import('../../container/buff-likes/ComputerRunLikeOrder'));
const GuaranteeBuffLike = lazy(() => import('../../container/buff-likes/GuaranteeBuffLike'));

function BuffLikeRoute() {
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

export default BuffLikeRoute;
