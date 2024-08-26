import "./Marquees.css";
import star from "../../images/icon-star.svg";
import React from "react";

function Marquees() {
  const text = "creating a great art";
  const repeatCount = 11;

  const items = [];

  for (let i = 0; i < repeatCount; i++) {
    items.push(
      <React.Fragment key={i}>
        <p className="font-floreste marquees__line-text">{text}</p>
        <img alt="звезда" src={star} />
      </React.Fragment>
    );
  }

  return (
    <section className="marquees">
      <div className="marquees__container  marquees__container-lilac">
        <div className="marquees__line marquees__line-lilac">{items}</div>
      </div>
      <div className="marquees__container  marquees__container-blue">
        <div className="marquees__line marquees__line-blue">{items}</div>
      </div>
    </section>
  );
}

export default Marquees;
