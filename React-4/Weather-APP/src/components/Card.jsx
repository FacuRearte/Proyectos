import React from "react";
import "./Card.css";

export default function Card({ min, max, name, img, onClose }) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>Max</p>
          </div>
          <div>
            <p>{min}°</p>
            <p>{max}°</p>
          </div>
          <div>
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
