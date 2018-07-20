import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect, Dispatch } from 'react-redux';

import { createNamedAction } from '../actions';
import * as actions from '../actions/Counter';
import { IApplicationState, NameSpaces } from '../reducers';
import { ICounterState } from '../reducers/Counter';
import { Counter } from './Counter';


type ILikeProps =
  ICounterState            // ... state we've requested from the Redux store
  & {
    onIncrease: () => actions.IncreaseAction;
    onDecrease: () => actions.DecreaseAction;
  };

class Like extends React.PureComponent<ILikeProps, {}> { // https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81
  public render() {
    const counterProps = {...this.props, ...{label: 'Likes'}};
    return <Counter {...counterProps} />
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.CounterActions>) {
  return {
    onDecrease: () => dispatch(createNamedAction(actions.decrease(), NameSpaces.Like)),
    onIncrease: () => dispatch(createNamedAction(actions.increase(), NameSpaces.Like)),
  };
}

export default hot(module)(connect(
  (state: IApplicationState) => state.counter1,   // Selects which state properties are merged into the component's props
  mapDispatchToProps                              // Selects which action creators are merged into the component's props
)(Like));
