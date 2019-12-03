import React from "react";
import axios from "axios";
import "../styles/HomePage.css";

import { Button, Carousel, Card, Row, Col, CarouselItem, Container } from 'react-bootstrap';

class HomePage extends React.Component {
  state = {
    clubs: [],
    activities: [],
    isLoadingClub: true,
    isLoadingAct: true,
    student_id: null,
    fullname: ""
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
    this.setState({
      student_id: localStorage.getItem("id")
    })
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
    let { clubs, activities, full_name } = this.state;
    const fullHeart = '\u2665'
    const hollowHeart = '\u2661'
    let clubsMatrix = []
    for (let i = 0; i < Math.ceil( clubs.length / 3 ); i++) {
      let newArr = []
      for (let j = 0; j < 3; j++) {
        let index = (i * 3) + j
        if (index < clubs.length) {
          newArr.push(clubs[index])
        }
      }
      clubsMatrix.push(newArr)
    }

    let activitiesMatrix = []
    for (let i = 0; i < Math.ceil( activities.length / 3 ); i++) {
      let newArr = []
      for (let j = 0; j < 3; j++) {
        let index = (i * 3) + j
        if (index < activities.length) {
          newArr.push(activities[index])
        }
      }
      activitiesMatrix.push(newArr)
    }
    if (this.state.isLoadingClub || this.state.isLoadingAct) {
      return <h1>Loading...</h1>
    }
    return (
      <>
        <h2> Welcome back, {full_name}</h2>
        <Container className="Homepage">
          <Row className="Header-wrapper">
            <Col className="Homepage-header">
              <h1>2019 School Calendar</h1>
              <p>Choose your favourite clubs and activities.</p>
            </Col>
          </Row>

          <Row className="Clubs-wrapper">
            <h3 className="Clubs-header">Clubs</h3>
            <Col>
              <Carousel indicators={false}
                prevIcon={<h2 aria-hidden="true" style={{color: 'black', fontWeight: "bolder", display: 'inline'}}>&lt;</h2>} 
                nextIcon={<h2 aria-hidden="true" style={{color: 'black', fontWeight: "bolder", display: 'inline'}}>&gt;</h2>}>
                {clubsMatrix.map((clubArr, index) => 
                  <CarouselItem>
                    <Row>
                      {clubArr.map((club, index) => 
                        <Col>
                          <Card>
                            <Card.Img variant="top" src={club.image}/>
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
              </Carousel>
            </Col>
          </Row>

          <Row className="Activities-wrapper">
            <h3 className="Activities-header">Activities</h3>
            <Col>
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
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePage;
