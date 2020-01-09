import React, { useReducer, Reducer } from 'react';
import { CounterProvider, State, Action } from './useCounter';
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

const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
  }
};