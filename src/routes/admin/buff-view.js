import React, { lazy } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const PendingBuffView = lazy(() => import('../../container/comments/PendingBuffComment'));
const ComputerRunViewOrder = lazy(() => import('../../container/comments/ComputerRunCommentOrder'));
const GuaranteeBuffView = lazy(() => import('../../container/comments/GuaranteeBuffComment'));

function BuffViewRoute() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/view/danh-sach-don`} component={PendingBuffView} />
      <Route exact path={`${path}/view/danh-sach-may`} component={ComputerRunViewOrder} />
      <Route exact path={`${path}/view/quet-bao-hanh`} component={GuaranteeBuffView} />
    </Switch>
  );
}

export default BuffViewRoute;
