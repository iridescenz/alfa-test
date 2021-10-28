import { createStore } from 'redux'


const initialState = {
 recipes: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'LIKED') {
    return { }
  }
  if (action.type === 'CLEAR') {
    return initialState
  }
  if (action.type === 'SET_RECIPES') {
    return {...state, recipes: [action.payload]}
  }
  return state
}
export const store = createStore(reducer)
