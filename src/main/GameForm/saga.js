import { all, call, takeLatest } from 'redux-saga/effects';
import lodashValues from 'lodash/values';
import compact from 'lodash/compact';
import * as Types from './actionTypes';
import { doPostRequest } from '../../HTTP/saga';
import { MICROSERVICES_DOMAINS } from '../constants';

const { GAMES_SERVICE } = MICROSERVICES_DOMAINS;

export function* submitGame(action) {
  const { values } = action;
  const payload = {
    standings: compact(lodashValues(values)),
  };
  try {
    yield call(
      doPostRequest,
      `${GAMES_SERVICE.DEFAULT_LOCAL_URL}/matches`,
      payload,
      {},
      {},
      true,
      ''
    ) || {};
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

export default function* watcher() {
  yield all([takeLatest(Types.DO_SUBMIT_FORM, submitGame)]);
}
