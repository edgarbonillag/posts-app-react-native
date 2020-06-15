import { GET_USER_INFO, SET_LOADING_USER_INFO, UsersActionTypes } from '../actions/types';
import { User } from '../../types';

export interface UsersState {
  error: string;
  loading: boolean;
  users: User[];
}

const initialState: UsersState = {
  error: '',
  loading: false,
  users: [],
};

const users = (state = initialState, action: UsersActionTypes): UsersState => {
  switch (action.type) {
    case SET_LOADING_USER_INFO:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GET_USER_INFO:
      return {
        ...state,
        users: action.payload.user ? [...state.users, action.payload.user] : state.users,
      };
    default:
      return state;
  }
};

export default users;
