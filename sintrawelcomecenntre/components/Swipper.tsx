import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Swipper = () => {
 
  return(
    <section style={{position: 'relative'}}>
    <Carousel
      showThumbs={false}
      showArrows
    >
      <div>
        <img src="../images/sintra2.jpg" />
        <p className="legend">Legend 1</p>
        </div>
          <div>
            <img src="../images/sintra2.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="../images/sintra2.jpg" />
            <p className="legend">Legend 3</p>
          </div>
      </Carousel>  
    </section>
  )
}

export default Swipper;