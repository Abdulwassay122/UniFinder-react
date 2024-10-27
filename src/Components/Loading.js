import React from 'react'
import spinner from './img/Spinner-2.gif'

export default function Loading () {
  return (
    <div className='text-center'>
      <img src={spinner} alt="Loading"/>
    </div>
  )
}
