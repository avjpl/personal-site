import React, { Component } from 'react';
import Swiper from 'swiper';

export default class SimpleSlider extends Component {

  componentDidMount() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  render() {
    return (
      <div className="swiper-container">

        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          <div className="swiper-slide">
            <div className="swiper__image" style={{ backgroundImage: `url( ${require('../../../images/photos/td_1.jpg')} )` }}></div>
          </div>

          <div className="swiper-slide">
            <div className="swiper__image" style={{ backgroundImage: `url( ${require('../../../images/photos/td_2.jpg')} )` }}></div>
          </div>

          <div className="swiper-slide">
            <div className="swiper__image" style={{ backgroundImage: `url( ${require('../../../images/photos/td_3.jpg')} )` }}></div>
          </div>

          <div className="swiper-slide">
            <div className="swiper__image" style={{ backgroundImage: `url( ${require('../../../images/photos/td_4.jpg')} )` }}></div>
          </div>

          <div className="swiper-slide">
            <div className="swiper__image" style={{ backgroundImage: `url( ${require('../../../images/photos/td_5.jpg')} )` }}></div>
          </div>
        </div>

        {/* If we need pagination */}
        <div className="swiper-pagination"></div>

        {/* If we need navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* If we need scrollbar */}
        <div className="swiper-scrollbar"></div>
      </div>
    );
  }
}
