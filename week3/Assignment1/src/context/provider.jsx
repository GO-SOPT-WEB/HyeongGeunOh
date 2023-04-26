import { useReducer } from 'react';

import { Context, initialContext, reducer } from './reducer';

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext);
  return (
    <Context.Provider
      value={{
        ...state,
        addOpenCard: (value) => dispatch({ type: 'ADD_OPENCARD', value }),
        addCorrectCard: (value) => dispatch({ type: 'ADD_CORRECTCARD', value }),
        clearOpenCard: () => dispatch({ type: 'CLEAR_OPENCARD' }),
        plusScore: () => dispatch({ type: 'PLUS_SCORE' }),
        clearScore: () => dispatch({ type: 'CLEAR_SCORE' }),
      }}>
      {children}
    </Context.Provider>
  );
};
