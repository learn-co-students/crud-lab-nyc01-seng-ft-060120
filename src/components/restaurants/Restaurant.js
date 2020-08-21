import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick = {() => this.props.removeRestaurant(restaurant.id)}> X </button>
          <button onClick = {() => this.props.changeName(restaurant.id)}> Change Name </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;