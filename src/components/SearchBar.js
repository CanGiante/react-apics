import React from 'react';

class SearchBar extends React.Component {

  // onInputClick() {

  //   console.log('Input was clicked');
  // }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form"> 
          <div className="field">

            <label>Image Search</label>
            <input 
              type="text" 
              onChange={(event) => console.log(event.target.value)}
              // onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;