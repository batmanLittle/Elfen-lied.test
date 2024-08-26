import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import armchair from "../../images/blog-armchair.png";

function Blog() {
  const slides = [
    {
      id: 1,
      time: "3",
      number: "01",
      name: "Laura Busche",
      title: "новая коллекция кресел",
      date: "14 Января 2023",
      src: armchair,
    },
    {
      id: 2,
      time: "3",
      number: "02",
      name: "Laura Busche",
      title: "новая коллекция кресел",
      date: "14 Января 2023",
      src: armchair,
    },
    {
      id: 3,
      time: "3",
      number: "03",
      name: "Laura Busche",
      title: "новая коллекция кресел",
      date: "14 Января 2023",
      src: armchair,
    },
  ];
  return (
    <section className="blog">
      <div className="blog__container">
        <h2 className="blog__title">Блог</h2>
        <Swiper className="blog__list">
          {slides.map((slide) => (
            <SwiperSlide className="blog__item">
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
                <h3>{slide.title}</h3>
                <p className="blog__item-date blog__item-text">{slide.date}</p>
              </div>

              <img className="blog__item-img" src={slide.src} alt="кресло" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Blog;
