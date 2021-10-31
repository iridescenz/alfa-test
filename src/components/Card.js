import React from 'react'

import {FcLikePlaceholder} from 'react-icons/fc'

export const Card = ({title, image, fullRecipe }) => {
  return (
    <div className='card'>
    <div className='card-header'><h2>{title}</h2><FcLikePlaceholder /></div>
    
      <img src={image} alt={title}/>
     <a href={fullRecipe}>see recipe</a>
    </div>
  )
}
