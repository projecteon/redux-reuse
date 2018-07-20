import { combineReducers, Reducer } from 'redux';
import { IAnyNameSpaceAction, INameSpaceAction } from '../actions';
import * as Counter from './Counter';
import * as Hello from './Hello';

function createNamedWrapperReducer<TState, TActions extends INameSpaceAction = IAnyNameSpaceAction>(reducerFunction: Reducer<TState, TActions>, reducerName: string) {
  return (state: TState, action: TActions) => {
    // tslint:disable-next-line:no-console
    console.log(action, reducerName);
    const {namespace} = action;
    // tslint:disable-next-line:no-console
    console.log(namespace);
    const isInitializationCall = state === undefined;
    if (namespace !== reducerName && !isInitializationCall) {
      return state;
    }
​
    return reducerFunction(state, action);
  }
}

export enum NameSpaces {
  Like = 'Like',
  Hate = 'Hate'
}

export interface IApplicationState {
  counter1: Counter.ICounterState;
  counter2: Counter.ICounterState;
  hello: Hello.IHelloState;
}

export const reducers = combineReducers<IApplicationState>({
  counter1: createNamedWrapperReducer(Counter.reducer, NameSpaces.Like),
  counter2: createNamedWrapperReducer(Counter.reducer, NameSpaces.Hate),
  hello: Hello.reducer,
});

