import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect, Dispatch } from 'react-redux';

import { createNamedAction } from '../actions';
import * as actions from '../actions/Counter';
import { IApplicationState, NameSpaces } from '../reducers';
import { ICounterState } from '../reducers/Counter';
import { Counter } from './Counter';


type IHateProps =
  ICounterState            // ... state we've requested from the Redux store
  & {
    onIncrease: () => actions.IncreaseAction;
    onDecrease: () => actions.DecreaseAction;
  };

class Hate extends React.PureComponent<IHateProps, {}> { // https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81
  public render() {
    const counterProps = {...this.props, ...{label: 'Hates'}};
    return <Counter {...counterProps} />
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.CounterActions>) {
  return {
    onDecrease: () => dispatch(createNamedAction(actions.decrease(), NameSpaces.Hate)),
    onIncrease: () => dispatch(createNamedAction(actions.increase(), NameSpaces.Hate)),
  };
}

export default hot(module)(connect(
  (state: IApplicationState) => state.counter2,   // Selects which state properties are merged into the component's props
  mapDispatchToProps                              // Selects which action creators are merged into the component's props
)(Hate));
