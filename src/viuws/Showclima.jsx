import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import Iconos
import tempMax from "../iconos/002-alta-temperatura.png";
import tempMin from "../iconos/001-termmetro.png";
import humidity from "../iconos/001-humedad.png"
import temp_celcios from "../iconos/celsius.png"
//import Styles
import "../components/css/showclima.css";

//components
import Loading from "./loading/Loading";


const Showclima = () => {
  const [dataclima, setDataClima] = useState([]);
  const { paisname, capital } = useParams();

  useEffect(() => {
    const handleDataClima = async () => {
      const Key = "523cb58c66ed7bfb21ad344b12ff8e3a";
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${Key}`;
      const response = await fetch(API);
      const result = await response.json();
      setDataClima(result);
    };
    handleDataClima();
  }, [capital]);

  const conversor = 273.15;
  const temp = dataclima?.main?.temp - conversor;
  const temp_max = dataclima?.main?.temp_max - conversor;
  const temp_min = dataclima?.main?.temp_min - conversor;

  return (
    <>
      {dataclima?.weather ?  (
        <div className="main-content-clima  col-s-9 col-m-7 col-md-6 col-x-5  ">
          <ul>
          <h3>Pais</h3>
            <li>
              {paisname} 
            </li>

            <h3>Ciudad</h3>
            <li>
              {capital}
            </li>
            <li>
              {dataclima?.weather[0]?.main}{" "}
              <img
                src={`http://openweathermap.org/img/wn/${dataclima?.weather[0]?.icon}@2x.png`}
                alt=""
              />
            </li>

            <h3>Temperatura</h3>
            <li>{temp.toFixed(1)}°C <img src={temp_celcios} alt="" /> {" "} 
             </li>

            <h3>Temperatura Maxima</h3>
            <li>
              {temp_max.toFixed(1)}°C <img src={tempMax} alt="" />{" "}
            </li>

            <h3>Temperatura Minima</h3>
            <li>
              {temp_min.toFixed(1)}°C <img src={tempMin} alt="" />{" "}
            </li>

            <h3>Humedad</h3>
            <li>
              {dataclima?.main?.humidity} % <img src={humidity} alt="" />{" "}
            </li>
          </ul>
          <ul className="prueba2"></ul>
        </div>
      ): <Loading/>}
    </>
  );
};

export default Showclima;
