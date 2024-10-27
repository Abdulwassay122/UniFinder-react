import React from 'react'
import facebool from './img/facebook.png'
import instagram from './img/instagram.png'
import linkdun from './img/linkedin.png'
import github from './img/github.png'

export default function Footer() {
  return (
    <>
      <footer className='flex flex-row bg-gray-500'>
      <div className='flex flex-row justify-start h-12 w-full items-center mx-10'>
        <div className='flex items-center mt-1.5'>
            Copyright © 2024 aw122598@gmail.com —@Abdul Wassay
        </div>
        
      </div>
      <div className='flex flex-row justify-end   h-14 w-full items-center mx-6'>
        
        <div className='flex flex-row justify-end '>
            <a target='_blank' href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-6 mx-2' src={facebool} alt="" /></a>
            <a target='_blank' href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-6 mx-2' src={linkdun} alt="" /></a>
            <a target='_blank' href="https://www.instagram.com/wassay122/"><img className='h-6 mx-2' src={instagram} alt="" /></a>
            <a target='_blank' href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-6 mx-2' src={github} alt="" /></a>
        </div>
      </div>
      </footer>
    </>
  )
}
