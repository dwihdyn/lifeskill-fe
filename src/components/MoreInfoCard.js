import React, { Component } from "react";
import Axios from "axios";
import { Button, Card } from "react-bootstrap";

class MoreInfoCard extends Component {
  state = {
    isFavourite: false
  };

//  function to change state to True and update it to db via axios POST request

  handleClick = e => {
      this.setState ({
        isFavourite = true
      })
      axios.post('/user', {
        favourited: this.state.isFavourite,
      })
      .then(function (response) {
        console.log(response); 
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick = { this.handleClick } variant="primary">Add to favourites</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MoreInfoCard;
