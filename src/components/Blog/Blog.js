import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState, useRef, useEffect } from "react";
import { slidesBlog } from "../../utils/constants";
import useWindowWidth from "../../hooks/useWindowWidth";

function Blog() {
  const width = useWindowWidth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();

  const updateCurrentIndex = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.activeIndex;
      setCurrentIndex(activeIndex);
    }
  };

  const handleBulletClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.on("slideChange", updateCurrentIndex);

    return () => {
      swiper.off("slideChange", updateCurrentIndex);
    };
  }, []);

  return (
    <section className="blog" id="blog">
      <div className="blog__container">
        <div className="blog__info">
          <div className="blog__pagination">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`blog__pagination-bullet ${
                  (currentIndex === index &&
                    currentIndex < slidesBlog.length) ||
                  (currentIndex >= slidesBlog.length - 1 && index === 2)
                    ? "active"
                    : ""
                }`}
                onClick={() => handleBulletClick(index)}
              ></div>
            ))}
          </div>
          <h2 className="blog__title">Блог</h2>
          <div className="blog__counter">
            <p className="font-floreste">
              0{width >= 780 ? currentIndex + 2 : currentIndex + 1}
            </p>
            <div className="blog__counter-dash"></div>
            <p className="font-floreste">0{slidesBlog.length}</p>
          </div>
        </div>
        <Swiper
          className="blog__list"
          modules={[Pagination]}
          slidesPerView={"auto"}
          spaceBetween={30}
          onSlideChange={updateCurrentIndex}
          ref={swiperRef}
          initialSlide={0}
        >
          {slidesBlog.map((slide) => (
            <SwiperSlide className="blog__item" key={slide.id}>
              <div className="blog__item-time blog__item-text">
                <p className="font-floreste">{slide.time}</p>
                <p>мин</p>
              </div>
              <div className="blog__item-info">
                <div className="blog__item-header">
                  <p className="blog__item-id blog__item-text">
                    {slide.number}
                  </p>
                  <p className="blog__item-name">{slide.name}</p>
                </div>
                <h3 className="blog__item-title">{slide.title}</h3>
                <p className="blog__item-date blog__item-text">{slide.date}</p>
              </div>
              <img className="blog__item-img" src={slide.src} alt="slied.alt" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Blog;
