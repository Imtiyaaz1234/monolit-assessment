import React from "react";
import Slider from "react-slick";
import './logo-slider.css';

//images
import honda_logo from '../assets/honda_logo.png';
import jota from '../assets/jota.png';
import bae_systems from '../assets/bae-systems.png';
import aptar from '../assets/aptar.png';
import siemens from '../assets/Siemens_logo.png';
import michelin_tire from '../assets/michelin-tire-logo-_1_.png';


const LogoSlider = () => {
  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const logos = [
    honda_logo,
    bae_systems,
    jota,
    aptar,
    siemens,
    michelin_tire,
  ];

  return (
    <div className="SliderContainer">
      <Slider {...logoSettings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index}`} className="img-fluid" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
