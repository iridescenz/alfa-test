import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { config } from './config'

export const LoadRecipesButton = () => {
  const dispatch = useDispatch()

  async function getRecipes(e) {
    console.log('>>>>> getRecipes')
    const apiKey = config.API_KEY
    await axios
      .get(
        `https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}&number=33`
      )
      .then((response) => {
        // console.log(response)
        dispatch({ type: 'SET_RECIPES', payload: response.data.recipes })
      })
      .catch((er) => console.log('err', er))
  }

  return (
    <button onClick={getRecipes} className='button' type='button'>
      Get random recipes
    </button>
  )
}
