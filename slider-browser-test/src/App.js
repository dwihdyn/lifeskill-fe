
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Slider from './components/Slider'
import Dashboard from './Dashboard';

const activities = [
  {
    id: 100,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe",
  },
  {
    id: 101,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 102,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 103,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 104,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: "Some Activity",
    title1: "asdasd",
    title2: "asdasdasd",
    content: "qweqweqe"
  },
  {
    id: 105,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: "Some Activity",
    title1: "asdasd",
    content: "qweqweqe"
  },
]

const clubs = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: "The result",
    title1: "The result",
    title2: "The result",
    content: "1 is uuuu"
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'The project folder should .',
    title1: "T",
    title2: "The result",
    content: "2 is uuuu"
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'The rain',
    title1: "T",
    title2: "The result",
    content: "3 is uuuu"
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education',
    title1: "T",
    title2: "The result",
    content: "4 is uuuu"
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite',
    title1: "T",
    title2: "The result",
    content: "5 is uuuu"
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror',
    title1: "T",
    title2: "The result",
    content: "6 is uuuu"
  }
];

 

class App extends Component {
  render() {
  return (
    <div className="App">

<Dashboard />


      <h1>Clubs</h1>
      <Slider>
        {clubs.map(club => (
          <Slider.Item item={club} key={club.id}>item1</Slider.Item>
        ))}
      </Slider>
      <h1>Activities</h1>
      <Slider>
        {activities.map(activity => (
          <Slider.Item item={activity} key={activity.id}>item1</Slider.Item>
        ))}
      </Slider>
      <br></br>


    </div>
  );
}
}

export default App;


