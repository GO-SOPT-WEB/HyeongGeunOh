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
        clearCorrectCard: () => dispatch({ type: 'CLEAR_CORRECTCARD' }),
        setDifficulty: (value) => dispatch({ type: 'SET_DIFFICULTY', value }),
        setRandomArray: (value) => dispatch({ type: 'SET_RANDOMARRAY', value }),
        setSuccessModalOpen: () => dispatch({ type: 'SET_SUCCESSMODALOPEN' }),
      }}>
      {children}
    </Context.Provider>
  );
};
