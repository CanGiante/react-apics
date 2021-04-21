import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  onSearchSubmit(term) {
    
    
    axios.get('https://api.unsplash.com/search/photos', {
      
      params: {
        query: term
      },
      
      headers: {
        Authorization: 'Client-ID GMhs1qomdV6WYuHa4fglVXW7bEBNOzvdX-FpRKD0El8'
      }
      
    });
    console.log(term);
  }

  render() {

    return (
      <div 
        className="app ui container"
        style={{marginTop:'16px'}}
      >
        
        <SearchBar onSubmit={this.onSearchSubmit}/>
    
        app
    
    
      </div>
    );
  }
}

export default App;