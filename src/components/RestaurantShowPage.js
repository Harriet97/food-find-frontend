import React from "react";
import {
  Icon,
  Image,
  Statistic,
  Header,
  Grid,
  Segment,
  Divider,
  Button,
  Search
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class RestaurantShowPage extends React.Component {
  render() {
    const { restaurant } = this.props;
    return (
      <div style={{ padding: "70px" }}>
        <Segment placeholder>
          <Grid columns={2} stackable>
            <Grid.Row verticalAlign="middle">
              <Grid.Column textAlign="center">
                <Statistic>
                  <Statistic horizontal>
                    <Statistic.Value>{restaurant.name}</Statistic.Value>
                  </Statistic>
                </Statistic>
                <Image src={restaurant.featured_image} size="large" centered />
                <h3 centered>
                  <Icon name="food" />
                  {restaurant.establishment} - {restaurant.cuisines}
                </h3>
                <Statistic>
                  <Statistic horizontal>
                    <Statistic.Value>
                      <Icon name="star" color="yellow" />
                      {restaurant.user_rating.aggregate_rating}
                    </Statistic.Value>
                    <Statistic.Label>
                      {" "}
                      / 5 {""} by {restaurant.user_rating.votes} users
                    </Statistic.Label>
                  </Statistic>
                </Statistic>
              </Grid.Column>

              <Grid.Column>
                <h2>Find us:</h2>
                <Image bordered size="big" alt="google maps image here" />
                <h3>
                  <Icon name="location arrow" />
                  {restaurant.location.address}
                </h3>

                <h3>
                  <Icon name="phone" /> {restaurant.phone_numbers}
                </h3>
                {/* <h2>Opening Hours:</h2> */}
                <h3>
                  <Icon name="clock" />
                  {restaurant.timings}
                </h3>

                <h3>Highlights:</h3>
                {restaurant.highlights.map(hl => (
                  <li>{hl}</li>
                ))}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default RestaurantShowPage;
