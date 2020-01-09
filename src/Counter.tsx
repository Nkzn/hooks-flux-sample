import React from 'react';
import { useCounter } from './useCounter';

export const Counter: React.FC = () => {
  const { state, dispatch } = useCounter();
  return (
    <div style={{ flex: 1, padding: 16, margin: 16, border: 'dotted 1px #aaa' }}>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};