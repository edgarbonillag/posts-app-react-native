import { combineReducers } from 'redux';

import commentsReducer from './comments';
import postsReducer from './posts';

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
});

export default rootReducer;
