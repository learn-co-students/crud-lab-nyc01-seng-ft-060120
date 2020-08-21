import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            changeName={this.props.changeName}
            restaurant={restaurant}
            removeRestaurant={this.props.removeRestaurant}
          />
        ))}
      </ul>
    );
  }
}

export default Restaurants;
