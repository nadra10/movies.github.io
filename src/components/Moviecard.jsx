

export default function  Moviecard ({movie}) {
console.log(movie)
    //function to return loaded JSX
    const loaded = () => {
       
     return (
         <div>
     <h1>{movie.title}</h1>
     <h2>{movie.genre_ids}</h2>
     <p>{movie.overview}</p>
     <img src={movie.poster_path} alt={movie.title} />
     <h2>{movie.release_date}</h2>
     </div>
     )
   }

 
 const loading = () => {
     return <h1>No Movie to Display</h1>
 }
 return movie ? loaded() : loading();
 }
 



























// import React from 'react';

// const Moviecard = ({movie, type}) => {
//     const loaded = () => {
//         return (
//             <div className='moviecard'>
// <img src={movie.Poster_path} alt= {movie.title}></img>
//             </div>
//         )
//     }

//     const loading = () => {
//         return <h1>No Movie to Display</h1>
//     }

//     return (
// movie ? loaded() : loading()
       
//     );
// }

// export default Moviecard;
