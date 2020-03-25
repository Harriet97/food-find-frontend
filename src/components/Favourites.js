import React, { Component } from 'react'
import FavouritesList from "./FavouritesList";

export default class Favourites extends Component {
    render() {
        return (
            <div style={{ padding: "70px" }}>
            <FavouritesList restaurants={this.props.favourites} />
          </div>
        )
    }
}
