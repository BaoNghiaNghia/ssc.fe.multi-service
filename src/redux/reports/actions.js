const actions = {
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

  CHANGE_SERVICE_TYPE_BEGIN: 'CHANGE_SERVICE_TYPE_BEGIN',
  CHANGE_SERVICE_TYPE_SUCCESS: 'CHANGE_SERVICE_TYPE_SUCCESS',
  CHANGE_SERVICE_TYPE_ERR: 'CHANGE_SERVICE_TYPE_ERR',

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
  