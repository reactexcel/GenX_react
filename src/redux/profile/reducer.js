import constants from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {}
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case constants.PROFILE_REQUEST:
      return { ...state, isLoading: true };
    case constants.PROFILE_REQUEST_ERROR:
      return { ...state, isLoading: false, isError: true };
    case constants.PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload
      };
    default:
      return state;
  }
};

export default profile;
