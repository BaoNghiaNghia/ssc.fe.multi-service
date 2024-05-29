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
  STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN: 'STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN',
  STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS: 'STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS',
  STATISTIC_COMMENT_BY_ORDER_REPORT_ERR: 'STATISTIC_COMMENT_BY_ORDER_REPORT_ERR',

  STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN: 'STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN',
  STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS: 'STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS',
  STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR: 'STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR',

  STATISTIC_COMMENT_BY_DAY_BEGIN: 'STATISTIC_COMMENT_BY_DAY_BEGIN',
  STATISTIC_COMMENT_BY_DAY_SUCCESS: 'STATISTIC_COMMENT_BY_DAY_SUCCESS',
  STATISTIC_COMMENT_BY_DAY_ERR: 'STATISTIC_COMMENT_BY_DAY_ERR',

  statisticCommentByDayBegin: (payload) => {
    return {
      type: actions.STATISTIC_COMMENT_BY_DAY_BEGIN,
      payload
    };
  },

  statisticCommentByDaySuccess: (data) => {
    return {
      type: actions.STATISTIC_COMMENT_BY_DAY_SUCCESS,
      data,
    };
  },

  statisticCommentByDayErr: (err) => {
    return {
      type: actions.STATISTIC_COMMENT_BY_DAY_ERR,
      err,
    };
  },

  statisticTaskSuccessInMinuteBegin: (payload) => {
    return {
      type: actions.STATISTIC_TASK_SUCCESS_IN_MINUTE_BEGIN,
      payload
    };
  },

  statisticTaskSuccessInMinuteSuccess: (data) => {
    return {
      type: actions.STATISTIC_TASK_SUCCESS_IN_MINUTE_SUCCESS,
      data,
    };
  },

  statisticTaskSuccessInMinuteErr: (err) => {
    return {
      type: actions.STATISTIC_TASK_SUCCESS_IN_MINUTE_ERR,
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

  statisticCommentByOrderReportBegin: (payload) => {
    return {
      type: actions.STATISTIC_COMMENT_BY_ORDER_REPORT_BEGIN,
      payload
    };
  },

  statisticCommentByOrderReportSuccess: (data) => {
    return {
      type: actions.STATISTIC_COMMENT_BY_ORDER_REPORT_SUCCESS,
      data,
    };
  },

  statisticCommentByOrderReportErr: (err) => {
    return {
      type: actions.STATISTIC_COMMENT_BY_ORDER_REPORT_ERR,
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
  