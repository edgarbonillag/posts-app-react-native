import {
  SET_LOADING_POSTS,
  GET_POSTS,
  MARK_POST_AS_FAVORITE,
  MARK_POST_AS_READ,
  PostsActionTypes,
  DELETE_ALL_POSTS,
} from '../actions/types';
import { PostEnhanced } from '../../types';

export interface PostsState {
  error: string;
  loading: boolean;
  posts: PostEnhanced[];
  updateChangeFlag: boolean;
}

const initialState: PostsState = {
  error: '',
  loading: false,
  posts: [],
  updateChangeFlag: false,
};

const posts = (state = initialState, action: PostsActionTypes): PostsState => {
  switch (action.type) {
    case SET_LOADING_POSTS:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GET_POSTS:
      if (action.error) {
        return {
          ...state,
          error: action.payload.error || '',
        };
      }
      const { posts: incomingPosts } = action.payload;
      let enhancedPosts: PostEnhanced[] = [];
      if (incomingPosts) {
        enhancedPosts = incomingPosts.map((post, index) => ({
          ...post,
          isFavorite: false,
          isRead: index > 19,
        }));
      }
      return {
        ...state,
        posts: enhancedPosts,
      };
    case MARK_POST_AS_FAVORITE:
      const { isFavorite, postId } = action.payload;
      const indexOfPost = state.posts.findIndex((post) => post.id === postId);
      state.posts[indexOfPost].isFavorite = isFavorite;
      return {
        ...state,
        updateChangeFlag: !state.updateChangeFlag,
      };
    case MARK_POST_AS_READ:
      const { isRead, postId: postIdentifier } = action.payload;
      const indexOfReadPost = state.posts.findIndex((post) => post.id === postIdentifier);
      state.posts[indexOfReadPost].isRead = isRead;
      return {
        ...state,
        updateChangeFlag: !state.updateChangeFlag,
      };
    case DELETE_ALL_POSTS:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
};

export default posts;
