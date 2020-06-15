import { GET_COMMENTS, SET_LOADING_COMMENTS, CommentsActionTypes } from '../actions/types';
import { Comment } from '../../types';

export interface PostsState {
  error: string;
  loading: boolean;
  comments: Comment[];
}

const initialState: PostsState = {
  error: '',
  loading: false,
  comments: [],
};

const comments = (state = initialState, action: CommentsActionTypes): PostsState => {
  switch (action.type) {
    case SET_LOADING_COMMENTS:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GET_COMMENTS:
      if (action.error) {
        return {
          ...state,
          error: action.payload.error || '',
        };
      }
      return {
        ...state,
        comments: action.payload.comments || [],
      };
    default:
      return state;
  }
};

export default comments;
