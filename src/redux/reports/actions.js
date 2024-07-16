const actions = {
  // SUBSCRIBE
  SET_RANGE_DATE_FILTER_BEGIN: 'SET_RANGE_DATE_FILTER_BEGIN',
  SET_RANGE_DATE_FILTER_SUCCESS: 'SET_RANGE_DATE_FILTER_SUCCESS',
  SET_RANGE_DATE_FILTER_ERR: 'SET_RANGE_DATE_FILTER_ERR',

  // CHANGE TYPE
  CHANGE_SERVICE_TYPE_BEGIN: 'CHANGE_SERVICE_TYPE_BEGIN',
  CHANGE_SERVICE_TYPE_SUCCESS: 'CHANGE_SERVICE_TYPE_SUCCESS',
  CHANGE_SERVICE_TYPE_ERR: 'CHANGE_SERVICE_TYPE_ERR',

  OPEN_MODAL_CREATE_NEW_ORDER_BEGIN: 'OPEN_MODAL_CREATE_NEW_ORDER_BEGIN',
  OPEN_MODAL_CREATE_NEW_ORDER_SUCCESS: 'OPEN_MODAL_CREATE_NEW_ORDER_SUCCESS',
  OPEN_MODAL_CREATE_NEW_ORDER_ERR: 'OPEN_MODAL_CREATE_NEW_ORDER_ERR',

  // COMMENT
  COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN: 'COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN',
  COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS: 'COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS',
  COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR: 'COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR',

  COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN: 'COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN',
  COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS: 'COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS',
  COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR: 'COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR',

  COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN: 'COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN',
  COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS: 'COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS',
  COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_ERR: 'COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_ERR',

  COMMENT_STATISTIC_COMMENT_BY_DAY_BEGIN: 'COMMENT_STATISTIC_COMMENT_BY_DAY_BEGIN',
  COMMENT_STATISTIC_COMMENT_BY_DAY_SUCCESS: 'COMMENT_STATISTIC_COMMENT_BY_DAY_SUCCESS',
  COMMENT_STATISTIC_COMMENT_BY_DAY_ERR: 'COMMENT_STATISTIC_COMMENT_BY_DAY_ERR',

  COMMENT_STATISTIC_COMPUTER_THREAD_BEGIN: 'COMMENT_STATISTIC_COMPUTER_THREAD_BEGIN',
  COMMENT_STATISTIC_COMPUTER_THREAD_SUCCESS: 'COMMENT_STATISTIC_COMPUTER_THREAD_SUCCESS',
  COMMENT_STATISTIC_COMPUTER_THREAD_ERR: 'COMMENT_STATISTIC_COMPUTER_THREAD_ERR',
  
  COMMENT_STATISTIC_ORDER_AMOUNT_BEGIN: 'COMMENT_STATISTIC_ORDER_AMOUNT_BEGIN',
  COMMENT_STATISTIC_ORDER_AMOUNT_SUCCESS: 'COMMENT_STATISTIC_ORDER_AMOUNT_SUCCESS',
  COMMENT_STATISTIC_ORDER_AMOUNT_ERR: 'COMMENT_STATISTIC_ORDER_AMOUNT_ERR',

  COMMENT_STATISTIC_PERFORMANCE_COMMENT_BEGIN: 'COMMENT_STATISTIC_PERFORMANCE_COMMENT_BEGIN',
  COMMENT_STATISTIC_PERFORMANCE_COMMENT_SUCCESS: 'COMMENT_STATISTIC_PERFORMANCE_COMMENT_SUCCESS',
  COMMENT_STATISTIC_PERFORMANCE_COMMENT_ERR: 'COMMENT_STATISTIC_PERFORMANCE_COMMENT_ERR',

  COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN: 'COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN',
  COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_SUCCESS: 'COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_SUCCESS',
  COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_ERR: 'COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_ERR',

  COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN: 'COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN',
  COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS: 'COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS',
  COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ERR: 'COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ERR',

  COMMENT_STATISTIC_BY_STATUS_ORDER_BEGIN: 'COMMENT_STATISTIC_BY_STATUS_ORDER_BEGIN',
  COMMENT_STATISTIC_BY_STATUS_ORDER_SUCCESS: 'COMMENT_STATISTIC_BY_STATUS_ORDER_SUCCESS',
  COMMENT_STATISTIC_BY_STATUS_ORDER_ERR: 'COMMENT_STATISTIC_BY_STATUS_ORDER_ERR',

  COMMENT_STATISTIC_RUNNING_COMPUTER_BEGIN: 'COMMENT_STATISTIC_RUNNING_COMPUTER_BEGIN',
  COMMENT_STATISTIC_RUNNING_COMPUTER_SUCCESS: 'COMMENT_STATISTIC_RUNNING_COMPUTER_SUCCESS',
  COMMENT_STATISTIC_RUNNING_COMPUTER_ERR: 'COMMENT_STATISTIC_RUNNING_COMPUTER_ERR',

  COMMENT_STATISTIC_TASK_OF_TOOL_BEGIN: 'COMMENT_STATISTIC_TASK_OF_TOOL_BEGIN',
  COMMENT_STATISTIC_TASK_OF_TOOL_SUCCESS: 'COMMENT_STATISTIC_TASK_OF_TOOL_SUCCESS',
  COMMENT_STATISTIC_TASK_OF_TOOL_ERR: 'COMMENT_STATISTIC_TASK_OF_TOOL_ERR',

  COMMENT_STATISTIC_RUNNING_USER_ORDER_BEGIN: 'COMMENT_STATISTIC_RUNNING_USER_ORDER_BEGIN',
  COMMENT_STATISTIC_RUNNING_USER_ORDER_SUCCESS: 'COMMENT_STATISTIC_RUNNING_USER_ORDER_SUCCESS',
  COMMENT_STATISTIC_RUNNING_USER_ORDER_ERR: 'COMMENT_STATISTIC_RUNNING_USER_ORDER_ERR',

  COMMENT_STATISTIC_USER_POINT_BEGIN: 'COMMENT_STATISTIC_USER_POINT_BEGIN',
  COMMENT_STATISTIC_USER_POINT_SUCCESS: 'COMMENT_STATISTIC_USER_POINT_SUCCESS',
  COMMENT_STATISTIC_USER_POINT_ERR: 'COMMENT_STATISTIC_USER_POINT_ERR',

  COMMENT_STATISTIC_TOTAL_ORDER_BEGIN: 'COMMENT_STATISTIC_TOTAL_ORDER_BEGIN',
  COMMENT_STATISTIC_TOTAL_ORDER_SUCCESS: 'COMMENT_STATISTIC_TOTAL_ORDER_SUCCESS',
  COMMENT_STATISTIC_TOTAL_ORDER_ERR: 'COMMENT_STATISTIC_TOTAL_ORDER_ERR',

  // LIKE
  // LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN: 'LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN',
  // LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS: 'LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS',
  // LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR: 'LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR',

  LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN: 'LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN',
  LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS: 'LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS',
  LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR: 'LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR',

  LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN: 'LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN',
  LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS: 'LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS',
  LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR: 'LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR',

  LIKE_STATISTIC_LIKE_BY_DAY_BEGIN: 'LIKE_STATISTIC_LIKE_BY_DAY_BEGIN',
  LIKE_STATISTIC_LIKE_BY_DAY_SUCCESS: 'LIKE_STATISTIC_LIKE_BY_DAY_SUCCESS',
  LIKE_STATISTIC_LIKE_BY_DAY_ERR: 'LIKE_STATISTIC_LIKE_BY_DAY_ERR',

  LIKE_STATISTIC_COMPUTER_THREAD_BEGIN: 'LIKE_STATISTIC_COMPUTER_THREAD_BEGIN',
  LIKE_STATISTIC_COMPUTER_THREAD_SUCCESS: 'LIKE_STATISTIC_COMPUTER_THREAD_SUCCESS',
  LIKE_STATISTIC_COMPUTER_THREAD_ERR: 'LIKE_STATISTIC_COMPUTER_THREAD_ERR',
  
  LIKE_STATISTIC_ORDER_AMOUNT_BEGIN: 'LIKE_STATISTIC_ORDER_AMOUNT_BEGIN',
  LIKE_STATISTIC_ORDER_AMOUNT_SUCCESS: 'LIKE_STATISTIC_ORDER_AMOUNT_SUCCESS',
  LIKE_STATISTIC_ORDER_AMOUNT_ERR: 'LIKE_STATISTIC_ORDER_AMOUNT_ERR',

  LIKE_STATISTIC_PERFORMANCE_COMMENT_BEGIN: 'LIKE_STATISTIC_PERFORMANCE_COMMENT_BEGIN',
  LIKE_STATISTIC_PERFORMANCE_COMMENT_SUCCESS: 'LIKE_STATISTIC_PERFORMANCE_COMMENT_SUCCESS',
  LIKE_STATISTIC_PERFORMANCE_COMMENT_ERR: 'LIKE_STATISTIC_PERFORMANCE_COMMENT_ERR',

  LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN: 'LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN',
  LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_SUCCESS: 'LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_SUCCESS',
  LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_ERR: 'LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_ERR',

  LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN: 'LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN',
  LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS: 'LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS',
  LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR: 'LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR',

  LIKE_STATISTIC_BY_STATUS_ORDER_BEGIN: 'LIKE_STATISTIC_BY_STATUS_ORDER_BEGIN',
  LIKE_STATISTIC_BY_STATUS_ORDER_SUCCESS: 'LIKE_STATISTIC_BY_STATUS_ORDER_SUCCESS',
  LIKE_STATISTIC_BY_STATUS_ORDER_ERR: 'LIKE_STATISTIC_BY_STATUS_ORDER_ERR',

  LIKE_STATISTIC_RUNNING_COMPUTER_BEGIN: 'LIKE_STATISTIC_RUNNING_COMPUTER_BEGIN',
  LIKE_STATISTIC_RUNNING_COMPUTER_SUCCESS: 'LIKE_STATISTIC_RUNNING_COMPUTER_SUCCESS',
  LIKE_STATISTIC_RUNNING_COMPUTER_ERR: 'LIKE_STATISTIC_RUNNING_COMPUTER_ERR',

  LIKE_STATISTIC_TASK_OF_TOOL_BEGIN: 'LIKE_STATISTIC_TASK_OF_TOOL_BEGIN',
  LIKE_STATISTIC_TASK_OF_TOOL_SUCCESS: 'LIKE_STATISTIC_TASK_OF_TOOL_SUCCESS',
  LIKE_STATISTIC_TASK_OF_TOOL_ERR: 'LIKE_STATISTIC_TASK_OF_TOOL_ERR',

  LIKE_STATISTIC_RUNNING_USER_ORDER_BEGIN: 'LIKE_STATISTIC_RUNNING_USER_ORDER_BEGIN',
  LIKE_STATISTIC_RUNNING_USER_ORDER_SUCCESS: 'LIKE_STATISTIC_RUNNING_USER_ORDER_SUCCESS',
  LIKE_STATISTIC_RUNNING_USER_ORDER_ERR: 'LIKE_STATISTIC_RUNNING_USER_ORDER_ERR',

  LIKE_STATISTIC_USER_POINT_BEGIN: 'LIKE_STATISTIC_USER_POINT_BEGIN',
  LIKE_STATISTIC_USER_POINT_SUCCESS: 'LIKE_STATISTIC_USER_POINT_SUCCESS',
  LIKE_STATISTIC_USER_POINT_ERR: 'LIKE_STATISTIC_USER_POINT_ERR',

  LIKE_STATISTIC_TOTAL_ORDER_BEGIN: 'LIKE_STATISTIC_TOTAL_ORDER_BEGIN',
  LIKE_STATISTIC_TOTAL_ORDER_SUCCESS: 'LIKE_STATISTIC_TOTAL_ORDER_SUCCESS',
  LIKE_STATISTIC_TOTAL_ORDER_ERR: 'LIKE_STATISTIC_TOTAL_ORDER_ERR',

  // VALIDATE

  VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN: 'VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN',
  VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS: 'VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS',
  VALIDATE_YOUTUBE_VIDEO_LINK_ERR: 'VALIDATE_YOUTUBE_VIDEO_LINK_ERR',
  

  commentStatisticTotalOrderBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_TOTAL_ORDER_BEGIN,
      payload
    };
  },

  commentStatisticTotalOrderSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_TOTAL_ORDER_SUCCESS,
      data,
    };
  },

  commentStatisticTotalOrderErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_TOTAL_ORDER_ERR,
      err,
    };
  },

  commentStatisticUserPointBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_USER_POINT_BEGIN,
      payload
    };
  },

  commentStatisticUserPointSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_USER_POINT_SUCCESS,
      data,
    };
  },

  commentStatisticUserPointErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_USER_POINT_ERR,
      err,
    };
  },
  
  commentStatisticRunningUserOrderBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_RUNNING_USER_ORDER_BEGIN,
      payload
    };
  },

  commentStatisticRunningUserOrderSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_RUNNING_USER_ORDER_SUCCESS,
      data,
    };
  },

  commentStatisticRunningUserOrderErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_RUNNING_USER_ORDER_ERR,
      err,
    };
  },
  
  commentStatisticTaskOfToolBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_OF_TOOL_BEGIN,
      payload
    };
  },

  commentStatisticTaskOfToolSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_OF_TOOL_SUCCESS,
      data,
    };
  },

  commentStatisticTaskOfToolErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_OF_TOOL_ERR,
      err,
    };
  },
  
  commentStatisticRunningOrderBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_RUNNING_COMPUTER_BEGIN,
      payload
    };
  },

  commentStatisticRunningOrderSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_RUNNING_COMPUTER_SUCCESS,
      data,
    };
  },

  commentStatisticRunningOrderErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_RUNNING_COMPUTER_ERR,
      err,
    };
  },
  
  commentStatisticByStatusOrderBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_BY_STATUS_ORDER_BEGIN,
      payload
    };
  },

  commentStatisticByStatusOrderSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_BY_STATUS_ORDER_SUCCESS,
      data,
    };
  },

  commentStatisticByStatusOrderErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_BY_STATUS_ORDER_ERR,
      err,
    };
  },

  commentStatisticAccountOnComputerBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN,
      payload
    };
  },

  commentStatisticAccountOnComputerSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS,
      data,
    };
  },

  commentStatisticAccountOnComputerErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_ACCOUNT_ON_COMPUTER_ERR,
      err,
    };
  },

  commentStatisticAccountStatusCommentBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN,
      payload
    };
  },

  commentStatisticAccountStatusCommentSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_SUCCESS,
      data,
    };
  },

  commentStatisticAccountStatusCommentErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_ACCOUNT_STATUS_COMMENT_ERR,
      err,
    };
  },

  commentStatisticPerformanceCommentBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_PERFORMANCE_COMMENT_BEGIN,
      payload
    };
  },

  commentStatisticPerformanceCommentSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_PERFORMANCE_COMMENT_SUCCESS,
      data,
    };
  },

  commentStatisticPerformanceCommentErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_PERFORMANCE_COMMENT_ERR,
      err,
    };
  },

  commentStatisticOrderAmountBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_ORDER_AMOUNT_BEGIN,
      payload
    };
  },

  commentStatisticOrderAmountSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_ORDER_AMOUNT_SUCCESS,
      data,
    };
  },

  commentStatisticOrderAmountErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_ORDER_AMOUNT_ERR,
      err,
    };
  },

  commentStatisticComputerThreadBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_COMPUTER_THREAD_BEGIN,
      payload
    };
  },

  commentStatisticComputerThreadSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_COMPUTER_THREAD_SUCCESS,
      data,
    };
  },

  commentStatisticComputerThreadErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_COMPUTER_THREAD_ERR,
      err,
    };
  },

  commentStatisticCommentByDayBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_COMMENT_BY_DAY_BEGIN,
      payload
    };
  },

  commentStatisticCommentByDaySuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_COMMENT_BY_DAY_SUCCESS,
      data,
    };
  },

  commentStatisticCommentByDayErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_COMMENT_BY_DAY_ERR,
      err,
    };
  },

  commentStatisticTaskSuccessInMinuteBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
      payload
    };
  },

  commentStatisticTaskSuccessInMinuteSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,
      data,
    };
  },

  commentStatisticTaskSuccessInMinuteErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
      err,
    };
  },

  commentStatisticTaskDurationInMinuteBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN,
      payload
    };
  },

  commentStatisticTaskDurationInMinuteSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS,
      data,
    };
  },

  commentStatisticTaskDurationInMinuteErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_TASK_DURATION_IN_MINUTE_ERR,
      err,
    };
  },

  commentStatisticCommentByOrderReportBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN,
      payload
    };
  },

  commentStatisticCommentByOrderReportSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS,
      data,
    };
  },

  commentStatisticCommentByOrderReportErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR,
      err,
    };
  },


  likeStatisticUserPointBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_USER_POINT_BEGIN,
      payload
    };
  },

  likeStatisticUserPointSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_USER_POINT_SUCCESS,
      data,
    };
  },

  likeStatisticUserPointErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_USER_POINT_ERR,
      err,
    };
  },
  
  likeStatisticRunningUserOrderBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_RUNNING_USER_ORDER_BEGIN,
      payload
    };
  },

  likeStatisticRunningUserOrderSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_RUNNING_USER_ORDER_SUCCESS,
      data,
    };
  },

  likeStatisticRunningUserOrderErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_RUNNING_USER_ORDER_ERR,
      err,
    };
  },
  
  likeStatisticTaskOfToolBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_OF_TOOL_BEGIN,
      payload
    };
  },

  likeStatisticTaskOfToolSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_OF_TOOL_SUCCESS,
      data,
    };
  },

  likeStatisticTaskOfToolErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_OF_TOOL_ERR,
      err,
    };
  },
  
  likeStatisticRunningOrderBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_RUNNING_COMPUTER_BEGIN,
      payload
    };
  },

  likeStatisticRunningOrderSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_RUNNING_COMPUTER_SUCCESS,
      data,
    };
  },

  likeStatisticRunningOrderErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_RUNNING_COMPUTER_ERR,
      err,
    };
  },
  
  likeStatisticByStatusOrderBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_BY_STATUS_ORDER_BEGIN,
      payload
    };
  },

  likeStatisticByStatusOrderSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_BY_STATUS_ORDER_SUCCESS,
      data,
    };
  },

  likeStatisticByStatusOrderErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_BY_STATUS_ORDER_ERR,
      err,
    };
  },

  likeStatisticAccountOnComputerBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN,
      payload
    };
  },

  likeStatisticAccountOnComputerSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS,
      data,
    };
  },

  likeStatisticAccountOnComputerErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR,
      err,
    };
  },

  likeStatisticAccountStatusCommentBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_BEGIN,
      payload
    };
  },

  likeStatisticAccountStatusCommentSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_SUCCESS,
      data,
    };
  },

  likeStatisticAccountStatusCommentErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_STATUS_COMMENT_ERR,
      err,
    };
  },

  likeStatisticPerformanceCommentBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_PERFORMANCE_COMMENT_BEGIN,
      payload
    };
  },

  likeStatisticPerformanceCommentSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_PERFORMANCE_COMMENT_SUCCESS,
      data,
    };
  },

  likeStatisticPerformanceCommentErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_PERFORMANCE_COMMENT_ERR,
      err,
    };
  },

  likeStatisticOrderAmountBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_ORDER_AMOUNT_BEGIN,
      payload
    };
  },

  likeStatisticOrderAmountSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_ORDER_AMOUNT_SUCCESS,
      data,
    };
  },

  likeStatisticOrderAmountErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_ORDER_AMOUNT_ERR,
      err,
    };
  },

  likeStatisticComputerThreadBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_COMPUTER_THREAD_BEGIN,
      payload
    };
  },

  likeStatisticComputerThreadSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_COMPUTER_THREAD_SUCCESS,
      data,
    };
  },

  likeStatisticComputerThreadErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_COMPUTER_THREAD_ERR,
      err,
    };
  },

  likeStatisticCommentByDayBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_LIKE_BY_DAY_BEGIN,
      payload
    };
  },

  likeStatisticCommentByDaySuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_LIKE_BY_DAY_SUCCESS,
      data,
    };
  },

  likeStatisticCommentByDayErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_LIKE_BY_DAY_ERR,
      err,
    };
  },

  likeStatisticTaskSuccessInMinuteBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
      payload
    };
  },

  likeStatisticTaskSuccessInMinuteSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,
      data,
    };
  },

  likeStatisticTaskSuccessInMinuteErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
      err,
    };
  },

  likeStatisticTaskDurationInMinuteBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN,
      payload
    };
  },

  likeStatisticTaskDurationInMinuteSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS,
      data,
    };
  },

  likeStatisticTaskDurationInMinuteErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR,
      err,
    };
  },

  // likeStatisticCommentByOrderReportBegin: (payload) => {
  //   return {
  //     type: actions.LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN,
  //     payload
  //   };
  // },

  // likeStatisticCommentByOrderReportSuccess: (data) => {
  //   return {
  //     type: actions.likeSTATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS,
  //     data,
  //   };
  // },

  // likeStatisticCommentByOrderReportErr: (err) => {
  //   return {
  //     type: actions.LIKE_STATISTIC_COMMENT_BY_ORDER_REPORT_ERR,
  //     err,
  //   };
  // },

  likeStatisticTotalOrderBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_TOTAL_ORDER_BEGIN,
      payload
    };
  },

  likeStatisticTotalOrderSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_TOTAL_ORDER_SUCCESS,
      data,
    };
  },

  likeStatisticTotalOrderErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_TOTAL_ORDER_ERR,
      err,
    };
  },

  toggleModalCreateOrderBegin: (payload) => {
    return {
      type: actions.OPEN_MODAL_CREATE_NEW_ORDER_BEGIN,
      payload
    };
  },

  toggleModalCreateOrderSuccess: (data) => {
    return {
      type: actions.OPEN_MODAL_CREATE_NEW_ORDER_SUCCESS,
      data,
    };
  },

  toggleModalCreateOrderErr: (err) => {
    return {
      type: actions.OPEN_MODAL_CREATE_NEW_ORDER_ERR,
      err,
    };
  },

  changeServiceTypeBegin: (payload) => {
    return {
      type: actions.CHANGE_SERVICE_TYPE_BEGIN,
      payload
    };
  },

  changeServiceTypeSuccess: (data) => {
    return {
      type: actions.CHANGE_SERVICE_TYPE_SUCCESS,
      data,
    };
  },

  changeServiceTypeErr: (err) => {
    return {
      type: actions.CHANGE_SERVICE_TYPE_ERR,
      err,
    };
  },

  setRangeDateFilterBegin: (payload) => {
    return {
      type: actions.SET_RANGE_DATE_FILTER_BEGIN,
      payload
    };
  },

  setRangeDateFilterSuccess: (data) => {
    return {
      type: actions.SET_RANGE_DATE_FILTER_SUCCESS,
      data,
    }
  },

  setRangeDateFilterErr: (err) => {
    return {
      type: actions.SET_RANGE_DATE_FILTER_ERR,
      err,
    }
  },
  
  validateYoutubeVideoLinkBegin: (payload) => {
    return {
      type: actions.VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN,
      payload
    };
  },

  validateYoutubeVideoLinkSuccess: (data) => {
    return {
      type: actions.VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS,
      data,
    };
  },

  validateYoutubeVideoLinkErr: (err) => {
    return {
      type: actions.VALIDATE_YOUTUBE_VIDEO_LINK_ERR,
      err,
    };
  },
};
  
export default actions;
  