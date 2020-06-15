import {
  SET_LOADING_POSTS,
  GET_POSTS,
  MARK_POST_AS_FAVORITE,
  MARK_POST_AS_READ,
  PostsActionTypes,
} from '../actions/types';
import { PostEnhanced } from '../../types';

export interface PostsState {
  error: string;
  loading: boolean;
  posts: PostEnhanced[];
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
      const { posts } = action.payload;
      let enhancedPosts: PostEnhanced[] = [];
      if (posts) {
        enhancedPosts = posts.map((post, index) => ({
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
      return state;
    case MARK_POST_AS_READ:
      const { isRead, postId: postIdentifier } = action.payload;
      const indexOfReadPost = state.posts.findIndex((post) => post.id === postIdentifier);
      state.posts[indexOfReadPost].isRead = isRead;
      return state;
    default:
      return state;
  }
};

export default posts;
