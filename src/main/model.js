import get from 'lodash/get';
import { selector } from './reducer';

/**
 * get Updated At
 * @returns {*}
 * @param state
 */
export const getUpdatedAt = (state) => get(selector(state), 'updatedAt', '');

/**
 * get Sorted Players
 * @returns {*}
 * @param state
 */
export const getSortedPlayers = (state) =>
  get(selector(state), 'sortedPlayers', []);

/**
 * isLoading
 * @returns {*}
 * @param state
 */
export const getLoading = (state) => get(selector(state), 'loading', false);
