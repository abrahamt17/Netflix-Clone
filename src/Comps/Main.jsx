 import React, { useEffect, useState } from 'react';

// const PopularMoviesComponent = () => {
// const [movies, setMovies] = useState({ results: [] });

//  useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f5e01769ab005ec8e71fba9f977b156');
//         const moviesData = await response.json();
//         localStorage.setItem('movies', JSON.stringify(moviesData));
//         setMovies(moviesData);
//       } catch (error) {
//         console.error(`Error: ${error}`);
//       }
//     };

//     fetchMovies();
//  }, []);

//  useEffect(() => {
//     const storedMovies = localStorage.getItem('movies');
//     if (storedMovies) {
//       setMovies(JSON.parse(storedMovies));
//     }
//  }, []);

//  return (
//     <div>
//       {movies.results && Array.isArray(movies.results) ? (
//         movies.results.map(movie => (
//           <div key={movie.id}>
//             <h1>{movie.title}</h1>
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//  );
// };

// export default PopularMoviesComponent;



// import React, { useEffect, useState } from 'react';
// import MovieListItem from './movieitem';
// import MovieDetails from './details';

// const PopularMoviesComponent = () => {
//  const [movies, setMovies] = useState({ results: [] });
//  const [selectedMovieId, setSelectedMovieId] = useState(null);

//  useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch('');
//         const moviesData = await response.json();
//         localStorage.setItem('movies', JSON.stringify(moviesData));
//         setMovies(moviesData);
//       } catch (error) {
//         console.error(`Error: ${error}`);
//       }
//     };

//     fetchMovies();
//  }, []);

//  useEffect(() => {
//     const storedMovies = localStorage.getItem('movies');
//     if (storedMovies) {
//       setMovies(JSON.parse(storedMovies));
//     }
//  }, []);

//  return (
//     <div>
//       {selectedMovieId ? (
//         <MovieDetails movieId={selectedMovieId} />
//       ) : (
//         movies.results.map(movie => (
//           <MovieListItem key={movie.id} movie={movie} onSelect={setSelectedMovieId} />
//         ))
//       )}
//     </div>
//  );
// };

// export default PopularMoviesComponent;


//  const movie= movies[Math.floor(Math.random()*movies.length)]
//   useEffect(()=>{
//     axios.get(Requests.requestpopular).then((Response)=>{
//       setmovies(Response.data.results)
//     })
//   },[])
// console.log(movie)
// console.log("mf")

// return(
//   <div>
  
//       <h1>{movie?.title}</h1>
//       <p>{movie?.release_date}</p>
//       <p>{movie?.overview}</p>
//   </div>
// )


// }

// export default Main;



//❌
//using details component

// import React, { useEffect, useState } from 'react';
// import MovieListItem from './movieitem';
// import MovieDetails from './details';


// const PopularMoviesComponent = () => {
//    const [movies, setMovies] = useState({ results: [] });
//  const [selectedMovieId, setSelectedMovieId] = useState(null);

//  useEffect(() => {
//       const fetchMovies = async () => {
//           try {
//               const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f5e01769ab005ec8e71fba9f977b156');
//               const moviesData = await response.json();
//               localStorage.setItem('movies', JSON.stringify(moviesData));
//               setMovies(moviesData);
//             } catch (error) {
//                 console.error(`Error: ${error}`);
//               }
//             };
        
//             fetchMovies();
//          }, []);
        
//  useEffect(() => {
//     const storedMovies = localStorage.getItem('movies');
//     if (storedMovies) {
//         setMovies(JSON.parse(storedMovies));
//       }
//    }, []);
  
//    return (
//         <div>
//           {selectedMovieId ? (
//               <MovieDetails movieId={selectedMovieId} />
//             ) : (
//                 movies.results.map(movie => (
//                     <MovieListItem key={movie.id} movie={movie} onSelect={setSelectedMovieId} />
//                   ))
//                 )}
//               </div>
//            );
//           };
          
//           export default PopularMoviesComponent;
          
          
          
//try thissssssss❌


// import React, { useEffect, useState } from 'react';
// import { fetchPopularMovies } from './requests';

