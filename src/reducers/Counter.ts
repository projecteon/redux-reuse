import produce from 'immer';
import { Reducer } from 'redux';
import {CounterActions, CounterActionTypes, decrease, increase} from '../actions/Counter';

export interface ICounterState {
  count: number;
}

export const actionCreators = { increase, decrease };

const unloadedState: ICounterState = { count: 0 };
export const reducer: Reducer<ICounterState, CounterActions> = (state = unloadedState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CounterActionTypes.Increase:
        draft.count = state.count + 1;
        break;
      case CounterActionTypes.Decrease:
        draft.count = state.count - 1;
        break;
      default:
        const exhaustiveCheck: never = action;
        if (exhaustiveCheck) {break;}
    }
  });
