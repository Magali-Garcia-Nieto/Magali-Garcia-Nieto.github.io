import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Render1 from "../images/Render1.jpg";
import Render2 from "../images/Render2.jpg";
import Render3 from "../images/Render3.jpg";
import Render4 from "../images/Render4.jpg";



function RenderCarousel1() {
  return (
    <Carousel className='margin-bottom'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Render1}
          alt="Render 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Render2}
          alt="Render 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Render3}
          alt="Render 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Render4}
          alt="Render 4"
        />
      </Carousel.Item>
   
   
    </Carousel>
  );
}

export default RenderCarousel1;