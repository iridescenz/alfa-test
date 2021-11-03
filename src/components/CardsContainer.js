import React from 'react'
import { Card } from './Card'
import { useSelector } from 'react-redux'

export const CardsContainer = () => {
  const data = useSelector((state) => state.showData)
  const recipesList =
    data &&
    data.map(
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
  return <div className='card-container'>{recipesList.length > 0 ? recipesList : <h2>nothing to show</h2>}</div>
}
