import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from "./actions";
import {
  
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

  // likeStatisticCommentByOrderReportAPI,
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
  likeStatisticTotalOrderAPI,

  validateYoutubeLinkCommentVideoAPI,
  validateYoutubeLinkLikeVideoAPI,
  validateYoutubeLinkSubscribeVideoAPI,
} from '../../config/apiFactory/Reports/index';
import { MESSSAGE_STATUS_CODE, SERVICE_TYPE } from '../../variables';

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
      actions.commentStatisticCommentByOrderReportErr({ error: err || 'Count error subscribe failed' })
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
      actions.commentStatisticTotalOrderErr({ error: err || 'Statistic total order failed' })
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
    const response = yield call(likeStatisticCommentByDayAPI, params?.payload);
    
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
        actions.likeStatisticPerformanceCommentSuccess(reverseTempData)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticPerformanceCommentErr({ error: errorMessage || 'Like - Fetch performance comment in minute failed' })
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
        actions.likeStatisticAccountStatusCommentSuccess(response?.data?.data)
      );
    }
  } catch (error) {
    const errorMessage = error;
    yield put(
      actions.likeStatisticAccountStatusCommentErr({ error: errorMessage || 'Like - Fetch account status in minute failed' })
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


// function* likeStatisticCommentByOrderReportFunc(params) {
//   try {
//     const response = yield call(likeStatisticCommentByOrderReportAPI, params?.payload);

//     if (response?.status === MESSSAGE_STATUS_CODE.SUCCESS.code) {
//       yield put(
//         actions.likeStatisticCommentByOrderReportSuccess(response?.data?.data)
//       );
//     }
//   } catch (err) {
//     yield put(
//       actions.likeStatisticCommentByOrderReportErr({ error: err || 'Like - Count comment by order failed' })
//     );

//     if (err?.response?.data?.data?.error) {
//       toast.error(err?.response?.data?.data?.error);
//     } else {
//       toast.error('Like - Count comment by order failed');
//     }
//   }
// }

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
    }

    if (isType === SERVICE_TYPE.LIKE.title) {
      // yield put(actions.likeStatisticCommentByOrderReportBegin());
      yield put(actions.likeStatisticTaskSuccessInMinuteBegin());
      yield put(actions.likeStatisticTaskDurationInMinuteBegin());
      yield put(actions.likeStatisticOrderAmountBegin(initialFilter));
      yield put(actions.likeStatisticAccountStatusCommentBegin(initialFilter));
      yield put(actions.likeStatisticPerformanceCommentBegin(initialFilter));
      yield put(actions.likeStatisticCommentByDayBegin(initialFilter));
      yield put(actions.likeStatisticComputerThreadBegin(initialFilter));

      yield put(actions.likeStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.likeStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.likeStatisticRunningOrderBegin(initialFilter));
      yield put(actions.likeStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.likeStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.likeStatisticUserPointBegin(initialFilter));
      yield put(actions.likeStatisticTotalOrderBegin(initialFilter));
    }
    if (isType === SERVICE_TYPE.SUBSCRIBE.title) {
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

    const isType = params?.payload?.typeService;

    const initialFilter = {
      start_date: `${params?.payload?.from  } 00:00:00`,
      end_date: `${params?.payload?.to  } 23:59:59`,
      status: 1
    };

    if (isType === SERVICE_TYPE.SUBSCRIBE.title) {
      console.log('----- range filter with comment ------');
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
    }

    if (isType === SERVICE_TYPE.LIKE.title) {
      // yield put(actions.likeStatisticCommentByOrderReportBegin());
      yield put(actions.likeStatisticTaskSuccessInMinuteBegin());
      yield put(actions.likeStatisticTaskDurationInMinuteBegin());
      yield put(actions.likeStatisticOrderAmountBegin(initialFilter));
      yield put(actions.likeStatisticAccountStatusCommentBegin(initialFilter));
      yield put(actions.likeStatisticPerformanceCommentBegin(initialFilter));
      yield put(actions.likeStatisticCommentByDayBegin(initialFilter));
      yield put(actions.likeStatisticComputerThreadBegin(initialFilter));

      yield put(actions.likeStatisticAccountOnComputerBegin(initialFilter));
      yield put(actions.likeStatisticByStatusOrderBegin(initialFilter));
      yield put(actions.likeStatisticRunningOrderBegin(initialFilter));
      yield put(actions.likeStatisticTaskOfToolBegin(initialFilter));
      yield put(actions.likeStatisticRunningUserOrderBegin(initialFilter));
      yield put(actions.likeStatisticUserPointBegin(initialFilter));
      yield put(actions.likeStatisticTotalOrderBegin(initialFilter));
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
  yield takeLatest(actions.LIKE_STATISTIC_PERFORMANCE_COMMENT_BEGIN, likeStatisticPerformanceCommentFunc);
}

export function* likeStatisticAccountStatusCommentWatcherSaga() {
  yield takeLatest(actions.LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN, likeStatisticAccountStatusCommentFunc);
}

// export function* likeStatisticsByOrderStatusReportWatcherSaga() {
//   yield takeLatest(actions.LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN, likeStatisticCommentByOrderReportFunc);
// }

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

// Validation youtube link
export function* validateYoutubeVideoLinkWatcherSaga() {
  yield takeLatest(actions.VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN, validateYoutubeVideoLinkFunc);
}