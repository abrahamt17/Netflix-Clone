import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import Home from './Homee';
import Movie from './movie';
import './css.css'
import Requests from'./requests'

// import images from './imgs';
import movies from './constants';
function Row({title, fetchurl }) {
    const [movies, setMovies] = useState([]);
//  const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(fetchurl).then((response) => {
          setMovies(response.data.results);

        console.log(movies.length);
        //   setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
          
          // Save the fetched data in local storage
    //   localStorage.setItem('movies', JSON.stringify(response.data.results));
        });
     }, [fetchurl]);
    
  
    //  useEffect(() => {
    //     const storedMovies = localStorage.getItem('movies');
    //     if (storedMovies) {
    //       setMovie(JSON.parse(storedMovies));
    //       setMovie(JSON.parse(storedMovies)[Math.floor(Math.random() * JSON.parse(storedMovies).length)]);
    //     }
    //  }, []);
    
    // useEffect(()=>{
    //     axios.get(fetchurl).then((Response)=>{
    //         // Save the fetched data in local storage
    //         localStorage.setItem('movies', JSON.stringify(Response.data.results));
    //         setMovie(Response.data.results)
    //     })
    // },[fetchurl])

    

    return (
        <>    
            <h1 className=' text-white font-bold md:text-xl p-10'>{title}</h1>
            <div className='relative flex items-center text-white'>
                <div id={'slider'} className=' w-full scroll h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative'>
                     {movies.map((item, id)=>(
                    
                    <Movie key={id} item={item} />
                ))}
                
                </div>
               

                
            </div>
        </>
    )
}

export default Row;
