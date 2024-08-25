import React, { lazy } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const PendingBuffView = lazy(() => import('../../container/buff-views/PendingBuffView'));
const ComputerRunViewOrder = lazy(() => import('../../container/buff-views/ComputerRunViewOrder'));

function BuffViewRoute() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/view/danh-sach-don`} component={PendingBuffView} />
      <Route exact path={`${path}/view/danh-sach-may`} component={ComputerRunViewOrder} />
    </Switch>
  );
}

export default BuffViewRoute;
