import { Comment, Post, User } from '../../types';

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

// POSTS

export const DELETE_ALL_POSTS = 'DELETE_ALL_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const SET_LOADING_POSTS = 'SET_LOADING_POSTS';
export const MARK_POST_AS_FAVORITE = 'MARK_POST_AS_FAVORITE';
export const MARK_POST_AS_READ = 'MARK_POST_AS_READ';

interface DeleteAllPostsAction {
  type: typeof DELETE_ALL_POSTS;
}
interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: {
    posts?: Post[];
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

interface MarkPostFavoriteAction {
  type: typeof MARK_POST_AS_FAVORITE;
  payload: {
    postId: number;
    isFavorite: boolean;
  };
}

interface MarkPostReadAction {
  type: typeof MARK_POST_AS_READ;
  payload: {
    postId: number;
    isRead: boolean;
  };
}

export type PostsActionTypes =
  | DeleteAllPostsAction
  | GetPostsAction
  | SetLoadingPostsAction
  | MarkPostFavoriteAction
  | MarkPostReadAction;

// USERS

export const GET_USER_INFO = 'GET_USER_INFO';
export const SET_LOADING_USER_INFO = 'SET_LOADING_USER_INFO';

interface GetUserInfoAction {
  type: typeof GET_USER_INFO;
  payload: {
    user?: User;
    error?: string;
  };
  error: boolean;
}

interface SetLoadingUserInfoAction {
  type: typeof SET_LOADING_USER_INFO;
  payload: {
    loading: boolean;
  };
}

export type UsersActionTypes = GetUserInfoAction | SetLoadingUserInfoAction;
