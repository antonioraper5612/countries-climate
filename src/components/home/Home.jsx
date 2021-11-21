import React, { useEffect, useState, } from "react";

import Cards from "../../viuws/Cards"

import Loading from "../../viuws/loading/Loading"




const Home = () => {
  

  const [data, setdata] = useState([]);
  const [cargando, setCargando]=useState(false)
  useEffect(() => {
    setCargando(true)
    const handleData = async () => {
        const respose = await fetch("https://restcountries.com/v2/all");
        const result = await respose.json();
        setdata(result.splice(0,6));
        setCargando(false)
      } 
    handleData();
  }, []);

  return (
    <>
     {cargando ? <Loading/> :
      <div className="pais-main">
       {data.map((pais,index)=>(
         <Cards key={index} name={pais.name} img={pais.flag} 
         poblacion={pais.population} region={pais.region}
         capital={pais.capital}/>
       ))} 
      </div>
} 
    </>
  );
};

export default Home;
