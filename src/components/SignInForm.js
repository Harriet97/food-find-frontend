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
            Log-in to your account
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
            New to us? <Link to="/sign-up">Sign Up </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignInForm;
