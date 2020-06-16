// REDUX
import { Dispatch } from 'redux';
import {
  DELETE_POST,
  DELETE_ALL_POSTS,
  GET_POSTS,
  SET_LOADING_POSTS,
  MARK_POST_AS_FAVORITE,
  MARK_POST_AS_READ,
  PostsActionTypes,
} from './types';

// SERVICES
import { getPostsService } from '../../services';

// MAIN CODE

export const deleteSpecificPost = ({ postId }: { postId: number }) => {
  return (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: DELETE_POST, payload: { postId } });
  };
};

export const deleteAllPosts = () => {
  return (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: DELETE_ALL_POSTS });
  };
};

export const getPosts = () => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING_POSTS, payload: { loading: true } });
      const { success, error, payload } = await getPostsService();
      if (success) {
        dispatch({ type: GET_POSTS, error: false, payload: { posts: payload } });
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

export const markPostAsFavorite = ({
  postId,
  isFavorite,
}: {
  postId: number;
  isFavorite: boolean;
}) => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: MARK_POST_AS_FAVORITE, payload: { postId, isFavorite } });
  };
};

export const markPostAsRead = ({ postId }: { postId: number }) => {
  return async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: MARK_POST_AS_READ, payload: { postId, isRead: true } });
  };
};
