import get from 'lodash/get';
import { selector } from './reducer';

/**
 * get showRequestLoader
 * @returns {*}
 * @param state
 */
export const showRequestLoader = (state) =>
  get(selector(state), 'showRequestLoader', false);
