import React from 'react'
import { useSelector } from 'react-redux'

import { CardsContainer } from './CardsContainer'
import { ViewTiggleButton } from './ViewTiggleButton'
import { LoadRecipesButton } from './LoadRecipesButton'

export const RecipesComponent = () => {
  const recipes = useSelector((state) => state.recipes)

  if (recipes.length === 0) {
    return <LoadRecipesButton />
  }

  return (
    <div>
      <ViewTiggleButton />
      <CardsContainer />
    </div>
  )
}
