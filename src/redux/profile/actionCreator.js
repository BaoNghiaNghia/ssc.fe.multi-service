/* eslint-disable no-return-assign */
import actions from './actions';
import initialState from '../../demoData/friends.json';

const { reportSubscribeBegin, reportSubscribeSuccess, reportSubscribeErr, postDataBegin, postDataSuccess, postDataErr } =
  actions;

const profileFriendsChangeStatus = (key) => {
  return async (dispatch) => {
    try {
      dispatch(reportSubscribeBegin());
      initialState.map((friend) => {
        if (friend.key === key) {
          return friend.status ? (friend.status = false) : (friend.status = true);
        }
        return dispatch(reportSubscribeSuccess(initialState));
      });
    } catch (err) {
      dispatch(reportSubscribeErr(err));
    }
  };
};

const submitPost = (data) => {
  return async (dispatch) => {
    try {
      dispatch(postDataBegin());
      dispatch(postDataSuccess(data));
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const likeUpdate = (data, key) => {
  return async (dispatch) => {
    try {
      dispatch(postDataBegin());
      data.map((post) => {
        if (post.postId === key) {
          return (post.like += 1);
        }
        return dispatch(postDataSuccess(data));
      });
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const commentUpdate = (data, key, comment) => {
  return async (dispatch) => {
    try {
      dispatch(postDataBegin());
      data.map((post) => {
        if (post.postId === key) {
          return (post.comment = [
            ...post.comment,
            {
              time: new Date().getTime(),
              from: 'David Warner',
              text: comment,
            },
          ]);
        }
        return dispatch(postDataSuccess(data));
      });
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const postDelete = (data, key) => {
  return async (dispatch) => {
    try {
      dispatch(postDataBegin());
      const posts = data.filter((post) => {
        return post.postId !== key;
      });
      return dispatch(postDataSuccess(posts));
    } catch (err) {
      return dispatch(postDataErr(err));
    }
  };
};

export { profileFriendsChangeStatus, submitPost, likeUpdate, commentUpdate, postDelete };
