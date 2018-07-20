import { createStore } from 'redux';
import { IApplicationState, reducers } from '../reducers';

export default function configureStore(initialState: IApplicationState) {
  const store = createStore(reducers, initialState);
  // enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // tslint:disable-next-line:no-require-imports
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer.reducers);
    });
  }

  return store;
}
