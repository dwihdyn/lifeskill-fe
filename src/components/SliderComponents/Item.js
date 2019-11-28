import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Likebutton from './Likebutton';


const Item = ({ item }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === item.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src={item.image} alt="" />
          <ShowDetailsButton onClick={() => onSelectSlide(item)} />
          {isActive && <Mark />}
          {/* to add text */}
          {item.title}
          <br></br>
          {item.title1}
          <br></br>
          {item.title2}
          <Likebutton />
         </div>
      );
    }}
  </SliderContext.Consumer>
  
);

export default Item;
