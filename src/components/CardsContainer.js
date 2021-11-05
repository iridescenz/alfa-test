import React from 'react'
import { Card } from './Card'
import { useSelector } from 'react-redux'

export const CardsContainer = () => {
  const view = useSelector((state) => state.view)
  const data = useSelector(({ recipes, liked, view }) => {
    if (view === 'all') {
      return recipes
    }
    return recipes.filter((recipe) => liked.includes(recipe.id))
  })

  if (data.length === 0) {
    return <h2>nothing to show</h2>
  }

  return (
    <React.Fragment>
      <h2>{view} recipes</h2>
      <div className='card-container'>
        {data.map(
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
        )}
      </div>
    </React.Fragment>
  )
}
