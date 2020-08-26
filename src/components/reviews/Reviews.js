import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux'

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.filter(review => review.restaurantId===this.props.restaurant.id).map(review => <Review key={review.id} delete={() => this.props.deleteReview(review.id)} review={review}/>)}
      </ul>
    );
  }
};

const mapStateToProps = state => ({
  reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
  deleteReview: (reviewId) => dispatch({type:'DELETE_REVIEW', reviewId})
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)