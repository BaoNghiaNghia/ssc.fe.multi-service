import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const PendingBuffSubscribes = lazy(() => import('../../container/buff-subscribes/PendingBuffSubscribes'));
const ComputerRunSubscribesOrder = lazy(() => import('../../container/buff-subscribes/ComputerRunSubscribesOrder'));
const GuaranteeBuffSubscribes = lazy(() => import('../../container/buff-subscribes/GuaranteeBuffSubscribes'));

function BuffSubscribeRoute() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/subscribe/danh-sach-don`} component={PendingBuffSubscribes} />
      <Route path={`${path}/subscribe/danh-sach-may`} component={ComputerRunSubscribesOrder} />
      <Route path={`${path}/subscribe/quet-bao-hanh`} component={GuaranteeBuffSubscribes} />
    </Switch>
  );
}

export default BuffSubscribeRoute;
