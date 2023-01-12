import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Plano1 from "../images/Plano1.jpg";
import Plano2 from "../images/Plano2.jpg";
import Plano3 from "../images/Plano3.jpg";
import Plano4 from "../images/Plano4.jpg";



function DraftsCarousel() {
  return (
    <Carousel className='margin-bottom'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Plano1}
          alt="Plano 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Plano2}
          alt="Plano 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Plano3}
          alt="Plano 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Plano4}
          alt="Plano 4"
        />
      </Carousel.Item>
   
   
    </Carousel>
  );
}

export default DraftsCarousel;