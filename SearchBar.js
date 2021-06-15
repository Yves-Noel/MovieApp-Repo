import React from 'react';
import './Searchbar.css';

/**
 * The purpose of the search bar component is to search for movies in the app.
 * Home to the search buttons.
 */

class SearchBar extends React.Component{

    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-fields" >
                    <form onSubmit={this.props.handleSubmit}>
                        <input placeholder="Movie Title" name='Title'onChange={(e)=>this.props.handleChange(e, 'Title')}/>
                        <button >Search Movies</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;