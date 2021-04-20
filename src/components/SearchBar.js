import React from 'react';

class SearchBar extends React.Component {

  state = 
  {

    term: '',

  }

  onFormSubmit(event) {
    event.preventDefault(); // I want override the default submit
    console.log(this.state.term); // TypeError: can't access property "state", this is undefined
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> 
          <div className="field">

            <label>Image Search</label>
            <input 
              type="text"

              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;