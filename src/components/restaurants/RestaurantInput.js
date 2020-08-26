import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {
  state = {name:""}
  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={e => {
          e.preventDefault()
          this.props.addRestaurant(this.state.name)
        }}>
          <input type="text" value={this.state.name} onChange={e => {
            e.persist()
            this.setState(()=> ({name:e.target.value}) )
          }}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addRestaurant: (restaurant) => dispatch({type:'ADD_RESTAURANT', restaurant})
})

export default connect(null, mapDispatchToProps)(RestaurantInput);
