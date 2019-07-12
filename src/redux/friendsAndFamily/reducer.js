import constants from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {}
};

const friendAndFamily = (state = initialState, action) => {
  switch (action.type) {
    case constants.FRIENDS_FAMILY_REQUEST:
      return { ...state, isLoading: true };
    case constants.FRIENDS_FAMILY_REQUEST_ERROR:
      return { ...state, isLoading: false, isError: true };
    case constants.FRIENDS_FAMILY_REQUEST_SUCCESS:
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

export default friendAndFamily;
