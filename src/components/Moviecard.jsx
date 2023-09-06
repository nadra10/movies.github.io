import React from 'react';

const Moviecard = ({movie, type}) => {
    const loaded = () => {
        return (
            <div className='moviecard'>
<img src={movie.Poster} alt= {movie.Title}></img>
            </div>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }

    return (
movie ? loaded() : loading()
       
    );
}

export default Moviecard;
