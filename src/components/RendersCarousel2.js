import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import RenderA from "../images/RenderA.jpg";
import RenderB from "../images/RenderB.jpg";
import RenderC from "../images/RenderC.jpg";
import RenderD from "../images/RenderD.jpg";



function RenderCarousel1() {
  return (
    <Carousel className='margin-bottom'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={RenderA}
          alt="Render A"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={RenderB}
          alt="Render B"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={RenderC}
          alt="Render C"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={RenderD}
          alt="Render D"
        />
      </Carousel.Item>
   
   
    </Carousel>
  );
}

export default RenderCarousel1;