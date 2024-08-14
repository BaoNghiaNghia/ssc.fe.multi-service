import React, { lazy } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const PendingBuffComment = lazy(() => import('../../container/ecommerce/PendingBuffComment'));
const ComputerRunCommentOrder = lazy(() => import('../../container/ecommerce/ComputerRunCommentOrder'));
const GuaranteeBuffComment = lazy(() => import('../../container/ecommerce/GuaranteeBuffComment'));

function BuffCommentRoute() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/comment/danh-sach-don`} component={PendingBuffComment} />
      <Route exact path={`${path}/comment/danh-sach-may`} component={ComputerRunCommentOrder} />
      <Route exact path={`${path}/comment/quet-bao-hanh`} component={GuaranteeBuffComment} />
    </Switch>
  );
}

export default BuffCommentRoute;
