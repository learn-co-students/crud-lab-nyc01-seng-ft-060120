import React, { Component } from 'react';
import {connect} from 'react-redux'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants Component
        {this.props.restaurants.map(rest => <Restaurant delete={()=> this.props.deleteRestaurant(rest.id)} key={rest.id} restaurant={rest}/>)}
      </ul>
    );
  }
};

const mapStateToProps = state => (
  {restaurants: state.restaurants}
)

const mapDispatchToProps = dispatch => (
  {
    deleteRestaurant: (restaurantId) => dispatch({type:'DELETE_RESTAURANT', restaurantId })
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);