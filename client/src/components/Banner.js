import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from "../images/carousel.jpg";
import Carousel2 from "../images/carousel0.jpg";
import Carousel3 from "../images/carousel1.jpeg";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showthrough={false}
        interval={5000}
      >
        <div>
          <img src={Carousel1} alt="" />
        </div>
        <div>
          <img src={Carousel2} alt="" />
        </div>
        <div>
          <img className="w-full max-h-bannerHeight" src={Carousel3} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
