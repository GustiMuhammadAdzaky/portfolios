import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Portfolio.css";
import Portfolio1 from "./../../img/TV-1.png";
import Portfolio2 from "./../../img/TV-2.png";
import Portfolio3 from "./../../img/TV-3.png";
import Portfolio4 from "./../../img/TV-4.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">

      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span>Portfolio</span>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="portfolio-slider"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: "auto",
            spaceBetween: 30
          },
          640: {
            slidesPerView: "auto",
            spaceBetween: 40
          }
        }}
      >
        <SwiperSlide>
          <img src={Portfolio1} alt="Portfolio item 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio2} alt="Portfolio item 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio3} alt="Portfolio item 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio4} alt="Portfolio item 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;