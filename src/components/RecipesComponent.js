import React from 'react'
import { useSelector } from 'react-redux'

import { CardsContainer } from './CardsContainer'
import { ViewToggleButton } from './ViewToggleButton'
import { LoadRecipesButton } from './LoadRecipesButton'

export const RecipesComponent = () => {
  const recipes = useSelector((state) => state.recipes)

  if (recipes.length === 0) {
    return <LoadRecipesButton />
  }

  return (
    <div>
      <ViewToggleButton />
      <CardsContainer />
    </div>
  )
}
