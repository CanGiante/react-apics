import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  onSearchSubmit(term) {
    // console.log(term);


    axios.get('', {
      
    });
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