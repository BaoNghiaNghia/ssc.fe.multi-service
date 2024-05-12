import React, { lazy } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const PendingBuffComment = lazy(() => import('../../container/ecommerce/PendingBuffComment'));
const ComputerRunCommentOrder = lazy(() => import('../../container/ecommerce/ComputerRunCommentOrder'));
const GuaranteeBuffComment = lazy(() => import('../../container/ecommerce/GuaranteeBuffComment'));
const HistoryBuffComment = lazy(() => import('../../container/ecommerce/HistoryBuffComment'));

function EcommerceRoute() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/comment/cho-duyet`} component={PendingBuffComment} />
      <Route exact path={`${path}/comment/dang-chay`} component={ComputerRunCommentOrder} />
      <Route exact path={`${path}/comment/bao-hanh`} component={GuaranteeBuffComment} />
      <Route exact path={`${path}/comment/lich-su-don`} component={HistoryBuffComment} />
    </Switch>
  );
}

export default EcommerceRoute;
