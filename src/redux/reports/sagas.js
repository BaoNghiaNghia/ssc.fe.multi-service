import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import actionBuffComment from '../buffComment/actions';
import actionBuffLike from '../buffLike/actions';
import actionBuffView from '../buffView/actions';
import actionBuffSubscribe from '../buffSubscribe/actions';
import {
  // COMMENT
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
  commentStatisticTotalOrderAPI,
  commentStatisticOrderByDaysAPI,

  // LIKE
  likeStatisticLikeByOrderReportAPI,
  likeStatisticTaskSuccessInMinutesAPI,
  likeStatisticAccountOnComputerAPI,
  likeStatisticAccountStatusAPI,
  likeStatisticByStatusOrderAPI,
  likeStatisticLikeByDayAPI,
  likeStatisticComputerThreadAPI,
  likeStatisticRunningComputerAPI,
  likeStatisticTaskOfToolAPI,
  likeStatisticOrderAmountAPI,
  likeStatisticPerformanceAPI,
  likeStatisticRunningUserOrderAPI,
  likeStatisticUserPointAPI,
  likeStatisticTaskDurationInMinutesAPI,
  likeStatisticTotalOrderAPI,
  likeStatisticOrderByDaysAPI,

  // SUBSCRIBE
  subscribeStatisticTaskSuccessInMinutesAPI,
  subscribeStatisticTaskDurationInMinutesAPI,
  subscribeStatisticAccountOnComputerAPI,
  subscribeStatisticAccountStatusAPI,
  subscribeStatisticByStatusOrderAPI,
  subscribeStatisticSubscribeByDayAPI,
  subscribeStatisticComputerThreadAPI,
  subscribeStatisticRunningComputerAPI,
  subscribeStatisticTaskOfToolAPI,
  subscribeStatisticOrderAmountAPI,
  subscribeStatisticPerformanceAPI,
  subscribeStatisticRunningUserOrderAPI,
  subscribeStatisticUserPointAPI,
  subscribeStatisticTotalOrderAPI,
  subscribeStatisticOrderByDaysAPI,
  subscribeStatisticSubscribeByOrderReportAPI,

  // VIEW
  viewStatisticTaskSuccessInMinutesAPI,
  viewStatisticTaskDurationInMinutesAPI,
  viewStatisticAccountOnComputerAPI,
  viewStatisticAccountStatusAPI,
  viewStatisticByStatusOrderAPI,
  viewStatisticViewByDayAPI,
  viewStatisticComputerThreadAPI,
  viewStatisticRunningComputerAPI,
  viewStatisticTaskOfToolAPI,
  viewStatisticOrderAmountAPI,
  viewStatisticPerformanceAPI,
  viewStatisticRunningUserOrderAPI,
  viewStatisticUserPointAPI,
  viewStatisticTotalOrderAPI,
  viewStatisticOrderByDaysAPI,
  viewStatisticViewByOrderReportAPI,

  // Validate youtube link
  validateYoutubeLinkCommentVideoAPI,
  validateYoutubeLinkLikeVideoAPI,
  validateYoutubeLinkSubscribeVideoAPI,
} from '../../config/api/Reports/index';
import { DEFAULT_PERPAGE, MESSSAGE_STATUS_CODE, SERVICE_TYPE } from '../../variables';

