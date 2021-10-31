import React from 'react'
import axios from 'axios'
import { config } from './config'
import { useDispatch, useSelector } from 'react-redux'
import { CardsContainer } from './CardsContainer'

export const RecipesComponent = () => {
  const recipes = useSelector((state) => state.recipes)
  const dispatch = useDispatch()
  async function getRecipes(e) {
    e.preventDefault()
    const apiKey = config.API_KEY
    await axios
      .get(
        `https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}&number=100`
      )
      .then((recipes) =>
        dispatch({ type: 'SET_RECIPES', payload: recipes.data.recipes })
      )
      .catch((er) => console.log(er))
  }

  return (
    <div>
      {recipes.length === 0 ? (
        <form onSubmit={getRecipes}>
          <button
            className='button'
            type='submit'
          >
            Get random recipes
          </button>
        </form>
      ) : (
        <CardsContainer />
      )}
    </div>
  )
}
