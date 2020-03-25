import React from "react";

import API from "../api";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class SignUpForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // API.signIn(this.state).then(json =>
    //   this.props.signIn(json.username, json.token)
    // );
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Sign-up to FoodFind
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  type="text"
                  name="first_name"
                  placeholder="Enter first name"
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  type="text"
                  name="last_name"
                  placeholder="Enter last name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Input
                fluid
                icon="mail"
                type="text"
                name="email"
                iconPosition="left"
                placeholder="Enter email"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="user"
                type="text"
                name="username"
                iconPosition="left"
                placeholder="Enter username"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                type="password"
                name="password"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
              />

              <Button
                color="teal"
                fluid
                size="large"
                type="submit"
                value="Sign Up"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/sign-in">Sign In </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
export default SignUpForm;
