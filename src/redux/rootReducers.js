import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import BlackListReducer from './blacklist/reducers';
import MemberReducer from './member/reducers';

import ReportsDailyReducer from './reports/reducers';
import ServerReducer from './servers/reducers';
import BuffSubscribeReducer from './buffSubscribe/reducers';
import BuffCommentReducer from './buffComment/reducers';
import BuffLikeReducer from './buffLike/reducers';
import BuffViewReducer from './buffView/reducers';
import SettingsServiceReducer from './serviceSettings/reducers';
import ProxyReducer from './proxy/reducers';
import GmailManageReducer from './gmailManage/reducers';

const rootReducers = combineReducers({
  fb: firebaseReducer,
  auth: authReducer,
  ChangeLayoutMode,
  reports: ReportsDailyReducer,
  servers: ServerReducer,
  buffSubscribe: BuffSubscribeReducer,
  buffComment: BuffCommentReducer,
  buffLike: BuffLikeReducer,
  buffView: BuffViewReducer,
  blackList: BlackListReducer,
  member: MemberReducer,
  proxy: ProxyReducer,
  settingService: SettingsServiceReducer,
  gmailManage: GmailManageReducer
});

export default rootReducers;
