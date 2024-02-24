import React from "react";
// import PopularMoviesComponent from "./Main";
import Row from "./row";
import Requests from "./requests";
import Main from "./Main";
const Home = ()=>{
    return(
    <>
<Main/>

<Row title="Popular" fetchurl={Requests.requestpopular}/>
<Row title="Trending" fetchurl={Requests.requesttrending}/>
<Row title="Top-Rated" fetchurl={Requests.requesttoprated}/>  
 {/* <Row title="comedy" fetchurl={Requests.requestcomedy}></Row>  */}


</>
 )
}

export default Home;