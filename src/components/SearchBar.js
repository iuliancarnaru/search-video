import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const { onFormSubmit } = this.props;
    const { term } = this.state;

    onFormSubmit(term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="term">Video Search</label>
            <input
              type="text"
              id="term"
              name="term"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
