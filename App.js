import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import './Components/SearchBar/Searchbar.css';
import MovieList from './Components/MovieList/MovieList';
import Pagination from './Components/Pagination/Pagination';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Movies: [],
      Query: '',
      totalResults: 0,
      currentPage: 1,
    };
  }

  handleChange=(e, name) =>{
    const value = e.target.value;
    this.setState({Query:value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log('test')

    fetch(`https://www.omdbapi.com/?s=${this.state.Query}&apikey=5af2f3d1`)
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({Movies: response.Search, totalResults: response.totalResults})
    })
    .catch(err => {
      console.error(err);
    });
  }

  //This method supports the pagination feature in that it traverses through the api every time the pages are being clicked.
  nextPage = (e, pageNumber) => {
    e.preventDefault()

    fetch(`https://www.omdbapi.com/?s=${this.state.Query}&apikey=5af2f3d1&page=${pageNumber}`)
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({Movies: response.Search, currentPage: pageNumber})
      console.log(response)
    })
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    //This component ensures that the movie results are shown in batches of 10.
    const numberOfPages = Math.floor(this.state.totalResults / 10);
    console.log(this.state.totalResults, numberOfPages, this.state.currentPage)

    return(
      <div className="App">
        <h1>FILMO SEARCH</h1>
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchOMDB={this.searchOMDB} />
        {this.state.Movies && <MovieList Movies={this.state.Movies}/>}
        {this.state.totalResults > 10 ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
      </div>
    );
  }
}


export default App;