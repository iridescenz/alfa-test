import React from 'react'
import axios from 'axios'
import { config } from './config'
import {useDispatch, useSelector} from 'react-redux'

export const RecipesComponent = () => {
  const recipes = useSelector(state => state.recipes)
  const dispatch = useDispatch()
  async function getRecipes () {
   const apiKey = config.API_KEY
   await axios
     .get(
       `https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}&number=100`
     )
     .then(recipes => dispatch({type: 'SET_RECIPES', payload: recipes.data.recipes}))
     .catch((er) => console.log(er))
     console.log(recipes)
 }


  return (

          <div>
      get data
      <button onClick={() => getRecipes()}>get recipes</button>
    </div>
   
  )
}


