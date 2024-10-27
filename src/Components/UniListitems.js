import React from 'react'
import png from './img/external-link.png'
export default function UniListitems(props) {
  
    let {universityName, uniWebsite, country, number, state} = props
    
    
  return (
    <div className={`flex justify-center`}>
      <div className='flex flex-row w-[90%] text-xl justify-center bg-gray-200 '>
      <div className='border-solid border-b-2 border-x-2 border-black w-[10%] flex px-5 py-3 justify-center items-center'>{number}</div>
      <div className='border-solid border-b-2 border-r-2 border-black w-[100%] flex px-5  py-3 items-center'>{universityName}</div>
      <div className='border-solid border-b-2 border-r-2 border-black w-[30%] flex px-5 py-3 justify-center items-center'>{country}</div>
      <div className='border-solid border-b-2 border-black w-[30%] flex px-5 py-3 justify-center items-center'>{state===null?'N/A':state}</div>
      <div className='border-solid border-b-2 border-x-2 border-black w-[20%] flex px-5 py-3 justify-center items-center'><a target='_blank' rel="noreferrer" className='flex' href={uniWebsite}>Visit Site <img className='h-4 mx-1 my-2' src={png} alt="" /></a></div>
    </div>
    </div>
  )
}
