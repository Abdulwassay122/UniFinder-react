import React,{useEffect, useState} from 'react'
import UniListitems from './UniListitems'
import Loading from './Loading'

export default function UniversityList(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [inputCount, setInputCount] = useState('Pakistan')

    
    useEffect(() => {
      updatelist()
    },[]);
    // const updatelist = async () =>{
    //   setLoading(true)
    //   let url = `http://universities.hipolabs.com/search?country=pakistan`
    //   let data = await fetch(url)
    //   let parsedData = await data.json()
    //   setArticles(parsedData)
    //   setLoading(false)
    // }
    const updatelist = async () =>{
      props.setProgress(10)
      setLoading(true)
      const country = document.getElementById('myInput').value
      setInputCount(country)
      let url = `http://universities.hipolabs.com/search?country=${country.toLowerCase()}`
      let data = await fetch(url)
      props.setProgress(40)
      props.setProgress(50)
      props.setProgress(60)
      let parsedData = await data.json()
      props.setProgress(70)
      setArticles(parsedData)
      setLoading(false)
      console.log(parsedData.length)
      props.setProgress(100)
      if(parsedData.length===0){
        setError(true)
      }else{setError(false)}
    }
    const capitalizeFirstLetter =(string)=>{
      let first = string.charAt(0)
      let rem = string.slice(1)
      return first.toUpperCase()+rem.toLowerCase()
    }
  return (
    
    <div >
      <div className='pb-20'>
      <h1 className='text-3xl font-semibold flex justify-center mt-5'>
        Find Universities All Over The World
      </h1>
      <div className='flex justify-center'>
        <input
          id='myInput'
          className='Input rounded-full bg-[#cecece] h-12 w-3/6 flex justify-center mt-6 outline-none pl-7'
          type='text'
          placeholder='Enter Your Country Name'
          aria-label='countryname'
        />
      </div>
      <div className='flex justify-center'>
        <button onClick={updatelist}  className='bg-[#127533] text-white rounded-full py-1.5 px-4 mt-3'>
          Search
        </button>
      </div>
    </div>
      <h1 className={`text-4xl flex justify-center items-center font-bold m-5  ${error===false?'block':'hidden'}`}>Universities  {capitalizeFirstLetter(inputCount)===""?capitalizeFirstLetter(inputCount):`in ${capitalizeFirstLetter(inputCount)}`}</h1>
      <p className={`flex justify-center text-red-700  text-2xl ${error===true?'block':'hidden'}`}>Incorrect Spelling!</p>
      <div className='flex justify-center'>
      {loading && <Loading/>}
      </div>
      <div className={`flex justify-center ${!error&&loading===false?'block':'hidden'}`}>
      <div className='flex flex-row w-[90%] text-xl font-bold justify-center'>
      <h3 className='justify-center border-solid border-y-2 border-x-2 border-black w-[10%] flex px-5 py-3 items-center'>No.</h3>
      <h3 className='border-solid border-y-2 border-r-2 border-black w-[100%] flex px-5 py-3 items-center'>University Name</h3>
      <h3 className='justify-center border-solid border-y-2 border-r-2 border-black w-[30%] flex px-5 py-3 items-center'>Country</h3>
      <h3 className='justify-center border-solid border-y-2 border-black w-[30%] flex px-5 py-3 items-center'>State/Province</h3>
      <h3 className='justify-center border-solid border-y-2 border-x-2 border-black w-[20%] flex px-5 py-3 items-center'>Website</h3>
    </div>
    </div>
        {!loading && 
        articles.map((element, index)=>{
            return(
                <UniListitems
                key={index}
                number={index + 1}
                universityName={element.name}
                uniWebsite={element.web_pages}
                country={element.country}
                state={element["state-province"]}
                />
            )
        })}

    </div>
  )
}


