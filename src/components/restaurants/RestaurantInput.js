import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
  };

  onChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Restaurant Name"
            type="text"
            onChange={this.onChange}
            name="text"
            value={this.state.text}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
