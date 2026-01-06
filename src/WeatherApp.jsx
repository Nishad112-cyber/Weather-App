import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        Maximumtemp :11.05,
         humidity :undefined, 
         temp_min :11.05 ,
         Temparatue: 33,
         weather:"haze"
    });

    let upadateInfo= (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{ marginTop: "0px" }}>
            <h3>Weather app by Dileep</h3>
            <SearchBox upadateInfo={upadateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}