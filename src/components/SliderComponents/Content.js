import React from 'react';
import IconCross from '../Icons/IconCross';
import './Content.scss';

const Content = ({ club, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${club.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{club.title}</div>
        <div className="content__description">
         {club.content}

        </div>
      </div>
      <button className="content__close" onClick={onClose} > 
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
