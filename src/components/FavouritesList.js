import React, { Component } from "react";
import FavouriteCard from "./FavouriteCard.js";
import { Card } from "semantic-ui-react";

class FavouritesList extends Component {
  generateFavouriteCards = () => {
    const { restaurants } = this.props;
    return restaurants.map(restaurant => (
      <FavouriteCard
        restaurant={restaurant}
        key={restaurant.id}
        removeFav={this.props.removeFav}
      />
    ));
  };
  render() {
    return (
      <Card.Group itemsPerRow={4}>{this.generateFavouriteCards()}</Card.Group>
    );
  }
}
export default FavouritesList;
