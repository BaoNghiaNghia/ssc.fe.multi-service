const actions = {
  // SUBSCRIBE
  FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN: 'FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN',
  FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS: 'FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS',
  FETCH_DAILY_SUBSCRIBE_RESPORT_ERR: 'FETCH_DAILY_SUBSCRIBE_RESPORT_ERR',

  SET_RANGE_DATE_FILTER_BEGIN: 'SET_RANGE_DATE_FILTER_BEGIN',
  SET_RANGE_DATE_FILTER_SUCCESS: 'SET_RANGE_DATE_FILTER_SUCCESS',
  SET_RANGE_DATE_FILTER_ERR: 'SET_RANGE_DATE_FILTER_ERR',

  COUNT_SUCCESS_SUBSCRIBE_BEGIN: 'COUNT_SUCCESS_SUBSCRIBE_BEGIN',
  COUNT_SUCCESS_SUBSCRIBE_SUCCESS: 'COUNT_SUCCESS_SUBSCRIBE_SUCCESS',
  COUNT_SUCCESS_SUBSCRIBE_ERR: 'COUNT_SUCCESS_SUBSCRIBE_ERR',

  COUNT_PROFIT_DATA_TODAY_BEGIN: 'COUNT_PROFIT_DATA_TODAY_BEGIN',
  COUNT_PROFIT_DATA_TODAY_SUCCESS: 'COUNT_PROFIT_DATA_TODAY_SUCCESS',
  COUNT_PROFIT_DATA_TODAY_ERR: 'COUNT_PROFIT_DATA_TODAY_ERR',

  FETCH_SUBSCRIBE_POINT_EVERYDAY_BEGIN: 'FETCH_SUBSCRIBE_POINT_EVERYDAY_BEGIN',
  FETCH_SUBSCRIBE_POINT_EVERYDAY_SUCCESS: 'FETCH_SUBSCRIBE_POINT_EVERYDAY_SUCCESS',
  FETCH_SUBSCRIBE_POINT_EVERYDAY_ERR: 'FETCH_SUBSCRIBE_POINT_EVERYDAY_ERR',

  COMPUTER_DATA_LIST_BEGIN: 'COMPUTER_DATA_LIST_BEGIN',
  COMPUTER_DATA_LIST_SUCCESS: 'COMPUTER_DATA_LIST_SUCCESS',
  COMPUTER_DATA_LIST_ERR: 'COMPUTER_DATA_LIST_ERR',
  
  GET_STATISTICS_SUBSCRIBE_REPORT_BEGIN: 'GET_STATISTICS_SUBSCRIBE_REPORT_BEGIN',  
  GET_STATISTICS_SUBSCRIBE_REPORT_SUCCESS: 'GET_STATISTICS_SUBSCRIBE_REPORT_SUCCESS',  
  GET_STATISTICS_SUBSCRIBE_REPORT_ERR: 'GET_STATISTICS_SUBSCRIBE_REPORT_BEERR',

  COUNT_ERROR_SUBSCRIBE_BEGIN: 'COUNT_ERROR_SUBSCRIBE_BEGIN',
  COUNT_ERROR_SUBSCRIBE_SUCCESS: 'COUNT_ERROR_SUBSCRIBE_SUCCESS',
  COUNT_ERROR_SUBSCRIBE_ERR: 'COUNT_ERROR_SUBSCRIBE_ERR',

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

  VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN: 'VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN',
  VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS: 'VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS',
  VALIDATE_YOUTUBE_VIDEO_LINK_ERR: 'VALIDATE_YOUTUBE_VIDEO_LINK_ERR',
  
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

  countErrorSubscribeBegin: (payload) => {
    return {
      type: actions.COUNT_ERROR_SUBSCRIBE_BEGIN,
      payload
    };
  },

  countErrorSubscribeSuccess: (data) => {
    return {
      type: actions.COUNT_ERROR_SUBSCRIBE_SUCCESS,
      data,
    };
  },

  countErrorSubscribeErr: (err) => {
    return {
      type: actions.COUNT_ERROR_SUBSCRIBE_ERR,
      err,
    };
  },

  getStatisticsSubscribeReportBegin: (payload) => {
    return {
      type: actions.GET_STATISTICS_SUBSCRIBE_REPORT_BEGIN,
      payload
    };
  },

  getStatisticsSubscribeReportSuccess: (data) => {
    return {
      type: actions.GET_STATISTICS_SUBSCRIBE_REPORT_SUCCESS,
      data,
    };
  },

  getStatisticsSubscribeReportErr: (err) => {
    return {
      type: actions.GET_STATISTICS_SUBSCRIBE_REPORT_ERR,
      err,
    };
  },

  computerDataListBegin: (payload) => {
    return {
      type: actions.COMPUTER_DATA_LIST_BEGIN,
      payload
    };
  },

  computerDataListSuccess: (data) => {
    return {
      type: actions.COMPUTER_DATA_LIST_SUCCESS,
      data,
    };
  },

  computerDataListErr: (err) => {
    return {
      type: actions.COMPUTER_DATA_LIST_ERR,
      err,
    };
  },

  fetchSubscribeWithPointEverydayBegin: (payload) => {
    return {
      type: actions.FETCH_SUBSCRIBE_POINT_EVERYDAY_BEGIN,
      payload
    };
  },

  fetchSubscribeWithPointEverydaySuccess: (data) => {
    return {
      type: actions.FETCH_SUBSCRIBE_POINT_EVERYDAY_SUCCESS,
      data,
    };
  },

  fetchSubscribeWithPointEverydayErr: (err) => {
    return {
      type: actions.FETCH_SUBSCRIBE_POINT_EVERYDAY_ERR,
      err,
    };
  },

  countProfitDataTodayBegin: (payload) => {
    return {
      type: actions.COUNT_PROFIT_DATA_TODAY_BEGIN,
      payload
    };
  },

  countProfitDataTodaySuccess: (data) => {
    return {
      type: actions.COUNT_PROFIT_DATA_TODAY_SUCCESS,
      data,
    };
  },

  countProfitDataTodayErr: (err) => {
    return {
      type: actions.COUNT_PROFIT_DATA_TODAY_ERR,
      err,
    };
  },
  
  countSuccessSubscribeBegin: (payload) => {
    return {
      type: actions.COUNT_SUCCESS_SUBSCRIBE_BEGIN,
      payload
    };
  },

  countSuccessSubscribeSuccess: (data) => {
    return {
      type: actions.COUNT_SUCCESS_SUBSCRIBE_SUCCESS,
      data,
    };
  },

  countSuccessSubscribeErr: (err) => {
    return {
      type: actions.COUNT_SUCCESS_SUBSCRIBE_ERR,
      err,
    };
  },

  reportSubscribeBegin: (payload) => {
    return {
      type: actions.FETCH_DAILY_SUBSCRIBE_RESPORT_BEGIN,
      payload
    };
  },

  reportSubscribeSuccess: (data) => {
    return {
      type: actions.FETCH_DAILY_SUBSCRIBE_RESPORT_SUCCESS,
      data,
    };
  },

  reportSubscribeErr: (err) => {
    return {
      type: actions.FETCH_DAILY_SUBSCRIBE_RESPORT_ERR,
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
  }
};
  
export default actions;
  