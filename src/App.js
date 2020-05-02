import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Layout from './layout/container';
import Sagas from './sagas';
import GameTable from './main/container';
import GameForm from './main/GameForm/container';
import Player from './main/Player/container';
import scoringReducer from './main/reducer';
import LayoutReducer from './layout/reducer';
import { REDUCERS_NAMES } from './constants';
import getRoutes from './routes';
import 'antd/dist/antd.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  [REDUCERS_NAMES.SCORING_REDUCER]: scoringReducer,
  [REDUCERS_NAMES.LAYOUT_REDUCER]: LayoutReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Sagas);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={getRoutes.gamesRoute.path} component={GameTable} />
          <Route path={getRoutes.playerRoute.path} component={Player} />
          <Route path={getRoutes.addGameRoute.path} component={GameForm} />
          <Route path="/" exact component={GameTable} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
