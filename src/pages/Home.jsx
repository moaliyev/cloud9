// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// HERO IMAGES
import HeroOne from "../assets/images/hero-1.webp";
import HeroTwo from "../assets/images/hero-2.webp";
import HeroThree from "../assets/images/hero-3.webp";
import HeroFour from "../assets/images/hero-4.webp";
import HeroFive from "../assets/images/hero-5.webp";

// COMPONENTS
import Products from "../components/Products";

// TRANSLATION
import { useTranslation } from "react-i18next";

import FeaturedCard from "../components/FeaturedCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
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
              <span>{t("hero.heroOne")}</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroTwo} alt="hero" />
            <p className="sliderText">
              <span>Cloud9</span>
              <span>{t("hero.heroTwo")}</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroThree} alt="hero" />
            <p className="sliderText">
              <span>2023</span>
              <span>{t("hero.heroThree")}</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroFour} alt="hero" />
            <p className="sliderText">
              <span>Cloud9 2023</span>
              <span>{t("hero.heroFour")}</span>
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={HeroFive} alt="hero" />
            <p className="sliderText">
              <span>Cloud9</span>
              <span>{t("hero.heroFive")}</span>
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="products">
        <div className="container">
          <div className="row">
            <h3 className="title">2023 pro kit</h3>
            <Products />
          </div>
        </div>
      </section>
      <section className="featured">
        <div className="container">
          <div className="row">
            <h2 className="title">{t("featured.title")}</h2>
            <FeaturedCard productId={1} />
          </div>
        </div>
      </section>
      <section className="moreInfo">
        <div className="imageContent">
          <p>{t("moreInfo.info")}</p>
          <h4 className="title">CLOUD9 X ONE PIECE {t("moreInfo.title")}</h4>
          <Link to="/">{t("moreInfo.link")}</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
