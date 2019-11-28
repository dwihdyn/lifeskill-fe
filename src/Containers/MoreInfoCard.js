import React, { Component } from "react";
import axios from "axios";
import Slider from "../Components/SliderComponents";

// Hardcoded activity info
const activities = [
  {
    id: 100,
    image: "../assets/images/slide1.jpg",
    imageBg: "../assest/images/slide1b.webp",
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 101,
    image: "../assest/images/slide1.jpg",
    imageBg: "../assest/images/slide1b.webp",
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 102,
    image: "../assest/images/slide1.jpg",
    imageBg: "../assest/images/slide1b.webp",
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 103,
    image: "../assest/images/slide1.jpg",
    imageBg: "../assest/images/slide1b.webp",
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 104,
    image: "../assest/images/slide1.jpg",
    imageBg: "../assest/images/slide1b.webp",
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 105,
    image: "../assest/images/slide1.jpg",
    imageBg: "../assest/images/slide1b.webp",
    title: "Some Activity",
    title1: "asdasd",
    content: "qweqweqe"
  }
];

// Hardcoded clubs info
const clubs = [
  {
    id: 1,
    image: "../assest/images/slide1.jpg",
    imageBg: "../assest/images/slide1b.webp",
    title: "The result",
    title1: "The result",
    title2: "The result",
    content: "1 is uuuu"
  },
  {
    id: 2,
    image: "../assest/images/slide2.jpg",
    imageBg: "../assest/images/slide2b.webp",
    title: "The project folder should .",
    title1: "T",
    title2: "The result",
    content: "2 is uuuu"
  },
  {
    id: 3,
    image: "../assest/images/slide3.jpg",
    imageBg: "../assest/images/slide3b.webp",
    title: "The rain",
    title1: "T",
    title2: "The result",
    content: "3 is uuuu"
  },
  {
    id: 4,
    image: "../assest/images/slide4.jpg",
    imageBg: "../assest/images/slide4b.webp",
    title: "Sex education",
    title1: "T",
    title2: "The result",
    content: "4 is uuuu"
  },
  {
    id: 5,
    image: "../assest/images/slide5.jpg",
    imageBg: "../assest/images/slide5b.webp",
    title: "Elite",
    title1: "T",
    title2: "The result",
    content: "5 is uuuu"
  },
  {
    id: 6,
    image: "../assest/images/slide6.jpg",
    imageBg: "../assest/images/slide6b.webp",
    title: "Black mirror",
    title1: "T",
    title2: "The result",
    content: "6 is uuuu"
  }
];

class MoreInfoCard extends Component {
  state = {
    isFavourite: false
  };

  //  function to change state to True and update it to db via axios POST request
  handleClickClub = e => {
    this.setState({
      isFavourite: true
    });
    axios
      .post("http://localhost:5000/api/v1/calendar/club/favourite", {
        favourited: this.state.isFavourite
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Clubs</h1>
        <Slider>
          {clubs.map(club => (
            <Slider.Item item={club} key={club.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
        <h1>Activities</h1>
        <Slider>
          {activities.map(activity => (
            <Slider.Item item={activity} key={activity.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );
    // return this.props.clubs.forEach(club => {
    //   console.log(club.name);
    //   console.log(club.description);
    // });
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img variant="top" src="holder.js/100px180" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //     {/* add name / id value in the button tag */}
    //       <Button onClick = { this.handleClick } variant="primary">Add to favourites</Button>
    //     </Card.Body>
    //   </Card>
  }
}

export default MoreInfoCard;
