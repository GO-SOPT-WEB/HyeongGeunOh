import { createContext, useContext } from 'react';

export const initialContext = {
  openCard: [],
  correctCard: [],
  difficulty: 'Easy',
  score: 0,
  addOpenCard: () => {},
  clearOpenCard: () => {},
  addCorrectCard: () => {},
  plusScore: () => {},
  clearScore: () => {},
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
        correctCard: [...state.openCard, action.value],
      };
    case 'PLUS_SCORE':
      return {
        ...state,
        score: state.score + 1,
      };
    case 'CLEAR_SCORE':
      return {
        ...state,
        score: 0,
      };
    default:
      return state;
  }
};
