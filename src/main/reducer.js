import * as Types from './actionTypes';
import { REDUCERS_NAMES } from '../constants';

const initialState = {
  sortedPlayers: [],
  updatedAt: '',
  loading: false,
};

const scoringReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_SORTED_PLAYERS:
      return { ...state, sortedPlayers: action.sortedPlayers };
    case Types.SET_UPDATED_AT:
      return { ...state, updatedAt: action.date };
    case Types.SET_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export const selector = (state) => state[REDUCERS_NAMES.SCORING_REDUCER];

export default scoringReducer;
