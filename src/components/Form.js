import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input
          type="text"
          name="city"
          placeholder="city..."
          className="search-input"
        />
        <input
          type="text"
          name="country"
          placeholder="country..."
          className="search-input"
        />
        <button type="submit" className="submit-button">
          Get Weather
        </button>
      </form>
    );
  }
}

export default Form;
