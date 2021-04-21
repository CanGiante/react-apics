import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  state =
  {

    images: [],

  }

  onSearchSubmit(term) {
    
    axios
    .get('https://api.unsplash.com/search/photos', {
      
      params: {
        query: term
      },
      
      headers: {
        Authorization: 'Client-ID GMhs1qomdV6WYuHa4fglVXW7bEBNOzvdX-FpRKD0El8'
      }
      
    })
    .then(response => {

      this.setState({ images: response.data.results });
    });

  }

  render() {

    return (
      <div 
        className="app ui container"
        style={{marginTop:'16px'}}
      >
        
        <SearchBar onSubmit={this.onSearchSubmit}/>
    
        Found: {this.state.images.length}
    
    
      </div>
    );
  }
}

export default App;