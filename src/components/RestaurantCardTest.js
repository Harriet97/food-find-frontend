import React from "react";
import { Button, Icon } from "semantic-ui-react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class RestaurantCardTest extends React.Component {
  render() {
    const { restaurant } = this.props;
    return (
      <Card>
        <div id="container">
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
          {/* <Button attached="bottom">Bottom</Button> */}
          <Button.Group attached="bottom">
            <Button as={Link} to="/restaurants/:id">
              <Icon name="plus circle" />
              More Info
            </Button>
            <Button content="Favourite" color="red" icon="heart"></Button>
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