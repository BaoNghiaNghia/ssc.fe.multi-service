import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import themeUsersReducer from './themeUsers/reducers';
import { readMessageReducer } from './message/reducers';
import { readNotificationReducer } from './notification/reducers';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import { teamReducer } from './team/reducers';
import { userReducer, userGroupReducer } from './users/reducers';
import { sellersReducer } from './sellers/reducers';
import { headerSearchReducer } from './headerSearch/reducers';
import orderReducer from './orders/reducers';
import galleryReducer from './gallary/reducers';
import chartContentReducer from './chartContent/reducers';
import { emailReducer, SingleEmailReducer } from './email/reducers';
import { productReducer, SingleProductReducer } from './product/reducers';
import { chatReducer, SingleChatReducer, groupChatReducer, SingleChatGroupReducer } from './chat/reducers';
import { projectReducer, SingleProjectReducer } from './project/reducers';
import cartData from './cart/reducers';
import Todo from './todo/reducers';
import Note from './note/reducers';
import Task from './task/reducers';
import Contact from './contact/reducers';
import Profile from './profile/reducers';
import Calender from './calendar/reducers';
import FileManager from './fileManager/reducers';
import { axiosCrudReducer, axiosSingleCrudReducer } from './crud/axios/reducers';

import { fsCrudReducer, fsSingleCrudReducer } from './firebase/firestore/reducers';
import firebaseAuth from './firebase/auth/reducers';

import BlackListReducer from './blacklist/reducers';
import MemberReducer from './member/reducers';

import ReportsDailyReducer from './reports/reducers';
import ServerReducer from './servers/reducers';
import BuffSubscribeReducer from './buffSubscribe/reducers';

const rootReducers = combineReducers({
  // fs: firestoreReducer,
  // message: readMessageReducer,
  // notification: readNotificationReducer,
  // sellers: sellersReducer,
  // users: userReducer,
  // userGroup: userGroupReducer,
  // team: teamReducer,
  // gallery: galleryReducer,
  // email: emailReducer,
  // emailSingle: SingleEmailReducer,
  // products: productReducer,
  // product: SingleProductReducer,
  // chatSingle: SingleChatReducer,
  // chatSingleGroup: SingleChatGroupReducer,
  // chat: chatReducer,
  // groupChat: groupChatReducer,
  // crud: fsCrudReducer,
  // singleCrud: fsSingleCrudReducer,
  // cart: cartData,
  // Todo,
  // Note,
  // Task,
  // Contact,
  // Profile,
  // Calender,
  // firebaseAuth,
  // FileManager,
  // AxiosCrud: axiosCrudReducer,
  // SingleAxiosCrud: axiosSingleCrudReducer,
  // project: SingleProjectReducer,
  
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
  blackList: BlackListReducer,
  member: MemberReducer,
});

export default rootReducers;
