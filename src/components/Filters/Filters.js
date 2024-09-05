import "./Filters.css";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "rc-slider/assets/index.css";
function Filters() {
  const colors = [
    { name: "Зеленый", count: 580, colorCode: "var(--light-green-color)" },
    { name: "Синий", count: 320, colorCode: "var(--blue-color)" },
    { name: "Оранжевый", count: 250, colorCode: "var(--light-peach-color)" },
    { name: "Розовый", count: 18, colorCode: "var(--pink-color)" },
    { name: "Лавандовый", count: 100, colorCode: "var(--grey-color)" },
    { name: "Голубой", count: 250, colorCode: "var(--light-blue-color)" },
  ];
  const [activeColor, setActiveColor] = useState(null);

  const handleButtonClick = (colorCode) => {
    setActiveColor((prevColor) => (prevColor === colorCode ? null : colorCode));
  };

  const [range, setRange] = useState([0, 1000000]);
  const [minValue, setMinValue] = useState(range[0]);
  const [maxValue, setMaxValue] = useState(range[1]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    setMinValue(newRange[0]);
    setMaxValue(newRange[1]);
  };

  const handleMinValueChange = (event) => {
    const value = Math.max(0, Math.min(+event.target.value, range[1]));
    setMinValue(value);
    setRange([value, range[1]]);
  };

  const handleMaxValueChange = (event) => {
    const value = Math.max(range[0], Math.min(+event.target.value, 1000000));
    setMaxValue(value);
    setRange([range[0], value]);
  };

  return (
    <div className="filters">
      <div className="filters__block">
        <p className="filters__title">Цена</p>
        <div className="filters__slider">
          <div className="filters__inputs">
            <label className="filters__label">
              от
              <input
                className="filters__input"
                type="number"
                value={minValue}
                onChange={handleMinValueChange}
              />
            </label>
            <label className="filters__label">
              до
              <input
                className="filters__input"
                type="number"
                value={maxValue}
                onChange={handleMaxValueChange}
              />
            </label>
          </div>
          <Slider
            className="filters__custom-slider"
            range
            min={0}
            max={1000000}
            value={range}
            onChange={handleRangeChange}
          />
          <div
            className="slider-value"
            style={{ left: `${(range[0] / 1000000) * 100}%` }} //чтоб бегал за меткой
          >
            {range[0]}
          </div>
          <div
            className="slider-value"
            style={{ left: `${(range[1] / 1000000) * 100}%` }}
          >
            {range[1]}
          </div>
        </div>
      </div>
      <div className="filters__block">
        <p className="filters__title">Цвета </p>
        <ul className="filters__list">
          {colors.map((color) => (
            <li className="filters__item" key={color.name}>
              <button
                className="filters__item-color"
                style={{
                  backgroundColor:
                    activeColor === color.colorCode ? color.colorCode : "",
                }}
                onClick={() => handleButtonClick(color.colorCode)}
              ></button>
              <p className="filters__item-text">
                {color.name}
                <span className="filters__item-span"> ({color.count})</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filters;
