import React, { Component } from 'react';
import Reviews from './Reviews';
import { connect } from 'react-redux'

class ReviewInput extends Component {

  state={name:""}
  render() {
    console.log(this.props)
    return (
      <div>
        Review Input
        <form onSubmit={e => {
          e.preventDefault()
          this.props.addReview(this.state.name, this.props.restaurant.id)
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
  addReview: (text, restaurantId) => dispatch({type:'ADD_REVIEW', review:{text, restaurantId}})
})

export default connect(null, mapDispatchToProps)(ReviewInput);
