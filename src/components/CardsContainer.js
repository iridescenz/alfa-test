import React from 'react'
import { Card } from './Card'
import { useSelector } from 'react-redux'

export const CardsContainer = () => {
  const recipes = useSelector((state) => state.recipes)
  const recipesList =
    recipes &&
    recipes.map(
      (recipe) =>
        recipe.title && (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            fullRecipe={recipe.sourceUrl}
          />
        )
    )
  return <div className='card-container'>{recipesList}</div>
}
