import * as Types from './actionTypes';

export const showRequestLoader = () => ({
  type: Types.SHOW_REQUEST_LOADER,
  isLoading: true,
});

export const hideRequestLoader = () => ({
  type: Types.HIDE_REQUEST_LOADER,
  isLoading: false,
});
