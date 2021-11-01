import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FcLikePlaceholder } from 'react-icons/fc'

export const Card = ({ title, image, fullRecipe, id }) => {
  const [active, setActive] = useState(false)
  const liked = useSelector((state) => state.liked)
  const dispatch = useDispatch()
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{title}</h2>
        <div className='like' onClick={() => {dispatch({ type: 'LIKED', payload: id })}}><FcLikePlaceholder onClick={(e) => {
          e.target.style.backgrounColor = 'blue'
          console.log(e.target.style.backgrounColor) }}/></div>
      </div>

      <img src={image} alt={title} onClick={() => console.log(liked)} />
      <a href={fullRecipe}>see recipe</a>
    </div>
  )
}
