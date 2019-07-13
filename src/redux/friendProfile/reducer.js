import constants from "../constants";
import map from "lodash/map";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  friendId: "",
  data: {},
  chatMsg: []
};

const friendProfile = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_FRIEND_DETAILS:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        friendId: action.payload.id,
        data: {}
      };
    case constants.GET_FRIEND_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        friendId: action.payload.id,
        data: action.payload
      };
    case constants.GET_FRIEND_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        friendId: "",
        data: {}
      };
    case constants.GET_CHAT_MESSAGE_LIST_SUCCESSS:
      let chatMsg = [];
      const { friendId } = state;
      map(action.payload, data => {
        if (Number(data.sender) == Number(friendId)) {
          chatMsg.push({
            author: "them",
            type: "text",
            data: {
              text: data.message
            },
            mid: data.id
          });
        } else {
          chatMsg.push({
            author: "me",
            type: "text",
            data: {
              text: data.message
            },
            mid: data.id
          });
        }
      });
      return {
        ...state,
        chatMsg
      };
    default:
      return state;
  }
};

export default friendProfile;
