 const key = '6f5e01769ab005ec8e71fba9f977b156'
 const baseurl = 'https://api.themoviedb.org/3'

 // const Requests = [{
 //         "id": 1,
 //         "title": "Abebe",
 //         "overview": "Sure break down the code into three parts the main component the individual movie componentand the movie details componentMovieDetails",
 //         "releasedate": 4 / 14 / 2009,
 //         "img":

 //     },
 //     {
 //         "id": 1,
 //         "title": "kleebe",
 //         "overview": "Sure break down the code into three parts the main component the individual movie componentand the movie details componentMovieDetails",
 //         "releasedate": "10/14/2002"
 //     },
 //     {
 //         "id": 3,
 //         "title": "alemu",
 //         "overview": "Sure break down the code into three parts the main component the individual movie componentand the movie details componentMovieDetails",
 //         "releasedate": "4/11/2022"
 //     }
 // ]
 // export default Requests;

 const Requests = {
     requestpopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
     requesttoprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
     requesttrending: `https://api.themoviedb.org/3/movie/popular?api_key=6f5e01769ab005ec8e71fba9f977b156&append_to_response=images`,
     requesthorror: `https://api.themoviedb.org/3/movie/popular?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page=2&query=horror&page=1&append_to_response=images`,
     requestupcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page=1&append_to_response=images`,

 }




 export default Requests;


 //     requesttoprated: `https://api.themoviedb.org/3/movie/toprated?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page=1`,
 //     requesthorror: `https://api.themoviedb.org/3/movie/popular?api_key=6f5e01769ab005ec8e71fba9f977b156&append_to_response=images`,
 //     requesthot: `https://api.themoviedb.org/3/movie/movie?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page=2&query=horror&page=1append_to_response=images`,
 //     requestupcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page-1&append_to_response=images`,

 // }

 // export default Requests;


 // import axios from 'axios';

 // const instance = axios.create({
 //     baseURL: 'https://api.themoviedb.org/3',
 // });

 // export const fetchPopularMovies = () => instance.get('/movie/popular?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page=1');
 // export const fetchTopRatedMovies = () => instance.get('/movie/toprated?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page=1');
 // export const fetchHorrorMovies = () => instance.get('/movie/popular?api_key=6f5e01769ab005ec8e71fba9f977b156&append_to_response=images');
 // export const fetchHotMovies = () => instance.get('/movie/movie?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page=2&query=horror&page=1append_to_response=images');
 // export const fetchUpcomingMovies = () => instance.get('/movie/upcoming?api_key=6f5e01769ab005ec8e71fba9f977b156&language=en-US&page-1&append_to_response=images');