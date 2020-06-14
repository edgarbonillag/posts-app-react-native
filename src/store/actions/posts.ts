// REDUX
import { Dispatch } from 'redux';
import { GET_POSTS, SET_LOADING_POSTS, PostsActionTypes } from './types';

// SERVICES
import { getPostsService } from '../../services';

export const getPosts = () => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING_POSTS, payload: { loading: true } });
      const { success, error, payload } = await getPostsService();
      if (success) {
        dispatch({ type: GET_POSTS, error: true, payload: { posts: payload } });
      } else {
        dispatch({ type: GET_POSTS, error: true, payload: { error } });
      }
      dispatch({ type: SET_LOADING_POSTS, payload: { loading: false } });
    } catch (error) {
      dispatch({ type: SET_LOADING_POSTS, payload: { loading: false } });
      dispatch({
        type: GET_POSTS,
        error: true,
        payload: { error: 'An unexpected error occurred' },
      });
      console.log('error on getPosts action', error);
    }
  };
};
