import React from "react";
import { Card } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

class RestaurantCard extends React.Component {
  state = {
    showDeets: false
  };

  showDeetsToggle = () => {
    this.setState({
      showDeets: !this.state.showDeets
    });
  };

  render() {
    const { restaurant } = this.props;

    if (this.state.showDeets) {
      return (
        <Card color="teal" onClick={this.showDeetsToggle}>
          <h1>{restaurant.name}</h1>
          {/* Have a clickable url to restaurant via restaurant.url */}

          <h4>You can find me: {restaurant.location.address}</h4>
          {/* google maps image? */}

          <h4>
            Average cost for two people: {restaurant.average_cost_for_two}
          </h4>

          <h4>
            Rated: {restaurant.user_rating.aggregate_rating}/10 and "
            {restaurant.user_rating.rating_text}" by{" "}
            {restaurant.user_rating.all_reviews_count} many users
          </h4>
        </Card>
      );
    } else {
      return (
        <Card onClick={this.showDeetsToggle}>
          <Image
            alt="restaurant pic"
            src={restaurant.featured_image}
            size="medium"
            bordered
          />
          <h1>{restaurant.name}</h1>
          {/* Have a clickable url to restaurant via restaurant.url */}
        </Card>
      );
    }
  }
}

export default RestaurantCard;
//This is the code if we want to display more info below
// {this.state.showDeets && (
//     <div>
//       <span>
//         Address:
//         {restaurant.location.address}
//         google maps image?
//       </span>
//       <br></br>
//       <span>
//         Average cost for 2:
//         {restaurant.average_cost_for_two}
//       </span>
//       <span>
//         {" "}
//         Rating:
//         {restaurant.user_rating.aggregate_rating}
//         {restaurant.user_rating.rating_text}
//         by
//         {restaurant.user_rating.all_reviews_count}
//         many users
//       </span>
//     </div>
//   )}
