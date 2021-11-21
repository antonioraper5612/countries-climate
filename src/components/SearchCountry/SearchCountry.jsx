import React, { useState } from "react";


import Cards from "../../viuws/Cards"
import Loading from "../../viuws/loading/Loading";

import "../css/search.style.css"

const SearchCountry = () => {
  const [items, setItems] = useState("");
  const [data, setdata] = useState([]);
  const [cargando, setCargando]= useState(false)

  const handleSearch = async () => {
    setCargando(true)
    if (items !== "") {
      const API = `https://restcountries.com/v2/name/${items}`;
      try {
        const respose = await fetch(API);
        const result = await respose.json();
        setdata(result);
        setCargando(false)
      } catch (error) {
        console.log(error);
      }
    } else {
      setdata([]);
      alert("DEBE INGRESAR UN NOMBRE DE PAIS");
    }
  };

  return (
    <>
    {cargando ? <Loading/> :
      <div className="search">
        <input
        className="search_input col-s-6 col-m-5 col-md-4 col-x-4 "
          type="text"
          onChange={(e) => setItems(e.target.value)}
          placeholder="Ingrese Pais"
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
    }
      <div className="main-card-search">
        {data.length > 0 &&
        <Cards name={data[0].name} 
        img={data[0].flag} poblacion={data[0].population} 
        region={data[0].region} capital={data[0].capital} />}
      </div>
      </>
    
  );
};

export default SearchCountry;
