import React from 'react'
import { useSelector} from 'react-redux'
import {Card} from './Card'

export const CardsContainer = () => {
  const recipes = useSelector(state => state.recipes)
  console.log(recipes)
  const recipesList = recipes && recipes.map(recipes => recipes.map((recipe) =>  (<Card 
  key={recipe.id}
  title={recipe.title}
   image={recipe.image}
   fullRecipe={recipe.sourceUrl} 
  />)))
  return (
  <div className='card-container'>{recipesList }</div>
  )
}
