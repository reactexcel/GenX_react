import constants from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case constants.SIGN_UP_REQUEST:
      return { ...state, isLoading: true };
    case constants.SIGN_UP_REQUEST_ERROR:
      return { ...state, isLoading: false, isError: true };
    case constants.SIGN_UP_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message
      };
    default:
      return state;
  }
};

export default signup;
