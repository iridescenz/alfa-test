import React from 'react'
import { Card } from './Card'
import { useSelector } from 'react-redux'

export const CardsContainer = () => {
  const liked = useSelector((state) => state.liked)
  const deleted = useSelector((state) => state.deleted)
  const recipes = useSelector((state) => state.recipes[0])
  const recipesList =
    recipes &&
      recipes.map((recipe) => (
        <Card
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          fullRecipe={recipe.sourceUrl}
        />
      ))
      // const likedposts = recipes.map((recipe) => liked.includes(recipe.id))
  return ( <>
  <div className='card-container' >{recipesList}</div>
  {/* <div className='card-container' style={{backgroundColor: 'red'}}>{likedposts}</div> */}
  </>)
}