// const PopularMoviesComponent = () => {
//    const [movies, setMovies] = useState([]);
  
//    useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const response = await fetchPopularMovies();
//                 const moviesData = response.data;
//                 setMovies(moviesData);
//               } catch (error) {
//                   console.error(`Error: ${error}`);
//                 }
//               };
          
//               fetchMovies();
//            }, []);

//  return (
//     <div>
//       {movies.results && movies.results.length > 0 ? (
//           movies.results.map(movie => (
//               <div key={movie.id}>
//                 <h1>{movie.title}</h1>
//                 <p></p>
//                 <p>Release Date: {movie.release_date}</p>
//                 <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    
//             <p> {movie.ov}</p>
//               </div>
//             ))
//           ) : (
//               <p>Loading...</p>
//             )}
//           </div>
//        );
//       };
      
//       export default PopularMoviesComponent;
      
      



// using Axios ❌

import axios from "axios";
// import { useEffect, useState } from "react";
import Requests from "./requests";
import trial from './bootstrap-5.3.2-dist/templates/isometric-infographic-with-charts-people_52683-975.jpg'
import Images from "./constants";
import { images } from "./imgs";
import movies from "./constants";
const Main = () => {
  const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState(null);

 useEffect(() => {
    axios.get(Requests.requestpopular).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
      setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
      
      // Save the fetched data in local storage
       localStorage.setItem('movies', JSON.stringify(response.data.results));
    });
 }, []);

 // Load the data from local storage when the component mounts
//  useEffect(() => {
//     const storedMovies = localStorage.getItem('movies');
//     if (storedMovies) {
//       setMovies(JSON.parse(storedMovies));
//       setMovies(JSON.parse(storedMovies)[Math.floor(Math.random() * JSON.parse(storedMovies).length)]);
//     }
//  }, []);


///images

// const [currentimg, setcurrent]=useState()
// setcurrent(images)
// setcurrent(images[Math.floor(Math.random)*images.length])
// images(Math.floor(Math.random()*images.length))
// const randomindex=Math.floor(Math.random()*images.length)
    // const randomimage=images[randomindex];

// const changeimg=()=>{
//   const randomindex=Math.floor(Math.random()*images.length)
//   setcurrent(images[randomindex])
// }



//   const randomindex=Math.floor(Math.random()*movies.length);
  
//   console.log(randomindex)


// const randomimage=movies[randomindex]
const truncate=(str, num)=>{
  if(str?.length>num){
    return str.slice(0, num)+ '...';
  }else{
    return str;
  }
}


return (
//   <div>

// <img  className='w-full  h-full object-cover' 
//           src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`}  
//           alt={movies?.title} />
// <h1 classname='text-white'>{movies.title}</h1>

//           <p>Release Date: {movies?.release_date}</p>
//         <p> {movies?.overview}</p>

// </div>

<div className='w-full h-[550px] text-white'>
       <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"/>
        <img className='w-full  h-full object-cover'  src={`https://image.tmdb.org/t/p/w500${movies?.backdrop_path}`}  
          alt={movies?.title} />

    

      <div className="absolute w-full top-[20%] p-4  md:p-8">
        <h1 className=" text-3xl md:text-5xl text-white font-bold">{movies?.title}</h1>
    <div className="my-5">
    <button className="border  bg-gray-200  text-black border-gray-300 py-2 px-5">play</button>
    <button className="border text-white border-gray-300 py-2 px-5 ml-4">Watch later</button>
    </div>
    <p className="text-gray-400  text-sm">{movies?.release_date}</p>
    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncate(movies?.overview, 120) }</p>
    </div>
      </div>  
       </div>
          

            
             
              
               
            
              
              
             
          
          
 );
};

export default Main;

    
















//images by random


// const [images , setimages]= useState([])
    // useEffect(()=>{
    //   fetch('/images.json')
    //   .then((response)=>response.json())
    //   .then((data)=>setimages(data.images));
    // },[])
    // console.log(images.length)
    // const randomindex=Math.floor(Math.random()*images.length)
    // const randomimage=images[randomindex];
    // console.log(randomindex)