import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Card = ({ title, image, fullRecipe, id }) => {
  const [like, setLike] = useState(false)
  const changeColor = like === false ? 'lightGrey' : 'pink'
  const liked = useSelector((state) => state.liked)
  const dispatch = useDispatch()
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{title}</h2>
        <div
          className='like'
          onClick={() => {
            dispatch({ type: 'LIKED', payload: id })
          }}
        >
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: changeColor }}
            onClick={() => setLike(!like)}
          />
        </div>
      </div>

      <img src={image} alt={title} onClick={() => console.log(liked)} />
      <a href={fullRecipe}>see recipe</a>
    </div>
  )
}
