import * as React from 'react';
import { Provider } from 'react-redux';

import {Root} from './components/Root';
import { IApplicationState } from './reducers';
import configureStore from './store';

import './App.css';

const initialState = (window as any).initialReduxState as IApplicationState;
const store = configureStore(initialState);

export const App = () => (
  <Provider store={ store }><Root /></Provider>
);
