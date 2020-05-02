import { all, call, put, takeLatest, select, delay } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import findLastIndex from 'lodash/findLastIndex';
import * as model from './model';
import * as utils from './utils';
import * as actions from './actions';
import * as Types from './actionTypes';
import { doGetRequest } from '../HTTP/saga';
import { MICROSERVICES_DOMAINS, MS_POOLING_DELAY } from './constants';

const { GAMES_SERVICE } = MICROSERVICES_DOMAINS;
const { setUpdatedAt, setSortedPlayers } = actions;
const { getUpdatedAt, getSortedPlayers } = model;

export const currentState = (state) => state;

export function* loadData(allowLoader = true) {
  const state = yield select(currentState);
  yield put(actions.setLoading(allowLoader));

  try {
    const response = yield call(
      doGetRequest,
      `${GAMES_SERVICE.DEFAULT_LOCAL_URL}/matches`,
      {},
      {},
      false,
      ''
    ) || {};

    const lastUpdatedDate = yield call(getUpdatedAt, state);
    const lastSortedPlayers = yield call(getSortedPlayers, state);
    const { updatedAt, list } = response;

    if (isEmpty(lastUpdatedDate)) {
      const sortedPlayers = utils.getSortedPlayers(list);
      yield put(setSortedPlayers(sortedPlayers));
    } else if (updatedAt !== lastUpdatedDate) {
      list.splice(
        0,
        findLastIndex(list, (game) => game.createdAt <= lastUpdatedDate) + 1
      );
      const sortedPlayers = utils.getSortedPlayers(
        [...list],
        lastSortedPlayers
      );
      yield put(setSortedPlayers(sortedPlayers));
    }
    yield put(setUpdatedAt(updatedAt));
    yield put(actions.setLoading(false));
    yield delay(MS_POOLING_DELAY);
    yield call(loadData, false);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

export default function* watcher() {
  yield all([takeLatest(Types.INIT, loadData), loadData()]);
}
