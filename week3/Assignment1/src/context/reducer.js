import { createContext, useContext } from 'react';

export const initialContext = {
  openCard: [],
  correctCard: [],
  difficulty: 'Easy',
  addOpenCard: () => {},
  clearOpenCard: () => {},
  addCorrectCard: () => {},
  clearCorrectCard: () => {},
  setDifficulty: () => {},
};

export const Context = createContext(initialContext);

Context.displayName = 'Context';

export const useGlobalContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useSelect must be used within a <ContextProvider />');
  }
  return context;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_OPENCARD':
      return {
        ...state,
        openCard: [...state.openCard, action.value],
      };
    case 'CLEAR_OPENCARD':
      return {
        ...state,
        openCard: [],
      };
    case 'ADD_CORRECTCARD':
      return {
        ...state,
        correctCard: [...state.correctCard, action.value],
      };
    case 'CLEAR_CORRECTCARD':
      return {
        ...state,
        clearCard: [],
      };
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.value,
      };
    default:
      return state;
  }
};
