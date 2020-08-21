import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

// Import the action from the action folder
import {
  addRestaurant,
  removeRestaurant,
  changeName,
} from "../actions/restaurantActions";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          removeRestaurant={this.props.removeRestaurant}
          changeName={this.props.changeName}
        />
      </div>
    );
  }
}

// Grab the restaurants from the Store and assign to this component through props
const mapStateToProps = (state) => ({ restaurants: state.restaurants });

// Bind all the above together to this component
export default connect(mapStateToProps, {
  addRestaurant,
  removeRestaurant,
  changeName,
})(RestaurantsContainer);

// Define mapStateToProps here and the actions here

/*
Connect -> Redux Store
Component -> Action -> Reducer -> Render
Actions -> Reducer
Reducer -> Manipulates the Component States
Dispatch -> Persist Component Changes
*/
