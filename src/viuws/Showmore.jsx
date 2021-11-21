import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Cards from "./Cards";
import Mapa from "./Mapa";
import Loading from "../viuws/loading/Loading";

import "../components/css/showmore.style.css";

const Showmore = () => {
  const { paisname } = useParams();
  const [dataPais, setDataPais] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const handleDataPais = async () => {
      setCargando(true);
      const API = `https://restcountries.com/v2/name/${paisname}`;
      const response = await fetch(API);
      const result = await response.json();
      setDataPais(result);
      setCargando(false);
    };
    handleDataPais();
  }, [paisname]);

  return (
    <>
      {cargando  ? <Loading />
       : 
        <div className="main-content-showmore col-s-12" >
          <Cards
            name={dataPais[0]?.name}
            img={dataPais[0]?.flag}
            poblacion={dataPais[0]?.population}
            capital={dataPais[0]?.capital}
            region={dataPais[0]?.region}
            button="back"
            borders={dataPais[0]?.borders}
            currencies={dataPais[0]?.currencies}
            languages={dataPais[0]?.languages}
            timezones={dataPais[0]?.timezones}
          />
          <Mapa />
        </div>
      }
    </>
  );
};

export default Showmore;
