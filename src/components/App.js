import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  async onSearchSubmit(term) {
    
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      
      params: {
        query: term
      },
      
      headers: {
        Authorization: 'Client-ID GMhs1qomdV6WYuHa4fglVXW7bEBNOzvdX-FpRKD0El8'
      }
      
    })

    console.log(response.data.results);
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