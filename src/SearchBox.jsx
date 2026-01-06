import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './BoxStyle.css';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function SearchBox({upadateInfo}){
   let[city ,setCity]= useState("");
   //let[error, setError]= useState(error);

  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY= "6acf2b14b879138b505df477e3e5940a";

   let getWeatherInfo= async ()=>{
    let Response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let jsonResponse= await Response.json();
   console.log(jsonResponse);
   let Result={
    temprature : jsonResponse.main.temp,
     temp_min : jsonResponse.main.temp_min,
     Maximumtemp : jsonResponse.main.temp_max,
     humidity: jsonResponse.main.humidty
   };
    console.log(Result);
    return Result;
  
  };

 

  let handleChange=(evt)=>{
    setCity(evt.target.value);

  };
  let handleSubmit= async (evt)=>{
    evt.preventDefault();
    console.log(city);
    setCity("")
    let newInfo= await  getWeatherInfo();
     upadateInfo(newInfo);
  }
   return(
    <div className='Stylee'>
       
        <form onSubmit={handleSubmit}>
     <TextField id="city" label="City Name" variant="outlined" required 
     value={city}
     onChange={handleChange}
     />
             <br></br><br></br>
            <Button variant="contained" type="Submit">Search</Button>
        </form>
        
    </div>
    
   )
}