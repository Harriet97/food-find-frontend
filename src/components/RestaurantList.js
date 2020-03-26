import React, { Component } from "react";
import RestaurantCardTest from "./RestaurantCardTest";
import { Card } from "semantic-ui-react";

class RestaurantList extends Component {
  generateRestaurantCards = () => {
    const { restaurants } = this.props;
    console.log(restaurants);
    return restaurants.map(restaurant => (
      <RestaurantCardTest
        restaurant={restaurant.restaurant}
        key={restaurant.restaurant.id}
        addFav={this.props.addFav}
        loggedIn={this.props.loggedIn}
        alreadyFav={this.props.favRestaurants.filter(favRestaurant => favRestaurant.zomato_id == restaurant.restaurant.id).length >=1}
      />
    ));
  };
  render() {
    return (
      <Card.Group itemsPerRow={4}>{this.generateRestaurantCards()}</Card.Group>
    );
  }
}
export default RestaurantList;
