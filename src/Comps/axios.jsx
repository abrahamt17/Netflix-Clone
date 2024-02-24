// // using Axios ❌


//       import axios from "axios"
//       import { useEffect, useState } from "react"
//        import Requests from "./requests"
      
// const Main= ()=>{
//   const [movies, setmovies]= useState([])
//   const movie= movies[Math.floor(Math.random()*movies.length)]
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