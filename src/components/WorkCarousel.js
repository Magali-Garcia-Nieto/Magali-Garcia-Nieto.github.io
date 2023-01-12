import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Work1 from "../images/Work1.png";
import Work2 from "../images/Work2.png";
import Work3 from "../images/Work3.png";
import Work4 from "../images/Work4.png";
import Work5 from "../images/Work5.png";
import Work6 from "../images/Work6.png";




function WorkCarousel() {
  return (

    <Carousel className='margin-bottom'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Work1}
          alt="Work 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Work2}
          alt="Work 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Work3}
          alt="Work 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Work4}
          alt="Work 4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Work5}
          alt="Work 5"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Work6}
          alt="Work 6"
        />
      </Carousel.Item>
   
    </Carousel>


  );
}

export default WorkCarousel;