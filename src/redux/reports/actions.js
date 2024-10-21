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

  COMMENT_STATISTIC_ORDER_BY_DAYS_BEGIN: 'COMMENT_STATISTIC_ORDER_BY_DAYS_BEGIN',
  COMMENT_STATISTIC_ORDER_BY_DAYS_SUCCESS: 'COMMENT_STATISTIC_ORDER_BY_DAYS_SUCCESS',
  COMMENT_STATISTIC_ORDER_BY_DAYS_ERR: 'COMMENT_STATISTIC_ORDER_BY_DAYS_ERR',


  // LIKE
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

  LIKE_STATISTIC_PERFORMANCE_LIKE_BEGIN: 'LIKE_STATISTIC_PERFORMANCE_LIKE_BEGIN',
  LIKE_STATISTIC_PERFORMANCE_LIKE_SUCCESS: 'LIKE_STATISTIC_PERFORMANCE_LIKE_SUCCESS',
  LIKE_STATISTIC_PERFORMANCE_LIKE_ERR: 'LIKE_STATISTIC_PERFORMANCE_LIKE_ERR',

  LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_BEGIN: 'LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_BEGIN',
  LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_SUCCESS: 'LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_SUCCESS',
  LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_ERR: 'LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_ERR',

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

  LIKE_STATISTIC_ORDER_BY_DAYS_BEGIN: 'LIKE_STATISTIC_ORDER_BY_DAYS_BEGIN',
  LIKE_STATISTIC_ORDER_BY_DAYS_SUCCESS: 'LIKE_STATISTIC_ORDER_BY_DAYS_SUCCESS',
  LIKE_STATISTIC_ORDER_BY_DAYS_ERR: 'LIKE_STATISTIC_ORDER_BY_DAYS_ERR',

  LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_BEGIN: 'LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_BEGIN',
  LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_SUCCESS: 'LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_SUCCESS',
  LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_ERR: 'LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_ERR',


  // VIEW
  VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN: 'VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN',
  VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS: 'VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS',
  VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR: 'VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR',

  VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN: 'VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN',
  VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS: 'VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS',
  VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_ERR: 'VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_ERR',

  VIEW_STATISTIC_VIEW_BY_DAY_BEGIN: 'VIEW_STATISTIC_VIEW_BY_DAY_BEGIN',
  VIEW_STATISTIC_VIEW_BY_DAY_SUCCESS: 'VIEW_STATISTIC_VIEW_BY_DAY_SUCCESS',
  VIEW_STATISTIC_VIEW_BY_DAY_ERR: 'VIEW_STATISTIC_VIEW_BY_DAY_ERR',

  VIEW_STATISTIC_COMPUTER_THREAD_BEGIN: 'VIEW_STATISTIC_COMPUTER_THREAD_BEGIN',
  VIEW_STATISTIC_COMPUTER_THREAD_SUCCESS: 'VIEW_STATISTIC_COMPUTER_THREAD_SUCCESS',
  VIEW_STATISTIC_COMPUTER_THREAD_ERR: 'VIEW_STATISTIC_COMPUTER_THREAD_ERR',
  
  VIEW_STATISTIC_ORDER_AMOUNT_BEGIN: 'VIEW_STATISTIC_ORDER_AMOUNT_BEGIN',
  VIEW_STATISTIC_ORDER_AMOUNT_SUCCESS: 'VIEW_STATISTIC_ORDER_AMOUNT_SUCCESS',
  VIEW_STATISTIC_ORDER_AMOUNT_ERR: 'VIEW_STATISTIC_ORDER_AMOUNT_ERR',

  VIEW_STATISTIC_PERFORMANCE_VIEW_BEGIN: 'VIEW_STATISTIC_PERFORMANCE_VIEW_BEGIN',
  VIEW_STATISTIC_PERFORMANCE_VIEW_SUCCESS: 'VIEW_STATISTIC_PERFORMANCE_VIEW_SUCCESS',
  VIEW_STATISTIC_PERFORMANCE_VIEW_ERR: 'VIEW_STATISTIC_PERFORMANCE_VIEW_ERR',

  VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_BEGIN: 'VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_BEGIN',
  VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_SUCCESS: 'VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_SUCCESS',
  VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_ERR: 'VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_ERR',

  VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN: 'VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN',
  VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS: 'VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS',
  VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_ERR: 'VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_ERR',

  VIEW_STATISTIC_BY_STATUS_ORDER_BEGIN: 'VIEW_STATISTIC_BY_STATUS_ORDER_BEGIN',
  VIEW_STATISTIC_BY_STATUS_ORDER_SUCCESS: 'VIEW_STATISTIC_BY_STATUS_ORDER_SUCCESS',
  VIEW_STATISTIC_BY_STATUS_ORDER_ERR: 'VIEW_STATISTIC_BY_STATUS_ORDER_ERR',

  VIEW_STATISTIC_RUNNING_COMPUTER_BEGIN: 'VIEW_STATISTIC_RUNNING_COMPUTER_BEGIN',
  VIEW_STATISTIC_RUNNING_COMPUTER_SUCCESS: 'VIEW_STATISTIC_RUNNING_COMPUTER_SUCCESS',
  VIEW_STATISTIC_RUNNING_COMPUTER_ERR: 'VIEW_STATISTIC_RUNNING_COMPUTER_ERR',

  VIEW_STATISTIC_TASK_OF_TOOL_BEGIN: 'VIEW_STATISTIC_TASK_OF_TOOL_BEGIN',
  VIEW_STATISTIC_TASK_OF_TOOL_SUCCESS: 'VIEW_STATISTIC_TASK_OF_TOOL_SUCCESS',
  VIEW_STATISTIC_TASK_OF_TOOL_ERR: 'VIEW_STATISTIC_TASK_OF_TOOL_ERR',

  VIEW_STATISTIC_RUNNING_USER_ORDER_BEGIN: 'VIEW_STATISTIC_RUNNING_USER_ORDER_BEGIN',
  VIEW_STATISTIC_RUNNING_USER_ORDER_SUCCESS: 'VIEW_STATISTIC_RUNNING_USER_ORDER_SUCCESS',
  VIEW_STATISTIC_RUNNING_USER_ORDER_ERR: 'VIEW_STATISTIC_RUNNING_USER_ORDER_ERR',

  VIEW_STATISTIC_USER_POINT_BEGIN: 'VIEW_STATISTIC_USER_POINT_BEGIN',
  VIEW_STATISTIC_USER_POINT_SUCCESS: 'VIEW_STATISTIC_USER_POINT_SUCCESS',
  VIEW_STATISTIC_USER_POINT_ERR: 'VIEW_STATISTIC_USER_POINT_ERR',

  VIEW_STATISTIC_TOTAL_ORDER_BEGIN: 'VIEW_STATISTIC_TOTAL_ORDER_BEGIN',
  VIEW_STATISTIC_TOTAL_ORDER_SUCCESS: 'VIEW_STATISTIC_TOTAL_ORDER_SUCCESS',
  VIEW_STATISTIC_TOTAL_ORDER_ERR: 'VIEW_STATISTIC_TOTAL_ORDER_ERR',

  VIEW_STATISTIC_ORDER_BY_DAYS_BEGIN: 'VIEW_STATISTIC_ORDER_BY_DAYS_BEGIN',
  VIEW_STATISTIC_ORDER_BY_DAYS_SUCCESS: 'VIEW_STATISTIC_ORDER_BY_DAYS_SUCCESS',
  VIEW_STATISTIC_ORDER_BY_DAYS_ERR: 'VIEW_STATISTIC_ORDER_BY_DAYS_ERR',

  VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_BEGIN: 'VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_BEGIN',
  VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_SUCCESS: 'VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_SUCCESS',
  VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_ERR: 'VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_ERR',

  
  // SUBSCRIBE
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_BEGIN: 'SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_BEGIN',
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_SUCCESS: 'SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_SUCCESS',
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_ERR: 'SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_ERR',

  SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN: 'SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN',
  SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS: 'SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS',
  SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR: 'SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR',

  SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN: 'SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN',
  SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS: 'SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS',
  SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR: 'SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR',

  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_BEGIN: 'SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_BEGIN',
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_SUCCESS: 'SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_SUCCESS',
  SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ERR: 'SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ERR',

  SUBSCRIBE_STATISTIC_COMPUTER_THREAD_BEGIN: 'SUBSCRIBE_STATISTIC_COMPUTER_THREAD_BEGIN',
  SUBSCRIBE_STATISTIC_COMPUTER_THREAD_SUCCESS: 'SUBSCRIBE_STATISTIC_COMPUTER_THREAD_SUCCESS',
  SUBSCRIBE_STATISTIC_COMPUTER_THREAD_ERR: 'SUBSCRIBE_STATISTIC_COMPUTER_THREAD_ERR',
  
  SUBSCRIBE_STATISTIC_ORDER_AMOUNT_BEGIN: 'SUBSCRIBE_STATISTIC_ORDER_AMOUNT_BEGIN',
  SUBSCRIBE_STATISTIC_ORDER_AMOUNT_SUCCESS: 'SUBSCRIBE_STATISTIC_ORDER_AMOUNT_SUCCESS',
  SUBSCRIBE_STATISTIC_ORDER_AMOUNT_ERR: 'SUBSCRIBE_STATISTIC_ORDER_AMOUNT_ERR',

  SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_BEGIN: 'SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_BEGIN',
  SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_SUCCESS: 'SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_SUCCESS',
  SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_ERR: 'SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_ERR',

  SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_BEGIN: 'SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_BEGIN',
  SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_SUCCESS: 'SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_SUCCESS',
  SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_ERR: 'SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_ERR',

  SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN: 'SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN',
  SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS: 'SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS',
  SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR: 'SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR',

  SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_BEGIN: 'SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_BEGIN',
  SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_SUCCESS: 'SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_SUCCESS',
  SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_ERR: 'SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_ERR',

  SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_BEGIN: 'SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_BEGIN',
  SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_SUCCESS: 'SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_SUCCESS',
  SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_ERR: 'SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_ERR',

  SUBSCRIBE_STATISTIC_TASK_OF_TOOL_BEGIN: 'SUBSCRIBE_STATISTIC_TASK_OF_TOOL_BEGIN',
  SUBSCRIBE_STATISTIC_TASK_OF_TOOL_SUCCESS: 'SUBSCRIBE_STATISTIC_TASK_OF_TOOL_SUCCESS',
  SUBSCRIBE_STATISTIC_TASK_OF_TOOL_ERR: 'SUBSCRIBE_STATISTIC_TASK_OF_TOOL_ERR',

  SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_BEGIN: 'SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_BEGIN',
  SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_SUCCESS: 'SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_SUCCESS',
  SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_ERR: 'SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_ERR',

  SUBSCRIBE_STATISTIC_USER_POINT_BEGIN: 'SUBSCRIBE_STATISTIC_USER_POINT_BEGIN',
  SUBSCRIBE_STATISTIC_USER_POINT_SUCCESS: 'SUBSCRIBE_STATISTIC_USER_POINT_SUCCESS',
  SUBSCRIBE_STATISTIC_USER_POINT_ERR: 'SUBSCRIBE_STATISTIC_USER_POINT_ERR',

  SUBSCRIBE_STATISTIC_TOTAL_ORDER_BEGIN: 'SUBSCRIBE_STATISTIC_TOTAL_ORDER_BEGIN',
  SUBSCRIBE_STATISTIC_TOTAL_ORDER_SUCCESS: 'SUBSCRIBE_STATISTIC_TOTAL_ORDER_SUCCESS',
  SUBSCRIBE_STATISTIC_TOTAL_ORDER_ERR: 'SUBSCRIBE_STATISTIC_TOTAL_ORDER_ERR',

  SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_BEGIN: 'SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_BEGIN',
  SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_SUCCESS: 'SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_SUCCESS',
  SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_ERR: 'SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_ERR',


  // VALIDATE
  VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN: 'VALIDATE_YOUTUBE_VIDEO_LINK_BEGIN',
  VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS: 'VALIDATE_YOUTUBE_VIDEO_LINK_SUCCESS',
  VALIDATE_YOUTUBE_VIDEO_LINK_ERR: 'VALIDATE_YOUTUBE_VIDEO_LINK_ERR',


  SET_CATEGORY_IN_NEW_ORDER_BEGIN: 'SET_CATEGORY_IN_NEW_ORDER_BEGIN',
  SET_CATEGORY_IN_NEW_ORDER_SUCCESS: 'SET_CATEGORY_IN_NEW_ORDER_SUCCESS',
  SET_CATEGORY_IN_NEW_ORDER_ERR: 'SET_CATEGORY_IN_NEW_ORDER_ERR',

  
  RESPONSE_MULTIPLE_ORDER_CREATED: 'RESPONSE_MULTIPLE_ORDER_CREATED',

  setResponseMultipleOrderCreated: (payload) => {
      return {
        type: actions.RESPONSE_MULTIPLE_ORDER_CREATED,
        payload
      };
  },

  setCategoryInNewOrderBegin: (payload) => {
    return {
      type: actions.SET_CATEGORY_IN_NEW_ORDER_BEGIN,
      payload
    };
  },

  setCategoryInNewOrderSuccess: (data) => {
    return {
      type: actions.SET_CATEGORY_IN_NEW_ORDER_SUCCESS,
      data,
    };
  },

  setCategoryInNewOrderErr: (err) => {
    return {
      type: actions.SET_CATEGORY_IN_NEW_ORDER_ERR,
      err,
    };
  },


  // Comment
  commentStatisticOrderByDaysBegin: (payload) => {
    return {
      type: actions.COMMENT_STATISTIC_ORDER_BY_DAYS_BEGIN,
      payload
    };
  },

  commentStatisticOrderByDaysSuccess: (data) => {
    return {
      type: actions.COMMENT_STATISTIC_ORDER_BY_DAYS_SUCCESS,
      data,
    };
  },

  commentStatisticOrderByDaysErr: (err) => {
    return {
      type: actions.COMMENT_STATISTIC_ORDER_BY_DAYS_ERR,
      err,
    };
  },
  
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


  // Like
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

  likeStatisticAccountStatusLikeBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_BEGIN,
      payload
    };
  },

  likeStatisticAccountStatusLikeSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_SUCCESS,
      data,
    };
  },

  likeStatisticAccountStatusLikeErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_ACCOUNT_STATUS_LIKE_ERR,
      err,
    };
  },

  likeStatisticPerformanceLikeBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_PERFORMANCE_LIKE_BEGIN,
      payload
    };
  },

  likeStatisticPerformanceLikeSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_PERFORMANCE_LIKE_SUCCESS,
      data,
    };
  },

  likeStatisticPerformanceLikeErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_PERFORMANCE_LIKE_ERR,
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

  likeStatisticLikeByDayBegin: (payload) => {
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

  likeStatisticOrderByDaysBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_ORDER_BY_DAYS_BEGIN,
      payload
    };
  },

  likeStatisticOrderByDaysSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_ORDER_BY_DAYS_SUCCESS,
      data,
    };
  },

  likeStatisticOrderByDaysErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_ORDER_BY_DAYS_ERR,
      err,
    };
  },

  likeStatisticLikeByOrderReportBegin: (payload) => {
    return {
      type: actions.LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_BEGIN,
      payload
    };
  },

  likeStatisticLikeByOrderReportSuccess: (data) => {
    return {
      type: actions.LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_SUCCESS,
      data,
    };
  },

  likeStatisticLikeByOrderReportErr: (err) => {
    return {
      type: actions.LIKE_STATISTIC_LIKE_BY_ORDER_REPORT_ERR,
      err,
    };
  },
  

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



  // View
  viewStatisticUserPointBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_USER_POINT_BEGIN,
      payload
    };
  },

  viewStatisticUserPointSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_USER_POINT_SUCCESS,
      data,
    };
  },

  viewStatisticUserPointErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_USER_POINT_ERR,
      err,
    };
  },
  
  viewStatisticRunningUserOrderBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_RUNNING_USER_ORDER_BEGIN,
      payload
    };
  },

  viewStatisticRunningUserOrderSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_RUNNING_USER_ORDER_SUCCESS,
      data,
    };
  },

  viewStatisticRunningUserOrderErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_RUNNING_USER_ORDER_ERR,
      err,
    };
  },
  
  viewStatisticTaskOfToolBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_OF_TOOL_BEGIN,
      payload
    };
  },

  viewStatisticTaskOfToolSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_OF_TOOL_SUCCESS,
      data,
    };
  },

  viewStatisticTaskOfToolErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_OF_TOOL_ERR,
      err,
    };
  },
  
  viewStatisticRunningOrderBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_RUNNING_COMPUTER_BEGIN,
      payload
    };
  },

  viewStatisticRunningOrderSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_RUNNING_COMPUTER_SUCCESS,
      data,
    };
  },

  viewStatisticRunningOrderErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_RUNNING_COMPUTER_ERR,
      err,
    };
  },
  
  viewStatisticByStatusOrderBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_BY_STATUS_ORDER_BEGIN,
      payload
    };
  },

  viewStatisticByStatusOrderSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_BY_STATUS_ORDER_SUCCESS,
      data,
    };
  },

  viewStatisticByStatusOrderErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_BY_STATUS_ORDER_ERR,
      err,
    };
  },

  viewStatisticAccountOnComputerBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN,
      payload
    };
  },

  viewStatisticAccountOnComputerSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS,
      data,
    };
  },

  viewStatisticAccountOnComputerErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_ACCOUNT_ON_COMPUTER_ERR,
      err,
    };
  },

  viewStatisticAccountStatusViewBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_BEGIN,
      payload
    };
  },

  viewStatisticAccountStatusViewSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_SUCCESS,
      data,
    };
  },

  viewStatisticAccountStatusViewErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_ACCOUNT_STATUS_VIEW_ERR,
      err,
    };
  },

  viewStatisticPerformanceViewBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_PERFORMANCE_VIEW_BEGIN,
      payload
    };
  },

  viewStatisticPerformanceViewSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_PERFORMANCE_VIEW_SUCCESS,
      data,
    };
  },

  viewStatisticPerformanceViewErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_PERFORMANCE_VIEW_ERR,
      err,
    };
  },

  viewStatisticOrderAmountBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_ORDER_AMOUNT_BEGIN,
      payload
    };
  },

  viewStatisticOrderAmountSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_ORDER_AMOUNT_SUCCESS,
      data,
    };
  },

  viewStatisticOrderAmountErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_ORDER_AMOUNT_ERR,
      err,
    };
  },

  viewStatisticComputerThreadBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_COMPUTER_THREAD_BEGIN,
      payload
    };
  },

  viewStatisticComputerThreadSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_COMPUTER_THREAD_SUCCESS,
      data,
    };
  },

  viewStatisticComputerThreadErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_COMPUTER_THREAD_ERR,
      err,
    };
  },

  viewStatisticViewByDayBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_VIEW_BY_DAY_BEGIN,
      payload
    };
  },

  viewStatisticViewByDaySuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_VIEW_BY_DAY_SUCCESS,
      data,
    };
  },

  viewStatisticViewByDayErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_VIEW_BY_DAY_ERR,
      err,
    };
  },

  viewStatisticTaskSuccessInMinuteBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
      payload
    };
  },

  viewStatisticTaskSuccessInMinuteSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,
      data,
    };
  },

  viewStatisticTaskSuccessInMinuteErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
      err,
    };
  },

  viewStatisticTaskDurationInMinuteBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN,
      payload
    };
  },

  viewStatisticTaskDurationInMinuteSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS,
      data,
    };
  },

  viewStatisticTaskDurationInMinuteErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_TASK_DURATION_IN_MINUTE_ERR,
      err,
    };
  },

  viewStatisticOrderByDaysBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_ORDER_BY_DAYS_BEGIN,
      payload
    };
  },

  viewStatisticOrderByDaysSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_ORDER_BY_DAYS_SUCCESS,
      data,
    };
  },

  viewStatisticOrderByDaysErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_ORDER_BY_DAYS_ERR,
      err,
    };
  },

  viewStatisticTotalOrderBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_TOTAL_ORDER_BEGIN,
      payload
    };
  },

  viewStatisticTotalOrderSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_TOTAL_ORDER_SUCCESS,
      data,
    };
  },

  viewStatisticTotalOrderErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_TOTAL_ORDER_ERR,
      err,
    };
  },

  viewStatisticViewByOrderReportBegin: (payload) => {
    return {
      type: actions.VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_BEGIN,
      payload
    };
  },

  viewStatisticViewByOrderReportSuccess: (data) => {
    return {
      type: actions.VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_SUCCESS,
      data,
    };
  },

  viewStatisticViewByOrderReportErr: (err) => {
    return {
      type: actions.VIEW_STATISTIC_VIEW_BY_ORDER_REPORT_ERR,
      err,
    };
  },
  



  // Subscribe
  subscribeStatisticUserPointBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_USER_POINT_BEGIN,
      payload
    };
  },

  subscribeStatisticUserPointSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_USER_POINT_SUCCESS,
      data,
    };
  },

  subscribeStatisticUserPointErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_USER_POINT_ERR,
      err,
    };
  },
  
  subscribeStatisticRunningUserOrderBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_BEGIN,
      payload
    };
  },

  subscribeStatisticRunningUserOrderSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_SUCCESS,
      data,
    };
  },

  subscribeStatisticRunningUserOrderErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_RUNNING_USER_ORDER_ERR,
      err,
    };
  },
  
  subscribeStatisticTaskOfToolBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_OF_TOOL_BEGIN,
      payload
    };
  },

  subscribeStatisticTaskOfToolSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_OF_TOOL_SUCCESS,
      data,
    };
  },

  subscribeStatisticTaskOfToolErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_OF_TOOL_ERR,
      err,
    };
  },
  
  subscribeStatisticRunningOrderBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_BEGIN,
      payload
    };
  },

  subscribeStatisticRunningOrderSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_SUCCESS,
      data,
    };
  },

  subscribeStatisticRunningOrderErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_RUNNING_COMPUTER_ERR,
      err,
    };
  },
  
  subscribeStatisticByStatusOrderBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_BEGIN,
      payload
    };
  },

  subscribeStatisticByStatusOrderSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_SUCCESS,
      data,
    };
  },

  subscribeStatisticByStatusOrderErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_BY_STATUS_ORDER_ERR,
      err,
    };
  },

  subscribeStatisticAccountOnComputerBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_BEGIN,
      payload
    };
  },

  subscribeStatisticAccountOnComputerSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_SUCCESS,
      data,
    };
  },

  subscribeStatisticAccountOnComputerErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ACCOUNT_ON_COMPUTER_ERR,
      err,
    };
  },

  subscribeStatisticAccountStatusSubscribeBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_BEGIN,
      payload
    };
  },

  subscribeStatisticAccountStatusSubscribeSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_SUCCESS,
      data,
    };
  },

  subscribeStatisticAccountStatusSubscribeErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ACCOUNT_STATUS_SUBSCRIBE_ERR,
      err,
    };
  },

  subscribeStatisticPerformanceSubscribeBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_BEGIN,
      payload
    };
  },

  subscribeStatisticPerformanceSubscribeSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_SUCCESS,
      data,
    };
  },

  subscribeStatisticPerformanceSubscribeErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_PERFORMANCE_SUBSCRIBE_ERR,
      err,
    };
  },

  subscribeStatisticOrderAmountBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ORDER_AMOUNT_BEGIN,
      payload
    };
  },

  subscribeStatisticOrderAmountSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ORDER_AMOUNT_SUCCESS,
      data,
    };
  },

  subscribeStatisticOrderAmountErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ORDER_AMOUNT_ERR,
      err,
    };
  },

  subscribeStatisticComputerThreadBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_COMPUTER_THREAD_BEGIN,
      payload
    };
  },

  subscribeStatisticComputerThreadSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_COMPUTER_THREAD_SUCCESS,
      data,
    };
  },

  subscribeStatisticComputerThreadErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_COMPUTER_THREAD_ERR,
      err,
    };
  },

  subscribeStatisticSubscribeByDayBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_BEGIN,
      payload
    };
  },

  subscribeStatisticSubscribeByDaySuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_SUCCESS,
      data,
    };
  },

  subscribeStatisticSubscribeByDayErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_DAY_ERR,
      err,
    };
  },

  subscribeStatisticTaskSuccessInMinuteBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
      payload
    };
  },

  subscribeStatisticTaskSuccessInMinuteSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,
      data,
    };
  },

  subscribeStatisticTaskSuccessInMinuteErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
      err,
    };
  },

  subscribeStatisticSubscribeByOrderReportBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_BEGIN,
      payload
    };
  },

  subscribeStatisticSubscribeByOrderReportSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_SUCCESS,
      data,
    };
  },

  subscribeStatisticSubscribeByOrderReportErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_SUBSCRIBE_BY_ORDER_REPORT_ERR,
      err,
    };
  },

  subscribeStatisticTaskDurationInMinuteBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_BEGIN,
      payload
    };
  },

  subscribeStatisticTaskDurationInMinuteSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_SUCCESS,
      data,
    };
  },

  subscribeStatisticTaskDurationInMinuteErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TASK_DURATION_IN_MINUTE_ERR,
      err,
    };
  },

  subscribeStatisticOrderByDaysBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_BEGIN,
      payload
    };
  },

  subscribeStatisticOrderByDaysSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_SUCCESS,
      data,
    };
  },

  subscribeStatisticOrderByDaysErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_ORDER_BY_DAYS_ERR,
      err,
    };
  },


  subscribeStatisticTotalOrderBegin: (payload) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TOTAL_ORDER_BEGIN,
      payload
    };
  },

  subscribeStatisticTotalOrderSuccess: (data) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TOTAL_ORDER_SUCCESS,
      data,
    };
  },

  subscribeStatisticTotalOrderErr: (err) => {
    return {
      type: actions.SUBSCRIBE_STATISTIC_TOTAL_ORDER_ERR,
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
  