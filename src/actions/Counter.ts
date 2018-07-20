export enum CounterActionTypes {
  Increase = 'Increase',
  Decrease = 'Decrease',
}

// tslint:disable-next-line:interface-over-type-literal
export type IncreaseAction = {
  type: CounterActionTypes.Increase;
};

// tslint:disable-next-line:interface-over-type-literal
export type DecreaseAction = {
  type: CounterActionTypes.Decrease;
};

export type CounterActions = IncreaseAction | DecreaseAction;

export function increase(): IncreaseAction {
  return {
    type: CounterActionTypes.Increase,
  };
}

export function decrease(): DecreaseAction {
  return {
    type: CounterActionTypes.Decrease,
  };
}

