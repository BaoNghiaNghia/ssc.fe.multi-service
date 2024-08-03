import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import { headerSearchReducer } from './headerSearch/reducers';
import orderReducer from './orders/reducers';
import chartContentReducer from './chartContent/reducers';

import BlackListReducer from './blacklist/reducers';
import MemberReducer from './member/reducers';

import ReportsDailyReducer from './reports/reducers';
import ServerReducer from './servers/reducers';
import BuffSubscribeReducer from './buffSubscribe/reducers';
import BuffCommentReducer from './buffComment/reducers';
import BuffLikeReducer from './buffLike/reducers';
import SettingsServiceReducer from './serviceSettings/reducers';
import ProxyReducer from './proxy/reducers';
import GmailManageReducer from './gmailManage/reducers';

const rootReducers = combineReducers({
  
  orders: orderReducer,

  fb: firebaseReducer,
  headerSearchData: headerSearchReducer,
  auth: authReducer,
  chartContent: chartContentReducer,
  ChangeLayoutMode,
  reports: ReportsDailyReducer,
  servers: ServerReducer,
  buffSubscribe: BuffSubscribeReducer,
  buffComment: BuffCommentReducer,
  buffLike: BuffLikeReducer,
  blackList: BlackListReducer,
  member: MemberReducer,
  proxy: ProxyReducer,
  settingService: SettingsServiceReducer,
  gmailManage: GmailManageReducer
});

export default rootReducers;
