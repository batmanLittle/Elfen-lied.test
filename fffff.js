.info-product {
    max-width: 1920px;
    width: 100%;
    max-height: 1100px;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .info-product__container {
    padding: 20px 20px 20px 20px;
    max-width: 1920px;
    width: 100%;
    height: 1060px;
  }
  
  .info-product__sliders {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
  /* неактивный слайдер */
  .info-product__slider {
    padding: 302px 0px 111px 0px;
    flex: 0 1 18.09%;
    max-width: 340px;
    height: 1060px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
  }
  
  /* общий активный слайдер */
  .info-product__slider-active {
    height: 1060px;
  
    padding: 380px 0px 92px 60px;
    flex: 0 1 61.7%;
    width: 100%;
    max-width: 1160px;
    position: relative;
    padding-left: 20px;
  }
  
  /* картинка неактивного слайда */
  .info-product__slider-img {
    max-height: 328px;
    object-fit: cover;
    height: auto;
    transform: rotate(7deg);
    width: 100%;
    max-width: 218px;
  }
  
  /* картинка активного слайда */
  .info-product__slider-img_active {
    top: 113px;
    position: absolute;
    max-height: 724px;
    max-width: 494px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .info-product__slider-lilac_active {
    background-color: var(--lilac-color);
  }
  
  .info-product__slider-lilac {
    background-color: var(--purple-color);
  }
  
  .info-product__slider-pink {
    background-color: var(--pink-color);
  }
  
  .info-product__slider-blue {
    background-color: var(--blue-color);
  }
  
  .info-product__slider-text {
    margin-top: 228px;
    margin-bottom: 41px;
    font-size: 15px;
    opacity: 60%;
  }
  
  .info-product__slider-number {
    text-align: center;
    font-family: Floreste;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
  }
  
  .display-none {
    display: none;
  }
  
  .info-product__title {
    color: var(--light-green-color);
    text-transform: uppercase;
    margin-bottom: 31px;
  }
  
  .info-product__text-background {
    width: 100%;
    text-align: center;
    font-size: 212px;
    text-transform: uppercase;
    color: var(--white-color);
    opacity: 20%;
    margin-bottom: 91px;
  }
  
  .info-product__text-name {
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 13px;
  }
  .info-product__text-description {
    font-size: 15px;
    max-width: 318px;
    padding-bottom: 42px;
    border-bottom: 0.5px solid var(--white-color);
    margin-bottom: 42px;
    z-index: 1;
  }
  .info-product__text-price {
    color: var(--light-green-color);
  }
  
  .info-product__content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .info-product_shopping-card {
    position: absolute;
    right: 53px;
    bottom: 0px;
    background-image: url(../../images/shopping-button.svg);
    max-width: 354px;
    max-height: 156px;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .info-product_button {
    border: 0px;
    background-color: inherit;
    display: flex;
    align-items: center;
    gap: 11px;
    color: var(--white-color);
    font-size: 20px;
    line-height: 120%;
  }
  .info-product__counter {
    display: none;
  }
  
  @media screen and (max-width: 1900px) {
    .info-product__text-background {
      white-space: nowrap;
      overflow: hidden;
      font-size: 10vw;
      height: 201px;
    }
  }
  @media screen and (max-width: 1500px) {
    .info-product__slider {
      padding: 302px 0px 91px 0px;
    }
  
    .info-product__slider-active {
      padding: 380px 20px 72px 20px;
    }
  
    .info-product__container {
      padding: 20px 15px 0px;
    }
    .info-product__slider-img_active {
      max-width: 450px;
    }
    .info-product_shopping-card {
      max-width: 218px;
      max-height: 122px;
      background-size: cover;
      right: 0px;
    }
    .info-product__slider-img {
      height: 319px;
      object-fit: cover;
      transform: rotate(7deg);
      width: 100%;
      max-width: 174px;
    }
  }
  @media screen and (max-width: 1200px) {
    .info-product__container {
      height: min-content;
    }
    .info-product__slider-pink,
    .info-product__slider-blue {
      background-color: transparent;
    }
    .info-product__container {
      padding: 77px 15px 0px 15px;
    }
    .info-product__slider-active {
      max-width: 100%;
      border-bottom: 2px solid var(--light-green-color);
      max-height: 1060px;
      height: 100%;
      padding: 200px 20px 70px 20px;
      flex: 0 1 100%;
    }
    .info-product__slider-img_active {
      top: 20px;
      max-height: 666px;
      max-width: 360px;
    }
    .info-product__text-background {
      margin-bottom: 15px;
      height: 100px;
    }
  }
  
  @media screen and (max-width: 800px) {
    .info-product__slider-img_active {
      top: 0px;
      max-width: 330px;
    }
  }
  
  @media screen and (max-width: 600px) {
    .info-product__counter {
      display: flex;
      flex-direction: column;
      width: 52px;
      height: 143px;
      background-color: var(--white-color);
      gap: 20px;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 8px;
      right: 0px;
      border-radius: 50px;
    }
    .info-product__counter-text {
      color: var(--lilac-color);
      font-family: Floreste;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .info-product__counter-dash {
      border: 1px solid var(--lilac-color);
      height: 36px;
    }
    .info-product__container {
      padding: 77px 15px 0px 15px;
    }
    .info-product__slider-active {
      padding: 157px 10px 40px;
      max-height: 595px;
      height: 100%;
    }
    .info-product__slider-img_active {
      top: 0px;
      max-width: 236px;
    }
    .info-product__text-background {
      margin-bottom: 15px;
      height: 67px;
      font-size: 67px;
      order: 1;
    }
    .info-product__content {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .info-product__title {
      order: 2;
      margin-bottom: 154px;
    }
  
    .info-product__text-name {
      order: 3;
      font-size: 23px;
    }
  
    .info-product__text-description {
      order: 4;
      font-size: 13px;
      line-height: 20px;
      max-width: 222px;
      padding-bottom: 0px;
      border-bottom: 0px;
      margin-bottom: 23px;
    }
  
    .info-product__text-price {
      order: 5;
    }
    .info-product_shopping-card {
      max-height: 90px;
      bottom: 170px;
      right: 0px;
      z-index: 2;
    }
  }
  
  @media screen and (max-width: 450px) {
    .info-product__slider-active {
      border: 0px;
      padding: 157px 0px 0px;
      max-height: 555px;
      height: 100%;
    }
  }





  import "./InfoProduct.css";
  import { Swiper, SwiperSlide } from "swiper/react";
  import lamp from "../../images/product-lamp.png";
  import armchair from "../../images/product-armchair.png";
  import table from "../../images/product-table.png";
  import basket from "../../images/basket-green.svg";
  import "swiper/css";
  import React, { useState, useEffect } from "react";
  
  function InfoProduct({ width }) {
    const [activeSlide, setActiveSlide] = useState(0);
  
    const dailyDeals = [
      {
        id: 1,
        textBackground: "Benjamin Moore",
        name: "Santa Trinita",
        description:
          "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
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
  
    useEffect(() => {
      if (width > 1200) {
        const intervalId = setInterval(() => {
          setActiveSlide((prev) => (prev + 1) % dailyDeals.length);
        }, 3000);
  
        return () => clearInterval(intervalId);
      }
    }, [width, dailyDeals.length]);
  
    return (
      <div className="info-product">
        <div className="info-product__container">
          {width > 1200 ? (
            <ul className="info-product__sliders">
              {dailyDeals.map((slide, index) => {
                return (
                  <li
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
                      <p className="info-product__slider-number">
                        {slide.number}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <Swiper className="info-product__sliders" slidesPerView={1}>
              {dailyDeals.map((slide, index) => {
                return (
                  <SwiperSlide
                    style={{ display: "flex" }}
                    key={slide.id}
                    className={`${
                      slide.classSlide
                    } ${"info-product__slider-active"}`}
                  >
                    <div className="info-product__content">
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
                      <div className="info-product__counter">
                        <p className="info-product__counter-text">0{index + 1}</p>
                        <div className="info-product__counter-dash"></div>
                        <p className="info-product__counter-text">
                          0{dailyDeals.length}
                        </p>
                      </div>
                    </div>
                    <img
                      className={"info-product__slider-img_active"}
                      src={slide.src}
                      alt={`слайд ${slide.number}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>
    );
  }
  
  export default InfoProduct; 