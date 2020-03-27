import React, { Component } from "react";
import { Button, Form, Dropdown, Icon } from "semantic-ui-react";

class Search extends Component {
  generateCuisines() {
    const cuisines = this.props.cuisines;

    return cuisines.map(cuisine => ({
      key: cuisine.cuisine.cuisine_name,
      text: cuisine.cuisine.cuisine_name,
      value: cuisine.cuisine.cuisine_id
    }));
  }
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Group>
          <Dropdown
            placeholder="Search by cuisine..."
            fluid
            search
            selection
            options={this.generateCuisines()}
            onChange={this.handleChange}
          />

          <Button color="teal" fluid size="medium" type="submit">
            <Icon name="search" />
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default Search;
