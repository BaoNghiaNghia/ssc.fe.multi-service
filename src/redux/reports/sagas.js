import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  countErrorSubscribeAPI,
  countSuccessSubscribeAPI,
  fetchComputerDataListAPI,
  getDailyReportSubscribeAPI,
  ratioSubscribeAverageAPI,
  getStatisticSubscribeReportAPI,
  
  commentStatisticCommentByOrderReportAPI,
  commentStatisticAccountStatusAPI,
  commentStatisticCommentByDayAPI,
  commentStatisticComputerThreadAPI,
  commentStatisticOrderAmountAPI,
  commentStatisticPerformanceAPI,
  commentStatisticTaskSuccessInMinutesAPI,
  commentStatisticTaskDurationInMinutesAPI,
  commentStatisticAccountOnComputerAPI,
  commentStatisticByStatusOrderAPI,
  commentStatisticRunningComputerAPI,
  commentStatisticTaskOfToolAPI,
  commentStatisticRunningUserOrderAPI,
  commentStatisticUserPointAPI,

  likeStatisticCommentByOrderReportAPI,
  likeStatisticTaskSuccessInMinutesAPI,
  likeStatisticAccountOnComputerAPI,
  likeStatisticAccountStatusAPI,
  likeStatisticByStatusOrderAPI,
  likeStatisticCommentByDayAPI,
  likeStatisticComputerThreadAPI,
  likeStatisticRunningComputerAPI,
  likeStatisticTaskOfToolAPI,
  likeStatisticOrderAmountAPI,
  likeStatisticPerformanceAPI,
  likeStatisticRunningUserOrderAPI,
  likeStatisticUserPointAPI,
  likeStatisticTaskDurationInMinutesAPI,

  validateYoutubeLinkCommentVideoAPI,
  validateYoutubeLinkLikeVideoAPI,
  validateYoutubeLinkSubscribeVideoAPI,
} from '../../config/apiFactory/Reports/index';
import { MESSSAGE_STATUS_CODE, SERVICE_TYPE } from '../../variables';

