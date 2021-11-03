import React, { useState } from 'react'
import axios from 'axios'
import { config } from './config'
import { useDispatch, useSelector } from 'react-redux'
import { CardsContainer } from './CardsContainer'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const RecipesComponent = () => {
  const recipes = useSelector((state) => state.recipes)
  const [like, setLike] = useState(false)
  const changeColor = like === false ? 'lightGray' : 'rgb(233, 56, 56)'
  const dispatch = useDispatch()
  // const toggleLike = (state) => {
  //   like === false ? dispatch({ type: 'SHOW_LIKED' } 
  // 
  async function getRecipes(e) {
    e.preventDefault()
    const apiKey = config.API_KEY
    await axios
      .get(
        `https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}&number=33`
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
          <button className='button' type='submit'>
            Get random recipes
          </button>
        </form>
      ) : (
        <div><div className='show-liked' onClick={()=> dispatch({ type: 'SHOW_LIKED' }) && setLike(!like) }  > <FontAwesomeIcon
            icon={faHeart} style={{ color: changeColor }}/></div><CardsContainer /></div>
      
      )}
    </div>
  )
}
