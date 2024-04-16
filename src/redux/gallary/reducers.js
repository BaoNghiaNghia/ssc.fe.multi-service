import actions from './actions';
import staticData from '../../demoData/gallery.json';
import { SERVICE_TYPE } from '../../variables';

const initialState = {
  data: staticData,
  type: SERVICE_TYPE.SUBSCRIBE.title,
  loading: false,
  error: null,
};

const { FILTER_GALLERY_BEGIN, FILTER_GALLERY_SUCCESS, FILTER_GALLERY_ERR } = actions;

const galleryReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FILTER_GALLERY_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FILTER_GALLERY_SUCCESS:
      console.log('---- data erorororor -----', data);
      return {
        ...state,
        type: data.type,
        data,
        loading: false,
      };
    case FILTER_GALLERY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default galleryReducer;
