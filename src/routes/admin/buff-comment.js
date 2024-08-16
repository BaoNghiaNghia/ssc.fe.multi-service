import React, { lazy } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const PendingBuffComment = lazy(() => import('../../container/buff-comments/PendingBuffComment'));
const ComputerRunCommentOrder = lazy(() => import('../../container/buff-comments/ComputerRunCommentOrder'));
const GuaranteeBuffComment = lazy(() => import('../../container/buff-comments/GuaranteeBuffComment'));

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
