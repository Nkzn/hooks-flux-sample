import React, { useContext } from 'react';
import { State, Action } from './ducks';

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
}

const CounterContext = React.createContext<ContextType>({ state: { count: 0 }, dispatch: () => {} });

export const useCounter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return {
    state,
    dispatch,
  };
};

type Props = ContextType;

export const CounterProvider: React.FC<Props> = ({ state, dispatch, children }) => (
  <CounterContext.Provider value={{ state, dispatch }}>
    {children}
  </CounterContext.Provider>
);
