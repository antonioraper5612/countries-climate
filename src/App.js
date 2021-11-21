import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  } from "react-router-dom";

// Importar componentes
import MainLayousHeader from "./components/layout/MainLayousHeader"
import Home from "./components/home/Home"
import SearchCountry from "./components/SearchCountry/SearchCountry"
import Showmore from "./viuws/Showmore"
import Showclima from "./viuws/Showclima"


// importar Css
 import  "./components/css/app.css";

const App = () => {
     
     
  return (
    <BrowserRouter>
     <Switch>
       <MainLayousHeader>
       <Route path="/" exact>
         <Home />
       </Route>
       <Route path="/search" exact>
         <SearchCountry/>
       </Route>
       <Route path="/more/:paisname&:capital" exact>
         <Showmore/>
       </Route>
       <Route path="/clima/:paisname&:capital" exact>
         <Showclima/>
       </Route>
       </MainLayousHeader>
     </Switch>
    </BrowserRouter>

  )

}

export default App;
