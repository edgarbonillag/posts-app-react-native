import { Dispatch } from 'redux';
import { GET_COMMENTS, SET_LOADING_COMMENTS, CommentsActionTypes } from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCommentsOfAPost = ({ postId }: { postId: number }) => {
  return async (dispatch: Dispatch<CommentsActionTypes>) => {
    try {
      dispatch({
        type: SET_LOADING_COMMENTS,
        payload: { loading: true },
      });
      setTimeout(
        () =>
          dispatch({
            type: SET_LOADING_COMMENTS,
            payload: { loading: false },
          }),
        2000,
      );
    } catch (error) {
      dispatch({
        type: SET_LOADING_COMMENTS,
        payload: { loading: false },
      });
      dispatch({
        type: GET_COMMENTS,
        error: true,
        payload: { error: 'An unexpected error occurred' },
      });
      console.log(error);
    }
  };
};
