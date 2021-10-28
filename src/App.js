import React from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'
import { config } from './config'
import { useState } from 'react'
import {useDispatch} from 'react-redux'

export const App = () => {
  const [recipes, setRecipes] = useState()
   const getRecipes = () => {
    const apiKey = config.API_KEY
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}&number=100`
      )
      .then(recipes => setRecipes(recipes.data.recipes))
      .catch((er) => console.log(er))
      .finally(console.log(recipes))
  }
  return (
    <Provider store={store}>
    <div>
      get data
      <button onClick={() => getRecipes()}>get recipes</button>
    </div>
    </Provider>
  )
}
