import React from "react"
import { Link } from "react-router-dom";

import "../Menu/menu.style.css"

const Menu =()=>{


return(
    <>
    <div className="main_title">
    <h1>Countrys</h1>
    </div>
    <div className="main_link col-s-11 col-m-8 col-md-7 col-x-6">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
    </div>
    </>
)

}


export default Menu