import { createStore } from 'redux'

const initialState = {
  recipes: [],
  liked: [],
}

const reducer = (state = initialState, action) => {
  if (action.type === 'LIKED') {
    return {
      ...state,
      liked: state.liked.includes(action.payload)
        ? state.liked.filter((recipe) => recipe !== action.payload)
        : [...state.liked, action.payload],
    }
  }
  if (action.type === 'CLEAR') {
    return initialState
  }
  if (action.type === 'SET_RECIPES') {
    return { ...state, recipes: [action.payload] }
  }
  return state
}
export const store = createStore(reducer)