// COMMENT
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
      actions.commentStatisticComputerThreadErr({ error: errorMessage || 'Comment - Fetch computer thread failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch computer thread failed');
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
      actions.commentStatisticCommentByDayErr({ error: errorMessage || 'Comment - Fetch comment by day failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch comment by day failed');
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
      actions.commentStatisticPerformanceCommentErr({ error: errorMessage || 'Comment - Fetch performance comment in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch performance comment in minute failed');
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
      actions.commentStatisticAccountStatusCommentErr({ error: errorMessage || 'Comment - Fetch account status in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch account status in minute failed');
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
      actions.commentStatisticOrderAmountErr({ error: errorMessage || 'Comment - Fetch order amount in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch order amount in minute failed');
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
      actions.commentStatisticTaskSuccessInMinuteErr({ error: errorMessage || 'Comment - Fetch task success in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch task success in minute failed');
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
      actions.commentStatisticTaskDurationInMinuteErr({ error: errorMessage || 'Comment - Fetch task duration in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Comment - Fetch task duration in minute failed');
    }
  } finally { /* empty */ }
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
      actions.commentStatisticCommentByOrderReportErr({ error: err || 'Comment - Count error subscribe failed' })
    )
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
      actions.commentStatisticAccountOnComputerErr({ error: err || 'Comment - Statistic account on computer failed' })
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
      actions.commentStatisticByStatusOrderErr({ error: err || 'Comment - Statistic by status order failed' })
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
      actions.commentStatisticRunningOrderErr({ error: err || 'Comment - Statistic running computer failed' })
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
      actions.commentStatisticTaskOfToolErr({ error: err || 'Comment - Statistic task of tool failed' })
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
      actions.commentStatisticRunningUserOrderErr({ error: err || 'Comment - Statistic running user failed' })
    )
  }
}

function* commentStatisticUserPointFunc(params) {
  try {
    const response = yield call(commentStatisticUserPointAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticUserPointSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticUserPointErr({ error: err || 'Comment - Statistic user point failed' })
    )
  }
}

function* commentStatisticTotalOrderFunc(params) {
  try {
    const response = yield call(commentStatisticTotalOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticTotalOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticTotalOrderErr({ error: err || 'Comment - Statistic total order failed' })
    )
  }
}

function* commentStatisticOrderByDaysFunc(params) {
  try {
    const response = yield call(commentStatisticOrderByDaysAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.commentStatisticOrderByDaysSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.commentStatisticOrderByDaysErr({ error: err || 'Comment - Order by days failed' })
    )
  }
}



// LIKE
function* likeStatisticComputerThreadFunc(params) {
  try {
    const response = yield call(likeStatisticComputerThreadAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticComputerThreadSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticComputerThreadErr({ error: errorMessage || 'Like - Fetch computer thread failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Fetch computer thread failed');
    }
  } finally { /* empty */ }
}

function* likeStatisticCommentByDayFunc(params) {
  try {
    const response = yield call(likeStatisticLikeByDayAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticCommentByDaySuccess(response?.data?.data?.reverse())
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticCommentByDayErr({ error: errorMessage || 'Like - Fetch comment by day failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Fetch comment by day failed');
    }
  } finally { /* empty */ }
}

function* likeStatisticPerformanceCommentFunc(params) {
  try {
    const response = yield call(likeStatisticPerformanceAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse()
      yield put(
        actions.likeStatisticPerformanceLikeSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticPerformanceLikeErr({ error: errorMessage || 'Like - Fetch performance comment in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Fetch performance comment in minute failed');
    }
  } finally { /* empty */ }
}

function* likeStatisticAccountStatusCommentFunc(params) {
  try {
    const response = yield call(likeStatisticAccountStatusAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticAccountStatusLikeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticAccountStatusLikeErr({ error: errorMessage || 'Like - Fetch account status in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Fetch account status in minute failed');
    }
  } finally { /* empty */ }
}

function* likeStatisticOrderAmountFunc(params) {
  try {
    const response = yield call(likeStatisticOrderAmountAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse();
      yield put(
        actions.likeStatisticOrderAmountSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticOrderAmountErr({ error: errorMessage || 'Like - Fetch order amount in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Fetch order amount in minute failed');
    }
  } finally { /* empty */ }
}

function* likeStatisticTaskSuccessInMinuteFunc(params) {
  try {
    const response = yield call(likeStatisticTaskSuccessInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticTaskSuccessInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticTaskSuccessInMinuteErr({ error: errorMessage || 'Like - Fetch task success in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Fetch task success in minute failed');
    }
  } finally { /* empty */ }
}

function* likeStatisticTaskDurationInMinuteFunc(params) {
  try {
    const response = yield call(likeStatisticTaskDurationInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticTaskDurationInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticTaskDurationInMinuteErr({ error: errorMessage || 'Like - Fetch task duration in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Like - Fetch task duration in minute failed');
    }
  } finally { /* empty */ }
}


function* likeStatisticLikeByOrderReportFunc(params) {
  try {
    const response = yield call(likeStatisticLikeByOrderReportAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticLikeByOrderReportSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticLikeByOrderReportErr({ error: err || 'Like - Count comment by order failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Count comment by order failed');
    }
  }
}

function* likeStatisticAccountOnComputerFunc(params) {
  try {
    const response = yield call(likeStatisticAccountOnComputerAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticAccountOnComputerSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticAccountOnComputerErr({ error: err || 'Like - Statistic account on computer failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Statistic account on computer failed');
    }
  }
}

function* likeStatisticByStatusOrderFunc(params) {
  try {
    const response = yield call(likeStatisticByStatusOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticByStatusOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticByStatusOrderErr({ error: err || 'Like - Statistic by status order failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Statistic by status order failed');
    }
  }
}

function* likeStatisticRunningComputerFunc(params) {
  try {
    const response = yield call(likeStatisticRunningComputerAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticRunningOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticRunningOrderErr({ error: err || 'Like - Statistic running computer failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Statistic running computer failed');
    }
  }
}

function* likeStatisticTaskOfToolFunc(params) {
  try {
    const response = yield call(likeStatisticTaskOfToolAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticTaskOfToolSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticTaskOfToolErr({ error: err || 'Like - Statistic task of tool failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Statistic task of tool failed');
    }
  }
}

function* likeStatisticRunningUserOrderFunc(params) {
  try {
    const response = yield call(likeStatisticRunningUserOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticRunningUserOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticRunningUserOrderErr({ error: err || 'Like - Statistic running user failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Statistic running user failed');
    }
  }
}

function* likeStatisticUserPointFunc(params) {
  try {
    const response = yield call(likeStatisticUserPointAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticUserPointSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticUserPointErr({ error: err || 'Like - Statistic user point failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Statistic user point failed');
    }
  }
}

function* likeStatisticTotalOrderFunc(params) {
  try {
    const response = yield call(likeStatisticTotalOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticTotalOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticTotalOrderErr({ error: err || 'Like - Statistic total order failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Statistic total order failed');
    }
  }
}

function* likeStatisticOrderByDaysFunc(params) {
  try {
    const response = yield call(likeStatisticOrderByDaysAPI, params?.payload);
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.likeStatisticOrderByDaysSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.likeStatisticOrderByDaysErr({ error: err || 'Like - Order by days failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Like - Order by days failed');
    }
  }
}


// SUBSCRIBE
function* subscribeStatisticComputerThreadFunc(params) {
  try {
    const response = yield call(subscribeStatisticComputerThreadAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticComputerThreadSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.subscribeStatisticComputerThreadErr({ error: errorMessage || 'Subscribe - Fetch computer thread failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Fetch computer thread failed');
    }
  } finally { /* empty */ }
}

function* subscribeStatisticSubscribeByDayFunc(params) {
  try {
    const response = yield call(subscribeStatisticSubscribeByDayAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticSubscribeByDaySuccess(response?.data?.data?.reverse())
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.subscribeStatisticSubscribeByDayErr({ error: errorMessage || 'Subscribe - Fetch comment by day failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Fetch comment by day failed');
    }
  } finally { /* empty */ }
}

function* subscribeStatisticPerformanceSubscribeFunc(params) {
  try {
    const response = yield call(subscribeStatisticPerformanceAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse()
      yield put(
        actions.subscribeStatisticPerformanceSubscribeSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.subscribeStatisticPerformanceSubscribeErr({ error: errorMessage || 'Subscribe - Fetch performance comment in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Fetch performance comment in minute failed');
    }
  } finally { /* empty */ }
}

function* subscribeStatisticAccountStatusSubscribeFunc(params) {
  try {
    const response = yield call(subscribeStatisticAccountStatusAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticAccountStatusSubscribeSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.subscribeStatisticAccountStatusSubscribeErr({ error: errorMessage || 'Subscribe - Fetch account status in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Fetch account status in minute failed');
    }
  } finally { /* empty */ }
}

function* subscribeStatisticOrderAmountFunc(params) {
  try {
    const response = yield call(subscribeStatisticOrderAmountAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse();
      yield put(
        actions.subscribeStatisticOrderAmountSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.subscribeStatisticOrderAmountErr({ error: errorMessage || 'Subscribe - Fetch order amount in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Fetch order amount in minute failed');
    }
  } finally { /* empty */ }
}

function* subscribeStatisticTaskSuccessInMinuteFunc(params) {
  try {
    const response = yield call(subscribeStatisticTaskSuccessInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticTaskSuccessInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.subscribeStatisticTaskSuccessInMinuteErr({ error: errorMessage || 'Subscribe - Fetch task success in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Fetch task success in minute failed');
    }
  } finally { /* empty */ }
}

function* subscribeStatisticTaskDurationInMinuteFunc(params) {
  try {
    const response = yield call(subscribeStatisticTaskDurationInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticTaskDurationInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.subscribeStatisticTaskDurationInMinuteErr({ error: errorMessage || 'Subscribe - Fetch task duration in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Fetch task duration in minute failed');
    }
  } finally { /* empty */ }
}



function* subscribeStatisticSubscribeByOrderReportFunc(params) {
  try {
    const response = yield call(subscribeStatisticSubscribeByOrderReportAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticSubscribeByOrderReportSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticSubscribeByOrderReportErr({ error: err || 'Subscribe - Count error subscribe failed' })
    )
  }
}

function* subscribeStatisticAccountOnComputerFunc(params) {
  try {
    const response = yield call(subscribeStatisticAccountOnComputerAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticAccountOnComputerSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticAccountOnComputerErr({ error: err || 'Subscribe - Statistic account on computer failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Statistic account on computer failed');
    }
  }
}

function* subscribeStatisticByStatusOrderFunc(params) {
  try {
    const response = yield call(subscribeStatisticByStatusOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticByStatusOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticByStatusOrderErr({ error: err || 'Subscribe - Statistic by status order failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Statistic by status order failed');
    }
  }
}

function* subscribeStatisticRunningComputerFunc(params) {
  try {
    const response = yield call(subscribeStatisticRunningComputerAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticRunningOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticRunningOrderErr({ error: err || 'Subscribe - Statistic running computer failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Statistic running computer failed');
    }
  }
}

function* subscribeStatisticTaskOfToolFunc(params) {
  try {
    const response = yield call(subscribeStatisticTaskOfToolAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticTaskOfToolSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticTaskOfToolErr({ error: err || 'Subscribe - Statistic task of tool failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Statistic task of tool failed');
    }
  }
}

function* subscribeStatisticRunningUserOrderFunc(params) {
  try {
    const response = yield call(subscribeStatisticRunningUserOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticRunningUserOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticRunningUserOrderErr({ error: err || 'Subscribe - Statistic running user failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Statistic running user failed');
    }
  }
}

function* subscribeStatisticUserPointFunc(params) {
  try {
    const response = yield call(subscribeStatisticUserPointAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticUserPointSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticUserPointErr({ error: err || 'Subscribe - Statistic user point failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Statistic user point failed');
    }
  }
}

function* subscribeStatisticTotalOrderFunc(params) {
  try {
    const response = yield call(subscribeStatisticTotalOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticTotalOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticTotalOrderErr({ error: err || 'Subscribe - Statistic total order failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Statistic total order failed');
    }
  }
}

function* subscribeStatisticOrderByDaysFunc(params) {
  try {
    const response = yield call(subscribeStatisticOrderByDaysAPI, params?.payload);
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.subscribeStatisticOrderByDaysSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.subscribeStatisticOrderByDaysErr({ error: err || 'Subscribe - Order by days failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('Subscribe - Order by days failed');
    }
  }
}



// VIEW
function* viewStatisticComputerThreadFunc(params) {
  try {
    const response = yield call(viewStatisticComputerThreadAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticComputerThreadSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.viewStatisticComputerThreadErr({ error: errorMessage || 'View - Fetch computer thread failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Fetch computer thread failed');
    }
  } finally { /* empty */ }
}

function* viewStatisticViewByDayFunc(params) {
  try {
    const response = yield call(viewStatisticViewByDayAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticViewByDaySuccess(response?.data?.data?.reverse())
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.viewStatisticViewByDayErr({ error: errorMessage || 'View - Fetch comment by day failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Fetch comment by day failed');
    }
  } finally { /* empty */ }
}

function* viewStatisticPerformanceViewFunc(params) {
  try {
    const response = yield call(viewStatisticPerformanceAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse()
      yield put(
        actions.viewStatisticPerformanceViewSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.viewStatisticPerformanceViewErr({ error: errorMessage || 'View - Fetch performance comment in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Fetch performance comment in minute failed');
    }
  } finally { /* empty */ }
}

function* viewStatisticAccountStatusViewFunc(params) {
  try {
    const response = yield call(viewStatisticAccountStatusAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticAccountStatusViewSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.viewStatisticAccountStatusViewErr({ error: errorMessage || 'View - Fetch account status in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Fetch account status in minute failed');
    }
  } finally { /* empty */ }
}

function* viewStatisticOrderAmountFunc(params) {
  try {
    const response = yield call(viewStatisticOrderAmountAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      const reverseTempData = response?.data?.data?.reverse();
      yield put(
        actions.viewStatisticOrderAmountSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.viewStatisticOrderAmountErr({ error: errorMessage || 'View - Fetch order amount in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Fetch order amount in minute failed');
    }
  } finally { /* empty */ }
}

function* viewStatisticTaskSuccessInMinuteFunc(params) {
  try {
    const response = yield call(viewStatisticTaskSuccessInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticTaskSuccessInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.viewStatisticTaskSuccessInMinuteErr({ error: errorMessage || 'View - Fetch task success in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Fetch task success in minute failed');
    }
  } finally { /* empty */ }
}

function* viewStatisticTaskDurationInMinuteFunc(params) {
  try {
    const response = yield call(viewStatisticTaskDurationInMinutesAPI, params?.payload);
    
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticTaskDurationInMinuteSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.viewStatisticTaskDurationInMinuteErr({ error: errorMessage || 'View - Fetch task duration in minute failed' })
    );

    if (errorMessage?.response?.data?.data?.error) {
      toast.error(errorMessage?.response?.data?.data?.error);
    } else {
      toast.error('View - Fetch task duration in minute failed');
    }
  } finally { /* empty */ }
}


function* viewStatisticViewByOrderReportFunc(params) {
  try {
    const response = yield call(viewStatisticViewByOrderReportAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticViewByOrderReportSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticViewByOrderReportErr({ error: err || 'View - Count comment by order failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Count comment by order failed');
    }
  }
}

function* viewStatisticAccountOnComputerFunc(params) {
  try {
    const response = yield call(viewStatisticAccountOnComputerAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticAccountOnComputerSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticAccountOnComputerErr({ error: err || 'View - Statistic account on computer failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Statistic account on computer failed');
    }
  }
}

function* viewStatisticByStatusOrderFunc(params) {
  try {
    const response = yield call(viewStatisticByStatusOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticByStatusOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticByStatusOrderErr({ error: err || 'View - Statistic by status order failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Statistic by status order failed');
    }
  }
}

function* viewStatisticRunningComputerFunc(params) {
  try {
    const response = yield call(viewStatisticRunningComputerAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticRunningOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticRunningOrderErr({ error: err || 'View - Statistic running computer failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Statistic running computer failed');
    }
  }
}

function* viewStatisticTaskOfToolFunc(params) {
  try {
    const response = yield call(viewStatisticTaskOfToolAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticTaskOfToolSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticTaskOfToolErr({ error: err || 'View - Statistic task of tool failed' })
    );

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Statistic task of tool failed');
    }
  }
}

function* viewStatisticRunningUserOrderFunc(params) {
  try {
    const response = yield call(viewStatisticRunningUserOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticRunningUserOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticRunningUserOrderErr({ error: err || 'View - Statistic running user failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Statistic running user failed');
    }
  }
}

function* viewStatisticUserPointFunc(params) {
  try {
    const response = yield call(viewStatisticUserPointAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticUserPointSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticUserPointErr({ error: err || 'View - Statistic user point failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Statistic user point failed');
    }
  }
}

function* viewStatisticTotalOrderFunc(params) {
  try {
    const response = yield call(viewStatisticTotalOrderAPI, params?.payload);

    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticTotalOrderSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticTotalOrderErr({ error: err || 'View - Statistic total order failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Statistic total order failed');
    }
  }
}

function* viewStatisticOrderByDaysFunc(params) {
  try {
    const response = yield call(viewStatisticOrderByDaysAPI, params?.payload);
    if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
      yield put(
        actions.viewStatisticOrderByDaysSuccess(response?.data?.data)
      );
    }
  } catch (err) {
    yield put(
      actions.viewStatisticOrderByDaysErr({ error: err || 'View - Order by days failed' })
    )

    if (err?.response?.data?.data?.error) {
      toast.error(err?.response?.data?.data?.error);
    } else {
      toast.error('View - Order by days failed');
    }
  }
}


 
function* setCategoryInNewOrderFunc(params) {
  try {
    yield put(
      actions.setCategoryInNewOrderSuccess(params?.payload)
    );
  } catch (err) {
    yield put(
      actions.setCategoryInNewOrderErr({ error: err || 'Can not change category' })
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
      actions.validateYoutubeVideoLinkErr({ error: err || 'Validate youtube video failed' })
    );
  }
}

function* changeServiceTypeFunc(params) {
  try {
    yield put(
      actions.changeServiceTypeSuccess(params?.payload?.value)
    );

    const isType = params?.payload?.value;

    const initialFilter = {
      start_date: `${params?.payload?.from  } 00:00:00`,
      end_date: `${params?.payload?.to  } 23:59:59`,
      status: 1
    };

    const initServerPagination = {
      page: 1,
      limit: DEFAULT_PERPAGE
    };

    //  Default initial values
    yield put(actions.likeStatisticOrderAmountBegin(initialFilter));
    yield put(actions.commentStatisticOrderAmountBegin(initialFilter));
    yield put(actions.subscribeStatisticOrderAmountBegin(initialFilter));
    yield put(actions.viewStatisticOrderAmountBegin(initialFilter));


    if (isType === SERVICE_TYPE.COMMENT.title) {
      yield put(actions.commentStatisticTaskDurationInMinuteBegin());
      yield put(actions.commentStatisticCommentByOrderReportBegin());
      yield put(actions.commentStatisticTaskSuccessInMinuteBegin());
      // yield put(actions.commentStatisticOrderAmountBegin(initialFilter));
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
      yield put(actions.commentStatisticTotalOrderBegin(initialFilter));
      yield put(actions.commentStatisticOrderByDaysBegin(initialFilter));
      
      // Fetch list computer
      yield put(actionBuffComment.listComputerRunCommentBegin(initServerPagination));
    }

    if (isType === SERVICE_TYPE.LIKE.title) {
      yield put(actions.likeStatisticTaskDurationInMinuteBegin());
      yield put(actions.likeStatisticLikeByOrderReportBegin());
      yield put(actions.likeStatisticTaskSuccessInMinuteBegin());
      yield put(actions.likeStatisticAccountStatusLikeBegin(initialFilter));
      yield put(actions.likeStatisticPerformanceLikeBegin(initialFilter));
      yield put(actions.likeStatisticLikeByDayBegin(initialFilter));
      yield put(actions.likeStatisticComputerThreadBegin(initialFilter));

      yield put(actions.likeStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.likeStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.likeStatisticRunningOrderBegin(initialFilter));
      yield put(actions.likeStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.likeStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.likeStatisticUserPointBegin(initialFilter));
      yield put(actions.likeStatisticTotalOrderBegin(initialFilter));
      yield put(actions.likeStatisticOrderByDaysBegin(initialFilter));

      // Fetch list computer
      yield put(actionBuffLike.listComputerRunLikeBegin(initServerPagination));
    }
    if (isType === SERVICE_TYPE.SUBSCRIBE.title) {
      console.log('--- THAY ĐỔI STATISTIC SUBSCRIBE ---');
      yield put(actions.subscribeStatisticTaskDurationInMinuteBegin());
      yield put(actions.subscribeStatisticSubscribeByOrderReportBegin());
      yield put(actions.subscribeStatisticTaskSuccessInMinuteBegin());
      yield put(actions.subscribeStatisticOrderAmountBegin(initialFilter));
      yield put(actions.subscribeStatisticAccountStatusSubscribeBegin(initialFilter));
      yield put(actions.subscribeStatisticPerformanceSubscribeBegin(initialFilter));
      yield put(actions.subscribeStatisticSubscribeByDayBegin(initialFilter));
      yield put(actions.subscribeStatisticComputerThreadBegin(initialFilter));

      yield put(actions.subscribeStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.subscribeStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.subscribeStatisticRunningOrderBegin(initialFilter));
      yield put(actions.subscribeStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.subscribeStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.subscribeStatisticUserPointBegin(initialFilter));
      yield put(actions.subscribeStatisticTotalOrderBegin(initialFilter));
      yield put(actions.subscribeStatisticOrderByDaysBegin(initialFilter));

      // Fetch list computer
      yield put(actionBuffSubscribe.listComputerRunSubscribeBegin(initServerPagination));
    }
    if (isType === SERVICE_TYPE.VIEW.title) {
      console.log('--- THAY ĐỔI STATISTIC VIEW ---');
      yield put(actions.viewStatisticTaskDurationInMinuteBegin());
      yield put(actions.viewStatisticViewByOrderReportBegin());
      yield put(actions.viewStatisticTaskSuccessInMinuteBegin());
      // yield put(actions.viewStatisticOrderAmountBegin(initialFilter));
      yield put(actions.viewStatisticAccountStatusViewBegin(initialFilter));
      yield put(actions.viewStatisticPerformanceViewBegin(initialFilter));
      yield put(actions.viewStatisticViewByDayBegin(initialFilter));
      yield put(actions.viewStatisticComputerThreadBegin(initialFilter));

      yield put(actions.viewStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.viewStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.viewStatisticRunningOrderBegin(initialFilter));
      yield put(actions.viewStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.viewStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.viewStatisticUserPointBegin(initialFilter));
      yield put(actions.viewStatisticTotalOrderBegin(initialFilter));
      yield put(actions.viewStatisticOrderByDaysBegin(initialFilter));

      // Fetch list computer
      yield put(actionBuffView.fetchListDevicesRunViewBegin(initServerPagination));
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

    const isType = params?.payload?.typeService;

    const initialFilter = {
      start_date: `${params?.payload?.from  } 00:00:00`,
      end_date: `${params?.payload?.to  } 23:59:59`,
      status: 1
    };

    const initServerPagination = {
      page: 1,
      limit: DEFAULT_PERPAGE
    };

    if (isType === SERVICE_TYPE.SUBSCRIBE.title) {
      yield put(actions.subscribeStatisticSubscribeByOrderReportBegin());
      yield put(actions.subscribeStatisticTaskSuccessInMinuteBegin());
      yield put(actions.subscribeStatisticTaskDurationInMinuteBegin());
      yield put(actions.subscribeStatisticOrderAmountBegin(initialFilter));
      yield put(actions.subscribeStatisticAccountStatusSubscribeBegin(initialFilter));
      yield put(actions.subscribeStatisticPerformanceSubscribeBegin(initialFilter));
      yield put(actions.subscribeStatisticSubscribeByDayBegin(initialFilter));
      yield put(actions.subscribeStatisticComputerThreadBegin(initialFilter));

      yield put(actions.subscribeStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.subscribeStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.subscribeStatisticRunningOrderBegin(initialFilter));
      yield put(actions.subscribeStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.subscribeStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.subscribeStatisticUserPointBegin(initialFilter));
      yield put(actions.subscribeStatisticTotalOrderBegin(initialFilter));
      yield put(actions.subscribeStatisticOrderByDaysBegin(initialFilter));

      // Fetch list computer
      yield put(actionBuffSubscribe.listComputerRunSubscribeBegin(initServerPagination));
    }

    if (isType === SERVICE_TYPE.VIEW.title) {
      yield put(actions.viewStatisticViewByOrderReportBegin());
      yield put(actions.viewStatisticTaskSuccessInMinuteBegin());
      yield put(actions.viewStatisticTaskDurationInMinuteBegin());
      yield put(actions.viewStatisticOrderAmountBegin(initialFilter));
      yield put(actions.viewStatisticAccountStatusViewBegin(initialFilter));
      yield put(actions.viewStatisticPerformanceViewBegin(initialFilter));
      yield put(actions.viewStatisticViewByDayBegin(initialFilter));
      yield put(actions.viewStatisticComputerThreadBegin(initialFilter));

      yield put(actions.viewStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.viewStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.viewStatisticRunningOrderBegin(initialFilter));
      yield put(actions.viewStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.viewStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.viewStatisticUserPointBegin(initialFilter));
      yield put(actions.viewStatisticTotalOrderBegin(initialFilter));
      yield put(actions.viewStatisticOrderByDaysBegin(initialFilter));

      // Fetch list computer
      yield put(actionBuffView.fetchListDevicesRunViewBegin(initServerPagination));
    }
    
    if (isType === SERVICE_TYPE.COMMENT.title) {
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
      yield put(actions.commentStatisticTotalOrderBegin(initialFilter));
      yield put(actions.commentStatisticOrderByDaysBegin(initialFilter));

      // Fetch list computer
      yield put(actionBuffComment.listComputerRunCommentBegin(initServerPagination));
    }

    if (isType === SERVICE_TYPE.LIKE.title) {
      yield put(actions.likeStatisticLikeByOrderReportBegin());
      yield put(actions.likeStatisticTaskSuccessInMinuteBegin());
      yield put(actions.likeStatisticTaskDurationInMinuteBegin());
      yield put(actions.likeStatisticOrderAmountBegin(initialFilter));
      yield put(actions.likeStatisticAccountStatusLikeBegin(initialFilter));
      yield put(actions.likeStatisticPerformanceLikeBegin(initialFilter));
      yield put(actions.likeStatisticLikeByDayBegin(initialFilter));
      yield put(actions.likeStatisticComputerThreadBegin(initialFilter));

      yield put(actions.likeStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.likeStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.likeStatisticRunningOrderBegin(initialFilter));
      yield put(actions.likeStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.likeStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.likeStatisticUserPointBegin(initialFilter));
      yield put(actions.likeStatisticTotalOrderBegin(initialFilter));
      yield put(actions.likeStatisticOrderByDaysBegin(initialFilter));

      // Fetch list computer
      yield put(actionBuffLike.listComputerRunLikeBegin(initServerPagination));
    }
  } catch (err) {
    yield put(
      actions.setRangeDateFilterErr({ error: err || 'Set range filter failed' })
    );
  }
}



export function* setRangeDateFilterWatcherSaga() {
  yield takeLatest(actions.SET_RANGE_DATE_FILTER_BEGIN, setRangeDateFilterFunc);
}

export function* changeServiceTypeWatcherSaga() {
  yield takeLatest(actions.CHANGE_SERVICE_TYPE_BEGIN, changeServiceTypeFunc);
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

export function* commentStatisticTotalOrderWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_TOTAL_ORDER_BEGIN, commentStatisticTotalOrderFunc);
}
export function* commentStatisticOrderByDaysWatcherSaga() {
  yield takeLatest(actions.COMMENT_STATISTIC_ORDER_BY_DAYS_BEGIN, commentStatisticOrderByDaysFunc);
}



// LIKE
export function* likeStatisticCommentByDayWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_LIKE_BY_DAY_BEGIN, likeStatisticCommentByDayFunc);
}

export function* likeStatisticComputerThreadWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_COMPUTER_THREAD_BEGIN, likeStatisticComputerThreadFunc);
}

export function* likeStatisticTaskDurationInMinuteWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN, likeStatisticTaskDurationInMinuteFunc);
}

export function* likeStatisticTaskSuccessInMinuteWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN, likeStatisticTaskSuccessInMinuteFunc);
}

export function* likeStatisticOrderAmountWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_ORDER_AMOUNT_BEGIN, likeStatisticOrderAmountFunc);
}

export function* likeStatisticPerformanceCommentWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_PERFORMANCE_LIKE_BEGIN, likeStatisticPerformanceCommentFunc);
}

export function* likeStatisticAccountStatusCommentWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_BEGIN, likeStatisticAccountStatusCommentFunc);
}

export function* likeStatisticAccountOnComputerWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN, likeStatisticAccountOnComputerFunc);
}

export function* likeStatisticByStatusOrderWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_BY_STATUS_ORDER_BEGIN, likeStatisticByStatusOrderFunc);
}

export function* likeStatisticRunningComputerWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_RUNNING_COMPUTER_BEGIN, likeStatisticRunningComputerFunc);
}

export function* likeStatisticTaskOfToolWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_TASK_OF_TOOL_BEGIN, likeStatisticTaskOfToolFunc);
}

export function* likeStatisticRunningUserOrderWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_RUNNING_USER_ORDER_BEGIN, likeStatisticRunningUserOrderFunc);
}

export function* likeStatisticUserPointWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_USER_POINT_BEGIN, likeStatisticUserPointFunc);
}

export function* likeStatisticTotalOrderWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_TOTAL_ORDER_BEGIN, likeStatisticTotalOrderFunc);
}

export function* likeStatisticOrderByDaysWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_ORDER_BY_DAYS_BEGIN, likeStatisticOrderByDaysFunc);
}

export function* likeStatisticsByOrderStatusReportWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_BEGIN, likeStatisticLikeByOrderReportFunc);
}




// Subscribe
export function* subscribeStatisticSubscribeByDayWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_BEGIN, subscribeStatisticSubscribeByDayFunc);
}

export function* subscribeStatisticComputerThreadWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_COMPUTER_THREAD_BEGIN, subscribeStatisticComputerThreadFunc);
}

export function* subscribeStatisticTaskDurationInMinuteWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN, subscribeStatisticTaskDurationInMinuteFunc);
}

export function* subscribeStatisticTaskSuccessInMinuteWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN, subscribeStatisticTaskSuccessInMinuteFunc);
}

export function* subscribeStatisticOrderAmountWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_ORDER_AMOUNT_BEGIN, subscribeStatisticOrderAmountFunc);
}

export function* subscribeStatisticPerformanceSubscribeWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_BEGIN, subscribeStatisticPerformanceSubscribeFunc);
}

export function* subscribeStatisticAccountStatusSubscribeWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_BEGIN, subscribeStatisticAccountStatusSubscribeFunc);
}

export function* subscribeStatisticAccountOnComputerWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN, subscribeStatisticAccountOnComputerFunc);
}

export function* subscribeStatisticByStatusOrderWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_BEGIN, subscribeStatisticByStatusOrderFunc);
}

export function* subscribeStatisticRunningComputerWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_BEGIN, subscribeStatisticRunningComputerFunc);
}

export function* subscribeStatisticTaskOfToolWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_TASK_OF_TOOL_BEGIN, subscribeStatisticTaskOfToolFunc);
}

export function* subscribeStatisticRunningUserOrderWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_BEGIN, subscribeStatisticRunningUserOrderFunc);
}

export function* subscribeStatisticUserPointWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_USER_POINT_BEGIN, subscribeStatisticUserPointFunc);
}

export function* subscribeStatisticTotalOrderWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_TOTAL_ORDER_BEGIN, subscribeStatisticTotalOrderFunc);
}

export function* subscribeStatisticOrderByDaysWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_BEGIN, subscribeStatisticOrderByDaysFunc);
}


export function* subscribeStatisticsByOrderStatusReportWatcherSaga() {
  yield takeLatest(actions.SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_BEGIN, subscribeStatisticSubscribeByOrderReportFunc);
}


// View
export function* viewStatisticViewByDayWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_VIEW_BY_DAY_BEGIN, viewStatisticViewByDayFunc);
}

export function* viewStatisticComputerThreadWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_COMPUTER_THREAD_BEGIN, viewStatisticComputerThreadFunc);
}

export function* viewStatisticTaskDurationInMinuteWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN, viewStatisticTaskDurationInMinuteFunc);
}

export function* viewStatisticTaskSuccessInMinuteWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN, viewStatisticTaskSuccessInMinuteFunc);
}

export function* viewStatisticOrderAmountWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_ORDER_AMOUNT_BEGIN, viewStatisticOrderAmountFunc);
}

export function* viewStatisticPerformanceViewWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_PERFORMANCE_VIEW_BEGIN, viewStatisticPerformanceViewFunc);
}

export function* viewStatisticAccountStatusViewWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_BEGIN, viewStatisticAccountStatusViewFunc);
}

export function* viewStatisticAccountOnComputerWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN, viewStatisticAccountOnComputerFunc);
}

export function* viewStatisticByStatusOrderWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_BY_STATUS_ORDER_BEGIN, viewStatisticByStatusOrderFunc);
}

export function* viewStatisticRunningComputerWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_RUNNING_COMPUTER_BEGIN, viewStatisticRunningComputerFunc);
}

export function* viewStatisticTaskOfToolWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_TASK_OF_TOOL_BEGIN, viewStatisticTaskOfToolFunc);
}

export function* viewStatisticRunningUserOrderWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_RUNNING_USER_ORDER_BEGIN, viewStatisticRunningUserOrderFunc);
}

export function* viewStatisticUserPointWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_USER_POINT_BEGIN, viewStatisticUserPointFunc);
}

export function* viewStatisticTotalOrderWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_TOTAL_ORDER_BEGIN, viewStatisticTotalOrderFunc);
}

export function* viewStatisticOrderByDaysWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_ORDER_BY_DAYS_BEGIN, viewStatisticOrderByDaysFunc);
}

export function* viewStatisticsByOrderStatusReportWatcherSaga() {
  yield takeLatest(actions.VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_BEGIN, viewStatisticViewByOrderReportFunc);
}






// Validation youtube link
export function* validateYoutubeVideoLinkWatcherSaga() {
  yield takeLatest(actions.VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN, validateYoutubeVideoLinkFunc);
}


// New Order
export function* setCategoryInNewOrderWatcherSaga() {
  yield takeLatest(actions.SET_CATEGORY_IN_NEW_ORDER_BEGIN, setCategoryInNewOrderFunc);
}
