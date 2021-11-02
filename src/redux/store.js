import { createStore } from 'redux'

const initialState = {
  recipes: [],
  liked: [],
  deleted: [],
}

// const showData = (recipes, liked, deleted) =>  {
//   return recipes.map((recipe) => liked.icludes(recipe.id)).filter((recipe) => deleted.map((del) => recipe.id !== del.id))
// }

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
       ...state, deleted: [...state.deleted, action.payload] 
    }
  }
  if (action.type === 'SET_RECIPES') {
    return { ...state, recipes: [action.payload] }
  }
  return state
}
export const store = createStore(reducer)
