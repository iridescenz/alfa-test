import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
import defaultRecipeImage from './images/defaultRecipeImage.png'

export const Card = ({ title, image, fullRecipe, id }) => {
  const [like, setLike] = useState(false)
  const state = useSelector((state) => state)
  const changeColor = like === false ? 'lightGray' : 'rgb(233, 56, 56)'
  const dispatch = useDispatch()
  return (
    <div className='card'>
      <div className='card-header'>
        <div
          className='delete'
          onClick={() => {
            dispatch({ type: 'DELETE', payload: id })
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>

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

      <img
      onClick={() => console.log(state)}
        src={image ? image : defaultRecipeImage}
        alt={title}
      />
      <a href={fullRecipe}>see recipe</a>
    </div>
  )
}
