import React from "react";
import axios from "axios";

import { Button, ButtonToolbar, Carousel, Card, Row, Col, CarouselItem } from 'react-bootstrap';
import { CardSubtitle } from "react-bootstrap/Card";
// import MoreInfoCard from "../Containers/MoreInfoCard";

class HomePage2 extends React.Component {
  state = {
    student_id: 2,
    clubs: [],
    activities: [],
    isLoadingClub: true,
    isLoadingAct: true
  };

  handleClick = (category_id, student_id, category, index) => {
    axios
      .post(`http://localhost:5000/api/v1/calendar/${category}/favourite`, {
        student_id: student_id,
        category_id: category_id
      })
      .then(response => {

        let copy = [...this.state[category]]
        copy[index].fav = !copy[index].fav

        this.setState({
          [category]: [...copy]
        });
       
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/calendar/clubs")
      .then(response => {
        // console.log(response);
        this.setState({
          clubs: response.data,
          isLoadingClub: false
        });
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/api/v1/calendar/activities")
      .then(response => {
        // console.log(response);
        this.setState({
          activities: response.data,
          isLoadingAct: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let clubsMatrix = []
    for (let i = 0; i < Math.ceil( this.state.clubs.length / 3 ); i++) {
      let newArr = []
      for (let j = 0; j < 3; j++) {
        let index = (i * 3) + j
        if (index < this.state.clubs.length) {
          newArr.push(this.state.clubs[index])
        }
      }
      clubsMatrix.push(newArr)
    }
    console.log(clubsMatrix.length)
    console.log(clubsMatrix[0])

    let activitiesMatrix = []
    for (let i = 0; i < Math.ceil( this.state.activities.length / 3 ); i++) {
      let newArr = []
      for (let j = 0; j < 3; j++) {
        let index = (i * 3) + j
        if (index < this.state.activities.length) {
          newArr.push(this.state.activities[index])
        }
      }
      activitiesMatrix.push(newArr)
    }

    const fullHeart = '\u2665'
    const hollowHeart = '\u2661'
    if (this.state.isLoadingClub || this.state.isLoadingAct) {
      return <h1>Loading...</h1>
    }
    return (
      <>
        <h1>Homepage2</h1>
        <h3>Clubs</h3>
        <Carousel indicators={false}
          prevIcon={<h2 aria-hidden="true" style={{color: 'black', fontWeight: "bolder", display: 'inline'}}>&lt;</h2>} 
          nextIcon={<h2 aria-hidden="true" style={{color: 'black', fontWeight: "bolder", display: 'inline'}}>&gt;</h2>}>
          {clubsMatrix.map((clubArr, index) => 
            <CarouselItem>
              <Row>
                {clubArr.map((club, index) => 
                  <Col>
                    <Card>
                      <Card.Img variant="top" src="https://jw-nextagram.s3-ap-southeast-1.amazonaws.com/191202-112702-basketball_club.png" />
                      <Card.Body>
                      <Card.Title>{club.name}</Card.Title>
                      <Card.Text>{club.description}</Card.Text>
                        <Button variant={club.fav?"danger":"secondary"} 
                        onClick={() => this.handleClick(club.id, this.state.student_id, "clubs", index)} 
                        key={club.name}>{club.fav?fullHeart:hollowHeart}</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )}
              </Row>
            </CarouselItem>
          )}
        <h3>Activities</h3>
        </Carousel>
        <Carousel indicators={false}
          prevIcon={<h2 aria-hidden="true" style={{color: 'black', fontWeight: "bolder", display: 'inline'}}>&lt;</h2>} 
          nextIcon={<h2 aria-hidden="true" style={{color: 'black', fontWeight: "bolder", display: 'inline'}}>&gt;</h2>}>
          {activitiesMatrix.map((actArr, index) => 
            <CarouselItem>
              <Row>
                {actArr.map((activity, index) => 
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={activity.image} />
                      <Card.Body>
                      <Card.Title>{activity.name}</Card.Title>
                      <Card.Text>{activity.description}</Card.Text>
                        <Button variant={activity.fav?"danger":"secondary"} 
                        onClick={() => this.handleClick(activity.id, this.state.student_id, "activities", index)} 
                        key={activity.name}>{activity.fav?fullHeart:hollowHeart}</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )}
              </Row>
            </CarouselItem>
          )}
        </Carousel>
      </>
    )
  }
}

export default HomePage2;
