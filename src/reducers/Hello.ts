import produce from 'immer';
import { Reducer } from 'redux';
import { HelloActions, HelloActionTypes } from '../actions/Hello';

export interface IHelloState {
  name: string;
}

const unloadedState: IHelloState = { name: 'Ole Nordmann' };
export const reducer: Reducer<IHelloState, HelloActions> = (state = unloadedState, action) =>
produce(state, draft => {
  switch (action.type) {
    case HelloActionTypes.OnChange:
      draft.name = action.newName;
      break;
    // default:
    //   const exhaustiveCheck: never = action;
    //   if (exhaustiveCheck) {break;}
  }
});
