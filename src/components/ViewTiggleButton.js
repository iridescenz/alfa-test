import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLikedView, setAllView } from '../redux/store'

export const ViewTiggleButton = () => {
  const view = useSelector((state) => state.view)
  const dispatch = useDispatch()
  if (view === 'all') {
    return (
      <div className='view-btn'>
        <button onClick={() => dispatch(setLikedView())}>show liked</button>
      </div>
    )
  }
  return (
    <div className='view-btn'>
      <button onClick={() => dispatch(setAllView())}>show all </button>
    </div>
  )
}
