import * as Types from './actionTypes';

export const init = (payload) => ({
  type: Types.INIT,
  payload,
});

export const setLoading = (loading) => ({
  type: Types.SET_LOADING,
  loading,
});

export const setUpdatedAt = (date) => ({
  type: Types.SET_UPDATED_AT,
  date,
});

export const setSortedPlayers = (sortedPlayers) => ({
  type: Types.SET_SORTED_PLAYERS,
  sortedPlayers,
});
