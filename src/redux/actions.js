import { createAction } from 'redux-actions';
import constants from './constants';

export const loginRequest = createAction(constants.LOGIN_REQUEST);
export const loginSuccess = createAction(constants.LOGIN_REQUEST_SUCCESS);
export const loginError = createAction(constants.LOGIN_REQUEST_ERROR);

export const signupRequest = createAction(constants.SIGN_UP_REQUEST);
export const signupSuccess = createAction(constants.SIGN_UP_REQUEST_SUCCESS);
export const signupError = createAction(constants.SIGN_UP_REQUEST_ERROR);

export const profileRequest = createAction(constants.PROFILE_REQUEST);
export const profileSuccess = createAction(constants.PROFILE_REQUEST_SUCCESS);
export const profileError = createAction(constants.PROFILE_REQUEST_ERROR);
export const dnaFileUpload = createAction(constants.DNA_FILE_UPLOAD);

export const friendsRequest = createAction(constants.FRIENDS_FAMILY_REQUEST);
export const friendsRequestSuccess = createAction(constants.FRIENDS_FAMILY_REQUEST_SUCCESS);
export const friendsRequestError = createAction(constants.FRIENDS_FAMILY_REQUEST_ERROR);


export const logOut = createAction(constants.LOG_OUT);