import "./InfoProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import lamp from "../../images/product-lamp.png";
import armchair from "../../images/product-armchair.png";
import table from "../../images/product-table.png";
import basket from "../../images/basket-green.svg";

import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React, { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";

function InfoProduct() {
  const [activeSlide, setActiveSlide] = useState(0);

  SwiperCore.use([Autoplay]);

  const slides = [
    {
      id: 1,
      textBackground: "Benjamin Moore",
      name: "Santa Trinita",
      description:
        "Функциональная дизайнерская лампа для создания максимальнокомфортного освещения",
      src: lamp,
      price: "150 000 ₽",
      classSlide: "info-product__slider",
      number: "01",
      classColorActive: "info-product__slider-lilac_active",
    },
    {
      id: 2,
      textBackground: "Paint Here Glory",
      name: "кресло",
      description:
        "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
      price: "120 000 ₽",
      src: armchair,
      classSlide: "info-product__slider info-product__slider-pink",
      number: "02",
    },
    {
      id: 3,
      textBackground: "Benjamin Moore",
      name: "Высокий стол",
      description:
        "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
      price: "235 000 ₽",
      src: table,
      classSlide: "info-product__slider info-product__slider-blue",
      number: "03",
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > 768) {
      const intervalId = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [width, slides.length]);

  return (
    <div className="info-product">
      <div className="info-product__container">
        <Swiper
          className="info-product__sliders"
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
            // console.log(activeSlide);
          }}
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={3}
          speed={900}
          autoplay={{
            delay: 2000, // время в миллисекундах
            disableOnInteraction: false,
          }}
        >
          {slides.map((slide, index) => {
            // console.log(swiper.realIndex);
            return (
              <SwiperSlide
                style={{ display: "flex" }}
                key={slide.id}
                className={`${slide.classSlide} ${
                  activeSlide === index
                    ? `info-product__slider-active ${
                        index === 0 ? "info-product__slider-lilac_active" : ""
                      }`
                    : index === 0
                    ? "info-product__slider-lilac"
                    : ""
                }`}
              >
                <div
                  className={
                    activeSlide === index
                      ? "info-product__content"
                      : "display-none"
                  }
                >
                  <p className="info-product__title">товар дня</p>
                  <p className="font-floreste info-product__text-background ">
                    {slide.textBackground}
                  </p>
                  <p className="info-product__text-name">{slide.name}</p>
                  <p className="info-product__text-description">
                    {slide.description}
                  </p>
                  <p className="font-floreste info-product__text-price ">
                    {slide.price}
                  </p>
                  <div className="info-product_shopping-card">
                    <button className="info-product_button">
                      <img src={basket} alt="корзина" /> <p>Купить</p>
                    </button>
                  </div>
                </div>
                <img
                  className={
                    activeSlide === index
                      ? "info-product__slider-img_active "
                      : "info-product__slider-img"
                  }
                  src={slide.src}
                  alt={`слайд ${slide.number}`}
                />
                <div className={activeSlide === index ? "display-none" : ""}>
                  <p className="info-product__slider-text">Слайд</p>
                  <p className="info-product__slider-number">{slide.number}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default InfoProduct;







.ticker__text {
  color: rgba(255, 255, 255, 1);
  margin: auto;
  text-align: right;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Merriweather;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 24.2px */
  text-transform: uppercase;
  white-space: nowrap;
  animation: text 10s linear infinite;
}
.ticker {
  overflow: hidden;
  max-width: 100%;
}
.ticker__block {
  height: 60px;
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 0px;
  background-color: rgba(245, 73, 50, 1);
}

@keyframes text {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}