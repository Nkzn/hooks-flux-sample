import { Reducer } from 'react';

export type State = { count: number };
export type Action = { type: "INCREMENT" | "DECREMENT" | "RESET" };

export const reducer: Reducer<State, Action> = (state, action) => {
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