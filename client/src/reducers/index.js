import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';

const appReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
});

export default appReducer;
