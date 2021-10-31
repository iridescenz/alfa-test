import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FcLikePlaceholder } from 'react-icons/fc'

export const Card = ({ title, image, fullRecipe, id }) => {
  const liked = useSelector((state) => state.liked)
const dispatch = useDispatch()
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{title}</h2>
        <FcLikePlaceholder onClick={() => dispatch({ type: 'LIKED', payload: Object.values(id)  })}/>
      </div>

      <img src={image} alt={title} onClick={() => console.log(liked)} />
      <a href={fullRecipe}>see recipe</a>
    </div>
  )
}
