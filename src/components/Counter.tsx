import * as React from 'react';

import * as actions from '../actions/Counter';
import { ICounterState } from '../reducers/Counter';


type ICounterProps =
  ICounterState            // ... state we've requested from the Redux store
  & {label: string}
  & {
    onIncrease: () => actions.IncreaseAction;
    onDecrease: () => actions.DecreaseAction;
  };

export class Counter extends React.PureComponent<ICounterProps, {}> {
  public render() {
    return  <p>
              <label>{this.props.label}: </label>
              <span>{this.props.count} </span>
              <button onClick={this.props.onIncrease}>+</button>
              <button onClick={this.props.onDecrease}>-</button>
            </p>
  }
}
