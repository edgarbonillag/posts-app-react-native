import { SET_LOADING_POSTS, GET_POSTS, PostsActionTypes } from '../actions/types';
import { Post } from '../../types';

export interface PostsState {
  error: string;
  loading: boolean;
  posts: Post[];
}

const initialState: PostsState = {
  error: '',
  loading: false,
  posts: [],
};

const posts = (state = initialState, action: PostsActionTypes): PostsState => {
  switch (action.type) {
    case SET_LOADING_POSTS:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts || [],
      };
    default:
      return state;
  }
};

export default posts;
