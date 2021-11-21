import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { useHistory } from "react-router-dom";

import "../components/css/cards.style.css";

const Cards = (props) => {
  const { name, poblacion, region, 
    img, capital, button,borders,
    currencies,languages,timezones } = props;

  const history = useHistory();

  
  const handlemore =()=>{
    history.push(`more/${name}&${capital}`);
  }
  const searchCountry =()=>{
    history.push(`/clima/${name}&${capital}`);
  }


  const handleView = (e) => {
    const  valor= e.target.innerText
       if(valor === "MORE..."){
        handlemore()
       }else{
        searchCountry()
       }
    };

  return (
    <>
      <div className="cards-main ">
        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={img}
              alt={name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                text="textcenter"
              >
                {name}  ({capital})
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="1rem"
              >
                {name} es un pais con una poblacion de {poblacion} habitantes,
                ubicado en la region de {region}.
              </Typography>

              {timezones !== undefined &&<Typography
                variant="body2"
                color="text.secondary"
                fontSize="1rem"
              > 
               Tiene fronteras con los siguientes paises
               {borders !== undefined ? 
                borders?.map((border,index)=><li key={index}>{border}</li>) : <li> No Tiene Fronteras</li>}
                Su moneda es  {currencies.map((currencie,index)=>       <li key={index}>{currencie.name}</li>)}
                Sus idiomas son {languages.map((language,index)=>      <li key={index}>{language.name}</li>)}.
                Sus zona horaria son :{timezones.map((timezone,index)=> <li key={index}>{timezone}</li>)}
              </Typography> }
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={(e) => handleView(e)}
              size="small"
              color="primary"
            >
              {`${button !== undefined ? "see weather !" : "More..."}`}
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Cards;