function* commentStatisticComputerThreadFunc(params) {
  try {
    const response = yield call(commentStatisticComputerThreadAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticComputerThreadSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.commentStatisticComputerThreadErr({ error: errorMessage || 'Fetch computer thread failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch computer thread failed');
    }
  } finally { /* empty */ }
}

function* commentStatisticCommentByDayFunc(params) {
  try {
    const response = yield call(commentStatisticCommentByDayAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticCommentByDaySuccess(response?.data?.data?.reverse())
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.commentStatisticCommentByDayErr({ error: errorMessage || 'Fetch comment by day failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch comment by day failed');
    }
  } finally { /* empty */ }
}

function* commentStatisticPerformanceCommentFunc(params) {
  try {
    const response = yield call(commentStatisticPerformanceAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse()
      yield put(
        actions.commentStatisticPerformanceCommentSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.commentStatisticPerformanceCommentErr({ error: errorMessage || 'Fetch performance comment in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch performance comment in minute failed');
    }
  } finally { /* empty */ }
}

function* commentStatisticAccountStatusCommentFunc(params) {
  try {
    const response = yield call(commentStatisticAccountStatusAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticAccountStatusCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.commentStatisticAccountStatusCommentErr({ error: errorMessage || 'Fetch account status in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch account status in minute failed');
    }
  } finally { /* empty */ }
}

function* commentStatisticOrderAmountFunc(params) {
  try {
    const response = yield call(commentStatisticOrderAmountAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse();
      yield put(
        actions.commentStatisticOrderAmountSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.commentStatisticOrderAmountErr({ error: errorMessage || 'Fetch order amount in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch order amount in minute failed');
    }
  } finally { /* empty */ }
}

function* commentStatisticTaskSuccessInMinuteFunc(params) {
  try {
    const response = yield call(commentStatisticTaskSuccessInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticTaskSuccessInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.commentStatisticTaskSuccessInMinuteErr({ error: errorMessage || 'Fetch task success in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch task success in minute failed');
    }
  } finally { /* empty */ }
}

function* commentStatisticTaskDurationInMinuteFunc(params) {
  try {
    const response = yield call(commentStatisticTaskDurationInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticTaskDurationInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.commentStatisticTaskDurationInMinuteErr({ error: errorMessage || 'Fetch task duration in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch task duration in minute failed');
    }
  } finally { /* empty */ }
}

function* reportDataSubscribeFunc(params) {
  try {
    const response = yield call(getDailyReportSubscribeAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.reportSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.reportSubscribeErr({ error: errorMessage || 'Fetch daily subscribe failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Fetch daily subscribe failed');
    }
  } finally { /* empty */ }
}

function* countSuccessSubscribeFunc() {
  try {
    const response = yield call(countSuccessSubscribeAPI, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.countSuccessSubscribeSuccess(response?.data?.data)
      );
    }

  } catch (err) {
    yield put(
      actions.countSuccessSubscribeErr({ error: err || 'Count subscribe failed' })
    );
  }
}

function* fetchComputerDataListFunc(params) {
  try {
    const response = yield call(fetchComputerDataListAPI, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.computerDataListSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.computerDataListErr({ error: err || 'Fetch Computer Data List failed' })
    );
  }
}

function* validateYoutubeVideoLinkFunc(params) {
  try {
    const response = yield call(validateYoutubeLinkCommentVideoAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.validateYoutubeVideoLinkSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.validateYoutubeVideoLinkErr({ error: err || 'validate youtube video failed' })
    );
  }
}

function* countErrorSubscribeFunc() {
  try {
    const response = yield call(countErrorSubscribeAPI, {});
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.countErrorSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.countErrorSubscribeErr({ error: err || 'Count error subscribe failed' })
    );
  }
}

function* commentStatisticCommentByOrderReportFunc(params) {
  try {
    const response = yield call(commentStatisticCommentByOrderReportAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticCommentByOrderReportSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticCommentByOrderReportErr({ error: err || 'Count error subscribe failed' })
    )
  }
}

function* getStatisticsSubscribeFunc() {
  try {
    const response = yield call(ratioSubscribeAverageAPI, {});

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.getStatisticsSubscribeReportSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.getStatisticsSubscribeReportErr({ error: err || 'Count error subscribe failed' })
    )
  }
}
 
function* changeServiceTypeFunc(params) {
  try {
    yield put(
      actions.changeServiceTypeSuccess(params?.payload)
    );

    if (params?.payload === SERVICE_TYPE.COMMENT.title) {
      yield put(actions.commentStatisticCommentByOrderReportBegin());
      yield put(actions.commentStatisticTaskSuccessInMinuteBegin());
      yield put(actions.commentStatisticTaskDurationInMinuteBegin());
    }
    if (params?.payload === SERVICE_TYPE.LIKE.title) {
      console.log('--- THAY ĐỔI STATISTIC LIKE ---')
    }
    if (params?.payload === SERVICE_TYPE.SUBSCRIBE.title) {
      console.log('--- THAY ĐỔI STATISTIC SUBSCRIBE ---')
    }
  } catch (err) {
    yield put(
      actions.changeServiceTypeErr({ error: err || 'Count error subscribe failed' })
    );
  }
}

function* toggleStateModalCreateOrderFunc(params) {
  try {
    yield put(
      actions.toggleModalCreateOrderSuccess(!params?.payload)
    );
  } catch (err) {
    yield put(
      actions.toggleModalCreateOrderErr({ error: err || 'Toggle modal create order failed' })
    );
  }
} 

function* setRangeDateFilterFunc(params) {
  try {
    yield put(
      actions.setRangeDateFilterSuccess(params?.payload)
    );

    const initialFilter = {
      start_date: `${params?.payload?.from  } 00:00:00`,
      end_date: `${params?.payload?.to  } 23:59:59`,
      status: 1
    };

    if (params?.payload?.typeService === SERVICE_TYPE.SUBSCRIBE.title) {
      yield put(actions.reportSubscribeBegin(params?.payload));
      yield put(actions.fetchSubscribeWithPointEverydayBegin(params?.payload));
    }
    
    if (params?.payload?.typeService === SERVICE_TYPE.COMMENT.title) {
      yield put(actions.commentStatisticCommentByOrderReportBegin());
      yield put(actions.commentStatisticTaskSuccessInMinuteBegin());
      yield put(actions.commentStatisticTaskDurationInMinuteBegin());
      yield put(actions.commentStatisticOrderAmountBegin(initialFilter));
      yield put(actions.commentStatisticAccountStatusCommentBegin(initialFilter));
      yield put(actions.commentStatisticPerformanceCommentBegin(initialFilter));
      yield put(actions.commentStatisticCommentByDayBegin(initialFilter));
      yield put(actions.commentStatisticComputerThreadBegin(initialFilter));

      yield put(actions.commentStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.commentStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.commentStatisticRunningOrderBegin(initialFilter));
      yield put(actions.commentStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.commentStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.commentStatisticUserPointBegin(initialFilter));
    }
  } catch (err) {
    yield put(
      actions.setRangeDateFilterErr({ error: err || 'Set range filter failed' })
    );
  }
}

function* commentStatisticAccountOnComputerFunc(params) {
  try {
    const response = yield call(commentStatisticAccountOnComputerAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticAccountOnComputerSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticAccountOnComputerErr({ error: err || 'Statistic account on computer failed' })
    )
  }
}

function* commentStatisticByStatusOrderFunc(params) {
  try {
    const response = yield call(commentStatisticByStatusOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticByStatusOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticByStatusOrderErr({ error: err || 'Statistic by status order failed' })
    )
  }
}

function* commentStatisticRunningComputerFunc(params) {
  try {
    const response = yield call(commentStatisticRunningComputerAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticRunningOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticRunningOrderErr({ error: err || 'Statistic running computer failed' })
    )
  }
}

function* commentStatisticTaskOfToolFunc(params) {
  try {
    const response = yield call(commentStatisticTaskOfToolAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticTaskOfToolSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticTaskOfToolErr({ error: err || 'Statistic task of tool failed' })
    )
  }
}

function* commentStatisticRunningUserOrderFunc(params) {
  try {
    const response = yield call(commentStatisticRunningUserOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticRunningUserOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticRunningUserOrderErr({ error: err || 'Statistic running user failed' })
    )
  }
}

function* commentStatisticUserPointFunc(params) {
  try {
    const response = yield call(commentStatisticUserPointAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      console.log('---- user point -----', response?.data)
      yield put(
        actions.commentStatisticUserPointSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticUserPointErr({ error: err || 'Statistic user point failed' })
    )
  }
}

export function* countErrorSubscribeWatcherSaga() {
  yield takeLatest(actions.COUNT_ERROR_SUBSCRIBE_BEGIN, countErrorSubscribeFunc);
}

export function* countSuccessSubscribeWatcherSaga() {
  yield takeLatest(actions.COUNT_SUCCESS_SUBSCRIBE_BEGIN, countSuccessSubscribeFunc);
}

export function* fetchComputerDataListWatcherSaga() {
  yield takeLatest(actions.COMPUTER_DATA_LIST_BEGIN, fetchComputerDataListFunc);
}

export function* resportSubscribeWatcherSaga() {
  yield takeLatest(actions.FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN, reportDataSubscribeFunc);
}

export function* setRangeDateFilterWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_FILTER_BEGIN, setRangeDateFilterFunc);
}

export function* changeServiceTypeWatcherSaga() {
  yield takeLatest(actions.CHANGE_SERVICE_TYPE_BEGIN, changeServiceTypeFunc);
}

export function* getStatisticsSubscribeReporWatcherSaga() {
  yield takeLatest(actions.GET_STATISTICS_SUBSCRIBE_REPORT_BEGIN, getStatisticsSubscribeFunc);
}

export function* toggleStateModalCreateOrderWatcherSaga() {
  yield takeLatest(actions.OPEN_MODAL_CREATE_NEW_ORDER_BEGIN, toggleStateModalCreateOrderFunc);
}


// COMMENT
export function* commentStatisticCommentByDayWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_COMMENT_BY_DAY_BEGIN, commentStatisticCommentByDayFunc);
}

export function* commentStatisticComputerThreadWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_COMPUTER_THREAD_BEGIN, commentStatisticComputerThreadFunc);
}

export function* commentStatisticTaskDurationInMinuteWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN, commentStatisticTaskDurationInMinuteFunc);
}

