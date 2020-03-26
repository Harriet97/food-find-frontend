import React from "react";
import { Button, Icon } from "semantic-ui-react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class RestaurantCardTest extends React.Component {
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
            <Button as={Link} to={`/restaurants/${restaurant.id}`}>
              <Icon name="plus circle" />
              More Info
            </Button>

            <Button disabled={!this.props.loggedIn || this.props.alreadyFav} content="Favourite" color="red" icon="heart" onClick={() => this.props.addFav(restaurant)}></Button>

          </Button.Group>
        </Card.Body>
      </Card>
    );
  }
}

export default RestaurantCardTest;
{
  /* <Card>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>; */
}
