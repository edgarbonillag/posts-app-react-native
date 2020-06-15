// REDUX
import { Dispatch } from 'redux';
import { GET_USER_INFO, SET_LOADING_USER_INFO, UsersActionTypes } from './types';

// SERVICES
import { getUserInfoService } from '../../services';

export const getUserDetails = ({ userId }: { userId: number }) => {
  return async (dispatch: Dispatch<UsersActionTypes>) => {
    console.log('userId', userId);
    try {
      dispatch({ type: SET_LOADING_USER_INFO, payload: { loading: true } });
      const { success, error, payload } = await getUserInfoService({ userId });
      if (success) {
        dispatch({ type: GET_USER_INFO, error: true, payload: { user: payload } });
      } else {
        dispatch({ type: GET_USER_INFO, error: true, payload: { error } });
      }
      dispatch({ type: SET_LOADING_USER_INFO, payload: { loading: false } });
    } catch (error) {
      dispatch({ type: SET_LOADING_USER_INFO, payload: { loading: false } });
      dispatch({
        type: GET_USER_INFO,
        error: true,
        payload: { error: 'An unexpected error occurred' },
      });
      console.log('error on getComments action', error);
    }
  };
};
