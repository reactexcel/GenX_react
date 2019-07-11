import constants from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLogedOut: false,
  message: ""
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return { ...state, isLoading: true, isLogedOut: false };
    case constants.LOGIN_REQUEST_ERROR:
      return { ...state, isLoading: false, isError: true };
    case constants.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message
      };
    case constants.LOG_OUT:
      return {
        ...state,
        isLogedOut: true,
        isSuccess: false
      };
    default:
      return state;
  }
};

export default login;
