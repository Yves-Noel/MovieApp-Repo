import React from 'react';
import './MovieList.css';

/**
 * The purpose of the MovieList component is to simulate what a returned list of movies would lokk like in the filmo search app (after querying the OMDB API)
 * To help this simulation, the MovieList wull make use of the Movies component repeatedly.
 */

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMovie: [],
        };
    }

    handleClick=(e, title)=>{
        e.preventDefault()

        fetch(`https://www.omdbapi.com/?i=tt3896198&t=${title}}&apikey=5af2f3d1`)
        .then(response => {
            return response.json()
        })
        .then(response => {
            this.setState({dataMovie: response})
        })
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        const {dataMovie} = this.state
        return(
            <div className="movie-container">
                {this.props.Movies.map((item, i) => (
                    <div className="movie-list" key={i}>
                        <h1 className="title">{item.Title} - <span>{item.Year}</span></h1>
                        <img src={item.Poster} width={'200px'} height={'200px'} alt={`${item.Title}`} onClick={(e)=>this.handleClick(e, item.Title)} />
                        {dataMovie.imdbID === item.imdbID ? <div className="results-container">
                            <p className="temp-date"> Synopsis: {dataMovie.Plot}</p>
                            <h2 className="temp-date"> Release Date: {dataMovie.Released}</h2>
                            <h3 className="temp-date"> Runtime: {dataMovie.Runtime}</h3>
                            <h4 className="temp-date"> Genre: {dataMovie.Genre}</h4>
                            <h5 className="temp-date"> Director: {dataMovie.Director}</h5>
                            <h6 className="temp-date"> IMDB Rating: {dataMovie.imdbRating}</h6>
                        </div>:
                        null}
                    </div>
                ))}
            </div>
        )
    }
}

export default MovieList;
