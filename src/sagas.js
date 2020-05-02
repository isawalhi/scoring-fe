import { all } from 'redux-saga/effects';
import MainSaga from './main/saga';
import GameFormSage from './main/GameForm/saga';

export default function* scoringSystemSaga() {
  yield all([MainSaga(), GameFormSage()]);
}
