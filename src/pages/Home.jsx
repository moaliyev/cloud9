// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import HeroOne from "../assets/images/hero-1.webp";
import HeroTwo from "../assets/images/hero-2.webp";
import HeroThree from "../assets/images/hero-3.webp";
import HeroFour from "../assets/images/hero-4.webp";
import HeroFive from "../assets/images/hero-5.webp";

const Home = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}>
        <SwiperSlide>
          <img src={HeroOne} alt="hero" />
          <p className="sliderText">
            <span>Cloud9 </span>
            <span>Legacy Wristband</span>
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroTwo} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroThree} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroFour} alt="hero" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroFive} alt="hero" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home;
