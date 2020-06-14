import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, undefined, composeWithDevTools(middlewareEnhancer));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
