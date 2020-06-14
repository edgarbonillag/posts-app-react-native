import { Dispatch } from 'redux';
import { GET_POSTS, SET_LOADING_POSTS, PostsActionTypes } from './types';

export const getPosts = () => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    try {
      dispatch({
        type: SET_LOADING_POSTS,
        payload: { loading: true },
      });
      setTimeout(
        () =>
          dispatch({
            type: SET_LOADING_POSTS,
            payload: { loading: false },
          }),
        2000,
      );
    } catch (error) {
      dispatch({
        type: SET_LOADING_POSTS,
        payload: { loading: false },
      });
      dispatch({
        type: GET_POSTS,
        error: true,
        payload: { error: 'An unexpected error occurred' },
      });
      console.log(error);
    }
  };
};
