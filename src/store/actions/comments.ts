// REDUX
import { Dispatch } from 'redux';
import { GET_COMMENTS, SET_LOADING_COMMENTS, CommentsActionTypes } from './types';

// SERVICES
import { getCommentsService } from '../../services';

export const getCommentsOfAPost = ({ postId }: { postId: number }) => {
  return async (dispatch: Dispatch<CommentsActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING_COMMENTS, payload: { loading: true } });
      const { success, error, payload } = await getCommentsService({ postId });
      if (success) {
        dispatch({ type: GET_COMMENTS, error: true, payload: { comments: payload } });
      } else {
        dispatch({ type: GET_COMMENTS, error: true, payload: { error } });
      }
      dispatch({ type: SET_LOADING_COMMENTS, payload: { loading: false } });
    } catch (error) {
      dispatch({ type: SET_LOADING_COMMENTS, payload: { loading: false } });
      dispatch({
        type: GET_COMMENTS,
        error: true,
        payload: { error: 'An unexpected error occurred' },
      });
      console.log('error on getPosts action', error);
    }
  };
};
