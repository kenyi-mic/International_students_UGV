import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <img src="https://cutt.ly/6Rg3dyM" alt="" />
        </div>
        <div>
          <img src="https://int.ugv.edu.bd/images/slider_images/1574257058.JPG" alt="" />
        </div>
        <div>
          <img className ="w-full max-h-bannerHeight" src="https://buff.ly/3moluYK" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
