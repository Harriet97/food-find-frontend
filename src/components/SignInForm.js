import React from "react";
import API from "../api";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { render } from "@testing-library/react";

class SignInForm extends React.Component {
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
    API.signIn(this.state).then(json =>
      this.props.signIn(json.username, json.token)
    );
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
            <Image src="/logo.png" /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
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
                type="password"
                onChange={this.handleChange}
              />

              <Button
                color="teal"
                fluid
                size="large"
                type="submit"
                value="Sign In"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignInForm;
