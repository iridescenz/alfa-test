import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  recipes: [],
  liked: [],
  view: 'all', //liked
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
  if (action.type === 'DELETE') {
    return {
      ...state,
      recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
    }
  }
  if (action.type === 'SET_RECIPES') {
    return { ...state, recipes: action.payload }
  }
  if (action.type === 'SET_VIEW') {
    return { ...state, view: action.payload }
  }
  return state
}

export const setLikedView = () => {
  return {
    type: 'SET_VIEW',
    payload: 'liked',
  }
}

export const setAllView = () => {
  return {
    type: 'SET_VIEW',
    payload: 'all',
  }
}
export const store = createStore(reducer, initialState, composeWithDevTools())
export const configureStore = (initialState) =>
  createStore(reducer, initialState)
