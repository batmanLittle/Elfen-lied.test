import "./Categories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import "swiper/css";
import ProductCategory from "../ProductCategory/ProductCategory";
import { slides } from "../../utils/constants";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

function Categories({ handleOpen }) {
  SwiperCore.use([Autoplay]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef();

  const handleButtonClick = (category, index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
    if (activeButtonIndex === index) {
      setSelectedCategory(null);
      setActiveButtonIndex(null);
      setLoading(true);
    } else {
      setSelectedCategory(category);
      setActiveButtonIndex(index);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      const timer = setTimeout(() => {
        setLoading(false);
      });

      return () => clearTimeout(timer);
    }
  }, [selectedCategory]);

  return (
    <section className="categories" id="categories">
      <div className="categories__container">
        <h2>категории</h2>
        <Swiper
          ref={swiperRef}
          className="categories__list"
          spaceBetween={11.14}
          slidesPerView={"auto"}
          speed={900}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            900: {
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="categories__item">
              <h3 className="categories__item-title">{slide.title}</h3>
              <img
                className="categories__item-img"
                src={slide.src}
                alt={slide.alt}
              />
              <button
                onClick={() => handleButtonClick(slide.category, index)}
                className={`categories__button ${
                  activeButtonIndex === index ? "categories__button-active" : ""
                }`}
              ></button>
              <div className="categories__quantity">
                <p className="font-floreste ">{slide.category.length}</p>{" "}
                <p>шт</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {!loading && selectedCategory && (
        <ProductCategory
          handleOpen={handleOpen}
          cards={selectedCategory || []}
        />
      )}
    </section>
  );
}

export default Categories;
