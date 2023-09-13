import React, { useState, useEffect } from 'react';
import Moviecard from '../moviecard/Moviecard';






const Home = () => {

    const apiKey = "c3f9fa646764b2c15f2c65f130d65f76";
    const [popular, setPopular] = useState([]);

 

    const getPopular = async () => {

        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
        
        const data = await response.json();
        setPopular(data.results);
        console.log(popular)
      } 

    

    

    useEffect(() => {
      getPopular();
    }, []);

const movieList = popular.map(movie=> (
  <Moviecard movie={movie} />
))

    // const getPopular = async () => {

    //     const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=19303`);
        
    //     const data = await response.json();
    //     setPopular(data.results);
    //     console.log(popular);
    //   } 

    //   useEffect(() => {
    //     getPopular();
    //   }, []);
   

return (
  <div>
      {movieList}
  </div>
);
};





export default Home;
