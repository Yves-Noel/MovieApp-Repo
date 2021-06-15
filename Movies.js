import React from 'react';
import './Movies.css';

/**
 * The purpose of the Movies component is to represent how a movie result in the Filmo search app will be formatted and styled.
 * The movies component defines what the expected results are and their order.
 */

const Movies = ({data, Title}) => {
    return(
        <div className="Movie Results">
            {data&& Title.map(result =>{
                return(<div>
                    <img src={result.Poster} width={'200px'} height={'200px'} alt={`${result.Title}`} />
                    <h1>Movie Title: {result.Title}</h1>
                    <h2>Release Date: {result.Released}</h2>
                    <h3>Runtime: {result.Runtime}</h3>
                    <h4>Genre: {result.Genre}</h4>
                    <h5>Director: {result.Director}</h5>
                    <h6>IMDB Rating: {result.imdbRating}</h6>
                    </div>
                )
            })}
        </div>
    )
}

export default Movies;