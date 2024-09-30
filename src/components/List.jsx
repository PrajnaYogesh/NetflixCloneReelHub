import React from 'react'
import EachCategory from './EachCategory'

function List({movies,setSelectedMovies}) {
    const handleRemove = (movieToRemove) => {
        setSelectedMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== movieToRemove.id)
        );
      };

  return (
    <EachCategory topic={`My List`} rowList={movies} onRemove={handleRemove}/>
  )
}

export default List