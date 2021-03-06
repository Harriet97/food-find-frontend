import React from "react";
import { Button, Icon } from "semantic-ui-react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class FavouriteCard extends React.Component {
  render() {
    const { restaurant } = this.props;
    return (
      <Card>
        <div id="imageContainer">
          <Card.Img
            variant="top"
            alt="restaurant pic"
            src={restaurant.featured_image}
            className="image"
          />
        </div>
        <Card.Body variant="bottom">
          <Card.Title style={{ textAlign: "center" }}>
            {restaurant.name}
          </Card.Title>
          <Button.Group attached="bottom">

          <Button as={Link} to={`/restaurants/${restaurant.zomato_id}`}>

              <Icon name="plus circle" />
              More Info
            </Button>
            <Button
              content="Remove"
              color="green"
              icon="heart"
              onClick={() => this.props.removeFav(restaurant)}
            ></Button>
            {/* remove button not yet functional */}
          </Button.Group>
        </Card.Body>
      </Card>
    );
  }
}

export default FavouriteCard;
