import React from 'react'

export const Card = ({title, image, fullRecipe}) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <img src={image} alt={title}/>
     <a href={fullRecipe}>see recipe</a>
    </div>
  )
}
