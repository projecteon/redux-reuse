import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect, Dispatch } from 'react-redux';

import { createNamedAction } from '../actions';
import * as actions from '../actions/Counter';
import { NameSpaces } from '../reducers';
import { ICounterState } from '../reducers/Counter';
import { Counter } from './Counter';

// https://medium.com/front-end-hacking/code-splitting-redux-reducers-4073db30c72e

type IGenericProps =
  ICounterState            // ... state we've requested from the Redux store
  & {
    onIncrease: () => actions.IncreaseAction;
    onDecrease: () => actions.DecreaseAction;
  };

class Generic extends React.PureComponent<IGenericProps, {}> { // https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81
  public render() {
    const counterProps = {...this.props, ...{label: 'Generic'}};
    return <Counter {...counterProps} />
  }
}

export function create(namespace: NameSpaces) {
  function mapDispatchToProps(dispatch: Dispatch<actions.CounterActions>) {
    return {
      onDecrease: () => dispatch(createNamedAction(actions.decrease(), namespace)),
      onIncrease: () => dispatch(createNamedAction(actions.increase(), namespace)),
    };
  }

  return hot(module)(connect(
    (state: any) => state[`counter${namespace}`],   // Selects which state properties are merged into the component's props
    mapDispatchToProps                              // Selects which action creators are merged into the component's props
  )(Generic));
}
