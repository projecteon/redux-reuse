import * as React from 'react';
import Hate from './Hate';
import Hello from './Hello';
import Like from './Like';

// tslint:disable-next-line:variable-name
export const Root: React.StatelessComponent<{}> = (props: {}) => {
  return  <div>
            <Like />
            <Hate />
            <Hello />
          </div>;
};
