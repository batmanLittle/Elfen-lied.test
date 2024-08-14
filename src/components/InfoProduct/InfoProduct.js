import "./InfoProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import lamp from "../../images/product-lamp.png";
import armchair from "../../images/product-armchair.png";
import table from "../../images/product-table.png";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React, { useRef, useState, useEffect } from "react";

function InfoProduct() {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", (swiper) => {
        setActiveSlide(swiper.realIndex);
        console.log("1", swiperRef.current);
        console.log("2", swiper.realIndex);
      });
    }
  }, []);

  SwiperCore.use([Autoplay]);
  const slides = [
    {
      id: 1,
      src: lamp,
      classSlide: "info-product__slider",
      number: "01",
      classColor: "info-product__slider-lilac",
    },
    {
      id: 2,
      src: armchair,
      classSlide: "info-product__slider",
      classColor: "info-product__slider-pink",
      number: "02",
    },
    {
      id: 3,
      src: table,
      classSlide: "info-product__slider",
      number: "03",
      classColor: "info-product__slider-blue",
    },
  ];

  return (
    <div className="info-product">
      <div className="info-product__container">
        <Swiper
          className="info-product__sliders"
          ref={swiperRef}
          // modules={[Virtual, Navigation, Pagination]}
          slidesPerView={1}
          speed={900}
          autoplay={{
            delay: 2000, // время в миллисекундах
            disableOnInteraction: true,
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className={`info-product__slider ${
                activeSlide === swiperRef.realIndex
                  ? "info-product__slider-active"
                  : ""
              } ${slide.classColor}`}
            >
              <img
                className="info-product__slider-img"
                src={slide.src}
                alt="лампа"
              />
              <div>
                <p className="info-product__slider-text">слайд</p>
                <p className="info-product__slider-number">{slide.number}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default InfoProduct;

//      activeSlide === swiperRef.realIndex
//       ? "info-product__slider  info-product__slider-active"
// : "info-product__slider",
