// POSTS
import { PostItem } from '../../types';

export const SET_LOADING_POSTS = 'SET_LOADING_POSTS';
export const GET_POSTS = 'SAVE_POSTS';

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: {
    posts?: PostItem[];
    error?: string;
  };
  error: boolean;
}

interface SetLoadingPostsAction {
  type: typeof SET_LOADING_POSTS;
  payload: {
    loading: boolean;
  };
}

export type PostsActionTypes = GetPostsAction | SetLoadingPostsAction;

// POST DETAIL
export const SET_LOADING_POST_DETAILS = 'SET_LOADING_POST_DETAILS';
export const GET_POST_DETAIL = 'GET_POST_DETAIL';
