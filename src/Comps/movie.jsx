import React from 'react'
import { useState } from 'react'

import star from './bootstrap-5.3.2-dist/start.png'
const Movie=({item})=> {
    const [like, setlike]=useState(false);


    
  return (
    
      <div className='w-[160px]  sm:w[200px] md:w-[240px] h-full lg:w-[260px] inline-block cursor-pointer relative '>
                  
                  <img  className='w-full  h-auto object-fit clock'   src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                  
                     <div className='absolute justify-center top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                         <p className='white-space-normal top-20 flex  text-xl md:text-sm font-bold items-center flex justify-center h-full text-center'>{item?.title}</p>
                     <div className='like'>
                    
                    {like ? <img src={star} className="absolute top-2 w-[30px] text-gray-300"/>: <img src={star} className="absolute top-2 w-[30px] text-gray-300"/>}
                     </div>
                     </div>
                 </div>
   
  )
}

export default Movie;
