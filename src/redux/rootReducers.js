import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import themeUsersReducer from './themeUsers/reducers';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import { headerSearchReducer } from './headerSearch/reducers';
import orderReducer from './orders/reducers';
import galleryReducer from './gallary/reducers';
import chartContentReducer from './chartContent/reducers';
import { projectReducer } from './project/reducers';

import BlackListReducer from './blacklist/reducers';
import MemberReducer from './member/reducers';

import ReportsDailyReducer from './reports/reducers';
import ServerReducer from './servers/reducers';
import BuffSubscribeReducer from './buffSubscribe/reducers';
import BuffCommentReducer from './buffComment/reducers';
import SettingsServiceReducer from './serviceSettings/reducers';

const rootReducers = combineReducers({
  gallery: galleryReducer,
  
  orders: orderReducer,
  projects: projectReducer,

  fb: firebaseReducer,
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  auth: authReducer,
  chartContent: chartContentReducer,
  ChangeLayoutMode,
  reports: ReportsDailyReducer,
  servers: ServerReducer,
  buffSubscribe: BuffSubscribeReducer,
  buffComment: BuffCommentReducer,
  blackList: BlackListReducer,
  member: MemberReducer,
  settingService: SettingsServiceReducer,
});

export default rootReducers;
