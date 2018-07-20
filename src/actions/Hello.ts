export enum HelloActionTypes {
  OnChange = 'OnChange',
}

// tslint:disable-next-line:interface-over-type-literal
export type OnChangeAction = {
  type: HelloActionTypes.OnChange;
  newName: string;
};

export type HelloActions = OnChangeAction;

export function onChange(name: string): OnChangeAction {
  return {
    type: HelloActionTypes.OnChange,
    newName: name, // tslint:disable-line:object-literal-sort-keys
  };
}
