import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/Hello';
import { IApplicationState } from '../reducers';
import { IHelloState } from '../reducers/Hello';

// tslint:disable-next-line:interface-over-type-literal
type HelloPropType =
  IHelloState            // ... state we've requested from the Redux store
  & {
    onChange: (name: string) => actions.OnChangeAction;
  };

// tslint:disable-next-line:variable-name
const Hello: React.StatelessComponent<HelloPropType> = (props: HelloPropType) => {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event.currentTarget.value);
    }
  };

  return <div>Hello {props.name} <input onChange={onChange}/></div>;
};

function mapDispatchToProps(dispatch: Dispatch<actions.HelloActions>) {
  return {
    onChange: (name: string) => dispatch(actions.onChange(name)),
  };
}


export default hot(module)(connect(
  (state: IApplicationState) => state.hello,  // Selects which state properties are merged into the component's props
  mapDispatchToProps                          // Selects which action creators are merged into the component's props
)(Hello));
