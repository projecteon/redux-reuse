import { Action } from 'redux';

export interface INameSpaceAction extends Action {
  namespace: string;
}

export interface IAnyNameSpaceAction extends INameSpaceAction {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}

export function createNamedAction(action: Action, namespace: string): INameSpaceAction {
  return {...action, ...{namespace}};
}
