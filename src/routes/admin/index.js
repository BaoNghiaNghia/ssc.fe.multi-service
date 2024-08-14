import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import OverviewRoute from './overview';
import BuffCommentRoute from './buff-comment';
import BuffSubscribeRoute from './buff-subscribe';
import BuffLikeRoute from './buff-like';
import BuffViewRoute from './buff-view';

import withAdminLayout from '../../layout/withAdminLayout';

function Admin() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route path={path} component={OverviewRoute} />
        <Route path={`${path}`} component={BuffCommentRoute} />
        <Route path={`${path}`} component={BuffLikeRoute} />
        <Route path={`${path}`} component={BuffSubscribeRoute} />
        <Route path={`${path}`} component={BuffViewRoute} />
      </Suspense>
    </Switch>
  );
}

export default withAdminLayout(Admin);
