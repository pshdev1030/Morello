import { userInfo } from 'Utils/types';

export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'LOGIN_FAILURE' as const;

export const LOGIN_REQUEST_ACTION = () => ({ type: LOGIN_REQUEST });
export const LOGIN_FAILURE_ACTION = () => ({ type: LOGIN_FAILURE });
export const LOGIN_SUCCESS_ACTION = (user: userInfo) => ({ type: LOGIN_SUCCESS, payload: user });

// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST' as const;
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS' as const;
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE' as const;

// export const LOGOUT_REQUEST_ACTION = () => ({ type: LOGOUT_REQUEST });
// export const LOGOUT_FAILURE_ACTION = () => ({ type: LOGOUT_FAILURE });
// export const LOGOUT_SUCCESS_ACTION = () => ({ type: LOGOUT_SUCCESS });

type userAction =
  | ReturnType<typeof LOGIN_REQUEST_ACTION>
  | ReturnType<typeof LOGIN_FAILURE_ACTION>
  | ReturnType<typeof LOGIN_SUCCESS_ACTION>;
// | ReturnType<typeof LOGOUT_REQUEST_ACTION>
// | ReturnType<typeof LOGOUT_FAILURE_ACTION>
// | ReturnType<typeof LOGOUT_SUCCESS_ACTION>;

type userState = {
  user?: userInfo;
  logInLoading: boolean;
  logInError: boolean;
  logInSuccess: boolean;
};

const initialState: userState = {
  logInLoading: false,
  logInError: false,
  logInSuccess: false,
};

const user = (state: userState = initialState, action: userAction): userState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInSuccess: false,
        logInError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInSuccess: true,
        logInError: false,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInSuccess: false,
        logInError: true,
      };
    default:
      return state;
  }
};

export default user;