export function* commentStatisticTaskSuccessInMinuteWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN, commentStatisticTaskSuccessInMinuteFunc);
}

export function* commentStatisticOrderAmountWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_ORDER_AMOUNT_BEGIN, commentStatisticOrderAmountFunc);
}

export function* commentStatisticPerformanceCommentWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_PERFORMANCE_COMMENT_BEGIN, commentStatisticPerformanceCommentFunc);
}

export function* commentStatisticAccountStatusCommentWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN, commentStatisticAccountStatusCommentFunc);
}

export function* commentStatisticsByOrderStatusReportWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN, commentStatisticCommentByOrderReportFunc);
}


export function* commentStatisticAccountOnComputerWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN, commentStatisticAccountOnComputerFunc);
}

export function* commentStatisticByStatusOrderWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_BY_STATUS_ORDER_BEGIN, commentStatisticByStatusOrderFunc);
}

export function* commentStatisticRunningComputerWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_RUNNING_COMPUTER_BEGIN, commentStatisticRunningComputerFunc);
}

export function* commentStatisticTaskOfToolWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_TASK_OF_TOOL_BEGIN, commentStatisticTaskOfToolFunc);
}

export function* commentStatisticRunningUserOrderWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_RUNNING_USER_ORDER_BEGIN, commentStatisticRunningUserOrderFunc);
}

export function* commentStatisticUserPointWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_USER_POINT_BEGIN, commentStatisticUserPointFunc);
}

// Validation youtube link
export function* validateYoutubeVideoLinkWatcherSaga() {
  yield takeLatest(actions.VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN, validateYoutubeVideoLinkFunc);
}