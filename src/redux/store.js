import { createStore } from 'redux'

const initialState = {
  showData: [],
  recipes: [],
  liked: [],
  likedRecipes: [],
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
      showData: state.recipes.filter((recipe) => recipe.id !== action.payload),
      recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
    }
  }
  if (action.type === 'SET_RECIPES') {
    return { ...state, recipes: action.payload, showData: action.payload }
  }
  if (action.type === 'SHOW_LIKED') {
    return { ...state, likedRecipes: state.recipes.filter((recipe) => state.liked.includes(recipe.id)), showData:  state.recipes.filter((recipe) => state.liked.includes(recipe.id))}
  }
  if (action.type === 'SHOW_ALL') {
    return { ...state, showData: state.recipes }
  }
  return state
}
export const store = createStore(reducer)
