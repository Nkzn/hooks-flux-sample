import React, { useReducer } from 'react';
import { CounterProvider } from './useCounter';
import { reducer } from './ducks';
import { Counter } from './Counter';

const App: React.FC = () => {
  const [ state, dispatch ] = useReducer(reducer, { count: 0 });

  return (
    <CounterProvider state={state} dispatch={dispatch}>
      <div style={{ height: '100%', display: 'flex' }}>
        <Counter />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Counter />
          <Counter />
        </div>
      </div>
    </CounterProvider>
  );
}

export default App;
