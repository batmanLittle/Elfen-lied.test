import "./Сontacts.css";
import L from "leaflet";
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import customMarker from "../../images/customMarker.svg";
import telegram from "../../images/icon-telegram.svg";
import twitter from "../../images/icon-twitter.svg";
import inIcon from "../../images/icon-in.svg";
import facebook from "../../images/icon-facebook.svg";
import arrow from "../../images/arrow-down-white.svg";
import ButtonClose from "../ButtonClose/ButtonClose";
import useWindowWidth from "../../hooks/useWindowWidth";

function Сontacts({ handleClose }) {
  const width = useWindowWidth();
  useEffect(() => {
    // Создаем карту
    const map = L.map("map").setView(
      [55.757255604127025, 37.643631913145164],

      15
    );

    // Добавляем тайлы карты
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 30,
    }).addTo(map);

    // Создаем иконку маркера
    const markerIcon = L.icon({
      iconUrl: customMarker,
      iconSize: [70, 96],
    });

    // Добавляем маркер на карту
    L.marker([55.757255604127025, 37.643631913145164], { icon: markerIcon })
      .addTo(map)
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="contacts">
      <div className="contacts__container">
        <ButtonClose handleClose={() => handleClose("contacts")} />
        <div className="contacts__info">
          <div className="contacts__contact-block">
            <div className="contacts__contact-details">
              <p className="small-text">адрес</p>
              <p className="contacts__contact-city">Москва</p>
              <p>Хохловский переулок д. 11, стр. 3</p>
              <div
                className={
                  width < 650 ? "display-none" : "contacts__contact-footer"
                }
              >
                <p>Адрес на карте </p>
                <img src={arrow} alt="стрелка вниз" />
              </div>
            </div>

            <div className="contacts__contact-details">
              <p className="small-text">телефон</p>
              <p className="font-floreste">+7 (495) 621-26-17</p>
              <p>Ответим на все вопросы</p>
              <div className="contacts__contact-footer">
                <img src={telegram} alt="телеграмм" />
                <img src={twitter} alt="твитетр" />
                <img src={inIcon} alt="ин-соц. сеть" />
                <img src={facebook} alt="фейсбук" />
              </div>
            </div>
          </div>
          <form className="contacts__form">
            <p className="contacts__title"> Форма обратной связи</p>
            <div className="contacts__inputs">
              <input
                className="contacts__input"
                type="email"
                name="email"
                id="email"
                minLength="2"
                maxLength="40"
                required
                placeholder="EMAIL"
                autoComplete="email"
              />
              <input
                type="text"
                className="contacts__input"
                id="ptext"
                minLength="2"
                maxLength="100"
                required
                placeholder="Сообщение"
                name="ptext"
                autoComplete="off"
              ></input>
            </div>
            <button className="contacts__button">
              <p className="contacts__button-text" type="submit">
                Отправить
              </p>
            </button>
          </form>
        </div>
        <div className="contacts__map" id="map"></div>
      </div>
    </section>
  );
}

export default Сontacts;
