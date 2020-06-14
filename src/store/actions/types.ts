// POSTS

import { Comment, PostItem } from '../../types';

export const GET_POSTS = 'SAVE_POSTS';
export const SET_LOADING_POSTS = 'SET_LOADING_POSTS';

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

// COMMENTS

export const GET_COMMENTS = 'GET_COMMENTS';
export const SET_LOADING_COMMENTS = 'SET_LOADING_COMMENTS';

interface GetPostDetailsAction {
  type: typeof GET_COMMENTS;
  payload: {
    comments?: Comment[];
    error?: string;
  };
  error: boolean;
}

interface SetLoadingCommentsAction {
  type: typeof SET_LOADING_COMMENTS;
  payload: {
    loading: boolean;
  };
}

export type CommentsActionTypes = GetPostDetailsAction | SetLoadingCommentsAction;
