import * as Types from './actionTypes';
import { REDUCERS_NAMES } from '../constants';

const initialState = {
  showRequestLoader: false,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_REQUEST_LOADER:
      return { ...state, showRequestLoader: action.isLoading };
    case Types.HIDE_REQUEST_LOADER:
      return { ...state, showRequestLoader: action.isLoading };
    default:
      return state;
  }
};

export const selector = (state) => state[REDUCERS_NAMES.LAYOUT_REDUCER];

export default layoutReducer;
